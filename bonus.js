const { log } = require("node:console")

function missing_value (arr , k){
missing = []

for (let before = 1; before < arr[0]; before++) {
   missing.push(before);   
}

for (let index = 0; index < arr.length; index++) {

   if(arr[index+1]-arr[index]==1){
    continue
    
   }else if(arr[index+1]-arr[index]>1 ){

      for (let j = arr[index]+1; j < arr[index + 1] ; j++) {
        
         missing.push(j);
    }
    
   }else {

    let after = arr[arr.length - 1] + 1;
    while (missing.length < k) {
        missing.push(after++);
    }
   }
}
console.log(missing);
console.log(missing[k-1]);

 }

 missing_value([2,3,4,7,11] , 5)

