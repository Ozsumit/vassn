function showdropdown(){
    if (document.getElementById("nav2").style.display === 'none') {
        document.getElementById("nav2").style.display = 'grid';
             
            document.getElementById("dropdown").innerHTML='✕';
            document.getElementById("navul").style.display='grid'; 
           
        // document.getElementById("smenubtn").style.  border='2px solid #fff';
        } else {
            document.getElementById("nav2").style.display = 'none';
           
            document.getElementById("dropdown").innerHTML='≡';
            document.getElementById("navul").style.display='none'; 
         
        }
    }
var typed = new Typed(".typing", {
    strings: ["Hello!", "Hello!", "Hello!", "Hello!", "Namaste!", "Hola!", "Ciao!", "Bonjour!", "Blyaattt!!", "Konnichiwa!",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,

});



