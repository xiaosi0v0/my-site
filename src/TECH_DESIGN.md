# Tech Design 技术设计文档
## 1. 技术栈
构建工具：Vite
框架：React + TypeScript
路由库：react-router-dom v6
样式：（可选）TailwindCSS

## 2. 项目目录结构
src/
├── pages/
│   ├── Home.tsx    // 首页组件
│   └── Admin.tsx   // 管理页组件
├── router.tsx      // 路由配置文件
└── main.tsx        // 入口文件

## 3. 核心流程
1. main.tsx 作为入口，引入路由组件 AppRouter
2. router.tsx 使用 createBrowserRouter 配置路由表
3. RouterProvider 注入路由，<Link> 实现页面跳转
4. Vite 负责本地开发服务、热更新

## 4. 部署方案
构建命令：npm run build，产出dist静态资源，托管到静态网页服务。
