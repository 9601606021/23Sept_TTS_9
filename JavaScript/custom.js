function hitme() {
    console.log("called inside hitme");
}
document.getElementById("btn").addEventListener("click", function () { //Cannot read properties of null (reading 'addEventListener')
    console.log("called");
})