var str;
function getString(string){

	this.string=string;
	this.stringRev=stringRev;
	

}

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a "+ this.breed);
    };

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();



function stringRev(){

	var temp="";
    for(var i=str.length-1; i>=0; i--){
    	temp = temp + str[i];
    }

    return temp;
}


var ngetstring = new getString();

str="Anusuya";


var loc = ngetstring.stringRev();


var info ={
	website:"www.anusuyachoudhury.com",
	email:"anusuyarc89@gmail.com",
	phonenumber:"(510) 364-0949",
	locationn:"Fremont, CA",

};


function Strn (desc) {
    this.desc = desc;
    this.fullstrn = "Anusuya";
}
 
Strn.prototype.getInfo = function() {
    var temp="";
    for(var i=str.length-1; i>=0; i--){
    	temp = temp + str[i];
    }

    return temp;
};

String.prototype.reverse = function() {
    var s = "";
    // var i = this.length;
    for(var i=this.length-1; i>=0; i--){
    	s = s + this[i];
    }
    return s;
};

console.log("Anusuya".reverse());

function foo(x) {
  var tmp = 3;

  function bar(y) {
  	console.log(++tmp);
    console.log((x + y + (++tmp))); // will alert 16
  }

  console.log(bar(10));
}

console.log(foo(2));

document.getElementById("website").innerHTML=info.website;
document.getElementById("email").innerHTML=info.email;
document.getElementById("phone-number").innerHTML=info.phonenumber;
document.getElementById("location").innerHTML=loc;




