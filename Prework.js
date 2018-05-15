	

	var myNumber= 42;
	var myName= 'Dennis';
	var change= '';

	change= myNumber;
	myNumber= myName;
	myName= change;
///
	var count=0
	for(var x=0;x<4096;x+=5){
		console.log(x);
		count +=1;
	}
	console.log(count);
///
	for(var x= -52; x<1067; x++){
		console.log(x);
		}
///
	var x =0;
	while(x<60001){
		console.log(x);
		x+=6;
	}
///
	function beCheerful(){
		console.log("good morning");
	}
	for(var x=1; x<99; x++){
			beCheerful()
	}
///
	for(var x=1; x<101; x++){
		if(x % 5 ==0){
		console.log('Coding')
		}
		else{
			console.log(x);
		}

	}
///
	for(var x=0; x>-301;x-=3){
		if(x!==-3 && x!==-6){
			console.log(x);
		}
	}
///
	incoming='hello';
	function question(x){
		console.log(incoming);
	}
///
	var y=2000;
	while(y<=5280){
		console.log(y);
		y+=1;
	}
///
	0
///
	for(var x=1; x<32;x++){
		if(x==11 || x==28){
			console.log("How did you know?");
		}
		else{
			console.log("Just another day....");
		}
	}
///
	var x=2016;
	while (x>0){
		console.log(x);
		x-=4;
	}
///
	function isleapyear(year){
		if(year % 4==0){
			if(year %100==0){
				if(year % 400 ==0){
					console.log(""+year+" is a leap year");
				}
				else{
					console.log(""+year+" is not a leap year");
				}
			}
			else{
			console.log(""+year+" is a leap year");
			}
		}
		else{
			console.log(""+year+" is not a leap year");
		}
	}
///
	function countdown(x,y,z){
		for(var int=x; int<=y; int++){
			if(int % z==0){
				console.log(int);
			}
		}
	}
///
	function countdown1(a,b,c,d){
		for(var int=b; int<=c; int++){
			if(int % a==0 && int!=d){
				console.log(int);
			}
		}
	}
///
///
	function countdown(num){
		var arr =[];
		for(var x =num; x>=0;x--){
			arr.push(x);
		}
		console.log(arr.length);
		return arr;
	}
///
	function twonum(num1,num2){
		console.log(num1);
		return num2;
	}
///
	var arr=[];
	function onepluslength(arr){
		var output=arr[0]+arr.length;
		return output;
	}
	///string+arr.length= stringarr.length
	///boolean+arr.length= arr[0]+arr.length if true
	///					   arr.length if false
///
	var arr1=[1,3,5,7,9,13];
	var count=0;
	for(var x=0;x<arr1.length;x++){
		if(arr1[x]>arr1[1]){
			console.log(arr1[x]);
			count+=1;
		}
	}
	console.log(count);
///
	var arrgen=[];
	function gs(arrgen){
		if(arrgen.length==1){
			return 'error'
		}
		var count=0;
		for(var x=0;x<arrgen.length;x++){
			if(arrgen[x]>arrgen[1]){
				console.log(arrgen[x]);
				count+=1;
			}
		}
		return count;
	}
///
	function jinx(x,y){
		var arr = [];
		for(var a=0; a<x;a++){
			arr.push(y);
		}
		if(arr.length==y){
			return console.log('Jinx!');
		}
		else{
			return arr;
		}
	}
///
	var arr=[];
	function fit(arr){
		if(arr[0]>arr.length){
			console.log('Too big!');
		}
		else if(arr[0]<arr.length){
			console.log('Too small!');
		}
		else{
			console.log('Just right!');
		}
	}
///
	function fahrenheitToCelsius(fDegrees){
		return (fDegrees-32)*5/9;
	}
///
	function celsiusToFahrenheit(cDegrees){
		return cDegrees*9/5+32;
	}
	///equate at -40
///
///
	var arr=[];
	function makeItBig(arr){
		for(var x=0;x<arr.length;x++){
			if(arr[x]>0){
				arr[x]='big';
			}
		}
		return arr;
	}
///
	var arr=[];
	function prev(arr){
		for(var x=arr.length-1;x>0;x--){
			arr[x]=arr[x-1].length;
		}
		arr[0]=arr[0].length;
		return arr;
	}
///
	var arr=[];
	function hl(arr){
		var hi=arr[0];
		var low=arr[0];
		for(var x=0;x<arr.length;x++){
			if(hi<arr[x]){
				hi=arr[x];
			}
			if(low>arr[x]){
				low=arr[x];
			}
		}
		console.log(low);
		return hi;
	}
///
	var arr=[];
	function sev(arr){
		var arr2=[];
		for(var x=1;x<arr.length;x++){
			arr2.push(arr[x]+7);
		}
		return arr2;
	}
///
	var arr=[];
	function pora(arr){
		console.log(arr[arr.length-2]);
		for(var x=0;x<arr.length;x++){
			if(arr[x]%2!==0){
				return arr[x];
			}
		}
	}
///
	var arr=[];
	function reverse(arr){
		arr2=[];
		for(var x=arr.length-1;x>=0;x--){
			arr2.push(arr[x]);
		}
		return arr2;
	}
///
	var arr=[];
	function double(arr){
		arr2=[];
		for(var x=0;x<arr.length;x++){
			arr2.push(2*arr[x]);
		}
		return arr2;
	}
///
	var arr=[];
	function neg(arr){
		arr2=[];
		for(var x=0;x<arr.length;x++){
			if(arr[x]<=0){
				arr2.push(arr[x]);
			}
			else{
				arr2.push(-arr[x]);
			}
		}
		return arr2;
	}
///
	var arr=[];
	function countPositives(arr){
		count=0;
		for(var x=0;x<arr.length;x++){
			if(arr[x]>0){
				count+=1;
			}
		arr.pop();
		arr.push(count);
		}
		return arr;
	}
///
	var arr=[];
	function hungry(arr){
		var count =0;
		for(var x=0;x<arr.length;x++){
			if(arr[x]=='food'){
				console.log('yummy');
				count +=1;
			}
		}
		if(count==0){
			console.log("I'm hungry");
		}
	}
///
	var arr=[];
	function trips(arr){
		for(var x=2;x<arr.length;x++){
			if(arr[x]%2!==0 && arr[x-1]%2!==0 && arr[x-2]%2!==0 ){
				console.log("That's odd!");
			}
			if(arr[x]%2==0 && arr[x-1]%2==0 && arr[x-2]%2==0 ){
				console.log("That's even!");
			}
		}
	}
///
	var arr=[];
	function swap(arr){
		var x =0;
		x=arr[0];
		arr[0]=arr[arr.length-1];
		arr[arr.length-1]=x;
		y=arr[2];
		arr[2]=arr[arr.length-3];
		arr[arr.length-3]=y;
		return arr;
	}
///
	var arr=[];
	function oddone(arr){
		for(var x=0;x<arr.length;x++){
			if(x%2!==0){
				arr[x]+=1;
			}
		console.log(arr[x]);
		}
		return arr;
	}
///
	var arr=[];
	var num=0;
	function mult(arr,num){
		for(var x=0;x<arr.length;x++){
			arr[x]=num*arr[x];
		}
		return arr;
	}
