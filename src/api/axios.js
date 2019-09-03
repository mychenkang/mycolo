import axios from 'axios'
import qs from 'qs'

const mainUrl = 'http://mjzjmry.app.xiaozhuschool.com'

function getUrl(url) {
    /* 判断传入的url路径是否是http开头 */
    if (url.startsWith('http') || url.startsWith('https')) {
        return url
    }
    /* 不是http开头，进行路径的拼接 */
    return `${mainUrl}${url}`
}

const Http = {
    get: (url, query) => new Promise((resolve, reject) => {
        /* new Promise 是为进行在vue store里面进行异步传值 */
        var path = getUrl(url)
        /* get请求 */
        axios.get(path, {
            params: query
        }).then((res1, error) => {
            if (res1) {
                resolve(res1)
            } else {
                reject(error)
            }
        })
    }),

    post: (url, query , contentType) => new Promise((resolve, reject) => {
        var path = getUrl(url)
        query.token = query.token?query.token:localStorage.getItem('token')
        /* post请求 */
        axios({
            url: path,
            method: 'post',
            data: contentType?query:qs.stringify(query),
            headers: {
                'Content-Type': contentType?contentType:'application/x-www-form-urlencoded'
            }
        }).then((res1, error) => {
            if (res1) {
                resolve(res1.data)
            } else {
                reject(error)
            }
        })
    }),
    jsonp: (url, query) => new Promise((resolve, reject) => {
        var path = getUrl(url)
        /* get请求 */
        axios.post(path, {
            params: query
        }).then((res1, error) => {
            if (res1) {
                resolve(res1)
            } else {
                reject(error)
            }
        })
    }),
}

export default Http
