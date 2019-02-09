var express = require('express');
 var controller = require('./controllers/controller');

 var app = express();
 var cor = require('cors');

 var corsOptions={
 	orgin: 'http://127.0.0.1',
 	optionSuccessStatus: 200
 }

 app.use(express.static('./public'));
 app.use(cor());

controller(app);

 app.listen(4000,'127.0.0.1',(err)=>{
 	if(err) console.log(err);
 	else console.log("Listening on port 4000.....")
 });