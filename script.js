function ValidateEmail(input){ 
    var vaildRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(input.value.match(vaildRegex)){ 
        alert("Valid email address!");
        document.form1.text1.focus();
         return true; }
         else{
      alert("Invalid email address!"); 
     document.form1.text1.focus(); 
             
        return false; } } 
        function ValidatePassword(){ 
            var pw1=document.getElementById("pwrd").value; 
            var pw2=document.getElementById("pass").value;
            
     if(pw1 ==""){ document.getElementById("message1").innerHTML="**Fill the password please!"; 
      return false; } 
 if(pw2 ==""){ 
      document.getElementById("message2").innerHTML="**Enter the password please!"; 
  return false; } 
      if(pw1.length<8){
       document.getElementById("message1").innerHTML="**Password length must be atleast 8 characters"; 
    return false; }
     if(pw1.length>15){
         document.getElementById("message1").innerHTML="**Password length must not be exceed 15 characters";
          return false; } 
          if(pw1 != pw2){ 
            document.getElementById("message2").innerHTML="**Password are not same";
             return false; }
             else{
                 alert("Your password created successfully"); 
                } }