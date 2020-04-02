function s(){
    document.getElementById("s").innerHTML="外部文件改变字体";
}


function img(){
    document.getElementById("img").src="F:\VScode\github\souls\.github\workflows\image\a.jpg"
}

function img1(){
    document.getElementById("img1").src="F:\VScode\github\souls\.github\workflows\image\b.jpg"
}

function chiled(){
    document.getElementById('no').innerHTML='愿意用黑色铅笔在地上画圈圈';
}

function mylove(){
    window.alert("弹窗提示");
}


function sa(){
    var a,b,c;
    a= 10;
    b=20;
    c=a+b;
    document.getElementById("sa").innerHTML="c等于"+c
}

function sb(){
    var lastname;
    lastname = "lastname";
    document.getElementById("sb").innerHTML = lastname;
}

function sb1(){
    var lastName;
    lastName = "lastName";
    document.getElementById("sb").innerHTML = lastName;
}
function sc(){
    var shuzi;
    var zimu;
    var zimu2;
    shuzi = 3.1415926;
    zimu = "hei dd";
    zimu2 = "and you?";
    var zimu2 = 222;
    document.getElementById("sc").innerHTML = shuzi+"<br>"+zimu+"<br>"+zimu2;
    document.getElementById("sc").style.fontSize = "20px";
}

function sd(){
    var a = 7,b = 8,c =9;
    var d =  a%= b;
    var e = a*= c;
    var f = a /= b;
    document.getElementById("sd").innerHTML= "a%=b = " + d+"<br>"+"a*= c =" +e+"<br>"+" a /= b =" +f
}