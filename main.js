$(document).ready(function(){
    var num_li=$("li").length; //偵測我們有幾個標點（圖片）
    
    //滾動滑鼠滾輪時，移動到上一頁、下一頁的效果
    n=1;
    moving=0;
    $(window).mousewheel(function(e){
        $("html,body").stop()
        if(moving==0){
            moving=1;
            if(e.deltaY==-1){
                if(n<num_li){
                    n++;
                }
            }else{
                if(n>1){
                    n--;
                }
            }
        }
        $("html,body").animate({"scrollTop":$(".p0"+n).offset().top},function(){moving=0})
        console.log(n);
    })
    
    //根據捲軸的位置改變右方導覽列游標的顏色
    $(window).scroll(function(){
         if($(window).scrollTop()>=$(".p01").offset().top && $(window).scrollTop()<$(".p02").offset().top){
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(0)").css("background-color","#FFDBE1")
        }else if($(window).scrollTop()>=$(".p02").offset().top && $(window).scrollTop()<$(".p03").offset().top){
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(1)").css("background-color","#FFDBE1")
        }else if($(window).scrollTop()>=$(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(2)").css("background-color","#FFDBE1")
        }else if($(window).scrollTop()>=$(".p04").offset().top && $(window).scrollTop()<$(".p05").offset().top){
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(3)").css("background-color","#FFDBE1")
        }else if($(window).scrollTop()>=$(".p05").offset().top){
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(4)").css("background-color","#FFDBE1")
        }
    })
             
    //點選右方導覽列時會到指定圖片
    for(i=0;i<=num_li;i++){
        $(".nav li:eq("+i+")").click({id:i},function(e){
            $("html,body").stop()
            $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
            page=e.data.id+1
            $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            $(".nav li:eq("+e.data.id+")").css("background-color","#46dd46")//被點擊到的游標變色，前面的selector用this也可以
            n=e.data.id+1
        })
    }
    //一進入網頁時，將導覽列垂直置中計算導覽列置中的位置
   center()
    
   //縮放網頁時，將導覽列垂直置中
    $(window).resize(function(){
        center()
    })
    
    //計算導覽列垂直置中的高度
    function center(){
        pos=$(window).height()/2-$(".nav").height()/2
        $(".nav").css("top",pos)
    }
    
})
// 第二頁～許願
var texts = ["你未來每一天都能開開心心。", "你身體所有毛病都越來越少。", "我最愛的寶貝姊姊能夠自在的生活、健康、幸福快樂。"];    // 打字 - 陣列
var speed = 300;                                        // 打字速度 - 毫秒
var index = 0;                                          // 索引值 - 從 0 開始
var classname = ".type";                                // 類別名稱
var count = 0;                                          // 文字數量
var wait = 6 ;                                           // 等待

// 函式 打字
function type() {

    var t = document.querySelector(classname);          // 搜尋元素

    var letter = texts[index].slice(0, count++);        // 切割文字(開始位置，切割數量)

    t.innerHTML = letter;                               // 插入 HTML = 文字

    if (count == texts[index].length + wait) {          // 文字數量 等於 當前文字長度+等待
        index++;                                        // 索引值 +1
        count = 0;                                      // 文字數量 歸零
    }

    if (index == texts.length) {                        // 如果索引值等於長度
        index = 0;                                      // 索引值 歸零
    }

    setTimeout(type, speed);                            // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type());   // DOMContentLoded 網頁載入完成後執行

// 第三頁～卡片1
var textsCard1 = "祝～我最愛的寶貝姊姊，生日快樂～～～～～～～在幾番思量過後，我決定稍微用我的新技能來給你一個小小的驚喜，雖然生日禮物目前好像用不太到，但我可是誠意滿滿喔！！上一頁有看到我對你滿滿的祝福吧～沒看到往上翻一下，這也是我的生日願望喔！！就靠你幫我實現了，不然我可要親自出馬囉！！";              // 打字
var speedCard1 = 250;                                         // 打字速度 - 毫秒
var classnameCard1 = ".type2";                                // 類別名稱
var countCard1 = 0;                                           // 文字數量
var waitCard1 = 6 ;                                           // 等待

// 函式 打字
function type2() {

    var tCard1 = document.querySelector(classnameCard1);          // 搜尋元素

    var letterCard1 = textsCard1.slice(0, countCard1++);        // 切割文字(開始位置，切割數量)

    tCard1.innerHTML = letterCard1;                               // 插入 HTML = 文字

    if (countCard1 == textsCard1.length + waitCard1) {          // 文字數量 等於 當前文字長度+等待
        countCard1 = 0;                                      // 文字數量 歸零
    }
    setTimeout(type2, speedCard1);                            // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type2());   // DOMContentLoded 網頁載入完成後執行


// 第四頁～卡片2
var textsCard2 = "雖然你説不想要認弟弟，我不管，你就是我的家人 ，前面的祝福與願望都是真心不騙，不是業務嘴，也許我們會意見不合，但我會盡快跟你道歉和好，還有最重要的事，不管你開心不開心、生氣或難過 ，我都會陪著你 、跟你一起分擔，記得不管發生什麼事有我在！！！Always open for you！Lian inio ";              // 打字
var speedCard2 = 200;                                         // 打字速度 - 毫秒
var classnameCard2 = ".type3";                                // 類別名稱
var countCard2 = 0;                                           // 文字數量
var waitCard2 = 6 ;                                           // 等待

// 函式 打字
function type3() {

    var tCard2 = document.querySelector(classnameCard2);          // 搜尋元素

    var letterCard2 = textsCard2.slice(0, countCard2++);        // 切割文字(開始位置，切割數量)

    tCard2.innerHTML = letterCard2;                               // 插入 HTML = 文字

    if (countCard2 == textsCard2.length + waitCard2) {          // 文字數量 等於 當前文字長度+等待
        countCard2 = 0;                                      // 文字數量 歸零
    }
    setTimeout(type3, speedCard2);                            // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type3());   // DOMContentLoded 網頁載入完成後執行

