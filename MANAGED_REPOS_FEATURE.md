# 管理仓库统计功能

这个功能允许你只统计你在组织中**管理**的仓库，而不是组织中的所有仓库。

## 功能说明

### 什么是"管理的仓库"？

管理的仓库包括：
1. **你拥有的仓库** - 你作为所有者的个人仓库
2. **你管理的组织仓库** - 你在组织中具有 `ADMIN` 或 `MAINTAIN` 权限的仓库

### 权限级别说明

- `ADMIN` - 管理员权限（完全控制）
- `MAINTAIN` - 维护权限（管理仓库但不能删除）
- `WRITE` - 写入权限（普通协作者）
- `TRIAGE` - 分类权限（有限的管理权限）
- `READ` - 读取权限（只读访问）

只有 `ADMIN` 和 `MAINTAIN` 权限的仓库会被统计。

## 使用方法

### GitHub Stats Card

在你的 GitHub Stats Card URL 中添加 `include_managed_repos=true` 参数：

```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=你的用户名&include_managed_repos=true)
```

### Top Languages Card

在你的 Top Languages Card URL 中添加 `include_managed_repos=true` 参数：

```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=你的用户名&include_managed_repos=true)
```

## 示例对比

### 默认行为（只统计拥有的仓库）
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=你的用户名)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=你的用户名)
```

### 包含管理的组织仓库
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=你的用户名&include_managed_repos=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs?username=你的用户名&include_managed_repos=true)
```

## 技术实现

### GraphQL 查询变化

原始查询：
```graphql
repositories(ownerAffiliations: OWNER, ...)
```

新查询：
```graphql
repositories(ownerAffiliations: [OWNER, ORGANIZATION_MEMBER], ...) {
  nodes {
    name
    owner {
      login
      __typename
    }
    viewerPermission
    stargazers { totalCount }
    languages { ... }
  }
}
```

### 过滤逻辑

```javascript
const managedRepos = allRepos.filter(repo => {
  // 包含用户拥有的仓库
  if (repo.owner && repo.owner.__typename === 'User') {
    return true;
  }
  // 包含用户在组织中管理的仓库
  if (repo.owner && repo.owner.__typename === 'Organization') {
    return repo.viewerPermission === 'ADMIN' || repo.viewerPermission === 'MAINTAIN';
  }
  return false;
});
```

## 注意事项

1. **API 限制** - 启用此功能会查询更多仓库，可能更容易触发 GitHub API 的 rate limiting
2. **权限要求** - 需要适当的 GitHub token 权限来查询组织仓库信息
3. **私有仓库** - 只能访问你有权限查看的仓库
4. **缓存** - 建议使用适当的缓存设置来减少 API 调用

## 部署说明

如果你使用公共的 Vercel 实例，建议部署自己的实例来避免 rate limiting 问题。

参考原项目的部署文档：[Deploy on your own](readme.md#deploy-on-your-own)
