var bodyparser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://tarun007:skart1234@ds125385.mlab.com:25385/skart',{useNewUrlParser:true},(err)=>{
	if(err) throw err;
	else console.log('Database connection succcesfully established..');
});
var userinfoSchema=new mongoose.Schema({
	username: String,
	email: String,
	phone : Number,
	password : String

});

var productSchema = new mongoose.Schema({
	title:String,
	description:String,
	image:String,
	quantity:String,
	price:Number
});

var feedbackSchema= new mongoose.Schema({
	index:Number,
	comment:String,
	star:Number

})

var userinfoe = mongoose.model('userinfo', userinfoSchema);
var products = mongoose.model('product', productSchema);
var feedbackk = mongoose.model('feedback',feedbackSchema);

var jsondata= fs.readFileSync('controllers/cat.json');
// console.log(jsondata)
var maindata = JSON.parse(jsondata);

console.log(maindata.prod.length);
// console.log(maindata.length);
// for(var i = 0; i < maindata.prod.length; i++) {
// 	products(maindata.prod[i]).save((err)=>{
// 		if(err) console.log(err);
// 		else console.log('Data Saved');
// 	})
// }

module.exports = function(app) {
	var jsonparser = bodyparser.json();
	app.get('/home',(req,res)=>{
		console.log("In server");
	})
	app.post('/register',jsonparser,(req,res)=>{
		console.log(req.body);
		userinfoe(req.body).save((err)=>{
			if(err) throw err;
			else console.log('Saved');
		})
		console.log("posting register")
	})
	app.post('/description',jsonparser,(req,res)=>{
		console.log(req.body);
		feedbackk(req.body).save((err)=>{
			if(err) throw err;
			else console.log("saved");
		})
		console.log("Updating feedback");
	})
	app.post('/description1',jsonparser,(req,res)=>{
		console.log(req.body);
		
		feedbackk.find({},(err,fed)=>{
			if(err) throw err;
			else {
				var feed=[];
				for(var i=0;i<fed.length;i++) {
					if(req.body.a===fed[i].index) {
						feed.push(fed[i]);
					}
				}
				res.send(feed);
				return;
			}
		})
		console.log("feed me.....")
	})

	app.post('/login',jsonparser,(req,res)=>{
		console.log(req.body);
		userinfoe.find({}, (err, data)=>{
			if(err) throw err;
			else {
				for(var i=0;i<data.length;i++) {
					if((data[i].email===req.body.email || data[i].phone===req.body.email)&&data[i].password===req.body.password) {
						res.send({check:1,user:data[i]});
						return;
					}
				}
			}
		})
		console.log("hekkooooo");

	})
}
