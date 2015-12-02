/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("OCL");
var name = "OCL";
var role = "programmer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "OCL",
	"role" : "programmer",
	"contact_info" : {
		"mobile" : "123-456-7890",
		"email" : "123@gmail.com",
		"github" : "OCL29",
		"location" : "Tapei"
	},
	"bicPic" : "images/me.jpg",
	"welcome_message" : "welcome to my website",
	"skills" : [
		"programming", "photograph", "sleep"
	]
};


var work = {};
work.position = "develpoer";
work.employer = "Nit";
work.years = 3;

var education = {};
education["name"] = "NCU";
education["years"] = "2010-2012";
education["city"] = "tay";

$("#main").append(work["position"]);
$("#main").append(education.name);