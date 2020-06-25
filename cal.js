var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
var result=document.getElementById('result');
var form=document.getElementById('form1');

form.addEventListener('submit',function(event)
                     {
    if(!num1.value||!num2.value)
{
    alert(" please enter values in input fields ");
}
else{ x=parseFloat(num1.value);
      y=parseFloat(num2.value);
     var results=x/y;
     var percent=results*100;
result.innerText="answer : " + percent + "%";
    event.preventDefault(); 
}
    
});
