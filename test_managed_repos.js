// 简单测试脚本来验证管理仓库功能
import { fetchStats } from "./src/fetchers/stats-fetcher.js";
import { fetchTopLanguages } from "./src/fetchers/top-languages-fetcher.js";

async function testManagedRepos() {
  const username = "anuraghazra"; // 使用项目作者的用户名作为测试
  
  console.log("测试管理仓库功能...\n");
  
  try {
    // 测试不包含管理仓库的情况
    console.log("1. 获取默认统计（只包含拥有的仓库）:");
    const defaultStats = await fetchStats(username, false, [], false, false, false, false);
    console.log(`- 总 Stars: ${defaultStats.totalStars}`);
    console.log(`- 总仓库: ${defaultStats.totalRepos || '未知'}`);
    
    // 测试包含管理仓库的情况
    console.log("\n2. 获取包含管理仓库的统计:");
    const managedStats = await fetchStats(username, false, [], false, false, false, true);
    console.log(`- 总 Stars: ${managedStats.totalStars}`);
    console.log(`- 总仓库: ${managedStats.totalRepos || '未知'}`);
    
    // 测试语言统计
    console.log("\n3. 测试语言统计:");
    const defaultLangs = await fetchTopLanguages(username, [], 1, 0, false);
    const managedLangs = await fetchTopLanguages(username, [], 1, 0, true);
    
    console.log("默认语言统计:");
    Object.keys(defaultLangs.languages).slice(0, 3).forEach(lang => {
      console.log(`- ${lang}: ${defaultLangs.languages[lang].size} bytes`);
    });
    
    console.log("包含管理仓库的语言统计:");
    Object.keys(managedLangs.languages).slice(0, 3).forEach(lang => {
      console.log(`- ${lang}: ${managedLangs.languages[lang].size} bytes`);
    });
    
    console.log("\n✅ 测试完成！");
    
  } catch (error) {
    console.error("❌ 测试失败:", error.message);
    console.error("这可能是因为缺少 GitHub API token 或网络问题");
    console.error("请确保设置了 PAT_1 环境变量");
  }
}

// 运行测试
if (process.env.NODE_ENV !== 'test') {
  testManagedRepos();
}

export { testManagedRepos };
