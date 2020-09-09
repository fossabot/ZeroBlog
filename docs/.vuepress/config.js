const themeConfig = require('./config/theme/')

module.exports = {
  title: "ZeroBlog",
  description: '.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  path: "/www/wwwroot/blog.hcctf.cn", //服务器上这个文件要放在哪里
	host: "152.136.153.235", // 服务器的host地址
	username: "root", // SSH用户名
	password: "012359Clown@", // SSH密码
	port: 22, //SSH连接的端口
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  