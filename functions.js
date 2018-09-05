function square1(x){    
    return Math.pow(x, 2);    
}

for(i = 0; i <= 10; i++){
    console.log(square1(i));
}


const square2 = x => Math.pow(x, 2);

for(i = 0; i <= 10; i++){
    console.log(square2(i))
}



const min = (x,y) =>{
    if(x < y){
        return x;
    }else if (x > y){
        return y;
    }else if(x == y){
        return "Both numbers are the same";
    }
}
console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));