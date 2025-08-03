# 🚀 设置GitHub存储库指南

## 1. 创建GitHub存储库

1. 登录GitHub账户：https://github.com/FutureUnreal
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - **Repository name**: `github-readme-stats-enhanced`
   - **Description**: `Enhanced version of github-readme-stats with managed organization repositories support`
   - **Visibility**: Public
   - **不要勾选任何初始化选项**（项目已有文件）
4. 点击 "Create repository"

## 2. 本地Git命令

在项目目录中执行以下命令：

```bash
# 导航到项目目录
cd "C:\Users\dalvqw\Codeing\github-readme-stats-master"

# 初始化Git存储库
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: Enhanced github-readme-stats with managed repos feature

- Added include_managed_repos parameter for stats and top-langs APIs
- Support for ADMIN and MAINTAIN permission filtering
- Enhanced GraphQL queries with viewerPermission field
- Updated documentation with new feature examples
- Maintained backward compatibility with original features"

# 设置主分支名称
git branch -M main

# 添加远程存储库
git remote add origin https://github.com/FutureUnreal/github-readme-stats-enhanced.git

# 推送到GitHub
git push -u origin main
```

## 3. 如果需要身份验证

### 方法1：使用Personal Access Token
1. 去 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 选择权限：`repo` (完整仓库权限)
4. 复制token
5. 推送时用token作为密码

### 方法2：使用GitHub CLI
```bash
# 安装GitHub CLI后
gh auth login
gh repo create github-readme-stats-enhanced --public --source=. --push
```

## 4. 验证成功

访问：https://github.com/FutureUnreal/github-readme-stats-enhanced

## 5. 后续更新命令

```bash
git add .
git commit -m "描述更改内容"
git push
```

## 6. 部署到Vercel

1. 访问 https://vercel.com
2. 连接GitHub账户
3. 导入 `github-readme-stats-enhanced` 项目
4. 添加环境变量：
   - `PAT_1`: 你的GitHub Personal Access Token
   - `PAT_2`, `PAT_3` 等（可选，用于rate limiting）
5. 部署完成后，你的API地址将是：
   `https://your-project-name.vercel.app/api`

## 7. 使用你的实例

部署后，将README中的示例URL替换为：
```markdown
![GitHub stats](https://your-project-name.vercel.app/api?username=FutureUnreal&include_managed_repos=true)
```
