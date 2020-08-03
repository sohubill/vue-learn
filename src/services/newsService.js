//远程获取新闻和新闻类别数据

import Axios from "axios";
import { APPCODE } from "./config";

//获取新闻类别
export async function getNewsChannels(){
    var resp=await Axios.get('http://ali-news.showapi.com/newsList',
        {
            headers:{
                Authorization:`APPCODE ${APPCODE}`
            }
        }
    );
    console.log(resp);
}
getNewsChannels();