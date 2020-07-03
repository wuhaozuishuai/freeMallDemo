//配置运行环境
module.exports  ={
    publicPath:'',//静态路径
    devServer:{
        host:'localhost',
        port:9090,
        proxy:{//代理,解决跨域问题
            '/mock':{
                target:'http://localhost:9090',
                ws:false,
                //将主机头的原点改为目标的url地址
                changeOrigin: false
            }
        }
    }
}
