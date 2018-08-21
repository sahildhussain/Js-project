var User_ID=0;

//user class to save single user object.
class User{
    constructor(email,uname,passwd) {
    this.id = User_ID++;
    this.email = email;
    this.uname = uname;
    this.passwd = passwd;}
}

var UserModel = function() {
    this.users=[];
    
    //Verification during login
    this.verifyUser = function(email,passwd){
        this.users.find(forEach(function(user){
            return user.email===email&&user.passwd===passwd;})
        )
    }

    //Adding user to the users-array
    this.addUser=function(email,uname,passwd){
        this.users.push(email,uname,passwd);
    }

    //deleting user from the user-array
    this.deleteUser=function(user){
        for(var p in users){
            if(p.id=id){
                users.splice(i,1);
                break;}
        }
    }
}