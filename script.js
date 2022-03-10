var settingsmenu = document.querySelector(".settings-menu")
var DarkBtn = document.getElementById("dark-btn")
function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
DarkBtn.onclick = function(){
    DarkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
    }
}
if(localStorage.getItem("theme") ==  "light"){
    DarkBtn.classList.remove("dark-btn-on")
    DarkBtn.classList.remove("dark-theme")

} else if(localStorage.getItem("theme") == "dark"){
        DarkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}
else{
    localStorage.setItem("theme", "light")
}
