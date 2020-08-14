import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000; // 请求超时时间
// axios.defaults.baseURL = 'http://118.25.222.68:5757'


/****** request拦截器==>对请求参数做处理 ******/
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    // baseURL: 'http://118.25.222.68:5757/heyushuo',
    // 超时
    // timeout: 10000,
    //允许携带cookie
    // withCredentials: true,
    headers: { "Content-Type": "application/json; charset=utf-8" }
})

service.interceptors.request.use(config => {
    if (config.method === 'post') {
        //如果是post请求则进行序列化处理
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {  //请求错误处理
    return Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error)
    })
/**

 * 封装get方法

 * @param url

 * @param data

 * @returns {Promise}

 */
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}


/**

 * 封装post请求

 * @param url

 * @param data

 * @returns {Promise}

 */
// 封装post方法
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}
export default service;
