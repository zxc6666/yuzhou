//获取到li的集合
	var lis=document.getElementsByClassName("HT");
	var _rgba=document.getElementsByClassName("_rgba");
	var falg;
	//定义一个控制li显示的index
	pub();
	lis[0].style.opacity="1";
		_rgba[0].style.background="red";
	var index=0;
	//启动定时器
	var Mid=setInterval(SetAll,2000);
	function SetAll(){
		falg=true;
		pub();
		//修改需要显示的li
		lis[index].style.opacity="1";
		_rgba[index].style.background="red";
		console.log(index);
		index++;
		
		if (index >3){
			index=0;
		}
	}
	function pub(){
		for(var i=0;i<lis.length;i++){
			lis[i].style.opacity="0";//通过透明度去隐藏li
		}
		for(var i=0;i<_rgba.length;i++){
			_rgba[i].style.background="rgba(0,0,0,.5)";//通过透明度去隐藏li
		}
	}
	function anLiu(i){
		clearInterval(Mid);
		pub();
		lis[i].style.opacity="1";
		_rgba[i].style.background="red";
		index=i;
		Mid=setInterval(SetAll,2000);
	}
	function FisAnliu(){
		if(falg){
			--index;
			falg=false;
		}
		--index;
		if(index==-2){
			index=2;
		}
		if(index<0){
			index=3;
		}
		clearInterval(Mid);
		pub();
		lis[index].style.opacity="1";
		_rgba[index].style.background="red";
		Mid=setInterval(SetAll,2000);
	}
function EndAnliu(){
	if(falg){
			--index;
			falg=false;
		}
		++index;
		if(index>3){
			index=0;
		}
		clearInterval(Mid);
		pub();
		lis[index].style.opacity="1";
		_rgba[index].style.background="red";
		Mid=setInterval(SetAll,2000);
	}
//三张图中的图片切换效果
           var lovetu=document.getElementsByClassName("show_love");