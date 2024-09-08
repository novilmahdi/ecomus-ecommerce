import ImageCompare from "./image-compare-viewer.min.js";

const element = document.getElementById("image-compare");
const options = {

    // UI Theme Defaults
    controlColor: "#FFFFFF",
    controlShadow: false,
    addCircle: true,
    addCircleBlur: true,
    smoothing: false,
    showLabels: true,
    labelOptions: {
        before: 'Before',
        after: 'After',
    }
};

// Add your options object as the second argument
const viewer1 = new ImageCompare(element, options).mount();