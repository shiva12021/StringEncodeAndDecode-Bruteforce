# StringEncodeAndDecode-Bruteforce

This is just a brute force approach, Use below approach to optimize the solution

# string to hash ** encode
h=7 
for i=0 i<str.length i++
hash = hash * 37 + scoppedletter.indexOf(str[i]);

# hash to string Decode
find index by dividing hash by 37
let arry=[];
for i=hash.legth;i<=0 ; i++
  index = (hash - (hash/37))
  let char = scopperletter[index]; 
  arry.push(char);
end for
Reverse the array to print the string
