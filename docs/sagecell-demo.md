---
sidebar_position: 1
---

# SageCell 示例

这个页面展示了如何在 Docusaurus 中使用 SageCell。

## 基础数学计算

```js
//let langs=['sage', 'gp', 'html', 'gap', 'macaulay2', 'maxima', 'octave', 'python', 'r', 'singular'];
let langs=sagecell.allLanguages.slice(0);
if(langs.indexOf(language) !== -1){
  langs.splice(langs.indexOf(language), 1);
  langs.unshift(language);
}
```

下面是一个简单的 Sage 计算示例：
```sage
2^3
```

```gp
[n^3|n<-[1..9]]
```

```python {autoeval=false}
print(bin(314159265358979323846264338327950288419910)) 
```

## 矩阵运算

下面是一个矩阵运算的示例：

```sage
# 矩阵定义
A = matrix([[1, 2], [3, 4]])
B = matrix([[5, 6], [7, 8]])

# 矩阵乘法
A * B

```

```r {autoeval=0}
# 这段代码也不会自动运行
plot(1:10)
```