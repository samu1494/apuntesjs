export function sum(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export function mult(a,b){
    return a*b;
}

export function div(a,b){
    return (b===0)? "ERROR: Division entre cero": Math.floor(a/b);
}


