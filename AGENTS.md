# AGENTS.md

## 项目概述
React基础项目，使用React 19+和Create React App脚手架创建。

## 构建、测试和Lint命令

### 构建命令
- `npm run build` - 构建生产版本到build目录
- `npm start` - 启动开发服务器

### 测试命令
- `npm test` - 启动测试运行器并监视文件变化
- 运行单个测试：由于当前没有测试文件，首先需要创建测试文件
- 要为组件添加测试，请在src目录下创建`.test.js`文件

### Lint命令
- 项目使用默认的eslint配置，扩展了react-app
- 没有单独的lint脚本，但Create React App会在开发和构建时自动进行代码检查

## 代码风格指南

### JavaScript/JSX格式
- 使用4个空格缩进
- 使用单引号表示字符串
- 在自闭合标签前保留一个空格 `<div />`
- 使用驼峰命名法命名变量和函数
- 组件名称必须大写开头

### 导入(Imports)
- 按以下顺序分组导入：
  1. 标准库导入
  2. 第三方库导入
  3. 本地项目导入
- 每个组之间用空行分隔
- 示例：
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
```

### 变量和常量命名
- 使用有意义的名称
- 布尔值可以使用`is`、`has`、`can`等前缀
- 数组使用复数形式命名
- 示例：
```javascript
const isLogin = true;
const userList = [];
const maxCount = 100;
```

### 函数命名
- 使用动词或动词短语
- 保持函数名简洁明了
- 复杂逻辑的函数应该有注释说明
- 示例：
```javascript
function getUserInfo() {}
function handleFormSubmit() {}
```

### React组件
- 函数组件使用PascalCase命名
- 组件返回的JSX应该包裹在单一父元素中
- 使用箭头函数或常规函数声明均可
- 保持组件专注单一职责

### JSX语法
- 属性使用camelCase
- 字符串属性使用单引号
- 布尔属性省略值：`disabled`而不是`disabled={true}`
- 复杂表达式提取到变量中
- 条件渲染优先使用：
  - 短路求值：`condition && <Component />`
  - 三元运算符：`condition ? <A /> : <B />`

### 注释
- 使用//进行行内注释
- 在复杂逻辑前添加注释说明
- 组件顶部可以添加功能说明注释
- 避免冗余注释

### 错误处理
- 当前代码库中没有明显的错误处理模式
- 建议在异步操作中使用try/catch
- 组件中可以使用Error Boundary处理渲染错误

### 样式处理
- 内联样式使用对象语法：`style={{color: 'red'}}`
- 避免复杂的内联样式，推荐使用CSS类
- 可以使用CSS Modules或全局CSS文件

## 最佳实践

### 状态管理
- 简单状态使用useState
- 复杂状态逻辑考虑useReducer
- 跨组件状态共享考虑Context API

### 列表渲染
- 使用map方法遍历数组
- 必须为列表项提供唯一的key属性
- key应使用稳定且唯一的标识符
- 避免使用数组索引作为key

### 性能优化
- 避免在render中创建新函数或对象
- 复杂计算使用useMemo缓存
- 事件处理器使用useCallback
- 不必要的重新渲染使用React.memo

## 特殊注意事项

### 当前项目特点
- 使用React 19+版本
- 没有TypeScript，纯JavaScript项目
- 目前没有测试文件，需要时可添加
- 没有额外的状态管理库
- 没有路由配置

### 待改进事项
- 添加适当的测试覆盖
- 考虑引入TypeScript提升类型安全
- 添加pre-commit钩子确保代码质量
- 完善错误边界处理
- 添加更详细的文档注释

## 回复规范
- 尽量使用中文回复



此AGENTS.md文件旨在为自动化代理提供清晰的指导，确保代码风格一致性和项目规范遵守。