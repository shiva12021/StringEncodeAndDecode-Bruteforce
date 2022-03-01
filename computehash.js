class HashOfString {    
    constructor(scopedLetters) {
        this.scopedLetters = scopedLetters;                
    }
    
     
    //A method to Convert String to Hash
    stringToHash(str) {
        //integer key using to generate hash out of string
        //alert("test");
        let hash=7;
         for(let i =0;i < str.length;i++){
            
             hash = BigInt(hash) * BigInt(37) + BigInt(this.scopedLetters.indexOf(str[i]));
        }
        return BigInt(hash);
    }
    hashToString(hash){

        let hashLen = hash.toString().length;
       // alert(hashLen);
        let strLen=0;
        while(true) {
            
            let str = this.strJoin(this.scopedLetters[0],strLen+1);
            //alert(str);
            let curHash = this.stringToHash(str);
            if(curHash.toString().length > hashLen){break;}
            strLen+=1;
        }
        //alert(strLen);
        let hs=[];
        for(let i=0;i<strLen;i++){
            let lastChar ="";
            for(let k=0;k<this.scopedLetters.length;k++){
                let curStr = hs.join("")+ this.scopedLetters[k] + this.strJoin(this.scopedLetters[0],strLen-i-1);
                console.log("current string-->"+curStr);
                let curHash = this.stringToHash(curStr).toString();
                if(curHash.toString() == hash.toString()){
                   // alert(curStr);  
                    return curStr;
                }
                else if(BigInt(curHash.toString()) > BigInt(hash.toString())){
                    let charToPush =(lastChar!=""?lastChar:this.scopedLetters[0]);
                    hs.push(charToPush);
                    break;
                    }
                else{
                    lastChar=this.scopedLetters[k];
                }
            }
        }
        return "Letter must be in acdefgilnoprstuw"
    }
    strJoin(letter,len){
        let str="";
        while(len>0){            
            str+=letter.toString();
            len-=1;            
        }
        return str;

    }
}

