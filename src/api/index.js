import axios from './axios'
import {setStorage,getStorage,removeStorage} from '@/js/utils';
// 关于我们
export const about = () =>axios("/wxsite/user/userProtocol",{
	api_name:'userProtocol'
},'POST')