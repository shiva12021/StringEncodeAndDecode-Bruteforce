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
             console.log(BigInt(hash).toString());
        }
        return BigInt(hash);
    }
    hashToString(hash){

        let hashLen = hash.toString().length;
        let index = Math.round(hash%37);
        let arr =[];
        while(Math.round(hash) >37){
            
            if(this.scopedLetters.length > index){
                arr.push(this.scopedLetters[index]);
                hash = hash/37;
            }
            index = Math.round(hash%37);
        }
     
        let temp = arr.reverse();
        let str = temp.join('');
        return str;
    }
      
}

