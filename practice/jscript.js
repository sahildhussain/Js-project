var users=[];

class newuser{
    constructor(email,uname,passwd){
    this.email = email;
    this.uname = uname;
    this.passwd = passwd;}
}

users.push(new newuser("s@s.com","sahil","passwd"));

/*users.prototype = {
    add: function(email,username,passwd){
        var user = new newuser(email,username,passwd);
        users.push(user);
        console.log("inside prototype function");
    }
}*/

/* function to save in json in txt file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}*/
//download(jsonData, 'json.txt', 'text/plain');

function adduser(email,uname,passwd){
    console.log("reached to add function");
    var user = new newuser(email,uname,passwd);
    users.push(user);
    alert("User Added"+user);
}

function showuser(){
    var us = ['h','o','l','l','o','w','e','e','n'];
    var u=users.forEach(function(newuser){
        console.log(newuser);
    })
}