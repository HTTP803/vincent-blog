#!/bin/bash
# 部署到 GitHub Pages：临时把 Obsidian 软链换成真实文件(仅顶层公开笔记)提交推送，再恢复本地软链
# 用法：bash deploy.sh
set -e
PROJ="/Users/vincent/WorkBuddy/个人站"
VAULT="/Users/vincent/Documents/Obsidian Vault/公开第二大脑"
cd "$PROJ"

# 1. 重新生成索引（透过软链写入 vault 文件夹）
python3 build-index.py

# 2. 用真实文件替换软链，【只同步顶层公开笔记】，排除子文件夹（避免把私有知识库推上站）
rm -rf "$PROJ/content"
mkdir -p "$PROJ/content"
for f in "$VAULT"/*; do
  [ -f "$f" ] && cp "$f" "$PROJ/content/"
done

# 3. 关闭 Jekyll（保留 content/*.md 可被站点 fetch）
touch "$PROJ/.nojekyll"

# 4. 暂存：只加 content 公开文件 + .nojekyll + deploy.sh（不碰其他文件，避免误带 memory/.workbuddy 或破坏 content 跟踪）
for f in "$PROJ/content"/*; do
  git add -f "$f"
done
git add -f .nojekyll deploy.sh ai-news.json
git commit -m "deploy: $(date +%Y-%m-%d_%H:%M)" || echo "（无变更可提交）"

# 5. 检查 remote 并推送
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "✗ 未配置 remote，请先执行: git remote add origin git@github.com:用户名/仓库名.git"
  rm -rf "$PROJ/content"; ln -s "$VAULT" "$PROJ/content"
  exit 1
fi
git push -u origin "$(git rev-parse --abbrev-ref HEAD)"

# 6. 恢复本地软链，Obsidian 继续就地编辑（content 已被 .gitignore 忽略，本地 status 干净）
rm -rf "$PROJ/content"
ln -s "$VAULT" "$PROJ/content"
echo "✅ 已部署并恢复本地软链（content/ → $VAULT）"
