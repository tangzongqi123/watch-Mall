
window.onload=function(){
  
    //创建函数功能：2种不同的商品图通过tab栏小图进行切换
    function getL(indexs){
      //获取2个商品图内容的元素
            let tabDiv=document.getElementsByClassName("productstab")[indexs];
            let tabs=tabDiv.getElementsByTagName("li");
            let imgDiv=document.getElementsByClassName("productsimg")[indexs];
            let imgs=imgDiv.getElementsByTagName("li");
    //通过tab栏图片改变商品主图
            for(let i=0;i<tabs.length;i++){
                tabs[i].onmouseover=function(){
                   yunxing(tabs,imgs,"change","shows",i)
                }
                //当屏幕尺寸变小时，鼠标悬停事件变为点击事件
                if(window.screen.width<500){
                  tabs[i].onclick=function(){
                    yunxing(tabs,imgs,"change","shows",i)
                 }
                }
          }     
    }
 //调用功能：只要类名相同，getL后面的参数可以任意控制
 //蓝色商品图的切换
    getL(0);
//粉色商品图的切换
    getL(1);

//通过选择不同商品颜色切换大的蓝色和粉色商品图：包括主图和tab栏小图的内容
let moveli=document.getElementsByClassName("moveli")[0];
let move=moveli.getElementsByTagName("div");
let productimgs=document.getElementsByClassName("productimgs");
//蓝色和粉色商品图，点进选择颜色，切换到不同的商品图
for(let i=0;i<move.length;i++){
    move[i].onclick=function(){
        yunxing(move,productimgs,"move","active",i)
    }
    
}


let lunboDiv=document.getElementsByClassName("lunbo")[0];
let lunbowordDiv=document.getElementsByClassName("lunboword")[0];
let lunbo=lunboDiv.getElementsByTagName("li");
let lunboword=lunbowordDiv.getElementsByTagName("span");
let newindex=0;
let timer;

//调用计时器功能，初始化计时器
start();

//切换图片和轮播
for(let i=0;i<lunboword.length;i++){
  //通过导航栏切换图片，同时关闭计时器
  lunboword[i].onmouseover=function(){
 clearInterval(timer);
 yunxing(lunboword,lunbo,"light","active",i);
  //鼠标移出后，开启计时器
  lunboword[i].onmouseout=function(){
    //当i和计时函数相等时，就能够找到当前的元素，计时器接着当前的元素，发生跳动
   newindex=i;
   start();
}
 }
}
//商品详情页标签切换
//获取元素
let productwordsUl=document.getElementsByClassName("productwords")[0];
let productwords=productwordsUl.getElementsByTagName("li");
let touseDiv=document.getElementsByClassName("intro")[0];
let touse=touseDiv.getElementsByTagName("ul")

// alert(productwords.length)

for(let i=0;i<productwords.length;i++){
  productwords[i].onclick=function(){
    // alert("1")
    yunxing(productwords,touse,"use","touse",i);
  }
}
//购物车增加数量
let numbers=document.getElementById("number");
let jia=document.getElementById("jia");
let jian=document.getElementById("jian");
let x=1;
numbers.innerHTML=x;
jian.onclick=function(){
  if(x<=9){
    x++;
    numbers.innerHTML=x;
  }else{
    alert("您好，一次购物车最多买10只手表哦~")
  }
}
jia.onclick=function(){
  if(x>=2){
    x--;
    numbers.innerHTML=x;
  }else{
    alert("您好，一次购物车最低也要买1只哦")
  }
}
//点击立即购买和加入购物车，会弹出提示框
//获取提示框
let tips=document.getElementsByClassName("tips")[0];
//获取×号，关闭提示框
let tipsnone=document.getElementsByClassName("tipsnone");
// alert(tipsnone.length)
for(let i=0;i<tipsnone.length;i++){
  tipsnone[i].onclick=function(){
   
    tips.style.display="none";
  }
}

//pc端：获取立即购买和加入购物车元素
let buy=document.getElementsByClassName("buy")[0];
let shopping=document.getElementsByClassName("shopping")[0];
buy.onclick=function(){
  tips.style.display="block";
}
shopping.onclick=function(){
  tips.style.display="block";
}
//移动端：获取立即购买和加入购物车元素
let buy2div=document.getElementsByClassName("buy1")[0];
let buy2=buy2div.getElementsByTagName("li")
for(let i=0;i<buy2.length;i++){
  buy2[i].onclick=function(){
    tips.style.display="block";
  }
}
//商品详情页，触摸图片，显示详细信息图片
//获取2个触摸的图片
let tipsphotoUl=document.getElementsByClassName("tipsphoto")[0];
let tipsphoto=tipsphotoUl.getElementsByTagName("li");
let tipsphoto1=document.getElementsByClassName("tipsphoto1");
for(let i=0;i<tipsphoto1.length;i++){
  tipsphoto1[i].onmouseover=function(){
    tipsphoto[i].style.visibility="visible";
  }
  tipsphoto1[i].onmouseout=function(){
    tipsphoto[i].style.visibility="hidden";
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
//函数功能：切换图片
//index参数控制的是计时函数调用的次数。
function yunxing(obj1,obj2,str1,str2,index){
    
for(let i=0;i<obj1.length;i++){
  obj1[i].classList.remove(str1);   
}
for(let i=0;i<obj2.length;i++){
  obj2[i].classList.remove(str2);
}
  obj1[index].classList.add(str1);
  obj2[index].classList.add(str2); 
}

// 函数功能：计时器
function start(){
timer = setInterval(function(){
  newindex++;
  if(newindex>=lunboword.length){
      newindex=0;
  }
  yunxing(lunboword,lunbo,"light","active",newindex)
},2000)
}

}