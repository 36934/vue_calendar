import axios from 'axios'
import qs from 'qs'
import JUHE_APPKEY from '@/configs/keys'

const axiosPost = options => {
    axios.post(
        options.url,
        qs.stringify({
            key:JUHE_APPKEY,
            ...options.data
        })
    ).then(res => {
        options.success(res.data)
    }).catch(err => {
        options.error(err)
    })
}


const axiosGet = options => {
    axios.post(
        options.url,
        {
            params:{
                key:JUHE_APPKEY,
                ...options.data
            }
        }
    ).then(res => {
        options.success(res.data)
    }).catch(err => {
        options.error(err)
    })
}

export {
    axiosPost,
    axiosGet
}