# 新增功能：管理仓库统计

## 包含管理的组织仓库

默认情况下，GitHub Readme Stats 只统计你**拥有**的仓库。但是，如果你是组织中某些项目的管理者，你可能希望这些仓库的 stars 和语言使用情况也被包含在你的统计中。

### 启用管理仓库统计

通过添加 `include_managed_repos=true` 参数，你可以包含你在组织中管理的仓库：

#### GitHub Stats Card
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=你的用户名&include_managed_repos=true)
```

#### Top Languages Card
```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=你的用户名&include_managed_repos=true)
```

### 什么算作"管理的仓库"？

管理的仓库包括：
- 你拥有的所有仓库（个人仓库）
- 你在组织中具有 `ADMIN` 或 `MAINTAIN` 权限的仓库

> **注意**: 只有具有管理权限的组织仓库会被包含，普通的协作者权限（`WRITE`, `TRIAGE`, `READ`）不会被统计。

### 示例对比

**默认行为（只统计拥有的仓库）:**
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)
```

**包含管理的组织仓库:**
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&include_managed_repos=true)
```

### 与其他参数组合使用

你可以将 `include_managed_repos` 与其他参数组合使用：

```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=你的用户名&include_managed_repos=true&show_icons=true&theme=radical)
```

```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=你的用户名&include_managed_repos=true&layout=compact&theme=radical)
```

### 重要注意事项

1. **API 限制**: 启用此功能会查询更多仓库，可能更容易触发 GitHub API 的 rate limiting
2. **权限要求**: 需要适当的 GitHub token 权限来查询组织仓库信息
3. **建议部署自己的实例**: 如果你经常使用此功能，建议部署自己的 Vercel 实例以避免 rate limiting

### 部署自己的实例

为了获得最佳体验和避免 rate limiting，建议按照 [部署指南](readme.md#deploy-on-your-own) 部署自己的实例。
