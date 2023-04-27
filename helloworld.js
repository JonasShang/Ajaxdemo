function loadData() {
// Get an instance of the XMLHttpRequest Object
    var req = new XMLHttpRequest();
// Pre set-up a connection to the server
    req.open("GET", "helloworld.xml", true);
// Event handler function
    req.onreadystatechange = function() {
// If all data has been received and the request was successful
        if(req.readyState == 4 && req.status == 200) {
// Create a table in the reserved block <div> with ID “present”
            var tab_content ="<table><tr><td id=\"content\"></td></tr></table>";
// The property "document" represents the current HTML document
            document.getElementById("present").innerHTML = tab_content;
// Get the table col with ID “content” to update with XML data
            var output = document.getElementById("content");
            var xml = req.responseXML;
            var length = xml.getElementsByTagName("message").length;
            // Access all childNodes of the root element via documentElement
            for(var i=0;i<length;i++) {
// Append the value of <lang> and <text> to table column with ID “content”
                var langTag =xml.documentElement.getElementsByTagName("message")[i].getElementsByTagName("lang")[0].firstChild.nodeValue;
                output.appendChild(document.createTextNode(langTag));
                output.appendChild(document.createTextNode(" -- "));
                var textTag = xml.documentElement.getElementsByTagName("message")[i].getElementsByTagName("text")[0].firstChild.nodeValue;
                output.appendChild(document.createTextNode(textTag));
                output.appendChild(document.createElement("br"));
            } } }
    req.send(null);
}