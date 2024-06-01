const dropdowMenu = document.getElementById("dropdownMenu");
const menuList = document.getElementById("menuList");
const menuBtn = document.getElementById("menuBtn");

// Function to handle clicks anywhere on the document body
function handleDocumentClick(event) {
  // Check if the viewport width is 479px or less
  if (window.matchMedia("(max-width: 479px)").matches) {
    // Check if the clicked element is the menu button or the menu list
    const isMenuBtn =
      event.target === menuBtn || menuBtn.contains(event.target);
    const isMenuList =
      event.target === menuList || menuList.contains(event.target);

    // If the clicked element is neither the menu button nor the menu list, hide the menu list
    if (!isMenuBtn && !isMenuList) {
      menuList.style.display = "none";
    }
  }
}

// Event listener to toggle the menu list display when the menu button is clicked
menuBtn.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 479px)")) {
    var computedStyle = window.getComputedStyle(menuList);
    if (computedStyle.display === "none") {
      menuList.style.display = "flex";
    } else {
      menuList.style.display = "none";
    }
  }
});

// Event listener to handle clicks anywhere on the document body
document.body.addEventListener("click", handleDocumentClick);
