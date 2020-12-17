//function to display the element on the text box
function display(val) 
{ 

    document.getElementById("displaybox").value+=val 

} 
  
//function that evaluates the digit and return result 
function solve() 
{ 

    let x = document.getElementById("displaybox").value 
    let y = eval(x) 
    document.getElementById("displaybox").value = y 
    document.getElementById("displaybox2").value ="output : " +y 


}   
  
//function that clear the display 
function clr() 
{ 

    document.getElementById("displaybox").value = "" 
    document.getElementById("displaybox2").value =""

} 



// enalbing or disabling the function 

function toggle() {
    var z = document.getElementById("sbutton1");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }


//for square of a number 
  function square(){
    let x = document.getElementById("displaybox").value 
    let y = x*x
    document.getElementById("displaybox").value = y 


  }

  //for cube root
  function cube(){
    let x = document.getElementById("displaybox").value 
    let y = Math.cbrt(x) 
    document.getElementById("displaybox").value = y 
   

  }


  // for square root
  function squareroot(){


    let x = document.getElementById("displaybox").value 
    let y = Math.sqrt(x) 
    document.getElementById("displaybox").value = y 

  }


   // for backspace functionality
  function  backspace(){

   displaybox.value = displaybox.value.substring(0, displaybox.value.length - 1);

    }
    