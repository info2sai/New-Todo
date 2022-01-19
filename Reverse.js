 // Reverse Method;

 

(1) let a=[5,15,25,35,45,55];

 let b=a.reverse();
 console.log(b);
 
 
(B) WITH WHILE-LOOP;

(1)let name1= 'Vijay';

 let newNamee = name1.split('');


let b=[]
let i = 0;
while(newNamee.length){
   b.push(newNamee.pop());
   i++;
}
console.log(b.join(""));

if(name1==b){
   console.log("its is palnodrome");
   
}else{
   console.log("no");
   
}

// (c ) WITH FOR-LOOP
let a="vijay";
let b=""
 for(i=a.length-1;i>=0;i--){
     b=b+a[i]
 }
 console.log(b)
