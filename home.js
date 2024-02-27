document.getElementById('slider').oninput = function() {
    var value = this.value;
    document.getElementById('overlay').style.opacity = (100 - value) / 100;
    if (value == 100) {
        document.getElementById('overlay').style.display = 'none';
    } else {
        document.getElementById('overlay').style.display = 'flex';
    }
};


let firstRun = sessionStorage.getItem("firstRun");
if(firstRun == undefined){
    sessionStorage.setItem("firstRun", true);
} else {
    document.getElementById('overlay').style.display = 'none';
}