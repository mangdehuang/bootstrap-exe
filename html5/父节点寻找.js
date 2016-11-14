var arr=[{pid:4,id:5},{pid:2,id:3},{pid:3,id:4},{pid:1,id:2}];
var first= null,flag=true;
for(var i =0;i <arr.length;i++){ 
  for(var j = i+1;j<arr.length;j++){
   if(arr[i].pid == arr[i+1].pid){
      flag = false;
    }
  }
  if(flag = true){
    first = arr[i];
  }
   
 
	
}
var brr = [];var b=first.id;
brr.push(first);
for(var i =0;i < arr.length;i++){
  for(var j=0;j<arr.length;j++){
    if(arr[j].pid == b){ 
      brr.push(arr[j]);
      b = arr[j].id;
      break;
    }
    
  }
}
console.log(brr);

