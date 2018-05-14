
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

