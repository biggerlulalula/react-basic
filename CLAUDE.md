# CLAUDE.md

此文件为在该代码库中工作的Claude Code（claude.ai/code）提供指导。

## 项目概述

这是一个使用Create React App创建的基础React应用程序。项目结构遵循标准的CRA布局：

- `src/` - 包含源代码
- `public/` - 包含静态资源和HTML模板
- `package.json` - 定义依赖项和脚本

## 关键命令

- `npm start` - 启动开发服务器
- `npm test` - 运行测试套件
- `npm run build` - 构建生产版本的应用
- `npm run eject` - 从Create React App中弹出（不可逆操作）

## 代码架构

这是一个最小化的React应用程序，包含：
1. `src/App.js`中的App组件，用于渲染基本内容
2. `src/index.js`中的入口点，将App组件渲染到DOM中
3. `public/index.html`中的基础HTML模板，包含React挂载的根div

该应用程序使用React 19和React DOM 19，以及标准的Create React App配置，包括测试库和web vitals。

## 开发工作流程

1. 在`src/`目录中修改组件
2. 使用`npm start`启动开发服务器，会自动重新加载
3. 使用`npm test`运行测试
4. 使用`npm run build`构建生产版本