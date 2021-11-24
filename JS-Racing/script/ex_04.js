

window.onload = function() {

    var footer = document.getElementsByTagName("footer")[0];
    var div = footer.getElementsByTagName("div")[0];
    
    var str = "";

    document.addEventListener('keydown', function(l) {

        str = str + (l.key);
        //console.log(str);
        div.innerHTML = str.slice(-42);

    });
    
};
