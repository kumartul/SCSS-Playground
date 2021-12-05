const hamburger = document.querySelector(".hamburger");

const sidebar = document.querySelector(".sidebar");
const videoContainer = document.querySelector(".videos");

hamburger.addEventListener('click', () => {
    if(!sidebar.classList.contains("sidebar-close")){
        sidebar.classList.add("sidebar-close");
        videoContainer.classList.add("videos-left");
    }
    else{
        sidebar.classList.remove("sidebar-close");
        videoContainer.classList.remove("videos-left");
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