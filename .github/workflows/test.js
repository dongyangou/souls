function s(){
    document.getElementById("s").innerHTML="外部文件改变字体";
}


function img(){
    document.getElementById("img").src="./image/b.jpg"
}

function img1(){
    document.getElementById("img").src="./image/a.jpg"
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

function se(){
    var person = {
        name : "zhangqi",
        age : 12,
    }
    document.getElementById("se").innerHTML = "姓名 : " +person.name+"<br>"+"年龄: "+person.age;
}

function sf(){
    var person = {
        name : "zhangqi",
        age : 18,
        fullname : function(){
                   return this.name +this.age
                   }
    }
    document.getElementById("sf").style.display="block";
    document.getElementById("sf").innerHTML = person.fullname();  
    
    
}

function sg(){
    document.getElementById("sf").style.display="none"
}

function aa(aa,ab){
    if((aa == null || aa == "") || (ab == null || ab == "")){
        var ac = aa*ab;
        document.getElementById("ac").innerHTML = ac;
    }else{
        window.alert("输入错误,不是数字或者是空的")
    }
    
}