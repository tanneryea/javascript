function loadPage(){
var Box = document.createElement("div");
Box.id = "Box";
document.body.appendChild(Box);

var BannerYogi = document.createElement("div");
BannerYogi.id = "BannerYogi";
Box.appendChild(BannerYogi);

var BannerYogiContent = document.createElement("a");
BannerYogiContent.style="font-family: 'Gill Sans', Verdana, sans-serif; font-size: 1.2em; padding: 20px;";
BannerYogiContent.href="https://vote.org/";
BannerYogiContent.innerText="33";
BannerYogi.appendChild(BannerYogiContent);

var Banner = document.createElement("div");
Banner.id = "Banner";
Box.appendChild(Banner);

var BannerLink = document.createElement("a");
BannerLink.href = "/";
BannerLink.title = "Daring Fireball: Home";
Banner.appendChild(BannerLink);

var BannerImage = document.createElement("img");
BannerImage.src = "images/download.png";
BannerImage.alt = "Daring Fireball";
BannerImage.height = "56";
BannerLink.appendChild(BannerImage);

var Sidebar = document.createElement("div");
Sidebar.id = "Sidebar";
Box.appendChild(Sidebar);

var SidebarText = document.createElement("p");
SidebarText.innerHTML = "By <strong>John&nbsp;Gruber</strong>";
Sidebar.appendChild(SidebarText);

//Creates sidebar and entries
var SidebarList = document.createElement("ul");
Sidebar.appendChild(SidebarList);

//Archive link
var ArchiveItem = document.createElement("li");
SidebarList.appendChild(ArchiveItem);

var ArchiveItemLink = document.createElement("a");
ArchiveItemLink.href = "/archive/";
ArchiveItemLink.title = "Previous articles.";
ArchiveItemLink.innerHTML = "Archive";
ArchiveItem.appendChild(ArchiveItemLink);

//Talk show link
var theTalkShowItem = document.createElement("li");
SidebarList.appendChild(theTalkShowItem);

var theTalkShowItemLink = document.createElement("a");
theTalkShowItemLink.href = "/thetalkshow/";
theTalkShowItemLink.title = "America’s favorite 3-star podcast.";
theTalkShowItemLink.innerHTML = "The Talk Show";
theTalkShowItem.appendChild(theTalkShowItemLink);

//Dithering link
var ditheringItem = document.createElement("li");
SidebarList.appendChild(ditheringItem);

var ditheringItemLink = document.createElement("a");
ditheringItemLink.href = "https://dithering.fm/";
ditheringItemLink.title = "Three episodes per week, 15 minutes per episode. Not a minute less, not a minute more.";
ditheringItemLink.innerHTML = "Dithering";
ditheringItem.appendChild(ditheringItemLink);

//Projects link
var projectsItem = document.createElement("li");
SidebarList.appendChild(projectsItem);

var projectsItemLink = document.createElement("a");
projectsItemLink.href = "/projects/";
projectsItemLink.title = "Software projects, including SmartyPants and Markdown.";
projectsItemLink.innerHTML = "Projects";
projectsItem.appendChild(projectsItemLink);

//Contact link
var contactItem = document.createElement("li");
SidebarList.appendChild(contactItem);

var contactItemLink = document.createElement("a");
contactItemLink.href = "/contact/";
contactItemLink.title = "How to send email or feedback regarding Daring Fireball.";
contactItemLink.innerHTML = "Contact";
contactItem.appendChild(contactItemLink);

//Colophon link
var colophonItem = document.createElement("li");
SidebarList.appendChild(colophonItem);

var colophonItemLink = document.createElement("a");
colophonItemLink.href = "/colophon/";
colophonItemLink.title = "About this site and the tools used to produce it.";
colophonItemLink.innerHTML = "Colophon";
colophonItem.appendChild(colophonItemLink);

//Feeds link
var feedsItem = document.createElement("li");
SidebarList.appendChild(feedsItem);

var feedsItemLink = document.createElement("a");
feedsItemLink.href = "/feeds/";
feedsItemLink.innerHTML = "RSS Feed";
feedsItem.appendChild(feedsItemLink);

//Twitter link
var twitterItem = document.createElement("li");
SidebarList.appendChild(twitterItem);

var twitterItemLink = document.createElement("a");
twitterItemLink.href = "https://twitter.com/daringfireball";
twitterItemLink.innerHTML = "Twitter";
twitterItem.appendChild(twitterItemLink);

//Sponsorship link
var sponsorshipItem = document.createElement("li");
SidebarList.appendChild(sponsorshipItem);

var sponsorshipItemLink = document.createElement("a");
sponsorshipItemLink.href = "/feeds/sponsors/";
sponsorshipItemLink.innerHTML = "Sponsorship";
sponsorshipItem.appendChild(sponsorshipItemLink);

//Sidebar with Simris links
var SidebarMartini = document.createElement("div");
SidebarMartini.id = "SidebarMartini";
Sidebar.appendChild(SidebarMartini);

var SimrisLink = document.createElement("a");
SimrisLink.href = "https://www.simris.com/";
SidebarMartini.appendChild(SimrisLink);

var SimrisImage = document.createElement("img");
SimrisImage.alt = "Simris";
SimrisImage.src = "images/simris-1.jpeg";
SimrisImage.height = "90";
SimrisLink.appendChild(SimrisImage);

var SimrisDescription = document.createElement("p");
SidebarMartini.appendChild(SimrisDescription);

var SimrisLink = document.createElement("a");
SimrisLink.href = "https://www.simris.com/";
SimrisLink.innerHTML = "Simris® Algae Omega-3";
SimrisDescription.appendChild(SimrisLink);

SimrisDescription.append(". Straight from the source in nature. No fish, no harm.");

//End of sidebar

var Main = document.createElement("div");
Main.id = "Main";
Box.appendChild(Main);

var articleClass = document.createElement("div");
articleClass.className = "article"; 
Main.appendChild(articleClass);

//Start of description list

var descriptionList = document.createElement("dl");
articleClass.appendChild(descriptionList);

//Markdown project
var markdownDT = document.createElement("dt");
descriptionList.appendChild(markdownDT);

var markdownDTLink = document.createElement("a");
markdownDTLink.href = "/projects/markdown/";
markdownDTLink.title = "Markdown project page";
markdownDTLink.innerHTML = "Markdown";
markdownDT.appendChild(markdownDTLink);

markdownDT.append(" (v1.0.1)")

var markdownDD = document.createElement("dd");
descriptionList.appendChild(markdownDD);

var markdownText = document.createElement("p");
markdownText.innerHTML = "A text-to-HTML formatting syntax for web writers, implemented as a plug-in for Movable Type, Blosxom, and BBEdit. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).";
markdownDD.appendChild(markdownText);

//SmartyPants project
var smartypantsDT = document.createElement("dt");
descriptionList.appendChild(smartypantsDT);

var smartypantsDTLink = document.createElement("a");
smartypantsDTLink.href = "/projects/smartypants/";
smartypantsDTLink.title = "SmartyPants project page";
smartypantsDTLink.innerHTML = "SmartyPants";
smartypantsDT.appendChild(smartypantsDTLink);

smartypantsDT.append(" (v1.5.1)")

var smartypantsDD = document.createElement("dd");
descriptionList.appendChild(smartypantsDD);

var smartypantsText = document.createElement("p");
smartypantsText.innerHTML = "A plug-in for Movable Type, Blosxom, and BBEdit that provides smart quotes and other typographic goodies.";
smartypantsDD.appendChild(smartypantsText);


//Vesper project
var vesperDT = document.createElement("dt");
descriptionList.appendChild(vesperDT);

var vesperDTLink = document.createElement("a");
vesperDTLink.href = "https://itunes.apple.com/us/app/vesper/id655895325?mt=8";
vesperDTLink.title = "Vesper";
vesperDTLink.innerHTML = "Vesper";
vesperDT.appendChild(vesperDTLink);

vesperDT.append(" (v2.0)")

var vesperDD = document.createElement("dd");
descriptionList.appendChild(vesperDD);

var vesperText = document.createElement("p");
vesperText.innerHTML = "Vesper was a simple and elegant tool for collecting notes, ideas, things to do — anything you want to remember. Vesper lets you use tags to group related items into playlist-like collections, and now offers fast, reliable cloud-based syncing. Alas, ";
vesperDD.appendChild(vesperText);

var vesperInnerLink = document.createElement("a");
vesperInnerLink.href = "https://daringfireball.net/2016/08/vesper_adieu";
vesperInnerLink.innerHTML = "it is now defunct.";
vesperText.appendChild(vesperInnerLink);


//Open URLs in Safari
var safariDT = document.createElement("dt");
descriptionList.appendChild(safariDT);

var safariDTLink = document.createElement("a");
safariDTLink.href = "https://daringfireball.net/2010/08/open_urls_in_safari_tabs";
safariDTLink.title = "Open URLs in Safari Tabs";
safariDTLink.innerHTML = "Open URLs in Safari Tabs";
safariDT.appendChild(safariDTLink);

var safariDD = document.createElement("dd");
descriptionList.appendChild(safariDD);

var safariText = document.createElement("p");
safariText.innerHTML = "A Mac OS X service that takes as input the text selection in the frontmost app. Every URL within the selected text is opened in a tab in one new window in Safari.";
safariDD.appendChild(safariText);

//EscapeForJSON
var jsonDT = document.createElement("dt");
descriptionList.appendChild(jsonDT);

var jsonDTLink = document.createElement("a");
jsonDTLink.href = "/projects/mt-escapeforjson";
jsonDTLink.title = "EscapeForJSON";
jsonDTLink.innerHTML = "EscapeForJSON";
jsonDT.appendChild(jsonDTLink);

var jsonDD = document.createElement("dd");
descriptionList.appendChild(jsonDD);

var jsonText = document.createElement("p");
jsonText.innerHTML = "A plug-in for Movable Type that escapes strings for JSON. Useful when creating templates for";
jsonDD.appendChild(jsonText);

var jsonInnerLink = document.createElement("a");
jsonInnerLink.href = "https://jsonfeed.org/";
jsonInnerLink.innerHTML = " JSON feeds.";
jsonText.appendChild(jsonInnerLink);


//BBColors
var BBColorsDT = document.createElement("dt");
descriptionList.appendChild(BBColorsDT);

var BBColorsDTLink = document.createElement("a");
BBColorsDTLink.href = "/projects/bbcolors/";
BBColorsDTLink.title = "BBColors project page";
BBColorsDTLink.innerHTML = "BBColors";
BBColorsDT.appendChild(BBColorsDTLink);

BBColorsDT.append(" (v1.0.1)")

var BBColorsDD = document.createElement("dd");
descriptionList.appendChild(BBColorsDD);

var BBColorsText = document.createElement("p");
BBColorsText.innerHTML = "A command-line tool for saving and loading text color schemes for BBEdit and TextWrangler. Obsoleted by the built-in color scheme preferences in BBEdit 10 or later.";
BBColorsDD.appendChild(BBColorsText);

//CSS Checker
var csscheckerDT = document.createElement("dt");
descriptionList.appendChild(csscheckerDT);

var csscheckerDTLink = document.createElement("a");
csscheckerDTLink.href = "/projects/csschecker/";
csscheckerDTLink.title = "CSS Syntax Checker project page";
csscheckerDTLink.innerHTML = "CSS Syntax Checker for BBEdit and TextWrangler";
csscheckerDT.appendChild(csscheckerDTLink);

csscheckerDT.append(" (v1.0.0)")

var csscheckerDD = document.createElement("dd");
descriptionList.appendChild(csscheckerDD);

var csscheckerText = document.createElement("p");
csscheckerText.innerHTML = "A combination of Perl and AppleScript that allows you to syntax-check CSS files using the W3C’s CSS Validation Service.";
csscheckerDD.appendChild(csscheckerText);

//Apache Config
var apacheconfigDT = document.createElement("dt");
descriptionList.appendChild(apacheconfigDT);

var apacheconfigDTLink = document.createElement("a");
apacheconfigDTLink.href = "/projects/apacheconfig/";
apacheconfigDTLink.title = "Apache Configuration module project page";
apacheconfigDTLink.innerHTML = "Apache Configuration Language Module for BBEdit";
apacheconfigDT.appendChild(apacheconfigDTLink);

apacheconfigDT.append(" (v1.0.7)")

var apacheconfigDD = document.createElement("dd");
descriptionList.appendChild(apacheconfigDD);

var apacheconfigText = document.createElement("p");
apacheconfigText.innerHTML = "Syntax-coloring language module for Apache configuration files, for BBEdit 8.0 or later.";
apacheconfigDD.appendChild(apacheconfigText);

//MT Config
var mtconfigDT = document.createElement("dt");
descriptionList.appendChild(mtconfigDT);

var mtconfigDTLink = document.createElement("a");
mtconfigDTLink.href = "/projects/mtconfig/";
mtconfigDTLink.title = "Movable Type Configuration module project page";
mtconfigDTLink.innerHTML = "Movable Type Configuration Language Module for BBEdit";
mtconfigDT.appendChild(mtconfigDTLink);

mtconfigDT.append(" (v1.0.2)")

var mtconfigDD = document.createElement("dd");
descriptionList.appendChild(mtconfigDD);

var mtconfigText = document.createElement("p");
mtconfigText.innerHTML = "Syntax-coloring language module for Movable Type configuration files (‘mt.cfg’), for BBEdit 8.0 or later.";
mtconfigDD.appendChild(mtconfigText);

//Tiger Details
var tigerdetailsDT = document.createElement("dt");
descriptionList.appendChild(tigerdetailsDT);

var tigerdetailsDTLink = document.createElement("a");
tigerdetailsDTLink.href = "/misc/2005/04/tiger_details";
tigerdetailsDTLink.title = "Tiger Details Report";
tigerdetailsDTLink.innerHTML = "Tiger Details Report";
tigerdetailsDT.appendChild(tigerdetailsDTLink);

var tigerdetailsDD = document.createElement("dd");
descriptionList.appendChild(tigerdetailsDD);

var tigerdetailsText = document.createElement("p");
tigerdetailsText.innerHTML = "Notes, comments, and observations regarding changes and additions to Mac OS X 10.4.";
tigerdetailsDD.appendChild(tigerdetailsText);

//bbdiff
var bbdiffDT = document.createElement("dt");
descriptionList.appendChild(bbdiffDT);

var bbdiffDTLink = document.createElement("a");
bbdiffDTLink.href = "/projects/bbdiff/";
bbdiffDTLink.title = "bbdiff project page";
bbdiffDTLink.innerHTML = "bbdiff";
bbdiffDT.appendChild(bbdiffDTLink);

bbdiffDT.append(" (v1.1)")

var bbdiffDD = document.createElement("dd");
descriptionList.appendChild(bbdiffDD);

var bbdiffText = document.createElement("p");
bbdiffText.innerHTML = "Command-line interface to BBEdit’s Find Differences command on Mac OS X. (Obsoleted by BBEdit 8.0's official ‘<code>bbdiff</code>’ tool (which is not based on mine), but some people still prefer using this script.)";
bbdiffDD.appendChild(bbdiffText);

//End of article div

//Footer

var footer = document.createElement("div");
footer.id = "Footer";
Main.appendChild(footer);

//Search form
var siteSearchForm = document.createElement("form");
siteSearchForm.id = "SiteSearch";
siteSearchForm.action = "https://daringfireball.net/search";
siteSearchForm.method = "get";
siteSearchForm.style = "margin-bottom: 2.5em;";
footer.appendChild(siteSearchForm);

var formInputDiv = document.createElement("div");
footer.appendChild(formInputDiv);

var formInput1 = document.createElement("input");
formInput1.name = "q";
formInput1.type = "text";
formInput1.value = "";
formInput1.style = "margin-right: 8px; width: 66%;"
formInputDiv.appendChild(formInput1);

var formInput2 = document.createElement("input");
formInput2.type = "submit";
formInput2.value = "Search";
formInputDiv.appendChild(formInput2);

//Small print
var smallprint = document.createElement("p");
smallprint.className = "smallprint";
footer.appendChild(smallprint);

var smallprintLink = document.createElement("a");
smallprintLink.href = "/preferences/";
smallprintLink.title = "Customize the font size and presentation options for this web site.";
smallprintLink.innerHTML = "Display Preferences";
smallprint.appendChild(smallprintLink);

smallprint.insertAdjacentHTML("beforeend", "<br/><br/>Copyright &copy; 2002–2020 The Daring Fireball Company LLC.");


//Create buttons

var redButton = document.createElement("button");
redButton.type = "button";
redButton.id = "redButton";
redButton.innerHTML = "Red Style";
footer.appendChild(redButton);

document.getElementById("redButton").addEventListener("click", redStyle);

var blueButton = document.createElement("button");
blueButton.type = "button";
blueButton.id = "blueButton";
blueButton.innerHTML = "Blue Style";
footer.appendChild(blueButton);

document.getElementById("blueButton").addEventListener("click", blueStyle);

var OGButton = document.createElement("button");
OGButton.type = "button";
OGButton.id = "OGButton";
OGButton.innerHTML = "Original Style";
footer.appendChild(OGButton);

document.getElementById("OGButton").addEventListener("click", OGStyle);

}


function redStyle(){
    var styleSheet = document.getElementById("stylesheet");
    styleSheet.href = "css/fireball_red.css";
}

function blueStyle(){
    var styleSheet = document.getElementById("stylesheet");
    styleSheet.href = "css/fireball_blue.css";
}


function OGStyle(){
    var styleSheet = document.getElementById("stylesheet");
    styleSheet.href = "css/fireball_screen.css";
}







