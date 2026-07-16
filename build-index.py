#!/usr/bin/env python3
"""生成 content/index.json，列出所有 Markdown 笔记"""
import json, os
from pathlib import Path

CONTENT = Path(__file__).parent / 'content'
OUT = CONTENT / 'index.json'

files = sorted(
    [f.name for f in CONTENT.iterdir() if f.suffix == '.md' and f.name != 'about.md'],
    reverse=True
)

OUT.write_text(json.dumps([{"file": f} for f in files], ensure_ascii=False, indent=2))
print(f"✅ 已生成 {OUT}，包含 {len(files)} 篇笔记")
