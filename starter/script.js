document.getElementById("info-btn").addEventListener("click", () => {
    alert("JS effect working!");
});


const name = document.getElementById("name");
name.addEventListener("mouseenter", () => {
    name.style.transform = "scale(1.2)";
    name.style.transition = "transform 0.3s";
});
name.addEventListener("mouseleave", () => {
    name.style.transform = "";
});
name.addEventListener("click", () => {
    name.style.animation = "rainbow 2s infinite";
});
