window.onload=function(){
//获取tab按钮
let tabDiv=document.getElementsByClassName("tab")[0];
let tabs=tabDiv.getElementsByTagName("li")
// alert(tabs.length)

//获取产品内容区域
let section=document.getElementsByClassName("section");
// alert(section.length)

//绑定单击事件
for(let i=0;i<tabs.length;i++){
    tabs[i].onclick=function(){
        
        for(let i=0;i<tabs.length;i++){
            section[i].classList.remove("change");   
          }
          for(let i=0;i<tabs.length;i++){
            tabs[i].classList.remove("active");
          }
        section[i].classList.add("change");
        tabs[i].classList.add("active"); 
    }
}
//计时器，按钮自动按顺序播放变大
let index=0;
let timer;
timer=setInterval(function(){
    index++;
     if(index>=tabs.length){
         index=0;
     }
   
        for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove("active");
      }
      tabs[index].classList.add("active"); 
    // alert(index)
    
},1000);

//获取small 和big中的svg
let smalldiv=document.getElementsByClassName("small")[0];
// let small=smalldiv.getElementsByTagName("li");
let randoms= smalldiv.getElementsByClassName("icon")

// alert(random.length)      
    var oBtn=document.getElementById("btn");
        function bg(){
        //用rgb格式生成随机的颜色，rgb每一项的数字都是0到255,因此每一项的长度为256
        //Math.random 生成0到1之间的随机数，与256相乘则会得到0到256之间的随机数
        //再用Math.floor向下取整之后，则得到的是0到255的随机整数，则rgb(r,g,b)可以实现颜色的随机性
            var r = Math.floor( Math.random()*256);
            var b = Math.floor( Math.random()*256);
            var g = Math.floor( Math.random()*256);
            return "rgb("+r+","+g+","+b+")";
        }
        
        let timer1=setInterval(function(){
            for(let i=0;i<randoms.length;i++){
                index++;
                if(index>=randoms.length){
                    index=0;
                }
                 randoms[i].style.fill=bg();
                
            }
        },1000)
    
        //点击最新活动的图标，会放大
        let bigs=document.getElementsByClassName("bigs")[0];
        let bigLi=bigs.getElementsByTagName("li");
        // alert(bigLi.length)
        for(let i=0;i<bigLi.length;i++){
            bigLi[i].onmouseover=function(){
               
                for(let i=0;i<bigLi.length;i++){
                if(this==bigLi[i]){
                    bigLi[i].classList.add("active");
                    bigLi[i].classList.remove("active1");
                }else{
                    bigLi[i].classList.remove("active");
                    bigLi[i].classList.remove("active1");
                }
            }
            bigLi[i].onmouseout=function(){
                bigLi[i].classList.remove("active");
                bigLi[i].classList.add("active1");
            }
        }
    }

    let navbar=document.getElementById("navbar");
let aside=document.getElementById("aside");
let navtop=navbar.offsetTop;

window.onscroll=function(){
    if(window.pageYOffset>=navtop){
        aside.style.display="block";
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
        aside.style.display="none";
    }
}

}
