function fib(k){
   var ar =[];
   for (var i = 0; i<k; i++){ 
    if (i == 0)
    {
        ar[i] = 0;
    }
    else if (i == 1)
    {
        ar[i] = 1;
    }
    else { 
        ar[i] = ar[i-1] + ar[i-2];
    }

   }
   ar.shift();
   document.write('"'+ ar.join() + '"');
}