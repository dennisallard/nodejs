function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

var http=require('http')
var server=http.createServer(function(request,response)
{
	response.writeHead(200,
	                   {"Content-Type" : "text/plain"});
	response.end("Hello from Node.  Now is: " + formatAMPM() + "\n");
});
server.listen(8081);
