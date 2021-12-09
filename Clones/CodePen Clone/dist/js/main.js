const features = document.getElementsByTagName("details");
const images = document.querySelectorAll(".features-container .images img");

Array.from(features).forEach(feature => {
    feature.addEventListener('click', event => {
        const topic = event.target.parentElement.dataset.topic;

        // Iterate through all the images and if the image is active, then remove it and
        // display the current image
        Array.from(images).forEach(image => {
            if(image.classList.contains("active")){
                image.classList.remove("active");

                image.style.animationName = "exit";
            }
            if(image.dataset.topic === topic){
                image.style.animationName = "enter";
                image.style.opacity = "1";
                image.style.display = "block";

                image.classList.add("active");
            }
        });

        // Iterate through all the features and close all the features except the target 
        // feature
        Array.from(features).filter(currentFeature => currentFeature != event.target.parentElement).forEach(featureClicked => {
            featureClicked.removeAttribute('open'); 
        });
    });
});