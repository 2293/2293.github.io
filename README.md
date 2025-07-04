# 🚀 2293.fun - 基于 Docusaurus 和 SageCell 的交互式内容网站

<div align="center">
  <a href="https://2293.fun">
    <img src="static/img/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">2293.fun 项目源码</h3>

  <p align="center">
    2293.fun 网站的官方代码仓库，一个用于构建交互式技术文档和博客的强大平台。
    <br />
    <a href="https://2293.fun"><strong>探索线上网站 »</strong></a>
    <br />
    <br />
  </p>
</div>

---

## 📖 关于项目

本项目是 [2293.fun](https://2293.fun) 网站的驱动核心，旨在让学习和实验变得无缝衔接。它基于现代化的静态网站生成器 [Docusaurus 2](https://docusaurus.io/) 构建，并通过深度整合 [SageCell](https://sagecell.sagemath.org/) 获得了强大的交互能力。

这种组合允许作者创建内容丰富的交互式文章，用户可以直接在浏览器中执行多种语言的代码片段，包括 Python、R、Octave 等。对于教程、技术博客和教育材料来说，这是一个理想的解决方案。

### ✨ 主要特性

*   **现代化文档:** 由 Docusaurus 驱动，提供清晰、易于访问且支持版本控制的文档系统。
*   **交互式代码块:** 支持在页面上直接执行 10 种不同语言的代码。
*   **默认自动执行:** 代码块在页面加载时会自动运行，以便立即看到结果，同时提供禁用选项。
*   **智能语言选择:** 代码块的语言会在 SageCell 的下拉菜单中被自动设为默认选项，同时允许用户切换到其他语言。
*   **React 驱动:** 充分利用 React 的能力来创建自定义组件和动态页面。
*   **Markdown/MDX:** 使用简洁的 Markdown 和强大的 JSX 来编写内容。

### 🛠️ 技术栈

*   [Docusaurus 2](https://docusaurus.io/)
*   [React.js](https://reactjs.org/)
*   [SageCell](https://sagecell.sagemath.org/)
*   [MDX](https://mdxjs.com/)

---

## 🚀 本地开发指南

按照以下简单步骤，即可在您的本地环境中启动并运行本项目。

### ✅ 环境要求

请确保您的系统中已安装 Node.js 和 npm。

*   **npm**
    ```sh
    npm install npm@latest -g
    ```

### 📦 安装

1.  克隆本仓库:
    ```sh
    git clone https://github.com/2293/2293.github.io.git
    ```
2.  进入项目目录:
    ```sh
    cd 2293.github.io
    ```
3.  安装项目依赖:
    ```sh
    npm install
    ```

### 🏃‍♂️ 运行

启动本地开发服务器:

```sh
npm start
```

此命令会启动一个本地开发服务器并自动在浏览器中打开页面。大多数更改都能实时反映，无需重启服务。

---

## ✍️ 使用与内容创作

创建内容非常简单，只需在 `blog` 或 `docs` 目录下添加 Markdown (`.md`) 或 MDX (`.mdx`) 文件即可。

### 交互式 SageCell 代码块

要创建一个可由 SageCell 处理的交互式代码块，请使用标准的 Markdown 围栏代码块语法，并指定相应的语言标识符。

**支持的语言:** `sage`, `gap`, `gp`, `html`, `macaulay2`, `maxima`, `octave`, `python`, `r`, `singular`。

#### 默认行为（自动执行）

默认情况下，所有支持的代码块都会在页面加载时 **自动执行**。计算结果将直接显示在代码块下方。

**示例:**

````markdown
```python
# 这段代码会自动运行
import numpy as np

x = np.arange(0, 2*np.pi, 0.1)
y = np.sin(x)

print("正弦波数据点:")
print(y)
```
````

#### 禁用自动执行

如果您希望代码块仅在用户点击“运行”按钮时才执行，可以通过在代码块的元数据中添加 `{autoeval=false}` 或 `{autoeval=0}` 来显式禁用自动执行。

**示例:**

````markdown
```r {autoeval=false}
# 这段代码不会自动运行
# 用户必须点击 '运行' 按钮

data <- c(2, 4, 4, 5, 6, 7, 8, 9)
summary(data)
```
````

---

## 🤝 贡献指南

开源社区因贡献而变得更加美好。我们 **非常感谢** 您的任何贡献。

如果您有任何建议，请 Fork 本仓库并创建一个 Pull Request。您也可以直接提交一个带有 "enhancement" 标签的 Issue。

1.  Fork 本项目
2.  创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3.  提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (`git push origin feature/AmazingFeature`)
5.  提交一个 Pull Request

## 📄 开源许可

本项目基于 MIT 许可证分发。更多信息请参阅 `LICENSE.txt` 文件。

## 🙏 致谢

*   [Docusaurus 团队](https://github.com/facebook/docusaurus)
*   [SageMath 和 SageCell 项目](https://www.sagemath.org/)
*   [Readme.so](https://readme.so/) 提供的 README 模板灵感
