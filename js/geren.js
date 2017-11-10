/*
* @Author: UEK-2016
* @Date:   2017-11-02 15:00:13
* @Last Modified by:   UEK-2016
* @Last Modified time: 2017-11-09 18:24:28
*/
let huabu1=document.querySelector(".canvas1").getContext("2d");
	let huabu2=document.querySelector(".canvas2").getContext("2d");
	let huabu3=document.querySelector(".canvas3").getContext("2d");
	function circle(cobj,shu,color){
		cobj.textAlign="center";
		cobj.textBaseLine="middle";
		cobj.font="20px 微软雅黑";
		cobj.fillStyle="#fff";
		let num=0;
		function aa(){
			num++;
			let angle=num*Math.PI/50;
			cobj.save();
			cobj.translate(100, 100);
			cobj.save();
			cobj.clearRect(-100, -100, 200, 200);						
			cobj.lineWidth=10;
			cobj.strokeStyle=color;
			cobj.lineCap="round";
			cobj.beginPath();
			cobj.rotate(-Math.PI/2);			
			cobj.arc(0,0,70,0,angle);
			cobj.stroke();
			cobj.restore();
			cobj.fillText(num+"%",0,0);
			if(num<shu){
				requestAnimationFrame(aa);				
			}
			cobj.restore();
		}
		aa();
	}
			circle(huabu1,80,"red");
			circle(huabu2,77,"blue");
			circle(huabu3,78,"green");
		
var ul=$(".k4 ul");
// console.log(ul);
var angle=0;

var t=setInterval(move,1500);
function move(){
	angle+=45;
	ul.css("transform","rotateY("+angle+"deg)");
}

ul.hover(function(){
	clearInterval(t);
},function(){
	t=setInterval(move,1500);
})
	

	// 第一页动效
	$(".k4 li").hover(function(){
		$(".k4 li span").css("display","block");
	},function(){
		$(".k4 a span").css("display","none");
	})
	// 第二页动效
	// 第三页动效
	// 第四页动效
	// 第五页动效
		