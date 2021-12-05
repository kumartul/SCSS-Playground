const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    if(!sidebar.classList.contains("sidebar-close")){
        sidebar.classList.add("sidebar-close");
    }
    else{
        sidebar.classList.remove("sidebar-close");
    }
});

const closeSidebar = mediaQuery => {
    if(mediaQuery.matches){
        sidebar.classList.add("sidebar-close");
    }
    else{
        sidebar.classList.remove("sidebar-close");
    }
}

const mediaQuery = window.matchMedia("(max-width: 1212px)");

closeSidebar(mediaQuery);

mediaQuery.addListener(closeSidebar);