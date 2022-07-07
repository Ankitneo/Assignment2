window.onload = function(){
    var years = document.getElementById("birth-year");
    var currentYear = (new Date()).getFullYear();
    for (var year = 1900; year <= currentYear; year++) {
        var option = document.createElement("option");
        option.innerHTML = year;
        option.value = year;
        years.appendChild(option);
    }
};
function validation() {
    val = true;
    var firstName = document.getElementById("firstname").value;
    if(firstName == ""){
        document.getElementById("firstname-error").innerHTML = "Please enter your first name";
        val = false;

    }else {
        var letters = /^[A-Za-z]+$/;
     if(firstName.match(letters))
     {
      val=true
     }
   else
     {
        document.getElementById("firstname-error").innerHTML = "Please enter only alphabets";
     val=false
     }
    }
var lastname = document.getElementById("lastname").value;
    if (lastname == ""){
        document.getElementById("lastname-error").innerHTML = "Please enter your last name";
        val= false;

    }
    else {
        var letters = /^[A-Za-z]+$/;
     if(lastname.match(letters))
     {
      val=true
     }
   else
     {
        document.getElementById("lastname-error").innerHTML = "Please enter only alphabets";
     val=false
     }
    }

    var phone = document.getElementById("phone").value;
   
    if (phone == ""){
        document.getElementById("phone-error").innerHTML = "Number cannot be blank ";
        val = false;

    }else if(phone.length != 10){
        document.getElementById("phone-error").innerHTML = "Please enter valid phone number";
        val = false;

    }else {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            if(phone.match(phoneNum)) {
                val=true
            }
            else {
        document.getElementById("phone-error").innerHTML = "Please enter valid phone number";

                val= false;
            }


    }

    
    var phoneNumberOffice = document.getElementById("phone-office").value;
    if (phoneNumberOffice=="") {
        document.getElementById("officeno-error").innerHTML = "Number cannot be blank ";
        val = false;

    }else if(phoneNumberOffice.length != 10){
        document.getElementById("officeno-error").innerHTML = "Please enter valid phone number";
        val = false;
    }
    else {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            if(phoneNumberOffice.match(phoneNum)) {
                val=true
            }
            else {
        document.getElementById("officeno-error").innerHTML = "Please enter valid phone number";
                val= false;
            }
        }
        
    var email = document.getElementById("email").value;
    if (email == ""){
        document.getElementById("email-error").innerHTML= "Email cannot be blank";
        val = false;

    }else{
        document.getElementById("email-error").innerHTML= "";
        val=true;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!mailformat.test(email)){
        document.getElementById("email-error").innerHTML= "Email format is not valid";
        val = false;

    }else{
        document.getElementById("email-error").innerHTML= "";
        val=true;
    }
    var password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("password-error").innerHTML= "password cannot be blank";
        val = false;
    }else{
    var pass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})"

        if (!(password.match(pass))){
            document.getElementById("password-error").innerHTML= "Password should contain alphabets,digits and special characters";
            val = false;
    
        }else{
            document.getElementById("password-error").innerHTML= "";
            val=true;
        }
       
    }

    var confirmPassword = document.getElementById("conpassword").value;
    if (confirmPassword != password ) {
        document.getElementById("con-password-error").innerHTML= "password do not match";
        val = false;

    }else{
        document.getElementById("con-password-error").innerHTML= "";
        val=true;
    }
    var  day= document.getElementById("birth-day").value;
    var  month= document.getElementById("birth-month").value;
    var   year= document.getElementById("birth-year").value;
    if (day == "day"){
        document.getElementById("dt-error").innerHTML= "please select proper date format";
        val = false;

    }else if (month == "month"){
        document.getElementById("dt-error").innerHTML= "please select proper date format";
        val = false;

    }else if(year == "year" ){
        document.getElementById("dt-error").innerHTML= "please select proper date format";
        val = false;        

    }else{
        document.getElementById("dt-error").innerHTML= "";
    }
    gender = document.getElementsByName("gender");
    if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById("gender-error").innerHTML = "please select atleast 1 value";
        val = false;

    }else{
        document.getElementById("gender-error").innerHTML = "";

    }
    var checkboxActivity = document.querySelectorAll('input[name="chkbx-activity"]:checked').length;
    if (checkboxActivity < 1){
        document.getElementById("interror").innerHTML = "<br>+please select atleast 1 value";
        val = false;

    }else{
        document.getElementById("interror").innerHTML = "";
    }
    var text = document.getElementById("txt-about").value;
    if (text == "" ){
        document.getElementById("aberror").innerHTML = "please enter some text ";
        val = false;

    }else{
        document.getElementById("aberror").innerHTML = "";
    }
    return val;  
};


function calculateAge(){

    let  day= document.getElementById("birth-day").value;
    let  month= document.getElementById("birth-month").value;
    let  year= document.getElementById("birth-year").value;
    if(month == "4"){
        document.getElementById("day29").style.display="block";
        document.getElementById("day30").style.display="block";
        
        document.getElementById("day31").style.display = "none";
    };
    if(month == "6" ){
        document.getElementById("day29").style.display="block";
        document.getElementById("day30").style.display="block";
        
        document.getElementById("day31").style.display = "none";
    };
    if(month == "9" ){
        document.getElementById("day29").style.display="block";
        document.getElementById("day30").style.display="block";

        document.getElementById("day31").style.display = "none";
    };
    if(month == "11"){
        document.getElementById("day29").style.display="block";
        document.getElementById("day30").style.display="block";
        document.getElementById("day31").style.display = "none";
    };
    
  if(month == "2" && (year % 4 == 0)){
    document.getElementById("day29").style.display="block";
            document.getElementById("day30").style.display = "none";
            document.getElementById("day31").style.display = "none";
    }else if(month == "2" && (!(year % 4)== 0)){
            document.getElementById("day29").style.display = "none";
            document.getElementById("day30").style.display = "none";
            document.getElementById("day31").style.display = "none";
    }
    else if(month=="1" || month=="3"|| month=="5"|| month=="7"|| month=="8" ){
        document.getElementById("day29").style.display="block";
        document.getElementById("day30").style.display="block";
        document.getElementById("day31").style.display="block";
    };
    if( day != "day" && month != "month" && year != "year" ){
        var stringDate = month + "/" + day + "/" + year 
        var timestamp = Date.parse(stringDate);
        var dateObject = new Date(timestamp);
        var currentYear = new Date().getFullYear();
        var birthYear = dateObject.getFullYear();
        var age = currentYear - birthYear;
        var today = new Date();
    var birthDate = new Date(stringDate);
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age=age-1;
        m=12+m
    }
    var age=String(age)+String("."+m);
        document.getElementById("txt-age").value = age;
    }
};