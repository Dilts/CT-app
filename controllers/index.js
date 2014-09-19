// var mongoose = require('mongoose');
var user = require('../models/users.js').Upload;

// var indexController = {
// 	index: function(req, res) {
// 		res.render('index');
// 	},

// 	createUpload: function(req, res) {
// 	console.log(req.body)


//     var user = new userModel({
// 	    name: req.body.name,
// 	    url: req.body.url,
// 	    title: req.body.title,
// 	    desc: req.body.desc,
// 	    });  	
    
//     // req.user.name = req.body.name,
//     // req.user.url = req.body.url,
//     // req.user.title = req.body.title,
//     // req.user.desc = req.body.desc,

//     console.log(user)

//     user.create(user, function(err, doc) {
//     	if (err) {
//     		console.log('error not saving', err)
//     		res.send(404, 'did not save')
//     	}
//     	res.send(200)
//     }) 

//     // res.render('index', req)

// 	},

	

// };
exports.updateUser = function(req, res){
	console.log('Body is', req.body)

	var user2 = req.body;
	console.log(user2.name)
	// user.find({},function(err, users){
	// 	console.log(users)
	// })
	user.findOneAndUpdate({name: user2.name},user2, function(err, update){
	if(err){
		return res.send(500, err);

	}

	if(!update){
		return res.send(404);
	}

	return res.send(200, update);
	});
}

// module.exports = indexController;