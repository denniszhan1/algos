//Sigma
function sigma(num){
    var sum=0;
    for(var i=0;i<=num;i++){
        sum=i+sum;
    }
    return console.log(sum);
}

//Factorial
function factorial(num){
    var mult=1;
    for(var i=1;i<=num;i++){
        mult=i*mult;
    }
    return console.log(mult);
}

//Fibonacci
function fib(num){
    if(num<=1){
        return num;
    }
    var sum=1;
    var sump=1;
    for(var i=2;i<num;i++){
        var temp = sum;
        sum+= sump;
        sump=temp;
    }
    return console.log(sum);
}

//Array: Second-to-Last:
function sec(num){
    if(num.length<2){
        return console.log('null');
    }
    return console.log(num[num.length-2]);
}

//Array: Nth-to-Last:
function nthl(num,last){
    if(num.length<last){
        return console.log('null');
    }
    return console.log(num[num.length-last]);
}

//Array:Second-Largest:
function slarg(num){
    if(num.length<3){
        return console.log('null');
    }
    var largest=0;
    var anum=0;
    for(var i=0;i<num.length;i++){
        if(num[i]>largest){
            largest=num[i];
            anum=i;
        }
    }
    console.log(anum,largest);
    num.splice(anum,1);
    console.log(num);
    largest=0;
    anum=0;
    for(var i=0;i<num.length;i++){
        if(num[i]>largest){
            largest=num[i];
            anum=i;
        }
    }
    return console.log(largest);
}

function slarg2(num){
    var largest, second=0;

    if(num[0]>num[1]){
        largest=num[0];
        second=num[1];
    }
    else {
        largest=num[1];
        second=num[0];
    }

    for(var i=2;i<num.length;i++){
        if(largest<num[i]){
            second=largest;
            largest=num[i];
        }
        else if(second<num[i]){
            second=num[i];
        }
    }
    console.log(largest,second);
}

//Double Trouble:
function repeat(x){
    var y=x.length*2;
    for(var i=0; i<y;i++){
        x.splice(i,0,x[i]);
        i++;
    }
    console.log(x);
}

//Fibonacci Recursion
function fibr(num){
    if(num==0 || num==1){
        return num;
    }
    return fibr(num-1)+fibr(num-2);
}
