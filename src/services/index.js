import {getDayData,getMonthData,getYearData} from './request'
import {formatChsDate} from '../libs/utils'
// 获取数据
const getData = async (store,field,date) => {
    let data = null
    switch (field) {
        case 'day':
            data = await getDayData(date)
            break
        case 'month':
            data = await getMonthData(date)
            break
        case 'year':
            data = await getYearData(date)
            break
    }

    console.log(data)

    store.commit('setErrorCode',data.error_code)
    if (data.error_code !== 0){
        return 
    }

    //日期处理
    let res = null
    switch(field){
        case 'day':
            res = data.result.data
            // res.date
            // res['year-month']
            res.data = formatChsDate(res.date,'day')
            res['year-month'] = formatChsDate(res['year-month'],'month')
            break
        case 'month':
            res = data.result.data.holiday_array
            for(let item of res){
                item.festival = formatChsDate(item.festival,'day')
            }
            console.log(res)
            break
        case'year':
            res = data.result.data.holiday_list
            for(let item of res){
                item.startday = formatChsDate(item.startday,'day')
            }
            break
    }


    store.commit('setData',{
        field,
        data:res
    })
}

export default getData