const numbers = [30, 5, 2, 86, 55];

//forEach//
function myFunction(value, index, array){
 console.log(value);
 
}

numbers.forEach(myFunction);

//map()//
const color = [1, 2, 3, 4, 5]
function myFunction(value){
    return value *1 ;
    
   }

   const newColor = color.map(myFunction);
   console.log(newColor);

//filter//
const size = [2, 6, 8, 10, 12]
function myFunction(value, index, array){
    return value > 8;
    
   }

   const newSize = size.filter(myFunction);
   console.log(newSize);

//reduce//
const look = [1, 5, 10, 15, 20]
function myFunction(total, value, index, array){
    return total + value;
    
   }

   const newLook = look.reduce(myFunction);
   console.log(newLook);

   //every//
   const like = [11, 55, 10, 15, 20]
   function myFunction(value, index, array){
       return value > 18;
       
      }
   
      const newLike = like.every(myFunction);
      console.log(newLike);