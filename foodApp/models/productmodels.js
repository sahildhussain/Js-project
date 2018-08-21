var _ID=0;
class Product {
    constructor(pname,price,stock) {
	    this.id=_ID++;
  	    this.pname=pname;
    	this.price = price;
    	this.stock = stock;}

  /*get price()
        {return this.price;}
    get stock()
        {return this.stock;}
    get name()
        {return this.pname;}
    set price(price){
        this.price=price;
    }
    set stock(stock){
        this.stock+=stock;
    }
    set price(pname){
        this.pname
    }*/
}

var productModel = function(){
    this.products=[];

    //Add product to the products array
    this.add_product = function(pname,price,stock){
        this.products.push(new Product(pname,price,stock));
    }

    //delete product from the products array
    this.delete_product = function(id){
        for(var p in products){
            if(p.id=id){
                products.splice(i,1);
                break;}
        }
    }
    //Display data of all projects
    this.show_products = function(){
        this.products.forEach(function(product){
            return product;
        });
    }

    //Display single project
    this.show_single_product = function(id){
        this.products.find(function(product){
            return product.id===id; 
        })
    }
}
var pm = new productModel();
var p = new Product();

/*pm.add_product("item",399,50);
pm.products;
pm.add_product("item2",499,40);
pm.products;*/
