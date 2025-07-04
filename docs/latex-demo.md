---
sidebar_position: 3
tags: [LaTeX,Sagecell]
---

# LaTeX 示例

这个页面展示了如何在 Docusaurus 中使用 LaTeX 和 SageCell。

## 基础 LaTeX 公式

Docusaurus 默认支持 LaTeX 公式，使用 `$` 或 `$$` 包裹公式：

行内公式：$E = mc^2$

块级公式：

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

要显示\$符号，请使用 `\$` 或者  &#96;\$&#96;。

## 绘制函数图像并添加 LaTeX 标签

下面是一个绘制函数图像并添加 LaTeX 标签的示例：

```sage
# 2025年中国数学高考题
var('x')
f = 5*cos(x)-cos(5*x)

# 绘制函数图像
p = plot(f, (x, -2*pi, 2*pi))

p.set_axes_range(ymin=-6, ymax=6)
p.axes_labels(['$x$', '$5*\\cos(x)-\\cos(5*x)$'])
p.show()
```


## 求解方程并显示 LaTeX 结果

下面是一个求解方程并显示 LaTeX 结果的示例：

```sage
var('x')
eq = x^2 + 2*x + 1 == 0
sol = solve(eq, x)
latex(sol)
```

