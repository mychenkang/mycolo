'use strict';
//储存Storage
export const setStorage = (name, key) => {
	localStorage.setItem(name, key);
};
//取Storage
export const getStorage = (name) =>  localStorage.getItem(name);
//删除指定Storage
export const removeStorage = (name) => {
	localStorage.removeItem(name);
};
//清空Storage
export const clearStorage = () => {
	localStorage.clear();
};
// 验证手机号码
export const checkMobileAndTel = (value) => {
	return /^1(3|4|5|7|8)\d{9}$/.test(value);
}
//去除左右空格
export const trim = (str) => {
  str=str.toString();
  return str.replace(/(^\s*)|(\s*$)/g, "");
};
//判断是否为空
export const isNull = (val) => val.replace(/^\s+|\s+$/gm,'').length ? false : true;

//判断手机号码
export const checkPohone = (value) =>  /^1(3|4|5|6|7|8|9)\d{9}$/.test(value);
