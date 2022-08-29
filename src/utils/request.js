/*
 * @Author: suckitfa 254202042@qq.com
 * @Date: 2022-08-29 10:04:17
 * @LastEditors: suckitfa 254202042@qq.com
 * @LastEditTime: 2022-08-29 10:06:46
 * @FilePath: \mogujie\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const service = axios.create({

});

// 请求拦截
service.interceptors.request.use(
  config => {
    // config.headers['token'] = 123;
    return config;
  }
)

service.interceptors.response.use(
  response => {

  }
)

export default service;