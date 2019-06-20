// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//挂载圆形
Vue.prototype.$axios = Axios
Vue.config.productionTip = false

//映射
// Vue.prototype.HOST = "/api"

// 5 默认全局配置
Axios.defaults.timeout = 10000; // 超时时间
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.baseURL = '';

//（3）添加一个请求拦截器
Axios.interceptors.request.use(config => {
        console.log(`请求前拦截器`, config);
        return config;
    },
    error => {
        //请求错误处理
    }
);
//（4）添加一个返回拦截器
Axios.interceptors.response.use(response => {
        console.log(`请求成功后拦截器`, response);
        //成功请求到数据
        return response;
    },
    error => {
        //响应错误处理
    }
);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})