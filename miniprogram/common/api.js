// API 访问 公用配置
if (wx.cloud) {
    wx.cloud.init({
        env: "dtf1v1-c6f838", // 云开发数据库ID
        traceUser: true,
    })
}
// 增  @params {}

function apiAdd() {}
// 删
function apiDelete() {}
// 改
function apiUpdate() {}
// 查   @params {  
//         data :{  查询参数集合
//              query: 要查询的表名称,
//              where: {     查询条件
//                  name:    参数键值
//              }            
//         name: 云函数名称,
//        callback ：返回执行结果
//      }  
function apiQuery(data, callback) {
    wx.cloud.callFunction({
        name: data.name,
        data: data.data,
        success: callback,
        fail: callback,
    });
}

module.exports = {
    apiAdd: apiAdd,
    apiDelete: apiDelete,
    apiUpdate: apiUpdate,
    apiQuery: apiQuery,
};