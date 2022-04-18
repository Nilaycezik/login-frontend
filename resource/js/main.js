function login(url, data) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", url, true);

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (xhttp.responseText == "true") {
                window.location.href = './test.html';

            } else {
                alert("GIRIS BASARISIZ LUTFEN TEKRAR DENEYINIZ...");
            }
        }
    };
    xhttp.send(JSON.stringify(data));
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

function checkLogin() {

    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var data = {
        "email": email,
        "pass": pass
    };
    post('http://localhost:8080/user', data, null);
    put('http://localhost:8080/user', data, null);

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

    login('http://www.localhost:8080/login', data);
    localStorage.setItem("email", "ahmetakan@gmail.com");


}
function checkRegister(){
 var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;
    var name= document.getElementById('fname').value;
    var surname=document.getElementById('sname').value;
    var data = {
        "email": email,
        "pass": pass,
        "pass2": pass2,
        "name": fname,
        "surname": sname
    };

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == "" || pass == ""|| name==""||surname==""|| pass2 == "") {
        alert("ZORUNLU ALANLARI GIRINIZ.");
        return;
    }
    if (filter.test(email) == false) {
        alert('GECERLI BIR EMAIL GIRINIZ.');
        email.focus;
        return false;
    }
    if(checkPass()==false)
    {//burası yazılacak
    }
  else if(email!=""&& filter.test(email)==true)
    {alert("UYE KAYDI BASARILI!!!...");}


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
function checkPass()
{
    var pass1 = document.getElementById('pass');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('error-nwl');

    if(pass1.value == pass2.value){
        message.innerHTML = "Sifreler Eslesti."
    }
    else{
        message.innerHTML = "Sifreler Eslesmedi."
    }

    if(pass1.length > 5){
        message.innerHTML = "Karakter Sayisi Gecerli!!"
    }
    else{
        message.innerHTML = "En Az 6 Karakter Giriniz!!!"
    }
}