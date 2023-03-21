/*获取元素样式：首先判断该浏览器是否有getComputedStyle方法（有则不是ie浏览器没有则为ie）然后执行相应方法获取属性值；
注意：name是元素的某一个属性名，以变量的形式传入函数故不能用“.”的形式获取属性值应用“[]”的形式获取。*/
function getStyle(obj,name){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[name];
	}else{
		return obj.currentStyle[name];
	}
}

console.log(parseInt('50%'))
let a = 'dadada'
let b = [a]
console.log(b)