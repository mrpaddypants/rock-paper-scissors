const playBtn = document.querySelector(".playBtn");

playBtn.addEventListener("mouseover", () => {
    playBtn.style.cssText = "background-color: #8BE200;";
    playBtn.addEventListener("mouseout", () => {
        playBtn.style.cssText = "background-color: #818589;"
    });
});

