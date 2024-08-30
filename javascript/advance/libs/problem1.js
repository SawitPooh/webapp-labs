let btn = document.querySelector("button");

btn.onclick = function textChange() {
    let rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.color = rndCol;
}
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", textChange);
