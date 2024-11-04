$(document).ready(function(){
    let theme = localStorage.getItem('theme');
    if(theme!=null)
    {
        document.documentElement.setAttribute('data-bs-theme', theme);
        if(theme=="light")
        {
            $("#modeSelector").removeClass("btn-dark").addClass("btn-light");
            $("#modeSelector").html("<img src='images/darkMode.svg'>");
        }
        else
        {
            $("#modeSelector").removeClass("btn-light").addClass("btn-dark");
            $("#modeSelector").html("<img src='images/lightMode.svg'>");
        }
    }
    else
    {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    $("#modeSelector").on('click', changeTheme);
});

function changeTheme()
{
    if(document.documentElement.getAttribute('data-bs-theme')=='light')
    {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        $("#modeSelector").removeClass("btn-light").addClass("btn-dark");
        $("#modeSelector").html("<img src='images/lightMode.svg'>");
        localStorage.setItem('theme', 'dark');

    }
    else
    {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        $("#modeSelector").removeClass("btn-dark").addClass("btn-light");
        $("#modeSelector").html("<img src='images/darkMode.svg'>");
        localStorage.setItem('theme', 'light');
    }
}