
/*
  add(1)(2,3)(4).value() // 5
 */


function add (...args){

   let x =  (...args2)=>{
     return add(...args,...args2)
   }
   x.value = function (){
     console.log(args);
     return Array.from(args).reduce((pre,cur)=>{
       return pre+cur
     },0)
   }

   return x

}

console.log(add(3)(1,2, 3)(4,8)(5).value());
