var names = ["Diego", "Gabriel", "Lucas"];
window.onload = function() {
    var data="";
for(let i=0;i<names.length;i++){
     data+="<ul><li>"+names[i]+"</ul></li>"
}
document.getElementById("list").innerHTML = data;
}