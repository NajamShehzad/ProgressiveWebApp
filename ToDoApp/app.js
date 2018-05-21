if ('serviceWorker' in navigator) {
    window.addEventListener('load', ev => {
        navigator.serviceWorker.register('sw.js')
            .then(res => console.log('registered!!!'))
            .catch(err => console.log(err));
    })
}
var name1;
var userToDo = JSON.parse(localStorage.getItem("userToDo"));
var userTitle = JSON.parse(localStorage.getItem("userTitle"));
var condition = JSON.parse(localStorage.getItem("condition"));


function clearf() {

    name1 = document.getElementById("list");
    name1.innerHTML = "";
}
var check1;


function defaultList() {
    if (userToDo != null) {//to retrive the list 
        for (var i = 0; i < userTitle.length; i++) {
            var title = userTitle[i];
            var dis = userToDo[i];
            var elements = document.createElement("li");
            elements.setAttribute("class", "list-group-item")
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.setAttribute("value", "Remove");
            button.setAttribute("onclick", "dlt(this.parentNode)")
            button.setAttribute("id", "btn1");
            elements.innerHTML = title.toLocaleUpperCase() + "<br>" + dis;
            elements.appendChild(button);
            var list = document.getElementById("list");
            list.appendChild(elements);

        }

    }
}




function dlt(val) {
    valu = "";
    check1 = val;
    var tempP = val.parentNode;
    tempP.removeChild(val);
    console.log("working");
    var list = document.getElementsByClassName("item");
    userTitle = [];
    userToDo = [];
    for (var i = 0; i < list.length; i++) {
        userTitle.push(list[i].childNodes[0].nodeValue);
        userToDo.push(list[i].childNodes[2].nodeValue);
    }
    localStorage.setItem("userToDo", JSON.stringify(userToDo));
    localStorage.setItem("userTitle", JSON.stringify(userTitle));


}

var number;
var title = [];
var dis = [];
var value;
function todo(form) {
    condition = JSON.parse(localStorage.getItem("condition"));

    // if (userToDo != null) {//to retrive the list 
    //     for (var i = 0; i < userTitle.length; i++) {
    //         var title = userTitle[i];
    //         var dis = userToDo[i];
    //         var elements = document.createElement("li");
    //         elements.setAttribute("class", "item")
    //         var button = document.createElement("input");
    //         button.setAttribute("type", "button");
    //         button.setAttribute("value", "Remove");
    //         button.setAttribute("onclick", "dlt(this.parentNode)")
    //         button.setAttribute("id", "btn1");
    //         elements.innerHTML = title.toLocaleUpperCase() + "<br>" + dis;
    //         elements.appendChild(button);
    //         var list = document.getElementById("list");
    //         list.appendChild(elements);

    //     }

    // }


    var notEmpty = true;//for field if its not empty

    if (form.elements[0].value == "" || form.elements[1].value == "") {
        alert("Please Fill Both Fields");
        notEmpty = false;
    }
    if (condition == null || condition == true && notEmpty) {
        userTitle = [];
        userToDo = [];
        userTitle.push(form.elements[0].value);
        userToDo.push(form.elements[1].value);
        value = document.createElement("li")//li element
        value.setAttribute("class", "list-group-item")
        console.log(form);
        var element = document.getElementById("list");
        var button = document.createElement("input");//button
        button.setAttribute("type", "button");
        button.setAttribute("value", "Remove");
        button.setAttribute("onclick", "dlt(this.parentNode)")
        button.setAttribute("id", "btn1");
        for (var i = 0; i < userToDo.length; i++) {
            value.innerHTML = userTitle[i].toLocaleUpperCase() + "<br> &nbsp &nbsp" + userToDo[i] + "&nbsp";
            value.appendChild(button);


        }
        name1 = document.getElementById("list");
        element.appendChild(value);
        localStorage.setItem("userToDo", JSON.stringify(userToDo));
        localStorage.setItem("userTitle", JSON.stringify(userTitle));
        condition = false;
        localStorage.setItem("condition", JSON.stringify(condition));

    }
    else if (notEmpty) {
        userTitle.push(form.elements[0].value);
        userToDo.push(form.elements[1].value);
        value = document.createElement("li")//li element
        value.setAttribute("class", "list-group-item")
        console.log(form);
        var element = document.getElementById("list");
        var button = document.createElement("input");//button
        button.setAttribute("type", "button");
        button.setAttribute("value", "Remove");
        button.setAttribute("onclick", "dlt(this.parentNode)")
        button.setAttribute("id", "btn1");
        for (var i = 0; i < userToDo.length; i++) {
            value.innerHTML = userTitle[i].toLocaleUpperCase() + "<br> &nbsp &nbsp" + userToDo[i] + "&nbsp";
            value.appendChild(button);


        }
        name1 = document.getElementById("list");
        element.appendChild(value);
        localStorage.setItem("userToDo", JSON.stringify(userToDo));
        localStorage.setItem("userTitle", JSON.stringify(userTitle));

    }
}
