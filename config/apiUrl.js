// let ipUrl = 'http://localhost:3300/'    // 测试环境
let ipUrl = 'http://localhost:8088/api/'    // 生产环境

let servicePath = {
    getBlogList:ipUrl + 'blogList/getBlogList' ,  //  首页文章列表接口
    getBlogDetailById:ipUrl + 'blogList/blogDetail?_id=',  // 文章详细页内容接口 ,需要接收参数
    getCategoryList : ipUrl + 'category/getCategoryList'    // 博客分类列表
}
export default servicePath;