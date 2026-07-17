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
git push

# 4. 恢复本地软链，Obsidian 继续就地编辑
rm -rf "$PROJ/content"
ln -s "$VAULT" "$PROJ/content"
echo "✅ 已部署并恢复本地软链（content/ → $VAULT）"
