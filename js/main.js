let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;
function increment() {
    // Use the plus equal technique
    count += 1;
    countEl.innerText = count;
}
// Create a save() function
function save() {
    let preveEntire = count + " -";
    saveEL.innerText += preveEntire;
}