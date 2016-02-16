/**
 * NotebookController
 *
 * @description :: Server-side logic for managing notebooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getNote: function(req, res){
		var name = req.param("note");
		Notebook.find({notename: name}).then(note => {
			var exists = note[0];
			if(exists){
				locals = {}
				locals.name = name;
				locals.text = exists.notedata;
				return res.view("note.ejs", locals);
			}else{
				return res.send("You will have to create the note");
			}
		});
	},

	updateNote: function(req, res){
		var body = req.body;
		var name = body.urlname;
		var data = body.urldata;
		console.log(name);
		console.log(data);
		Notebook.update({notename: name},{notedata: data}).exec(function afterwards(err, updated){

		  if (err) {
		    return res.send("Update did not work");
		  }
		  console.log('Updated user to have name ' + updated[0].notedata);
			res.send("done");
		});
	},

	createNote: function(req, res){
		var name = req.param("name");
		Notebook.create({notename:name ,notedata:'Hello there'}).then(result=>{
			return res.send(result);
		});
	},

	all: function(req, res){
		return res.json({
			functions :['getNote', 'createNote', 'updateNote']
		})
	}


};
