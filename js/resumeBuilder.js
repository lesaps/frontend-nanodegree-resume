
var bio = {
	"name" : "Eli Sapo",
	"role" : "Web Developer",
	"welcomeMessage" : "Thanks for checking out my resume.",
	"contactInfo" : {
		"mobile" : 000-000-0000,
		"email" : "someemail@gmail.com",
		"twitter" : "",
		"github" : "",
		}, 
	"location" : "Brooklyn, NY",
	"skills" : [
		"HTML", "CSS", "JavaScript"
		],
	"bioPic" : "images/fry.jpg"
}

var work = {
	"jobs" : [
		{
			"employer" : "Cool Job",
			"title" : "Assitant Editor",
			"location" : "Brooklyn, NY",
			"dates" : "February 2014 - Current",
			"description" : "<li>Assit in managing production deadlines. </li><li>Bring in new media and rough cut.</li><li>Manage team of translators and direct subtitle palcement."
		},
		{
			"employer" : "Cool Job",
			"title" : "Assitant Editor",
			"location" : "Brooklyn, NY",
			"dates" : "February 2014 - Current",
			"description" : "<li>Assit in managing production deadlines. </li><li>Bring in new media and rough cut.</li><li>Manage team of translators and direct subtitle palcement."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Amazing App",
			"date" : "January 2015",
			"description" : "The best app in the world",
			"images" : [
				"images/fry.jpg"
			]
		},
		{
			"title" : "Amazing App",
			"date" : "January 2015",
			"description" : "The best app in the world",
			"images" : [
				"images/fry.jpg"
			]
		},
		{
			"title" : "Amazing App",
			"date" : "January 2015",
			"description" : "The best app in the world",
			"images" : [
				"images/fry.jpg"
			]
		}
	]
}

education = {
	"schools" : [
		{
			"name" : "College",
			"location" : "Los Angeles, CA",
			"degree" : "BA",
			"majors" : [
				""
			],
			"dates" : "",
			"url" :	""		
		},
		{
			"name" : "College",
			"location" : "Los Angeles, CA",
			"degree" : "BA",
			"majors" : [
				""
			],
			"dates" : "",
			"url" :	""
		}
		],

	"onlineCourses" : [
		{
		"title" : "",
		"school" : "Udacity",
		"dates" : "",
		"url" : ""
		}
	]
}
//$("#header").append(education.schools.[0]);
//$("#main").append(bio.name + " " + bio.age + " " + bio.role + " " + bio.skills + " " + bio.contactInfo + " " + bio.image);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(HTMLheaderName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(HTMLheaderRole);

var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(HTMLbioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(HTMLwelcomeMsg);


if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
}
 
function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

function displayProjects () {
	for (projects in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}

}

//$("#projects").append(formattedProjects);
//displayProjects();
displayWork();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
 	logClicks(x,y);
});



function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
        
    return name[0] + " " + name[1];
};

//$("#main").append(internationalizeButton);