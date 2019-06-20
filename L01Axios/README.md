# 引入下载
```
npm install axios --save
import Axios from 'axios'

挂载Vue
Vue.prototype.$axios = Axios
```

# get请求
HelloWorld.vue 页面
```
this.$axios.get(
    "https://www.easy-mock.com/mock/5c468fcd3ea95957a403a95c/KRYL/queryGroupData"
    )
    .then(res => {
    console.log(res.data.data);
    this.msg = res.data.data;
});
```
# get请求带参数
HelloWorld.vue
```
  this.$axios.get("https://www.easy-mock.com/mock/5c468fcd3ea95957a403a95c/KRYL/queryGroupData",{
      parmse:{ //这是参数
        coust:10
      }
    }).then(res=>{
      console.log(res.data.data);
  })
```
# 请求前拦截器
main页面
```
Axios.interceptors.request.use(config => {
        console.log(`请求前拦截器`, config);
        return config;
    },
    error => {
        //请求错误处理
    }
);
```
# 请求后拦截器
main页面
```
Axios.interceptors.response.use(response => {
        console.log(`请求成功后拦截器`, response);
        //成功请求到数据
        return response;
    },
    error => {
        //响应错误处理
    }
);
```
# 默认配置
main页面
```
Axios.defaults.timeout = 10000; // 超时时间
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.baseURL = '';
```
# post 请求
```
this.$axios.post('https://www.easy-mock.com/mock/5bbab3f329a4d80bbccbcb81/example/login',{username:"user1"})
  .then((response)=>{
          console.log(`post`,response.data.data);
  })
}
```
# 解决跨域
```
下载 qs
npm install qs --save
引入
import qs from 'qs'
使用
this.$axios.post('https://www.easy-mock.com/mock/5bbab3f329a4d80bbccbcb81/example/login',qs.stringify({username:"user1"}))
  .then((response)=>{
          console.log(`post`,response.data.data);
  })
}
```

# 在拦截请求中解决跨域
```
import qs from 'qs'
Axios.interceptors.request.use(config => {
       if(config.method ==="post"){
         config.data = qs.stringify(config.data)
       }
       return config
    },
    error => {
        //请求错误处理
    }
);
```
# 处理跨域
L01Axios/config/index.js
```
proxyTable: {
  '/api':{
    tarage:"https://www.easy-mock.com",//路径地址
    changeOrigin:true //映射host的结果
    pathPewrite:{
      "^/api":""
    }
  }
}, //处理跨域
```
在main中映射
```
Vue.prototype.HOST = "/api"
```
在应用页面
```
let url = this.HOST + "/move/top250"
this.$axios.post(url,{
  params:{
    count:10,
    start:0
  }
}).then((response)=>{
          console.log(`post`,response.data.data);
  })
}
```