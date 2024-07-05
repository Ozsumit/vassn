function showdropdown(){
    document.getElementById("dropdown").style.display="none"
    document.getElementById("nav2").style.display="flex"
 
}
function closebtn(){
    document.getElementById("dropdown").style.display="flex"
    document.getElementById("nav2").style.display="none"
 
}

var typed = new Typed(".typing", {
    strings: ["Hello!", "Hello!", "Hello!", "Hello!", "Namaste!", "Hola!", "Ciao!", "Bonjour!", "Blyaattt!!", "Konnichiwa!",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,

});