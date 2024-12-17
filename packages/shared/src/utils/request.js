import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // 基础请求路径，可根据需要修改
  timeout: 5000    // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可添加 token 或其他请求头
    console.log('请求发送', config);
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('请求错误', error);
    return Promise.reject(error);
  }
);

export default instance;
