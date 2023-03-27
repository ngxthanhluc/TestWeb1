function signup(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var phone = document.getElementById("phonenumber").value
    var dayofbirth= document.getElementById("dayofbirth").value
    var address = document.getElementById("address").value
    var user ={
        username: username,
        email: email,
        password: password,
        phone:phone,
        dayofbirth:dayofbirth,
        address:address,
    }
    var json = JSON.stringify(user)
    if(!username || !email || !password || !phone || !dayofbirth || !address ){
        alert("Không được để trống bất kì ô nào")
    }
    else{
        alert("Đăng ký thành công")
        localStorage.setItem(username,json)
    }
}
function login(){
    var username = document.getElementById("un").value
    var password = document.getElementById("pw").value
    var user = JSON.parse(localStorage.getItem(username))
    if(!username || !password){
        alert("Không được để trống bất kì ô nào")
    }
    if(user ==null){
        alert("Sai tên đăng nhập mật khẩu")
    }else {
        if (user.password != password){
            alert("Mật khẩu không chính xác")
        }else {
            alert("Đăng nhập thành công")
            window.location.href="index.html"
            // document.getElementById("member-name").innerHTML=username
        }
    }  
}
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber")
const iconError = document.querySelector(".iconError");
const iconSuccess = document.querySelector(".iconSuccess");
const error = document.querySelector(".error-text");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
function check(key,fun){
  if(key.value.match(fun)){
    key.style.borderColor = "#27ae60";
    key.style.background = "#eafaf1";
    iconError.style.display = "none";
    iconSuccess.style.display = "block";
    error.style.display = "none";
  }else{
    key.style.borderColor = "#e74c3c";
    key.style.background = "#fceae9";
    iconError.style.display = "block";
    iconSuccess.style.display = "none";
    error.style.display = "block";
  }
  if(key.value == ""){
    key.style.borderColor = "lightgrey";
    key.style.background = "#fff";
    iconError.style.display = "none";
    iconSuccess.style.display = "none";
    error.style.display = "none";
  }
}
    // var mobile = $('#mobile').val();
    function checkPhone(key){
        if(key !==''){
            if (vnf_regex.test(key.value)  == false) 
            {
                alert("Số điện thoại của bạn không đúng định dạng")
                // key.style.borderColor = "#e74c3c";
                // key.style.background = "#fceae9";
                // iconError.style.display = "block";
                // iconSuccess.style.display = "none";
                // error.style.display = "block";
            }else{
                alert("Số điện thoại của bạn hợp lệ")
                // key.style.borderColor = "#27ae60";
                // key.style.background = "#eafaf1";
                // iconError.style.display = "none";
                // iconSuccess.style.display = "block";
                // error.style.display = "none";
            }
        }else{
            alert("Bạn chưa điền số điện thoại")
            // key.style.borderColor = "lightgrey";
            // key.style.background = "#fff";
            // iconError.style.display = "none";
            // iconSuccess.style.display = "none";
            // error.style.display = "none";
        }
    }


