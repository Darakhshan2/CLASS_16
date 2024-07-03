// purany baney hoye blue print ko use krky new blue print bananty hen wo kam krt hai 
// aik blue print banaya hoya kam nh kry ga sy dekh kr new dobara blueprint use krty hen 
// ye direct kabhi bh use nh hoskti 
// dynamic : aik bar bana dia ab bar bar use krskty 
// extend jo hai wo 2 classes  ky darmiyan use hoga only use in classes 
// abstract sy hum object nh banaskty class banaty hen 

abstract class takePhoto {
    filter : string
    brust : number 
    constructor(filName:string , brstNo : number){
       this.brust = brstNo
       this.filter = filName
    }
}

//INHERITANCE
// extends sy sirf property uth kr aye gi uska answer ky liye alag sy constructor is mn dobara lena hoag 
// super keyword use when jb aik class ko extend kkia hua ho or uski property ko new class mn updae kr na ho 
class Instagram extends takePhoto { // extend keyword hai ye takePhoto ki tamam property insta mn ly aye ga 
    reelTime : number    // reel ki value user sy leny ky liye constructor 
    constructor(filName:string , brstNo :number , rlTime:number){ // yahn error arhha tha kyuper bh constructor hai or yahan bh kahan ki vallue use kren to wo resolve krny ky liye super use kia 
        super(filName,brstNo )
        this.reelTime = rlTime 
    }

}
let InstaApp :Instagram = new Instagram ("whitness" , 10 , 30)
console.log(InstaApp);



