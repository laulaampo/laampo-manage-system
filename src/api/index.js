import ajax from './ajax'
const BASE = 'http://api.juheapi.com/japi'
const KEY = '1cc95422a740babbf4a20f4421847caf'

export const getHistoryToday = (v, month, day) => ajax({
    methods:'GET',
    url:BASE + '/toh',
    params:{
        v,
        month,
        day,
        key:KEY
    }
})

export const getWordInfo = (word,dtype) => ajax({
    methods:'GET',
    url:'http://v.juhe.cn/xhzd/query',
    params:{
        word,
        dtype:dtype || '',
        key:'b3f23bc5583ce5d91bcad97cfc0c16c6'
    }
})