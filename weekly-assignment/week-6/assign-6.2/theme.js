 /*
    Title: theme.html
    Author: Richard Krasso
    Date: 3/22/2021
    Description: Sets the default color scheme for the page. If an
                event is triggered on the icon element, the local
                storage is cleared and modified to reflect the choice
                for future use. 
 */

       /** Set the default theme to light if one doesn't exist in localStorage */
       setDefaultTheme();

            /** Set the default theme to light if one has not been set in the browsers localStorage */
        function setDefaultTheme()
        {
            const theme = localStorage.getItem("mode") || "light-theme";
            const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
            const iconText = localStorage.getItem("iconText") || "Light Mode";

            document.body.classList.value = theme;
            document.getElementById("icon-mode").classList.add(iconMode);
            document.getElementById("icon-text").innerHTML = iconText;
        }

        /** Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme */
        function setSelectedTheme()
        {
            document.body.classList.value = localStorage.getItem("mode") || "light-theme";
        }

         /** Function to switch the users selected website theme @param x (this instance) */
       function toggleMode(x)
       {
           let colorTheme = document.body.classList; // get the body's CSS class
           let iconMode = x.classList; // get the current classes assigned to the triggered button

           /** If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers local storage.*/
           if (colorTheme.value === "light-theme")
           {
               localStorage.clear();
               localStorage.setItem("mode", "dark-theme");
               localStorage.setItem("iconMode", "fa-toggle-on");
               localStorage.setItem("iconText", "Dark Mode");
           }
           /** If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers local storage.*/
           else
           {
               localStorage.clear();
               localStorage.setItem("mode", "light-theme");
               localStorage.setItem("iconMode", "fa-toggle-off");
               localStorage.setItem("iconText", "Light Mode");
           }

           /** Apply the updated selection to the HTML page elements*/
           colorTheme.value = localStorage.getItem("mode");
           iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
           document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
       }