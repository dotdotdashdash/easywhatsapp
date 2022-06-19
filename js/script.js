function createLink() {
  var num = document.getElementById("num").value;

  if(num.length == 10) {

    var link = "https://api.whatsapp.com/send?phone=91" ;

    var newLink = link+ num ; 
    
    var redirect = document.getElementById("redirect") ;
    console.log(newLink);
    redirect.setAttribute("href", newLink);
    redirect.style.visibility  = "visible"

  } else {

    alert("Enter a valid 10-digit contact number");
    
  }


}