//侧边菜单JS实现
window.onload = function(){
    //声明
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    //点击菜单按钮，跳转到对应位置
    btn1.onclick = function(){
        window.scrollTo({
            //跳转的目标高度,顶部为0
            top: 1050,
            //跳转时有移动动画效果，不加即瞬间跳转
            behavior:"smooth"
        });
    }
    btn2.onclick = function(){
        window.scrollTo({
            top: 1650,
            behavior:"smooth"
        });
    }
    btn3.onclick = function(){
        window.scrollTo({
            top: 2250,
            behavior:"smooth"
        });
    }
    btn4.onclick = function(){
        window.scrollTo({
            top: 2650,
            behavior:"smooth"
        });
    }
    btn5.onclick = function(){
        window.scrollTo({
            top: 3450,
            behavior:"smooth"
        });
    }
}
//监听滚动条并获取实时位置
window.onscroll = function(){
    let scrollPos = document.documentElement.scrollTop;
    console.log("当前滚动条位置：", scrollPos);
}