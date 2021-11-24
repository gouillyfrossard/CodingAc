document.onreadystatechange = function() {

    var footer = document.querySelector('footer div');

    var grand = footer.getElementsByTagName("button")[0];
    var petit = footer.getElementsByTagName("button")[1];
    var select = footer.getElementsByTagName("select")[0];
    var body = document.getElementsByTagName("body")[0];

    var color = select.selectedIndex;
    var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    var change = parseInt(style);

    grand.onclick = function up() {
        change++;
        document.body.style.fontSize = change + 'px';
    };
    petit.onclick = function down() {
        change--;
        //console.log(change);
        document.body.style.fontSize = change + 'px';
    }

    select.onchange = function () {
    var couleur = select.selectedIndex;
    document.body.style.background = select.options[couleur].value;
    }

}