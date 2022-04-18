
function put(url,data,callFunction) {

    var xhttp=new XMLHttpRequest();
    var json = JSON.stringify(data);

    xhttp.open("PUT",url,true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhttp.onload=function () {
        if (this.readyState == 4 && this.status == 200) {
            console.table(result);
            alert("Güncelleme İşlemi Başarıyla Gerçekleştirilmiştir.");
            return callFunction(xhttp.responseText);
        }
        else {
            console.error(result);
            alert("Güncelleme İşleminde Hata Oluştu!");
        }
        };
    xhttp.send(json);
}

function post(url, data, callFunction) {

    var xhttp = new XMLHttpRequest();
    var json = JSON.stringify(data);

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            return callFunction(xhttp.responseText);
        }

    };
    xhttp.send(json);
}



function sil(url, data, callFunction) {

    var xhttp = new XMLHttpRequest();
    var json = JSON.stringify(data);

    xhttp.open("DELETE", url, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            return callFunction(xhttp.responseText);
        }

    };
    xhttp.send(json);
}
function get(url, data, callFunction) {

    var xhttp = new XMLHttpRequest();
    var json = JSON.stringify(data);
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            return callFunction(xhttp.responseText);
        }

    };
    xhttp.send(json);
}



function login(url, data) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true);// POST YAPILABİLİR.

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (xhttp.responseText !="[]") {
                     for(var a=0;a<100;a++) {
                        if(JSON.parse(xhttp.responseText)[a].email==data.email && JSON.parse(xhttp.responseText)[a].pass==data.pass) {
                            window.location.href = 'test.html';
                            continue;
                          }
                             }
                            }
             else {
                      alert("GIRIS BASARISIZ");
                                                    }
        }
    };
         xhttp.send(JSON.stringify(data));
}
function listele() {
    var data = {
            "email": "ahmet@hotmail.com",
            "pass": "3434"
        };
 var xhttp = new XMLHttpRequest();

    xhttp.open("GET",'http://localhost:8080/user', true);// POST YAPILABİLİR.

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhttp.onload = function () {

         for(var a=0;a<100;a++) {
        document.write(JSON.parse(xhttp.responseText)[a].email+"\n\n\n");  }
    };  xhttp.send(JSON.stringify(data));
}
function checkLogin() {
 var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var data = {
        "email": email,
        "pass": pass
    };
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == "" || pass == "") {
        alert("ZORUNLU ALANLARI GIRINIZ.");
        return;
    }
    if (filter.test(email) == false) {
        alert('GECERLI BIR EMAIL GIRINIZ.');
        email.focus;
        return false;
    }
    else {
           login('http://localhost:8080/user', data,null);

    }

    ;
    /*login('http://www.localhost:8080/login', data);
    localStorage.setItem("email", "ahmetakan@gmail.com");*/
}

function checkRegister(){
var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;
    var name= document.getElementById('fname').value;
    var surname=document.getElementById('sname').value;
    var zorunlualan=1; var emailformat
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var data = {
            "email": email,
            "pass": pass,
            "name": fname,
            "surname": sname
        };
   if (email == "" || pass == ""|| pass2 == "" ||name==""||surname=="") {
        alert("ZORUNLU ALANLARI GIRINIZ.");
        zorunlualan=0;
    }
     else if (filter.test(email) == false) {
        alert('GECERLI BIR EMAIL GIRINIZ.');
        email.focus;

    }
    else if(pass.length<6) {
         alert('SIFRE EN AZ 6 KARAKTERDEN OLUSMALIDIR.');
         zorunlualan=0;
    }
    else if(pass!=pass2) {
             alert('SIFRELER UYUSMUYOR !');
             zorunlualan=0;
      }

   else if(zorunlualan==1 && filter.test(email)==true)
    {alert("Uye kaydi basarili...");
    post('http://localhost:8080/user', data, null);
    window.location.href = 'index.html';}

}

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}
function checkRememberMe(){

if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

function combining(){
checkLogin();
checkRememberMe();

}
function mailConnect(){
var email = document.getElementById('email').value;


    var data = {
        "email": email,

    };

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == "") {
        alert("ZORUNLU ALANLARI GIRINIZ.");
        return;
    }
    if (filter.test(email) == false) {
        alert('GECERLI BIR EMAIL GIRINIZ.');
        email.focus;
        return false;
    }
    else if(email!="" && filter.test(email)==true)
    {alert("Basarili bir sekilde email gonderildi...");}

}
function md5 ( str ) {

    var RotateLeft = function(lValue, iShiftBits) {
            return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
        };

    var AddUnsigned = function(lX,lY) {
            var lX4,lY4,lX8,lY8,lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        };

    var F = function(x,y,z) { return (x & y) | ((~x) & z); };
    var G = function(x,y,z) { return (x & z) | (y & (~z)); };
    var H = function(x,y,z) { return (x ^ y ^ z); };
    var I = function(x,y,z) { return (y ^ (x | (~z))); };

    var FF = function(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        };

    var GG = function(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        };

    var HH = function(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        };

    var II = function(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        };

    var ConvertToWordArray = function(str) {
            var lWordCount;
            var lMessageLength = str.length;
            var lNumberOfWords_temp1=lMessageLength + 8;
            var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
            var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
            var lWordArray=Array(lNumberOfWords-1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while ( lByteCount < lMessageLength ) {
                lWordCount = (lByteCount-(lByteCount % 4))/4;
                lBytePosition = (lByteCount % 4)*8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
            lWordArray[lNumberOfWords-2] = lMessageLength<<3;
            lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
            return lWordArray;
        };

    var WordToHex = function(lValue) {
            var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
            for (lCount = 0;lCount<=3;lCount++) {
                lByte = (lValue>>>(lCount*8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
            }
            return WordToHexValue;
        };

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    str = this.utf8_encode(str);
    x = ConvertToWordArray(str);
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

    return temp.toLowerCase();
}