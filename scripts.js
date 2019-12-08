 //Get an object using its ID
 function gObj(id){
    return document.getElementById(id);
 }

//Return specific value from the Get request string
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1].replace("%40", "@");
        }
    }
    return false;
}
 
//Validate an email
function valEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
 
//Validate a password - must be at least 8 characters including at least 1 number, 1 capital letter and 1 special character
function valPassword(password){
    var re = /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(String(password));
}

//Validate a name or last name - Only letters and spaces, no symbols
function valName(name){
    var re = /[A-Za-z ]{2,}/;
    return re.test(String(name));
}

function readAJAX(fileX, functionX){
    var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
	    if (this.readyState == 4 && this.status == 200) {
            eval(functionX + '(ajaxRequest.responseText);');
		}
	}
	ajaxRequest.open('GET', fileX);
	ajaxRequest.send();
}