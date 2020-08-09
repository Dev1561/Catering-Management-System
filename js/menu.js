/*  filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClass("column")
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    document.writeln(arr1);
    arr2 = name.split(" ");
    document.writeln(arr2);
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}  */

function filterItems() {

    var input, filter, ul, li, h4, i, textvalue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        document.getElementsByClassName("img")[i].style.display = "none";
        h4 = li[i].getElementsByTagName("h4")[0];
        textvalue = h4.textContent || h4.innerHTML;
        if (textvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}