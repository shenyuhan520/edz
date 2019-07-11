// console.log($(".box_Dl").children().children().children("a"))

$(function(){
    $(".box_Dl").children().children().children("a").click(function(){
        $(this).addClass("active").parent().siblings("span").children("a").removeClass("active")
        // console.log($(this))

    })
})

$(function(){
    $(".box_user").show().siblings(".box_user1").hide()
    $(".box_Dl").children().children().children("a").click(function(){
        $(".han").eq($(this).parent().index()).show().siblings(".han").hide()
    })
})


class DL{
    constructor(){
        this.user = document.querySelector(".box_user .txt1")
        this.pass = document.querySelector(".box_user .txt2")
        // this.txt1 = document.querySelector(".box_user .txt1")
        this.sub = document.querySelector(".box_user .sub")
        // console.log(this.txt1)
        this.init()

    }
    init(){
        this.pass.onblur = function(){
        var lengthReg = /^.{6,18}$/;
        if(!lengthReg.test(this.value)){
            this.nextElementSibling.innerHTML = "必须填写/长度不符";
            this.nextElementSibling.style.color = "red";
      
            return;
        }
     }
   
     this.user.onblur = function(){
        //  console.log(1)
         var reg = /^1[3-9]\d{9}$/;
        if(reg.test(this.value)){
            this.nextElementSibling.innerHTML = "成功";
            this.nextElementSibling.style.color = "blue";
          
        }else{
            this.nextElementSibling.innerHTML = "不是手机号";
            this.nextElementSibling.style.color = "red";
         
        }
    }
    this.huqu()
}
huqu(){
    
    this.user.onfocus = function(){
        // console.log(1)
     this.nextElementSibling.innerHTML = "" 
    }
    this.pass.onfocus = function(){
     this.nextElementSibling.innerHTML = "" 
    }
   
 }
}
new DL;

class ZC{
    constructor(){
        this.user = document.querySelector(".box_user1 .txt1")
        this.pass = document.querySelector(".box_user1 .txt2")
        this.pass2 = document.querySelector(".box_user1 .txt3")
        
        this.sub = document.querySelector(".box_user1 .sub")
        // console.log(this.txt1)
        this.init()
    }
    init(){ 
        this.pass.onblur = function(){
        var lengthReg = /^.{6,18}$/;
        if(!lengthReg.test(this.value)){
            this.nextElementSibling.innerHTML = "必须填写/长度不符";
            this.nextElementSibling.style.color = "red";
            return;
        }
     }
 
     
     this.user.onblur = function(){

         var reg = /^1[3-9]\d{9}$/;
         if(reg.test(this.value)){
             this.nextElementSibling.innerHTML = "手机号正确";
             this.nextElementSibling.style.color = "blue";
             
            }else{
                this.nextElementSibling.innerHTML = "手机号不正确";
                this.nextElementSibling.style.color = "red";
                
            }
        }
        var that = this;
        this.pass2.onblur = function(){

            // console.log(that.pass2.value,that.pass.value)
            if(that.pass2.value!=that.pass.value){
                
                this.nextElementSibling.innerHTML = "两次输入不一致";
                this.nextElementSibling.style.color = "red";
            }
        }
        this.huqu()
 }
   huqu(){
       this.user.onfocus = function(){
        this.nextElementSibling.innerHTML = "" 
       }
       this.pass.onfocus = function(){
        this.nextElementSibling.innerHTML = "" 
       }
       this.pass2.onfocus = function(){
        this.nextElementSibling.innerHTML = "" 
       }
   }
}
new ZC;


class Remember{
    constructor(){
        this.user = document.querySelector(".box_user1 .txt1")
        this.pass = document.querySelector(".box_user1 .txt3")
        this.user1 = document.querySelector(".box_user .txt1")
        this.pass1 = document.querySelector(".box_user .txt2")
        this.ckb1 = document.querySelector(".ckb")
        this.sub1 = document.querySelector(".sub")
        this.ckb = document.querySelector(".ckb1")
        this.sub = document.querySelector(".sub1")
        this.link = document.querySelector(".link")
        this.tz =  document.querySelector(".box_user a")
        // console.log(this.tz)
        
        this.init();
        this.getUser();

    }
    init(){
        var that = this;
        this.sub.onclick = function(){
        //    console.log(that.ckb.checked);//判断复选框是否被选中 选中为true 没选中为false
           if(that.ckb.checked){               
        //存cookie
        that.asetCookie()
           }else{
        //删除cookie
        // that.removeCookie()
           }
        }
    }
    asetCookie(){
        console.log(this.user.value,this.pass.value)
         
        var data ={
            u:this.user.value,
            p:this.pass.value  
        }
        
        //    var u=this.user.value;
        //    var p=this.pass.value;
        console.log(JSON.stringify(data))
        setCookie("info",JSON.stringify(data),{
            expires:3
        });
        console.log(getCookie(this.user.value))
    }
    getUser(){
        // console.log(this.user.value)
        // console.log(getCookie(this.user.value))
        var that =this;
        this.sub1.onclick = function(){
            console.log(getCookie("info"))
            if(getCookie("info")){
                that.info = JSON.parse(getCookie("info"));
                console.log(that.info)
                // console.log(that.pass1.value,that.info.p)
                if(that.pass1.value ==that.info.p){
                   that.tz.style.display = "block";
                }else{
                alert("不正确")
                }
            }else{     
                alert("shucuole")
            }
        }
    //    if(this.pass1.value == this.info.p){
    //           alert("deng")  
    //    } 
        
    }
    // removeCookie(){
    //     this.removeCookie("info");
    // }
}
new Remember();
