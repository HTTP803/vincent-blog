#!/bin/bash
# 部署到 GitHub Pages：临时把 Obsidian 软链换成真实文件提交推送，再恢复本地软链
# 用法：bash deploy.sh
set -e
PROJ="/Users/vincent/WorkBuddy/个人站"
VAULT="/Users/vincent/Documents/Obsidian Vault/公开第二大脑"
cd "$PROJ"

# 1. 重新生成索引（透过软链写入 vault 文件夹）
python3 build-index.py

# 2. 用真实文件替换软链，供 GitHub Pages 读取
rm "$PROJ/content"
cp -R "$VAULT" "$PROJ/content"

# 3. 提交并推送
git add -f content
git add -A
git commit -m "deploy: $(date +%Y-%m-%d_%H:%M)" || echo "（无变更可提交）"
# 检查 remote 是否已配置
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "✗ 未配置 remote，请先执行: git remote add origin git@github.com:用户名/仓库名.git"
  # 恢复软链，避免卡在真实文件状态
  rm -rf "$PROJ/content"; ln -s "$VAULT" "$PROJ/content"
  exit 1
fi
git push -u origin "$(git rev-parse --abbrev-ref HEAD)"

# 4. 恢复本地软链，Obsidian 继续就地编辑
rm -rf "$PROJ/content"
ln -s "$VAULT" "$PROJ/content"
echo "✅ 已部署并恢复本地软链（content/ → $VAULT）"
