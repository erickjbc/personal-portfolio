// Functions

// This function will toogle the display of an flex display element
const hideElement = id => {
    var x = document.getElementById(id);
    if (x.style.display !== 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    };
};

// This function toogles the border for section heading elements
const bottomBorderHide = id => {
    var x = document.getElementById(id);
    // console.log(x.style.borderBottom);
    if (x.style.borderBottom !== 'none') {
        x.style.borderBottom = 'none';
    } else {
        x.style.borderBottom = '3px solid #2727E6';
    };
};

// This function toogles between expand_more and expand_less material icons
const toogleArrow = id => {
    var x = document.getElementById(id);
    if (x.innerHTML === 'expand_more') {
        x.innerHTML = 'expand_less';
    } else {
        x.innerHTML = 'expand_more';
    };
};

// This function hides the content, changes border and arrow for Projects Section
const projectToogle = () => {
    hideElement('projects-content');
    bottomBorderHide(prHead.id);
    toogleArrow('project-toogle');
}

// This function hides the content, changes border and arrow for Skills Section
const skillsToogle = () => {
    hideElement('skills-content');
    bottomBorderHide(skHead.id);
    toogleArrow('skills-toogle');
}

// This function hides the content, changes border and arrow for Tools Section
const toolsToogle = () => {
    hideElement('tools-content');
    bottomBorderHide(tlHead.id);
    toogleArrow('tools-toogle');
}

// This function hides the content, changes border and arrow for Contact Section
const contactToogle = () => {
    hideElement('contact-content');
    toogleArrow('contact-toogle');
}


// Document Elements

var prHead = document.getElementById('projects-heading');
var prMenu = document.getElementById("projects-menu");
var prCont = document.getElementById("projects-content");

var skHead = document.getElementById("skills-heading");
var skMenu = document.getElementById("skills-menu");
var skCont = document.getElementById("skills-content");

var tlHead = document.getElementById("tools-heading");
var tlMenu = document.getElementById("tools-menu");
var tlCont = document.getElementById("tools-content");

var ctHead = document.getElementById("contact-heading");
var ctMenu = document.getElementById("contact-menu");
var ctCont = document.getElementById("contact-content");

// Event Listeners

prHead.onclick = function() {projectToogle()};
prMenu.onclick = function() {projectToogle()};

skHead.onclick = function() {skillsToogle()};
skMenu.onclick = function() {skillsToogle()};

tlHead.onclick = function() {toolsToogle()};
tlMenu.onclick = function() {toolsToogle()};

ctHead.onclick = function() {contactToogle()};
ctMenu.onclick = function() {contactToogle()};

projectToogle();
skillsToogle();
toolsToogle();
contactToogle();

