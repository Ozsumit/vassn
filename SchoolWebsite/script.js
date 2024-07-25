function showdropdown() {
    const nav2 = document.getElementById("nav2");
    const dropdown = document.getElementById("dropdown");
    const navul = document.getElementById("navul");
    const header = document.querySelector("header");
    const body = document.body; // Add this line to select the body

    if (!nav2 || !dropdown || !navul || !header) {
        console.error("One or more elements not found");
        return;
    }

    const isHidden = getComputedStyle(nav2).display === 'none';

    nav2.style.display = isHidden ? 'grid' : 'none';
    dropdown.textContent = isHidden ? '✕' : '≡';
    navul.style.display = isHidden ? 'grid' : 'none';

    // Change the position of the header when nav2 is visible
    if (isHidden) {
        header.style.position = 'fixed';
        header.style.width = '100%';
        header.style.zIndex = '1000';
        body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        header.style.position = 'absolute'; // or whatever the original position was
        body.style.overflow = ''; // Re-enable scrolling
    }
}
var typed = new Typed(".typing", {
    strings: ["Hello!", "Hello!", "Hello!", "Hello!", "Namaste!", "Hola!", "Ciao!", "Bonjour!", "Blyaattt!!", "Konnichiwa!",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,

});




function port(){
    window.location="https://www.sumit.info.np";
  }