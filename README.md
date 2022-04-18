
# Front-end Creation of Login Page With Java
## Authors

- [@nilaycezik](https://github.com/Nilaycezik)


## Usage/Examples

```javascript
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

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nilaycezik/)



## 🛠 Skills
Javascript, HTML, CSS, HTTP Request...

## License

[MIT](https://choosealicense.com/licenses/mit/)
