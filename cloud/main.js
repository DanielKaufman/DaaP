
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
require('cloud/app.js');
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
// tourCreated trigger for a when someone creates a Tour object
Parse.Cloud.define("tourCreated", function(request, response) {
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
});
