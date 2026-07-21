#!/usr/bin/env python3
# 生成「AI 速报」长图：从 ai-news.json 读取某一期，输出深色品牌长图 PNG。
# 用法：python3 gen-news-image.py [期号] [输出路径]
#   期号缺省 = 最新一期；输出路径缺省 = assets/ai-news-<N>.png
import json, os, re, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
W = 1080
PAD = 56
BG = (7, 9, 13)
CARD = (19, 21, 25)
BORDER = (30, 32, 37)
WHITE = (238, 240, 249)
GRAY = (174, 182, 201)
DIM = (107, 122, 171)

def font(size, bold=False):
    cands = [
        "/System/Library/Fonts/STHeiti Medium.ttc" if bold else "/System/Library/Fonts/STHeiti Light.ttc",
        "/System/Library/Fonts/Hiragino Sans GB.ttc",
        "/System/Library/Fonts/PingFang.ttc",
    ]
    for p in cands:
        try:
            return ImageFont.truetype(p, size, index=0)
        except Exception:
            continue
    return ImageFont.load_default()

F_BRAND, F_TITLE, F_H2 = font(20), font(46, True), font(30, True)
F_IT, F_BODY, F_SUB, F_SRC = font(23, True), font(18), font(19), font(14)

EMOJI = re.compile(r'[\U0001F000-\U0001FAFF\u2190-\u21FF\u2300-\u27BF\u2B00-\u2BFF\uFE0F]')
def no_emoji(s): return EMOJI.sub('', str(s)).strip()

def wrap(draw, text, f, maxw):
    out, cur = [], ''
    for ch in no_emoji(text):
        if ch == '\n':
            out.append(cur); cur = ''; continue
        t = cur + ch
        if draw.textlength(t, font=f) > maxw and cur:
            out.append(cur); cur = ch
        else:
            cur = t
    if cur: out.append(cur)
    return out or ['']

def round_grad(img, box, r, c1, c2):
    x0, y0, x1, y1 = box; w, h = x1 - x0, y1 - y0
    tmp = Image.new('RGB', (w, h)); d = ImageDraw.Draw(tmp)
    for x in range(w):
        t = x / max(w - 1, 1)
        d.line([(x, 0), (x, h)], fill=tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3)))
    mask = Image.new('L', (w, h), 0); ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1], r, fill=255)
    img.paste(tmp, (x0, y0), mask)

def main():
    data = json.load(open(os.path.join(ROOT, 'ai-news.json'), encoding='utf-8'))
    issues = data['issues']
    issue = int(sys.argv[1]) if len(sys.argv) > 1 else max(i['issue'] for i in issues)
    it = next(x for x in issues if x['issue'] == issue)
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, 'assets', f'ai-news-{issue}.png')

    img = Image.new('RGB', (W, 8000), BG)
    d = ImageDraw.Draw(img)
    y = 60

    # ---- header ----
    hh = 184
    round_grad(img, (PAD, y, W - PAD, y + hh), 24, (188, 82, 238), (50, 69, 255))
    lx, ly = PAD + 44, y + (hh - 76) // 2
    ImageDraw.Draw(img).rounded_rectangle([lx, ly, lx + 76, ly + 76], 18, fill=(15, 18, 28))
    d.line([(lx + 20, ly + 52), (lx + 38, ly + 24), (lx + 56, ly + 52)], fill=(255, 255, 255), width=5, joint='curve')
    d.ellipse([lx + 34, ly + 18, lx + 43, ly + 27], fill=(75, 243, 200))
    tx = lx + 76 + 26
    d.text((tx, y + 44), 'Vin驿 · 公开第二大脑', font=F_BRAND, fill=(255, 255, 255))
    d.text((tx, y + 76), f"第 {issue} 期 · AI 行业日报", font=F_TITLE, fill=(255, 255, 255))
    d.text((tx, y + 138), f"{it['date']} · 把思考做成产品 · 公开第二大脑", font=F_SUB, fill=(210, 214, 226))
    y += hh + 38

    cw = W - 2 * PAD
    inner = cw - 56
    for s in it['sections']:
        color = s.get('color', '#4bf3c8')
        cr = tuple(int(color.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
        if s['key'] == 'overview':
            # 总述：标题 + summary 卡片
            d.rectangle([PAD, y, PAD + 7, y + 32], fill=cr)
            d.text((PAD + 21, y), no_emoji(s['label']), font=F_H2, fill=WHITE)
            d.line([(PAD + 150, y + 16), (W - PAD, y + 16)], fill=(255, 255, 255, 40))
            y += 50
            if s.get('summary'):
                lines = wrap(d, s['summary'], F_BODY, inner)
                h = 44 + len(lines) * 28
                d.rounded_rectangle([PAD, y, W - PAD, y + h], 14, fill=CARD, outline=BORDER)
                d.rectangle([PAD, y, PAD + 5, y + h], fill=cr)
                ty = y + 22
                for ln in lines:
                    d.text((PAD + 28, ty), ln, font=F_BODY, fill=GRAY); ty += 28
                y += h + 18
            continue
        # 普通 section
        d.rectangle([PAD, y, PAD + 7, y + 32], fill=cr)
        d.text((PAD + 21, y), no_emoji(s['label']), font=F_H2, fill=WHITE)
        d.line([(PAD + 150, y + 16), (W - PAD, y + 16)], fill=(255, 255, 255, 40))
        y += 50
        for im in s.get('items', []):
            title = im.get('title', '')
            body = im.get('desc') or im.get('summary') or ''
            src = im.get('source', '') or (im.get('source', {}) or {}).get('source', '')
            date = im.get('date', '') or (im.get('source', {}) or {}).get('date', '')
            tl = wrap(d, title, F_IT, inner)
            bl = wrap(d, body, F_BODY, inner)
            h = 48 + len(tl) * 34 + 10 + len(bl) * 28 + 13 + 22
            d.rounded_rectangle([PAD, y, W - PAD, y + h], 18, fill=CARD, outline=BORDER)
            d.rectangle([PAD, y, PAD + 5, y + h], fill=cr)
            ty = y + 24
            for ln in tl:
                d.text((PAD + 28, ty), ln, font=F_IT, fill=WHITE); ty += 34
            ty += 10
            for ln in bl:
                d.text((PAD + 28, ty), ln, font=F_BODY, fill=GRAY); ty += 28
            ty += 13
            d.text((PAD + 28, ty), f"来源：{no_emoji(src)} · {date}", font=F_SRC, fill=DIM)
            y += h + 16
        y += 22

    # ---- footer ----
    y += 14
    d.line([(PAD, y), (W - PAD, y)], fill=(255, 255, 255, 40))
    y += 22
    d.text((PAD, y), 'Vin驿 · 公开第二大脑', font=F_BRAND, fill=(154, 163, 184))
    d.text((W - PAD, y), '微信号 PM_Vincent · 每日更新', font=F_BRAND, fill=(107, 122, 171), anchor='ra')
    y += 40

    img = img.crop((0, 0, W, y))
    img.save(out)
    print(f'OK: {out}  ({img.size[0]}x{img.size[1]}, issue {issue})')

if __name__ == '__main__':
    main()
