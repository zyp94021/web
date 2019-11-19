简单的 react 预渲染项目

项目结构

```
├─ build                    ts 代码输出目录
├─ client                   客户端代码目录
├─ clientbuild              前端babel编译输出目录(去除服务器不能识别的文件,供服务器直接引用)
├─ config                   webpack 配置文件目录
│   ├─ webpack.base.js      webpack 基础配置
│   ├─ webpack.dev.js       客户端开发配置
│   ├─ webpack.client.js    SPA 打包配置
│   └─ webpack.server.js    SSR 打包配置
├─ dist                     SPA 输出目录
├─ entry                    webpack 入口文件
│   ├─ client.js            SPA 入口文件
│   └─ server.js            SSR 入口文件(废弃)
├─ public                   SSR 输出目录(客户端用资源)
├─ server                   服务器代码目录
├─ ssrbuild                 SSR 输出目录(服务器SSR用)(废弃)
├─ .babelrc.js
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tsconfig.json
└─ yarn.lock

```

script

```
start           以pm2启动node服务
stop            以pm2停止node服务
restart         以pm2重启node服务
serve           在SPA目录启动serve
build:client    构建SPA包
build:server    构建SSR包
dev             客户端开发
run:node        直接启动node服务
run:babel       编译服务端用客户端代码
```

部署

```
SPA     yarn build:client
SSR     yarn build:server
        yarn start|restart
```

支持

```
1. SPA
2. SSR
3. less
4. autoprefixer
```

继续更新...
