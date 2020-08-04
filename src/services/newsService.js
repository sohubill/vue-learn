//远程获取新闻和新闻类别数据

import Axios from "axios";
import { APPCODE } from "./config";

//获取新闻类别
export async function getNewsChannels(){
    var resp=await Axios.get('http://ali-news.showapi.com/channelList',
        {
            headers:{
                Authorization:`APPCODE ${APPCODE}`
            }
        }
    );
    return resp.data.showapi_res_body.channelList;
}

/**
 * 
 * @param {*} channelId 频道id
 * @param {*} page 页数
 * @param {*} limit 每页条数
 */
export async function getNews(channelId,page=1,limit=20){
    var resp=await Axios.get('http://ali-news.showapi.com/newsList',{
        headers:{
            Authorization:`APPCODE ${APPCODE}`,
        },
        params:{
            channelId,
            page,
            maxResult:limit,
            // needAllList:false
        }
    });
    return resp.data.showapi_res_body.agebean;
}
// getNewsChannels();
// getNews("5572a109b3cdc86cf39001e1");