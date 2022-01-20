
const arr = [
 {name:"vijay",age:25},
 {name:"ajay",age:24},
 {name:"vijay",age:25},
 {name:"ajay",age:24},
 {name:"murali",age:25},
  ];
  const map = {};
  const newArray = [];
  arr.forEach(el => {
     if(!map[JSON.stringify(el)]){
        map[JSON.stringify(el)] = true;
        newArray.push(el);
  }
});
console.log(newArray);