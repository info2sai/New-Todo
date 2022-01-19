let a=[10,9,8,7,6,5,4,3,2,1,22];
let b=a.sort((c,b)=>b-c)
console.log(b)

for(i=1;i<=a.length-1;i++){
    for(j=0;j<i;j++){
        if( var x=a[i]){
            a[i]=a[j];
            a[j]=x
        }
    }
}
console.log(a)
