export default {
    setHeaderTitle(state,routerName){
        // console.log(11)
        switch (routerName) {
            case 'day':
                state.headerTitle = '当天信息'
                break
            case 'month':
                state.headerTitle = '近期假期'
                break
            case 'year':
                state.headerTitle = '当年假期'
                break
            default:
                state.headerTitle = '当天信息'
                break
        }
    },
    setPlaceholder(state,routerName){
        const date = new Date()
        const year = date.getFullYear()
        const month = (date.getMonth()+1).toString().padStart(2,'0')
        const day = date.getDate().toString().padStart(2,'0')

        switch (routerName) {
            case 'day':
                state.placeholder = `格式:${year}${month}${day}(${year}年${month}月${day}日)`
                break
            case 'month':
                state.placeholder = `格式:${year}${month}(${year}年${month}月)`
                break
            case 'year':
                state.placeholder = `格式:${year}(${year}年)`
                break
        }
    },
    setMaxlength(state,routerName){
        switch (routerName) {
            case 'day':
                state.maxlength = 8
                break
            case 'month':
                state.maxlength = 6
                break
            case 'year':
                state.maxlength = 4
                break
            default:
                state.maxlength = 8
                break 
        }
    },
    setField(state,routerName){
        state.field = routerName
    },
    setErrorCode(state,errorCode){
        state.errorCode = errorCode
    },
    setData(state,payload){
        const {field,data} = payload

        switch (field){
            case 'day':
                state.dayData = data
                break
            case 'month':
                state.monthData = data
                break
            case 'year':
                state.yearData = data
                break
        }
    }
}