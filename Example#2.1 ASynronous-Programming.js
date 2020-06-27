console.log("Before Prepare food");


function prepareFood(callback){
    setTimeout(()=>{
        
    console.log("Prepare food");
    callback("Food is ready...")
    },2000);
}



function mycallback(value){
    console.log("Value:",value);  
}

prepareFood(mycallback);
console.log("After Prepare food dinner is ready..");

/**Output.
/**Output.
Before Prepare food
Prepare food
Value: Food is ready...
After Prepare food dinner is ready..
 * 
 */