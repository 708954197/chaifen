var express = require ("express");
var fs = require ("fs");
var url = require ("url");
var app = express();

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/toodlist")
var TodoSchema = mongoose.Schema({
    "id": String,
    "title": String,
    "done":Boolean
});
var todo = mongoose.model("todo",TodoSchema)


app.use(express.static("static"));

app.get("/getall",function(req,res){
    todo.find({},function (err, data) {
       res.json({"mapList":data})
    })
})
app.get("/del",function(req,res){
	var id = url.parse(req.url , true).query.id;
	console.log(id);
    todo.find({},function (err, data) {
        var arr = data
        arr = arr.filter(function(item){
			return item.id != id;
		})

        res.json({"mapList" : arr});
        todo.remove({"id":id},function (err, data) {
        })
    })

});
app.get("/changetitle",function(req,res){
	var id = url.parse(req.url , true).query.id;
	var title = url.parse(req.url , true).query.title;
	console.log(id);
    todo.find({},function (err, data) {
        var arr = data
        arr.forEach(function(item){
			if(item.id == id){
				item.title = title
			}
		});
        res.json({"mapList" : arr});
        todo.update({"id":id},{$set:{"title":title}},function (err, data) {
        })
    })

});
app.get("/changedone",function(req,res){
	var id = url.parse(req.url , true).query.id;
	var done = url.parse(req.url , true).query.done == 1 ? true : false;

    todo.find({},function (err, data) {
        var arr = data
        arr.forEach(function(item){
            if(item.id == id){
                item.done = done
            }
        });
        res.json({"mapList" : arr});
        todo.update({"id":id},{$set:{"done":done}},function (err, data) {
        })
    })

});
app.get("/add",function(req,res){
	var id = url.parse(req.url , true).query.id;
	var title = url.parse(req.url , true).query.title;
	todo.find({},function (err, data) {
		var arr = data

		arr.push({
            id : id,
			title : title,
			done :false
		})
        res.json({"mapList" : arr});
        todo.create({"id":id,"title":title,"done":false},function (err,data) {
        })
    })
});
app.listen(3000)