function Register()
{
    var email = document.getElementById("email").value;
    var username = document.getElementById("uname").value;
    var passwd = document.getElementById("passwd").value;
    adduser(email,username,passwd);
    alert("Add function called"+email+" "+username+" "+passwd);
    //showuser();
}