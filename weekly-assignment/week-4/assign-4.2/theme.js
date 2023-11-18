/*
        ================================================================
            Title: theme.html
            Author: Richard Krasso
            Date: 3/22/2021
            Description: Sets the default color scheme for the page. If an
                         event is triggered on the icon element, the local
                         storage is cleared and modified to reflect the choice
                         for future use. 
        ================================================================
        */
       
setDefaultTheme();

function setDefaultTheme() {
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}
//Set the HTML body to the user's selected theme. 
//If one has not been selected, set the theme to light-theme.
/*function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}*/
function toggleMode(x)
{
    let colorTheme = document.body.classList;
    let iconMode = x.classList; 

    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }
   else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}
