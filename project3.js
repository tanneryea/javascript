function openFeedback(){
	var form = document.getElementById("feedbackform");
	form.style.display = "block";
}

function sendFeedback(){
	var displayarea = document.getElementById("feedbackcontent");
	var name = document.getElementById("feedbacktext").value;
	var feedback = document.getElementById("feedbacktextarea").value;
	
	var namedisplay = document.createElement("H2");
	var feedbackdisplay = document.createElement("P");
	
	namedisplay.innerHTML = name;
	feedbackdisplay.innerHTML = feedback;
	
	displayarea.appendChild(namedisplay);
	displayarea.appendChild(feedbackdisplay);
}

function sortResourcedByName(){

 var idsandtitle = GetNamesAndIds(); /* An array of objects holding ids and titles for web resources. */
 idsandtitle.sort(dynamicSort("RTITLE"));
 var idsinorder = []; /* An array hold all the ids for the web resources objects when they have been sorted by title. */
 for(var i in idsandtitle){
	 var value = idsandtitle[i]["RID"];
	 idsinorder.push(value);
 }
 
 
 var container = document.getElementById("primaryresourcecontainer");
 idsinorder.forEach(function(fid){
 	var currentResource = document.getElementById(fid);
 	container.removeChild(currentResource);
 	container.appendChild(currentResource);
 });
 

}

function sortResourcedByID(){
 var idsandtitle = GetNamesAndIds(); /* An array of objects holding ids and titles for web resources. */
 idsandtitle.sort(dynamicSort("RID"));
 var idsinorder = []; /* An array hold all the ids for the web resources objects when they have been sorted by title. */
 for(var i in idsandtitle){
	 var value = idsandtitle[i]["RID"];
	 idsinorder.push(value);
 }

 var container = document.getElementById("primaryresourcecontainer");
 idsinorder.forEach(function(fid){
 	var currentResource = document.getElementById(fid);
 	container.removeChild(currentResource);
 	container.appendChild(currentResource);
 });

}

function dynamicSort(property){
	var sortOrder = 1;

	if(property[0] === "-"){
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a,b){
		if(sortOrder == -1){
			return b[property].localeCompare(a[property]);
		} else {
			return a[property].localeCompare(b[property]);
		}
	}
}

/* Get back an array of objects containing the ID and Title of every webresource div. */
function GetNamesAndIds(){
	var allResources = document.getElementsByClassName("webresource");
	var arrayOfSimpleObjects = []
	for(resource of allResources){
		var tempRID = resource.id;
		var titleDivs = resource.getElementsByClassName("title");
		var titleDiv = titleDivs[0];
		var tempRTITLE = titleDiv.innerText;
		var resourceIdAndTitle = {RID: tempRID, RTITLE: tempRTITLE};
		arrayOfSimpleObjects.push(resourceIdAndTitle);
	}
	return arrayOfSimpleObjects;
}





