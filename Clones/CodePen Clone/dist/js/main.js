const features = document.getElementsByTagName("details");
const images = document.querySelectorAll(".features-container .images img");

Array.from(features).forEach(feature => {
    feature.addEventListener('click', event => {
        // Prevent the default behaviour of the 'summary' element to unfold the content
        event.preventDefault();

        // Grab the topic of the target element
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

        // Iterate through all the features and close all the features
        Array.from(features).forEach(featureClicked => {
            if(featureClicked != event.target.parentElement){
                featureClicked.removeAttribute('open');
            }
            else{
                featureClicked.setAttribute("open", "");
            }
        });
    });
});