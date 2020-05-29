import ajax from './ajax'
const BASE = 'http://api.juheapi.com/japi'
const HISTORYTODAY_KEY = '1cc95422a740babbf4a20f4421847caf'
const WORD_KEY = 'b3f23bc5583ce5d91bcad97cfc0c16c6'
const CONSTELLATION_KEY = 'ce64a6b1eb05046062edb7b8eaf9e82e'

export const getHistoryToday = (v, month, day) => ajax({
    methods:'GET',
    url:BASE + '/toh',
    params:{
        v,
        month,
        day,
        key:HISTORYTODAY_KEY
    }
})

export const getWordInfo = (word,dtype) => ajax({
    methods:'GET',
    url:'http://v.juhe.cn/xhzd/query',
    params:{
        word,
        dtype:dtype || '',
        key:WORD_KEY
    }
})

export const getConstellation = (consName,type) => ajax({
    methods:"GET",
    url:'http://web.juhe.cn:8080/constellation/getAll',
    params:{
        consName,
        type,
        key:CONSTELLATION_KEY
    }
})