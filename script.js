// create variable
let i = 0;
let ab;
displayCD(i);

function displayCD (i) {
    // create a XMLHttpRequest object
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this, i);
        }
    };
    // Send a request to server
    xmlhttp.open("GET", "/artist.xml", true);
    xmlhttp.send();
}

function myFunction(xml, i) {
    let xmlDoc = xml.responseXML;
    ab = xmlDoc.getElementsByTagName("CD");
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    ab[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    ab[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    ab[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
// this function for next Artist,Title,Year
function next() {
    if( i < ab.length-1){
        i++;
        displayCD(i);
    }
}
// this function for previous Artist,Title,Year
function previous(){
    if (i> 0){
        i--;
        displayCD(i);
    }
}