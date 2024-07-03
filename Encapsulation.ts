// oops : there are 2 types of programing functional programming and oops programming 
// blue print banany ky liye class use krty 
// class use as a type 
// class consist of methods properties and construcrtor
// properties is a kind of variable 
// method is a kind of function
// constructor (){} : wo values assign krta hai properties ko ye sab sy starting mn ata hai its a kind of function but some behaviours are different security ka aik level up krdeta hai jo bh vallue aye gi wo is ko call nh krna parhta ye automatically call hojat ahai 
// class ky undr properties hen usy value assign kren gy to this ky key words sy 
// 
// enacpsulations mn access modifiers : public private protected  these are used on properties 
class myClass {
     protected name :string
     age : number
     constructor(stdName:string, stdAge : number){
        this.name = stdName // yahan hum class ki properties ko direct access nh krskty islye this ky sath hamesha class property aye gi
        this.age = stdAge
     }

     canProgram ():void{
        console.log(`This student can program`);
     }
}
let s1:myClass = new myClass("john", 99)  // new ky bad apni class ka name 

// s1.age = 19      } update krny ka tarika 
// s1.name = "john" }
// s1.canProgram()
console.log(s1)