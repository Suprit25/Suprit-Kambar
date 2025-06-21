var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabName) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("Active-tab")
    }
    event.currentTarget.classList.add("active-link")

   document.getElementById(tabName).classList.add("Active-tab")
}

const tab=document.getElementById("sidemenu")

function openmenu() {
    tab.style.right="0"
}
function closemenu() {
    tab.style.right = "-200px"
}

