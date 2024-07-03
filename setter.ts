// getter & setter function 
 // mainly based on accessive modifier  (public private protector)


 class personalData {
    public name : string
    private age : number
    public experience : number
     constructor(tName:string , tAge : number , tExperience : number){
        this.age = tAge
        this.experience = tExperience
        this.name = tName
     }
     set updateAge (updAge:number) { // ye kabhi kch return nh krta iski type bh nh lety 
        this.age = updAge
     } 
 }           
 let tData1 :personalData = new personalData("ubaid" , 11 , 3)
 console.log(tData1);
 
 tData1.updateAge = 77
 
 console.log(tData1);
 
 
 // phly hum age ko update nh krpa rhy thy to setter func banaya 
 // jb value ko update krna ho kia hum aik aik property ko alag alalg  beth kr update krty rhen gy to oops ka kia faida 
 // update krny ky liye setter function bananty hen ye paarmeter bagher lia bh kkam krdey ga mgr best practice nh hai 
 // set => ka key word for setter function
 // koi name  nh hoga to normal function 