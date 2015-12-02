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