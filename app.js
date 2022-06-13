function login() {
    var login_name = document.getElementById("login_name").value
    var login_password = document.getElementById("login_password").value
    var remember = document.getElementById("remember")

    if (login_name == "") {
        document.getElementById("login_name").style.border = "red 1px solid"
        alert("გთხოვთ შეავსოთ ყველა ველი")
    }
    else if(login_password == "") {
        document.getElementById("login_password").style.border = "red 1px solid"
        alert("გთხოვთ შეავსოთ ყველა ველი")
    }
    else {
        window.location.href = "main.html"
    }

    if (remember.checked == true){
        document.cookie = "User="+login_name+""
    }
    console.log(remember.checked == true)
}

function registration(){
    var gmail = document.getElementById("gmail").value
    var password = document.getElementById("password").value
    var conf_password = document.getElementById("conf_password").value


    if (/[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*:"?></]/.test(password)){
        document.getElementById("password").style.border = "darkgreen 1px solid"
        alert("პაროლი ძალიან ძლიერია")
    }
    else if (/[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        document.getElementById("password").style.border = "green 1px solid"
        alert("პაროლი ძლიერია")
    }
    else if (/[0-9]/.test(password) && /[a-z]/.test(password)) {
        document.getElementById("password").style.border = "yellow 1px solid"
        alert("პაროლი საშუალო სიძლიერისაა")
    }
    else if (/[a-z]/.test(password)) {
        document.getElementById("password").style.border = "red 1px solid"
        alert("პაროლი სუსტია")
    }

    if (password != conf_password) {
        document.getElementById("conf_password").style.border = "red 1px solid"
        document.getElementById("conf_password").style.color = "red"
        document.getElementById("conf_password").value = "პაროლები არ ემთხვევა ერთმანეთს!"
    }

    if (gmail.search("@") == -1) {
        document.getElementById("gmail").style.border = "red 1px solid"
        document.getElementById("gmail").style.color = "red"
        document.getElementById("gmail").value = "მიუთითეთ სწორი მეილი!"    
    }
    else if(gmail.substr(gmail.search("@")).indexOf(".") == -1){
        document.getElementById("gmail").style.border = "red 1px solid"
        document.getElementById("gmail").style.color = "red"
        document.getElementById("gmail").value = "მიუთითეთ სწორი მეილი!"  
    }
    else if ((gmail.slice(-(gmail.substr(gmail.search("@")).indexOf(".")), -1)).length < 2) {
        document.getElementById("gmail").style.border = "red 1px solid"
        document.getElementById("gmail").style.color = "red"
        document.getElementById("gmail").value = "მიუთითეთ სწორი მეილი!"
    }
    else {
        window.location.href = "main.html"
    }
  
}

function nawDate (){
    var time = document.getElementById("time")
    var today = new Date();
    let month = today.getMonth()
    let day = today.getDay()
    let year = today.getFullYear();

    time.value = ""+year+"-0"+month+"-0"+day+""

}
setTimeout(nawDate, 10)

let index = 0;

function slider() {
    var i;
    var slides = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index = 1}    

    console.log(slides[index-1])
    slides[index-1].style.display = "block";  
    setTimeout(slider, 2000);
}

slider();


function myDisplayer(some) {
    var space = document.getElementById("zodiac_here")
   
    space.innerHTML = some;
}


function zodiac_calculator() {
    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    let myPromise = new Promise(function(myResolve, myReject) {

        let req = new XMLHttpRequest();
        if (month == 3 && day >= 20 || month == 4 && day <= 20){
            req.open('GET', "http/aries.html");
        }
        else if (month == 4 && day >= 21 || month == 5 && day <= 21){
            req.open('GET', "http/taurus.html");
        }
        else if (month == 5 && day >= 22 || month == 6 && day <= 21){
            req.open('GET', "http/gemini.html");
        }
        else if (month == 6 && day >= 22 || month == 7 && day <= 22){
            req.open('GET', "http/cancer.html");
        }
        else if (month == 7 && day >= 23 || month == 8 && day <= 23){
            req.open('GET', "http/leo.html");
        }
        else if (month == 8 && day >= 24 || month == 9 && day <= 23){
            req.open('GET', "http/virgo.html");
        }
        else if (month == 9 && day >= 24 || month == 10 && day <= 23){
            req.open('GET', "http/libra.html");
        }
        else if (month == 10 && day >= 24 || month == 11 && day <= 22){
            req.open('GET', "http/scorpio.html");
        }
        else if (month == 11 && day >= 23 || month == 12 && day <= 21){
            req.open('GET', "http/sagittarius.html");
        }
        else if (month == 12 && day >= 22 || month == 1 && day <= 20){
            req.open('GET', "http/capricorn.html");
        }
        else if (month == 1 && day >= 21 || month == 2 && day <= 18){
             req.open('GET', "http/aquarius.html");
        }
        else if (month == 2 && day >= 19 || month == 3 && day <= 20){
            req.open('GET', "http/pisces.html");
        }
        else {
            myReject("მიუთითეთ სწორი თარიღი");
        }

        req.onload = function() {
            if (req.status == 200) {
            myResolve(req.response);
            } else {
                myReject("მიუთითეთ სწორი თარიღი");
            }
        };
        req.send();
    });

    myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
    );
}