function get(url, callFunction) {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            return callFunction(xhttp.responseText);
        }
    };
    xhttp.send();
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
            return callFunction(xhttp.responseText);
        }
    };
   xhttp.send(json);
}

function del(url,data,callFunction) {

    var xhttp=new XMLHttpRequest();
    var json = JSON.stringify(data);

    xhttp.open("DELETE",url,true);

    xhttp.onload=function () {
        if (this.readyState == 4 && this.status == 200) {
            return callFunction(xhttp.responseText);
        }
    };
    xhttp.send(json);
}