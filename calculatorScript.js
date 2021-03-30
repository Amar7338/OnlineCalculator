function getInputValue()
{
   return document.getElementById("input-value").innerText;
}
function printInputValue(num)
{
   document.getElementById("input-value").innerText=num;
}
function getOutputValue()
{
   return document.getElementById("output-value").innerText;
}
function printOutputValue(num)
{
    if(num=="")
    {
        document.getElementById("output-value").innerText=num;
    }
    else{
   document.getElementById("output-value").innerText=num;}
}
function formatInputValue(num)
{
  var n=Number(num);
  return n.toLocaleString("en");
}
function reverseFormattedValue(num)
{
    return Number(num.replace(/,/g,''))
}
function operatorCicked(idofoperator)
{
    var arg = document.getElementById(idofoperator).innerText; 
    var operator=document.getElementsByClassName("operator");
    
    for(var i=0;i<operator.length;i++)
    {
        var value=document.getElementById(operator[i].id).innerText;       
        if(arg==value)
        {
            var idofelement=document.getElementById(operator[i].id).getAttribute('id');
          if(idofelement=="clear")
          {
              printInputValue("");
              printOutputValue("");
              break;
          }
          else if(idofelement=="backspace")
          {
            var output=getInputValue();;
            if(output)
            {
                output=output.substr(0,output.length-1);
                printInputValue(output);
                break;
            }            
          }
          else
          {          
             var input=getInputValue();
             var removedValue=input.substr(input.length-1);
             if(isNaN(removedValue))
             {
                 input=input.substr(0,input.length-1);
             }
             if(idofoperator!="=")
             {
             input=input+idofoperator;
             }
             printInputValue(input);
             if(input!="")
             {
                 if(idofelement=="=")
                 {
                     if(isNaN(input.substr(0,1)))
                     {
                        var outputHistory=getOutputValue();
                        input=outputHistory+input;
                     }
                     var result=eval(input);
                     printOutputValue(result);
                     printInputValue("");
                 }
                 break;
             }
          }
        }
    }
}
function numberCicked(idofnumber)
{
    var arg1 = document.getElementById(idofnumber).innerText; 
    var operator=document.getElementsByClassName("number");
    
    for(var i=0;i<operator.length;i++)
    {
        var value=document.getElementById(operator[i].id).innerText;       
        if(arg1==value)
        {
          var output=getInputValue();
          output=output+arg1;
          printInputValue(output);
          break;
        }
    }
}