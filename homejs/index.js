const searchinput = document.querySelector(".search-input");

searchInput.addEventListener("keyup",function(e){
if(e.keyCode === 13){
    var value = searchinput.value;
    if(value){
        window.location.href = "read.html?" + value;
     }
   }

})