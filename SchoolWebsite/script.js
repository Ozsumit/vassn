function showdropdown() {
    const nav2 = document.getElementById("nav2");
    const dropdown = document.getElementById("dropdown");
    const navul = document.getElementById("navul");
    
    if (!nav2 || !dropdown || !navul) {
        console.error("One or more elements not found");
        return;
    }
    
    const isHidden = getComputedStyle(nav2).display === 'none';
    
    nav2.style.display = isHidden ? 'grid' : 'none';
    dropdown.textContent = isHidden ? '✕' : '≡';
    navul.style.display = isHidden ? 'grid' : 'none';
}
var typed = new Typed(".typing", {
    strings: ["Hello!", "Hello!", "Hello!", "Hello!", "Namaste!", "Hola!", "Ciao!", "Bonjour!", "Blyaattt!!", "Konnichiwa!",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,

});



