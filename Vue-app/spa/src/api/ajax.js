import  axios from 'axios'



//封装get请求函数
/**
 * @method:get
 * @url  '路径'  
 * @params  {}
 * @res     返回值
 *  
 * 
 * 
 */
export function  getData(url='',params={}) {
    // if(typeof(params=='String')) {
    //       params
    // }else {

    // }
 let Promise=   axios.get(url,{
        params:params
    }).then(res=>{
        return  res.data
    })


    return Promise


}


/**
 * @method:post
 * @url  '路径'  
 * @params  {}
 * @res     返回值
 *  
 * 
 * 
 */

//封装post请求函数


export function  postData(url='',params={}) {

  let promise=  axios.post(url,{
        data:JSON.stringify(params),
        headers: { 'content-type': 'application/x-www-form-urlencoded' },

    }).then(res=>{
        return  res.data
    })

    return promise

}

