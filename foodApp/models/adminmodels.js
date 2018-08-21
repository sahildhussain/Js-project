class Admin{
    constructor(id,username,passwd){
        this.Id=id;
        this.Username=username;
        this.Passwd=passwd;}
}

var AdminModel = function(){
    this.Admins = [{Id:1,Name:"sahil",Passwd:"hussain"}];

    //verify admin credentials during login
    this.verifyAdmin = function(name,passwd){
        this.admins.find(function(admin){
            return admin.Username===name&&admin.Passwd===passwd;
        });
    }
}