# 部署后需要更新的内容

## 1. 部署到 Vercel 后

假设你的 Vercel 部署地址是：`https://github-readme-stats-enhanced-futureunreal.vercel.app`

## 2. 需要更新的文件和内容

### README.md 中的示例 URL

将所有 `https://your-instance.vercel.app` 替换为你的实际部署地址：

```markdown
# 原来的示例
![GitHub stats](https://your-instance.vercel.app/api?username=yourusername&include_managed_repos=true)

# 更新为
![GitHub stats](https://github-readme-stats-enhanced-futureunreal.vercel.app/api?username=yourusername&include_managed_repos=true)
```

### docs/readme_cn.md 中的示例 URL

同样需要更新中文文档中的示例 URL。

## 3. 快速替换命令

### 使用 VS Code
1. 打开项目
2. 按 `Ctrl+Shift+H` 打开全局替换
3. 查找：`https://your-instance.vercel.app`
4. 替换为：`https://你的实际vercel地址.vercel.app`
5. 点击全部替换

### 使用命令行 (Linux/Mac)
```bash
# 替换 README.md
sed -i 's|https://your-instance.vercel.app|https://你的实际vercel地址.vercel.app|g' readme.md

# 替换中文文档
sed -i 's|https://your-instance.vercel.app|https://你的实际vercel地址.vercel.app|g' docs/readme_cn.md
```

### 使用命令行 (Windows PowerShell)
```powershell
# 替换 README.md
(Get-Content readme.md) -replace 'https://your-instance.vercel.app', 'https://你的实际vercel地址.vercel.app' | Set-Content readme.md

# 替换中文文档
(Get-Content docs/readme_cn.md) -replace 'https://your-instance.vercel.app', 'https://你的实际vercel地址.vercel.app' | Set-Content docs/readme_cn.md
```

## 4. 提交更新

```bash
git add .
git commit -m "Update deployment URLs with actual Vercel instance"
git push
```

## 5. 测试你的实例

部署完成后，测试以下 URL：

### 基础统计
```
https://你的vercel地址.vercel.app/api?username=FutureUnreal
```

### 包含管理仓库的统计
```
https://你的vercel地址.vercel.app/api?username=FutureUnreal&include_managed_repos=true
```

### 语言统计
```
https://你的vercel地址.vercel.app/api/top-langs?username=FutureUnreal
```

### 包含管理仓库的语言统计
```
https://你的vercel地址.vercel.app/api/top-langs?username=FutureUnreal&include_managed_repos=true
```

## 6. 环境变量设置

在 Vercel 中设置以下环境变量：

- `PAT_1`: 你的 GitHub Personal Access Token
- `PAT_2`: (可选) 第二个 GitHub Token 用于 rate limiting
- `PAT_3`: (可选) 第三个 GitHub Token 用于 rate limiting

## 7. GitHub Token 权限

确保你的 GitHub Token 具有以下权限：
- `repo` - 访问仓库信息
- `read:org` - 读取组织信息（用于管理仓库功能）
- `read:user` - 读取用户信息

## 8. 完成！

更新完成后，你就可以在你的 README 中使用新的管理仓库统计功能了！
