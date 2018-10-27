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
var server=http.createServer(
    function(req,res) {
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("Hello from Node.  Now is: " + formatAMPM() + "\n\n");
	res.write('Evaluating REST call http://tw2.triggerware.com//reldata2017?user=...&password=...' + "\n\n");
        var request = require("request");
        request('http://tw2.triggerware.com/reldata2017?user=allard@oceanpark.com&password=A1fslnfsln',
                //"https://jsonplaceholder.typicode.com/todos/1",
                function(error,response,body) {
                    res.write(body);
                    res.end();
                });
    });

server.listen(8081);
