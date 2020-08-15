import axios from 'axios'

// 导出一个封装的 axios请求对象
export function arequest(aconfig) {
  // 创建一个请求对象实例，通过配置这个实例的默认参数，然后调用者使用该实例发送请求
  const interfaceArequest = axios.create({
    baseURL: 'http://123.207.32.32:8000/',//该实例默认请求url地址
    timeout: 5000, //请求超时时间
  })
  //拦截器
  interfaceArequest.interceptors.request.use(value => {
    return value
  },error => {
    console.log(error)
  })

  return interfaceArequest(aconfig)

}
