const searchinput = document.querySelector(".search-input");

searchinput.addEventListener("keyup", function(e){
if(e.keycode === 13){
    var value = searchinput.value;
    if(value){
        window.location.href = "/read.html?/" + value;
    }
}

})