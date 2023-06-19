let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nxtbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});

nxtbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 200;
})

backbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 200;
})