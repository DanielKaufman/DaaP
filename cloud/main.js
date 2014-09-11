
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
require('cloud/app.js');
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world2!");
});

Parse.Cloud.define("redirect", function(request, response) {
  alert("fucking test");
  response.success("redirect!");
});

// addLink trigger for a when someone creates an image-link object
Parse.Cloud.define("addLink", function(request, response) {
var TestObject = Parse.Object.extend("redirect_links");
var testObject = new TestObject();
testObject.save({name: "pic3", link: "www.facebook.com", count:0, docName:""}).then(function(object) {
	response.success("Hello world!");
  });
});

Parse.Cloud.define("getLink", function(request, response) {
	alert("yay! getLink");
	var name = request.params.name;
	var docName = request.params.docName;
	var image = Parse.Object.extend("redirect_links"); 
	var query = new Parse.Query(image);
	query.equalTo("name", name);
	query.find({ success: function(results) {
		for (var i = 0; i < results.length; i++) { 
		  var object = results[i];
		  alert(object.id + ' - ' + object.get('link'));
		}
		var link = object.get("link");
		alert(link);
		object.increment("count");
		//object.set("doc_name",object.get("doc_name")+"&"+docName);
		
		if (!object.get(docName)) {
			object.set(docName,1);
			
		} else {
			object.increment(docName);
		}		
		
		alert("count= "+ object.get("count"));
		object.save();
		response.success(link);
		//return link;
	}, error: function(object, error) {
		//alert("Error: " + error.code + " " + error.message);
		response.success("getLink finished");
	} });
});


Parse.Cloud.define("getPics", function(request, response) {
  //var jas = http://api.dpstack.com/dealdo/api-v1?format=json&type=product&partner=dpdf&channel=p&country=us&q=iphone;
  response.success("Hello world!");
  $.ajax({
        url: 'http://anyorigin.com/get?url=http%3A//webapp.armadealo.com/home.json&callback=?',
        type: 'GET',
        dataType: "json",
        success: function() {alert(data);}
    });
});





