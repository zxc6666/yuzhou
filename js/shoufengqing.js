//手风琴效果
var aa=document.getElementsByClassName("aa");
var aa1=document.getElementsByClassName("count_bigk_left_wen2");
var p1=document.getElementsByClassName("p1");
show(0);
function show(index){
pub();
	   if(aa[index].style.height=="0px"){
	   	aa[index].style.height="160px"
	   }
	   aa1[index].style.background="url(img/hengkuang.gif)";
	   p1[index].style.color="white";
}
function pub(){
	for(var i=0;i<aa.length;i++){
	aa[i].style.height="0";
	aa1[i].style.background="url(img/hunsa-1.gif)";
	p1[i].style.color="gray";
    }
}
