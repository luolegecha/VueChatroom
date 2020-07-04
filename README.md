# VueChatroom
### 主要技术
前端：<br>
1.uniApp（直接初始化一个前端的uni项目非常快）<br>
2.vue，由于uni本身就是依托于vue的所以里面的页面和组件都是vue的编写格式，很方便，标签和项目框架和小程序几乎一样。<br>

后端：<br>
1.express，老生常谈的快捷框架了<br>
2.socket.io（建立服务端和客户端全双工即时通信的关键，socket和websocket的区别无非就是兼容性的问题，反正socket都可以兼容那就直接用socket）<br>

## 使用方法
前端包和后端包已经分好了<br>
后端只需要通过npm初始化一下把socket.io和express安装好即可，开启服务用node运行index.js文件即可。<br>
前端里面用Hbuilder启动项目即可，多启动几个就可以精分聊天了。
