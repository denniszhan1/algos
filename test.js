
var arr=[];

function few(arr,x){
    var y=arr.length;
    for(var i=0;i<y-x;i++){
        arr.shift();
    }
    return arr;
}

console.log(few([1,2,3,4,5,6,7],5));


function xinter(m,b){
    return b/m;
}

console.log(xinter(5,2));


function whatHappensToday(){
    var x= Math.random();
    if(x<=.1){
        console.log('Volcano');
    }
    else if(x>.1 && x<=.25){
        console.log('Tsunami');
    }
    else if (x>.25 && x<=.45){
        console.log('Earthquake');
    }
    else if (x>.45 && x<=.7){
        console.log('Blizzard');
    }
    else if (x>.7 && x<=1){
        console.log('Meteor Strike');
    }
    console.log(x);
}
whatHappensToday();


function printAverage(x){
    sum = 0;
    for (var i=0; i<x.length; i++){
        sum=sum+x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5


function returnOddArray(){
    var x =[];
    for(var i=0;i<256;i++){
        if(i%2==1){
            x.push(i);
        }
    }
    return x;
}

y=returnOddArray();
console.log(y);


function squareValue(x){
    for(var i=0;i<x.length;i++){
        x[i]=x[i]*x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]

//  Algo IV

var x =[];
function great(x,y){
    var count=0;
    for(var i=0;i<x.length;i++){
        if(y<x[i]){
            count+=1;
        }
    }
    console.log(count);
}

great([1,2,3,4,5,6,7,8,9],3);

function stats(x){
    sum = 0;
    max = 0;
    min =x[0];
    for (var i=0; i<x.length; i++){
        if(x[i]>max){
            max=x[i];
        }
    }
    for (var i=0; i<x.length; i++){
        if(x[i]<min){
            min=x[i];
        }
    }
    for (var i=0; i<x.length; i++){
        sum=sum+x[i];
    }
    console.log(max);    
    console.log(min);
    console.log(sum/x.length);
}

stats([1,2,3,4,5,6,7,8,9]);

function replace(x){
    for(var i=0;i<x.length;i++){
        if(x[i]<0){
            x[i]="Dojo";
        }
    }
    console.log(x);
}

replace([1,2,-3,4,-76,-1,7,0,9]);

function removeVals(x,s,e){
        x.splice(s,e-s);
        console.log(x);
}

removeVals([1,2,-3,4,-76,-1,7,0,9],2,6);

//  Algos V

function resetNegatives(x){
    for(var i=0;i<x.length;i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    console.log(x);
}

resetNegatives([1,2,-3,4,-76,-1,7,0,9]);

function moveForward(x){
    for(var i=0;i<x.length;i++){
        x[i]=x[i+1];
    }
    x[x.length-1]=0;
    console.log(x);
}
moveForward([1,2,-3,4,-76,-1,7,0,9]);

function reverse(x){
    var y=[0];
    for(var i=(x.length-1);i>=0;i--){
        y.push(x[i]);
    }
    console.log(y);
}
reverse([1,2,-3,4,-76,-1,7,0,9]);

function repeat(x){
    var y=x.length*2;
    for(var i=0; i<y;i++){
        x.splice(i,0,x[i]);
        i++;
    }
    console.log(x);
}

repeat([1,2,-3,4,-76,-1,7,0,9]);