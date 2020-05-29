import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
    const {
        methods,
        data
    } = config
    if (methods.toUpperCase() === 'POST' && data instanceof Object) {
        config.data = qs.stringify(data)
    }
    return config
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    console.log(error)
})

export default axios