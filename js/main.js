(function () {
  let setMenu = function () {
    // variables
    let burgerMenu = document.querySelector(".burger");
    let navBar = document.querySelector("nav");
    let navBarStatus = false;
    navBar.removeAttribute("style");
    // mobile menu via CSS Animation
    if (window.getComputedStyle(navBar).overflow == "hidden") {
      let navHeight = navBar.offsetHeight;
      navBar.style.height = "0px";
      burgerMenu.addEventListener("click", () => {
        if (navBarStatus) {
          navBarStatus = false;
          navBar.style.height = "0px";
        } else {
          navBarStatus = true;
          navBar.style.height = navHeight + "px";
        }
      });
    } else {
      navBarStatus = false;
      navBar.removeAttribute("style");
    }
  };
  setMenu();
  // resize
  window.addEventListener("resize", () => setMenu());
})();
