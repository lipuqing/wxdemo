// 云函数模板
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'dtf1v1-c6f838'
})
const db = cloud.database()
exports.main = (event, context) => {
  console.log(event)
   //  拿到用户openid  
    const wxContext = cloud.getWXContext()
    var data = {
      openid: wxContext.OPENID,
      appid: wxContext.APPID,
      // env: wxContext.ENV,
    }
    // return data
    return db.collection(event.query).where(event.where).get().then(res=>{
       if(res.data.length>0){
        data.data = res.data
        return data
      }else{
        data.data = null
        return data
      }
    })
    .catch(err=>{
      console.log(err)
      return data 
    })
}