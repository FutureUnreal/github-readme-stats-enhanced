<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats Enhanced" />
 <h2 align="center">GitHub Readme Stats Enhanced</h2>
 <p align="center">Enhanced version of github-readme-stats with managed organization repositories support!</p>
</p>

<p align="center">
  <strong>🚀 New Feature: Support for statistics from organization repositories you manage!</strong>
</p>

<p align="center">
  <a href="https://vercel.com?utm\_source=github\_readme\_stats\_team\&utm\_campaign=oss">
    <img src="./powered-by-vercel.svg"/>
  </a>
</p>

<p align="center">
  <a href="#all-demos">View Demo</a>
  ·
  <a href="#managed-repositories-feature">🆕 Managed Repos Feature</a>
  ·
  <a href="#deploy-on-your-own">Deploy Guide</a>
  ·
  <a href="/docs/readme_cn.md">简体中文</a>
</p>

## 📋 About This Project

This is an enhanced version of [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) with the following new features:

### 🆕 New Features

- **Managed Repository Statistics** - Support for statistics from organization repositories you manage (with ADMIN or MAINTAIN permissions)
- **Precise Permission Control** - Only count repositories you actually manage, not all repositories in organizations
- **Enhanced Stars Statistics** - Include stars from managed organization repositories
- **Enhanced Language Statistics** - Include programming languages from managed organization repositories

### 💡 Why This Feature?

The original github-readme-stats only counts repositories you **own**, but if you're a manager of certain projects in organizations, those repositories' contributions won't be counted. This enhanced version solves that problem!

## 🔥 Managed Repositories Feature {#managed-repositories-feature}

### Quick Start

Simply add the `include_managed_repos=true` parameter to your existing URLs:

#### GitHub Stats Card
```markdown
![GitHub stats](https://your-instance.vercel.app/api?username=yourusername&include_managed_repos=true)
```

#### Top Languages Card
```markdown
![Top Languages](https://your-instance.vercel.app/api/top-langs?username=yourusername&include_managed_repos=true)
```

### Permission Levels

Only organization repositories with the following permissions will be counted:
- ✅ `ADMIN` - Administrator permissions
- ✅ `MAINTAIN` - Maintainer permissions
- ❌ `WRITE` - Write permissions (not counted)
- ❌ `TRIAGE` - Triage permissions (not counted)
- ❌ `READ` - Read permissions (not counted)

# Features <!-- omit in toc -->

## 🆕 Enhanced Features
- [Managed Repository Statistics](#managed-repositories-feature) - **New Feature**
  - [Usage](#quick-start)
  - [Permission Levels](#permission-levels)
  - [Examples](#examples)

## 📊 Original Features
- [GitHub Stats Card](#github-stats-card)
    - [Hiding individual stats](#hiding-individual-stats)
    - [Showing additional individual stats](#showing-additional-individual-stats)
    - [Showing icons](#showing-icons)
    - [Themes](#themes)
    - [Customization](#customization)
- [GitHub Extra Pins](#github-extra-pins)
    - [Usage](#usage)
    - [Demo](#demo)
- [GitHub Gist Pins](#github-gist-pins)
    - [Usage](#usage-1)
    - [Demo](#demo-1)
- [Top Languages Card](#top-languages-card)
    - [Usage](#usage-2)
    - [Language stats algorithm](#language-stats-algorithm)
    - [Exclude individual repositories](#exclude-individual-repositories)
    - [Hide individual languages](#hide-individual-languages)
    - [Show more languages](#show-more-languages)
    - [Compact Language Card Layout](#compact-language-card-layout)
    - [Donut Chart Language Card Layout](#donut-chart-language-card-layout)
    - [Donut Vertical Chart Language Card Layout](#donut-vertical-chart-language-card-layout)
    - [Pie Chart Language Card Layout](#pie-chart-language-card-layout)
    - [Hide Progress Bars](#hide-progress-bars)
    - [Demo](#demo-2)
- [WakaTime Stats Card](#wakatime-stats-card)
    - [Demo](#demo-3)
- [All Demos](#all-demos)
  - [Quick Tip (Align The Cards)](#quick-tip-align-the-cards)

## 🚀 Deployment
- [Deploy on your own](#deploy-on-your-own)
  - [On Vercel](#on-vercel)
  - [On other platforms](#on-other-platforms)
  - [Disable rate limit protections](#disable-rate-limit-protections)

# Important Notices <!-- omit in toc -->

> [!IMPORTANT]\
> This project is based on [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) with added managed repository statistics functionality. Since GitHub API only allows [5k requests per hour](https://docs.github.com/en/graphql/overview/resource-limitations), **we strongly recommend deploying your own instance** for the best experience.

> [!WARNING]\
> **Managed Repository Feature Notes**: Enabling `include_managed_repos=true` will query more repository data and may more easily trigger GitHub API rate limits. Recommendations:
> - Deploy your own Vercel instance
> - Use appropriate cache settings
> - Avoid frequent refreshing

> [!TIP]\
> **Recommended Usage**:
> 1. Fork this project
> 2. Deploy to your own Vercel account
> 3. Configure your GitHub API Token
> 4. Enjoy the complete managed repository statistics functionality!

## 🔄 Relationship with Original Project

This project is an enhanced version of [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), maintaining all original features while adding managed repository statistics functionality. Thanks to the original author [@anuraghazra](https://github.com/anuraghazra) for the excellent work!

# 🆕 Managed Repository Statistics Feature

## Feature Overview

By default, GitHub Readme Stats only counts repositories you **own**. But if you're a manager of certain projects in organizations, those repositories' contributions won't be counted.

This enhanced version adds the `include_managed_repos` parameter, allowing you to count repositories you manage in organizations!

## Examples

### Default Behavior (Only Owned Repositories)
```markdown
![GitHub stats](https://your-instance.vercel.app/api?username=yourusername)
![Top Languages](https://your-instance.vercel.app/api/top-langs?username=yourusername)
```

### Including Managed Organization Repositories
```markdown
![GitHub stats](https://your-instance.vercel.app/api?username=yourusername&include_managed_repos=true)
![Top Languages](https://your-instance.vercel.app/api/top-langs?username=yourusername&include_managed_repos=true)
```

## Combining with Other Parameters

```markdown
![GitHub stats](https://your-instance.vercel.app/api?username=yourusername&include_managed_repos=true&show_icons=true&theme=radical)
```

```markdown
![Top Languages](https://your-instance.vercel.app/api/top-langs?username=yourusername&include_managed_repos=true&layout=compact&theme=radical)
```

## Technical Implementation

### Query Logic
- Query user-owned repositories + organization member repositories
- Check each repository's `viewerPermission` field
- Only count repositories with `ADMIN` or `MAINTAIN` permissions

### API Consumption
Enabling this feature increases GitHub API consumption because:
1. Expanded query scope (including organization repositories)
2. Additional permission field queries required
3. Possible multiple pagination queries needed

**Recommendation**: Deploy your own instance to avoid public instance rate limits.

# GitHub Stats Card

Copy and paste this into your markdown, and that's it. Simple!

Change the `?username=` value to your GitHub username.

## Basic Usage

```md
[![GitHub stats](https://your-instance.vercel.app/api?username=yourusername)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

## 🆕 Including Managed Repositories

```md
[![GitHub stats](https://your-instance.vercel.app/api?username=yourusername&include_managed_repos=true)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

> [!WARNING]\
> By default, the stats card only shows statistics like stars, commits, and pull requests from public repositories. To show private statistics on the stats card, you should [deploy your own instance](#deploy-on-your-own) using your own GitHub API token.

> [!TIP]\
> **New Feature**: Use the `include_managed_repos=true` parameter to count repositories you manage in organizations!

> [!NOTE]\
> Available ranks are S (top 1%), A+ (12.5%), A (25%), A- (37.5%), B+ (50%), B (62.5%), B- (75%), C+ (87.5%) and C (everyone). This ranking scheme is based on the [Japanese academic grading](https://wikipedia.org/wiki/Academic_grading_in_Japan) system. The global percentile is calculated as a weighted sum of percentiles for each statistic (number of commits, pull requests, reviews, issues, stars, and followers), based on the cumulative distribution function of the [exponential](https://wikipedia.org/wiki/exponential_distribution) and the [log-normal](https://wikipedia.org/wiki/Log-normal_distribution) distributions. The implementation can be investigated at [src/calculateRank.js](https://github.com/anuraghazra/github-readme-stats/blob/master/src/calculateRank.js). The circle around the rank shows 100 minus the global percentile.

### Hiding individual stats

You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options: `&hide=stars,commits,prs,issues,contribs`

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&hide=contribs,prs)
```

### Showing additional individual stats

You can pass a query parameter `&show=` to show any specific additional stats with comma-separated values.

> Options: `&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)
```

### Showing icons

To enable icons, you can pass `&show_icons=true` in the query param, like so:

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true)
```

### Themes

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `&theme=THEME_NAME` parameter like so :

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=radical)
```

#### All inbuilt themes

GitHub Readme Stats comes with several built-in themes (e.g. `dark`, `radical`, `merko`, `gruvbox`, `tokyonight`, `onedark`, `cobalt`, `synthwave`, `highcontrast`, `dracula`).

<img src="https://res.cloudinary.com/anuraghazra/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stats Themes" width="600px"/>

You can look at a preview for [all available themes](themes/README.md) or checkout the [theme config file](themes/index.js). Please note that we paused the addition of new themes to decrease maintenance efforts; all pull requests related to new themes will be closed.

#### Responsive Card Theme

[![Anurag's GitHub stats-Dark](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=dark#gh-dark-mode-only)](https://github.com/anuraghazra/github-readme-stats#responsive-card-theme#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=default#gh-light-mode-only)](https://github.com/anuraghazra/github-readme-stats#responsive-card-theme#gh-light-mode-only)

Since GitHub will re-upload the cards and serve them from their [CDN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls), we can not infer the browser/GitHub theme on the server side. There are, however, four methods you can use to create dynamics themes on the client side.

##### Use the transparent theme

We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=transparent)
```

<details>
<summary>:eyes: Show example</summary>

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=transparent)

</details>

##### Add transparent alpha channel to a themes bg\_color

You can use the `bg_color` parameter to make any of [the available themes](themes/README.md) transparent. This is done by setting the `bg_color` to a color with a transparent alpha channel (i.e. `bg_color=00000000`):

```md
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&bg_color=00000000)
```

<details>
<summary>:eyes: Show example</summary>

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&bg_color=00000000)

</details>

##### Use GitHub's theme context tag

You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```md
[![Anurag's GitHub stats-Dark](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/anuraghazra/github-readme-stats#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/anuraghazra/github-readme-stats#gh-light-mode-only)
```

<details>
<summary>:eyes: Show example</summary>

[![Anurag's GitHub stats-Dark](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=dark#gh-dark-mode-only)](https://github.com/anuraghazra/github-readme-stats#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=default#gh-light-mode-only)](https://github.com/anuraghazra/github-readme-stats#gh-light-mode-only)

</details>

##### Use GitHub's new media feature

You can use [GitHub's new media feature](https://github.blog/changelog/2022-05-19-specify-theme-context-for-images-in-markdown-beta/) in HTML to specify whether to display images for light or dark themes. This is done using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature.

```html
<picture>
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true" />
</picture>
```

<details>
<summary>:eyes: Show example</summary>

<picture>
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true" />
</picture>

</details>

### Customization

You can customize the appearance of all your cards however you wish with URL parameters.

#### Common Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `title_color` | Card's title color. | string (hex color) | `2f80ed` |
| `text_color` | Body text color. | string (hex color) | `434d58` |
| `icon_color` | Icons color if available. | string (hex color) | `4c71f2` |
| `border_color` | Card's border color. Does not apply when `hide_border` is enabled. | string (hex color) | `e4e2e2` |
| `bg_color` | Card's background color. | string (hex color or a gradient in the form of *angle,start,end*) | `fffefe` |
| `hide_border` | Hides the card's border. | boolean | `false` |
| `theme` | Name of the theme, choose from [all available themes](themes/README.md). | enum | `default` |
| `cache_seconds` | Sets the cache header manually (min: 21600, max: 86400). | integer | `21600` |
| `locale` | Sets the language in the card, you can check full list of available locales [here](#available-locales). | enum | `en` |
| `border_radius` | Corner rounding on the card. | number | `4.5` |

> [!WARNING]\
> We use caching to decrease the load on our servers (see <https://github.com/anuraghazra/github-readme-stats/issues/1471#issuecomment-1271551425>). Our cards have a default cache of 6 hours (21600 seconds). Also, note that the cache is clamped to a minimum of 6 hours and a maximum of 24 hours. If you want the data on your statistics card to be updated more often you can [deploy your own instance](#deploy-on-your-own) and set [environment variable](#disable-rate-limit-protections) `CACHE_SECONDS` to a value of your choosing.

##### Gradient in bg\_color

You can provide multiple comma-separated values in the bg\_color option to render a gradient with the following format:

    &bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10

##### Available locales

Here is a list of all available locales:

<table>
<tr><td>

| Code | Locale |
| --- | --- |
| `cn` | Chinese |
| `zh-tw` | Chinese (Taiwan) |
| `ar` | Arabic |
| `cs` | Czech |
| `de` | German |
| `en` | English |
| `bn` | Bengali |
| `es` | Spanish |
| `fr` | French |
| `hu` | Hungarian |

</td><td>

| Code | Locale |
| --- | --- |
| `it` | Italian |
| `ja` | Japanese |
| `kr` | Korean |
| `nl` | Dutch |
| `pt-pt` | Portuguese (Portugal) |
| `pt-br` | Portuguese (Brazil) |
| `np` | Nepali |
| `el` | Greek |
| `ru` | Russian |
| `uk-ua` | Ukrainian |

</td><td>

| Code | Locale |
| --- | --- |
| `id` | Indonesian |
| `ml` | Malayalam |
| `my` | Burmese |
| `sk` | Slovak |
| `tr` | Turkish |
| `pl` | Polish |
| `uz` | Uzbek |
| `vi` | Vietnamese |
| `se` | Swedish |

</td></tr>
</table>

If we don't support your language, please consider contributing! You can find more information about how to do it in our [contributing guidelines](CONTRIBUTING.md#translations-contribution).

#### Stats Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the [specified items](#hiding-individual-stats) from stats. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your stats card. | boolean | `false` |
| `card_width` | Sets the card's width manually. | number | `500px  (approx.)` |
| `hide_rank` | Hides the rank and automatically resizes the card width. | boolean | `false` |
| `rank_icon` | Shows alternative rank icon (i.e. `github`, `percentile` or `default`). | enum | `default` |
| `show_icons` | Shows icons near all stats. | boolean | `false` |
| `include_all_commits` | Count total commits instead of just the current year commits. | boolean | `false` |
| `line_height` | Sets the line height between text. | integer | `25` |
| `exclude_repo` | Excludes specified repositories. | string (comma-separated values) | `null` |
| `custom_title` | Sets a custom title for the card. | string | `<username> GitHub Stats` |
| `text_bold` | Uses bold text. | boolean | `true` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |
| `ring_color` | Color of the rank circle. | string (hex color) | `2f80ed` |
| `number_format` | Switches between two available formats for displaying the card values `short` (i.e. `6.6k`) and `long` (i.e. `6626`). | enum | `short` |
| `show` | Shows [additional items](#showing-additional-individual-stats) on stats card (i.e. `reviews`, `discussions_started`, `discussions_answered`, `prs_merged` or `prs_merged_percentage`). | string (comma-separated values) | `null` |

> [!NOTE]\
> When hide\_rank=`true`, the minimum card width is 270 px + the title length and padding.

#### Repo Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `show_owner` | Shows the repo's owner name. | boolean | `false` |
| `description_lines_count` | Manually set the number of lines for the description. Specified value will be clamped between 1 and 3. If this parameter is not specified, the number of lines will be automatically adjusted according to the actual length of the description. | number | `null` |

#### Gist Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `show_owner` | Shows the gist's owner name. | boolean | `false` |

#### Language Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the [specified languages](#hide-individual-languages) from card. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your card. | boolean | `false` |
| `layout` | Switches between five available layouts `normal` & `compact` & `donut` & `donut-vertical` & `pie`. | enum | `normal` |
| `card_width` | Sets the card's width manually. | number | `300` |
| `langs_count` | Shows more languages on the card, between 1-20. | integer | `5` for `normal` and `donut`, `6` for other layouts |
| `exclude_repo` | Excludes specified repositories. | string (comma-separated values) | `null` |
| `custom_title` | Sets a custom title for the card. | string | `Most Used Languages` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |
| `hide_progress` | Uses the compact layout option, hides percentages, and removes the bars. | boolean | `false` |
| `size_weight` | Configures language stats algorithm (see [Language stats algorithm](#language-stats-algorithm)). | integer | `1` |
| `count_weight` | Configures language stats algorithm (see [Language stats algorithm](#language-stats-algorithm)). | integer | `0` |

> [!WARNING]\
> Language names should be URI-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding)
> (i.e: `c++` should become `c%2B%2B`, `jupyter notebook` should become `jupyter%20notebook`, etc.) You can use
> [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.

#### WakaTime Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the languages specified from the card. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your card. | boolean | `false` |
| `line_height` | Sets the line height between text. | integer | `25` |
| `hide_progress` | Hides the progress bar and percentage. | boolean | `false` |
| `custom_title` | Sets a custom title for the card. | string | `WakaTime Stats` |
| `layout` | Switches between two available layouts `default` & `compact`. | enum | `default` |
| `langs_count` | Limits the number of languages on the card, defaults to all reported languages. | integer | `null` |
| `api_domain` | Sets a custom API domain for the card, e.g. to use services like [Hakatime](https://github.com/mujx/hakatime) or [Wakapi](https://github.com/muety/wakapi) | string | `wakatime.com` |
| `display_format` | Sets the WakaTime stats display format. Choose `time` to display time-based stats or `percent` to show percentages. | enum | `time` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |

***

# GitHub Extra Pins

GitHub extra pins allow you to pin more than 6 repositories in your profile using a GitHub readme profile.

Yay! You are no longer limited to 6 pinned repositories.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/pin?username=anuraghazra&repo=github-readme-stats`

```md
[![Readme Card](https://your-instance.vercel.app/api/pin/?username=yourusername&repo=your-repo-name)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### Demo

![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra\&repo=github-readme-stats)

Use [show\_owner](#repo-card-exclusive-options) query option to include the repo's owner username

![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra\&repo=github-readme-stats\&show_owner=true)

# GitHub Gist Pins

GitHub gist pins allow you to pin gists in your GitHub profile using a GitHub readme profile.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/gist?id=bbfce31e0217a3689c8d961a356cb10d`

```md
[![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)](https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/)
```

### Demo

![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)

Use [show\_owner](#gist-card-exclusive-options) query option to include the gist's owner username

![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d\&show_owner=true)

# Top Languages Card

语言统计卡片显示 GitHub 用户最常使用的编程语言。

> [!WARNING]\
> 默认情况下，语言卡片只显示公共仓库的语言统计。要包含私有仓库的语言统计，你需要[部署自己的实例](#deploy-on-your-own)并使用你自己的 GitHub API token。

> [!NOTE]\
> Top Languages 不代表用户的技能水平，它只是一个 GitHub 指标，用于确定哪些语言在 GitHub 上拥有最多代码。这是 github-readme-stats 的一个功能。

> [!WARNING]\
> 此卡片只显示你自己的非 fork 仓库中的语言使用情况，不依赖于提交的作者是谁。它不包括你对其他用户/组织仓库的贡献。目前无法从 GitHub API 获取此数据。如果你希望改进此行为，可以支持 [@rickstaa](https://github.com/rickstaa) 在 GitHub Community 中创建的[此功能请求](https://github.com/orgs/community/discussions/18230)。

> [!TIP]\
> **🆕 新功能**：现在你可以使用 `include_managed_repos=true` 参数来统计你在组织中管理的仓库的语言使用情况！

> [!WARNING]\
> 目前此卡片只显示前 100 个仓库的数据。这是由于 GitHub API 限制导致公共实例停机（参见 [#1471](https://github.com/anuraghazra/github-readme-stats/issues/1471)）。未来将通过发布 GitHub action 或为用户自己的实例提供环境变量来改进此行为。

## 基础用法

将此代码复制粘贴到你的 readme 中，并修改链接。

端点: `api/top-langs?username=你的用户名`

```md
[![Top Langs](https://your-instance.vercel.app/api/top-langs/?username=你的用户名)](https://github.com/你的用户名/github-readme-stats-enhanced)
```

## 🆕 包含管理仓库

```md
[![Top Langs](https://your-instance.vercel.app/api/top-langs/?username=你的用户名&include_managed_repos=true)](https://github.com/你的用户名/github-readme-stats-enhanced)
```

### Language stats algorithm

We use the following algorithm to calculate the languages percentages on the language card:

```js
ranking_index = (byte_count ^ size_weight) * (repo_count ^ count_weight)
```

By default, only the byte count is used for determining the languages percentages shown on the language card (i.e. `size_weight=1` and `count_weight=0`). You can, however, use the `&size_weight=` and `&count_weight=` options to weight the language usage calculation. The values must be positive real numbers. [More details about the algorithm can be found here](https://github.com/anuraghazra/github-readme-stats/issues/1600#issuecomment-1046056305).

*   `&size_weight=1&count_weight=0` - *(default)* Orders by byte count.
*   `&size_weight=0.5&count_weight=0.5` - *(recommended)* Uses both byte and repo count for ranking
*   `&size_weight=0&count_weight=1` - Orders by repo count

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&size_weight=0.5&count_weight=0.5)
```

### Exclude individual repositories

You can use the `&exclude_repo=repo1,repo2` parameter to exclude individual repositories.

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&exclude_repo=github-readme-stats,anuraghazra.github.io)
```

### Hide individual languages

You can use `&hide=language1,language2` parameter to hide individual languages.

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&hide=javascript,html)
```

### Show more languages

You can use the `&langs_count=` option to increase or decrease the number of languages shown on the card. Valid values are integers between 1 and 20 (inclusive). By default it was set to `5` for `normal` & `donut` and `6` for other layouts.

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&langs_count=8)
```

### Compact Language Card Layout

You can use the `&layout=compact` option to change the card design.

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact)
```

### Donut Chart Language Card Layout

You can use the `&layout=donut` option to change the card design.

```md
[![Top Langs](https://your-instance.vercel.app/api/top-langs/?username=yourusername&layout=donut)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### Donut Vertical Chart Language Card Layout

You can use the `&layout=donut-vertical` option to change the card design.

```md
[![Top Langs](https://your-instance.vercel.app/api/top-langs/?username=yourusername&layout=donut-vertical)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### Pie Chart Language Card Layout

You can use the `&layout=pie` option to change the card design.

```md
[![Top Langs](https://your-instance.vercel.app/api/top-langs/?username=yourusername&layout=pie)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### Hide Progress Bars

You can use the `&hide_progress=true` option to hide the percentages and the progress bars (layout will be automatically set to `compact`).

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&hide_progress=true)
```

### Demo

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra)

*   Compact layout

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra\&layout=compact)

*   Donut Chart layout

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra\&layout=donut)](https://github.com/anuraghazra/github-readme-stats)

*   Donut Vertical Chart layout

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra\&layout=donut-vertical)](https://github.com/anuraghazra/github-readme-stats)

*   Pie Chart layout

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra\&layout=pie)](https://github.com/anuraghazra/github-readme-stats)

*   Hidden progress bars

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra\&hide_progress=true)

# WakaTime Stats Card

> [!WARNING]\
> Please be aware that we currently only show data from WakaTime profiles that are public. You therefore have to make sure that **BOTH** `Display code time publicly` and `Display languages, editors, os, categories publicly` are enabled.

Change the `?username=` value to your [WakaTime](https://wakatime.com) username.

```md
[![WakaTime stats](https://your-instance.vercel.app/api/wakatime?username=yourusername)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### Demo

![Harlok's WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs)

![Harlok's WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs\&hide_progress=true)

*   Compact layout

![Harlok's WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs\&layout=compact)

***

# All Demos

*   Default

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)

*   Hiding specific stats

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&hide=contribs,issues)

*   Showing additional stats

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)

*   Showing icons

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&hide=issues\&show_icons=true)

*   Shows Github logo instead rank level

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&rank_icon=github)

*   Shows user rank percentile instead of rank level

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&rank_icon=percentile)

*   Customize Border Color

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&border_color=2e4058)

*   Include All Commits

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&include_all_commits=true)

*   Themes

Choose from any of the [default themes](#themes)

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&show_icons=true\&theme=radical)

*   Gradient

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra\&bg_color=30,e96443,904e95\&title_color=fff\&text_color=fff)

*   Customizing stats card

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api/?username=anuraghazra\&show_icons=true\&title_color=fff\&icon_color=79ff97\&text_color=9f9f9f\&bg_color=151515)

*   Setting card locale

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api/?username=anuraghazra\&locale=es)

*   Customizing repo card

![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=anuraghazra\&repo=github-readme-stats\&title_color=fff\&icon_color=f9f9f9\&text_color=9f9f9f\&bg_color=151515)

*   Gist card

![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)

*   Customizing gist card

![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d&theme=calm)

*   Top languages

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra)

*   WakaTime card

![Harlok's WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs)

***

## Quick Tip (Align The Cards)

By default, GitHub does not lay out the cards side by side. To do that, you can use this approach:

```html
<a href="https://github.com/anuraghazra/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api?username=anuraghazra" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=anuraghazra&layout=compact&langs_count=8&card_width=320" />
</a>
```

```html
<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=convoychat" />
</a>
```

<details>
<summary>:eyes: Show example</summary>

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api?username=anuraghazra" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=anuraghazra&layout=compact&langs_count=8&card_width=320" />
</a>

***

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=convoychat" />
</a>

</details>

# Deploy on your own

## On Vercel

### :film\_projector: [Check Out Step By Step Video Tutorial By @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

Since the GitHub API only allows 5k requests per hour, my `https://github-readme-stats.vercel.app/api` could possibly hit the rate limiter. If you host it on your own Vercel server, then you do not have to worry about anything. Click on the deploy button to get started!

> [!NOTE]\
> Since [#58](https://github.com/anuraghazra/github-readme-stats/pull/58), we should be able to handle more than 5k requests and have fewer issues with downtime :grin:.

> [!NOTE]\
> If you are on the [Pro (i.e. paid)](https://vercel.com/pricing) Vercel plan, the [maxDuration](https://vercel.com/docs/concepts/projects/project-configuration#value-definition) value found in the [vercel.json](https://github.com/anuraghazra/github-readme-stats/blob/master/vercel.json) can be increased when your Vercel instance frequently times out during the card request. You are advised to keep this value lower than `30` seconds to prevent high memory usage.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/FutureUnreal/github-readme-stats-enhanced)

<details>
 <summary><b>:hammer_and_wrench: Step-by-step guide on setting up your own Vercel instance</b></summary>

1.  Go to [vercel.com](https://vercel.com/).
2.  Click on `Log in`.
    ![](https://files.catbox.moe/pcxk33.png)
3.  Sign in with GitHub by pressing `Continue with GitHub`.
    ![](https://files.catbox.moe/b9oxey.png)
4.  Sign in to GitHub and allow access to all repositories if prompted.
5.  Fork this repo.
6.  Go back to your [Vercel dashboard](https://vercel.com/dashboard).
7.  To import a project, click the `Add New...` button and select the `Project` option.
    ![](https://files.catbox.moe/3n76fh.png)
8.  Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button. Alternatively, you can import a Third-Party Git Repository using the `Import Third-Party Git Repository ->` link at the bottom of the page.
    ![](https://files.catbox.moe/mg5p04.png)
9.  Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) and enable the `repo` and `user` permissions (this allows access to see private repo and user stats).
10. Add the PAT as an environment variable named `PAT_1` (as shown).
    ![](https://files.catbox.moe/0yclio.png)
11. Click deploy, and you're good to go. See your domains to use the API!

</details>

## On other platforms

> [!WARNING]\
> This way of using GRS is not officially supported and was added to cater to some particular use cases where Vercel could not be used (e.g. [#2341](https://github.com/anuraghazra/github-readme-stats/discussions/2341)). The support for this method, therefore, is limited.

<details>
<summary><b>:hammer_and_wrench: Step-by-step guide for deploying on other platforms</b></summary>

1.  Fork or clone this repo as per your needs
2.  Add `express` to the dependencies section of `package.json`
    <https://github.com/anuraghazra/github-readme-stats/blob/ba7c2f8b55eac8452e479c8bd38b044d204d0424/package.json#L54-L61>
3.  Run `npm i` if needed (initial setup)
4.  Run `node express.js` to start the server, or set the entry point to `express.js` in `package.json` if you're deploying on a managed service
    <https://github.com/anuraghazra/github-readme-stats/blob/ba7c2f8b55eac8452e479c8bd38b044d204d0424/package.json#L11>
5.  You're done 🎉
    </details>

## Disable rate limit protections

Github Readme Stats contains several Vercel environment variables that can be used to remove the rate limit protections:

*   `CACHE_SECONDS`: This environment variable takes precedence over our cache minimum and maximum values and can circumvent these values for self-hosted Vercel instances.

See [the Vercel documentation](https://vercel.com/docs/concepts/projects/environment-variables) on adding these environment variables to your Vercel instance.

## Keep your fork up to date

You can keep your fork, and thus your private Vercel instance up to date with the upstream using GitHub's [Sync Fork button](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork). You can also use the [pull](https://github.com/wei/pull) package created by [@wei](https://github.com/wei) to automate this process.

# 🤝 Contributions & Support

## Acknowledgments

This project is based on [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats). Thanks to the original author for the excellent work!

## How to Support

If this project helps you, you can:

*   ⭐ Give the project a Star
*   🔗 Give proper credit when you use it in your README, linking back to it
*   🐛 Report bugs or suggest improvements
*   🔀 Submit Pull Requests to contribute code

## Contributing Guidelines

Contributions are welcome! Please ensure:

1. Fork this project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

***

[![Powered by Vercel](powered-by-vercel.svg)](https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss)

Made with ❤️ and JavaScript. Enhanced for better organization repository management.
