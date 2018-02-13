var about = document.getElementById('about');
var projects = document.getElementById('projects');
var els = {"about": about, "projects": projects};

var focus = null;

about.addEventListener("transitionend", function(event){
    transitionEnd("about", event);
});

projects.addEventListener("transitionend", function(event){
    transitionEnd("projects", event);
});

function transitionEnd(id, event) {
    // If this just finished collapsing, potentially have to expand the other
    if(event.propertyName == "width") {
        if(focus != null && focus != id) {
            expandEl(focus);
        }
    }
};

function toggleContent(id) {
    if(focus == null) {
        focus = id;
        expandEl(id);
    }
    else if(focus == id) {
        focus = null;
        collapseEl(id);
    }
    else {
        var other = (id == "about") ? "projects" : "about";
        focus = id;
        collapseEl(other);
    }
}

function expandEl(id) {
    els[id].className = "expanded";
};

function collapseEl(id) {
    els[id].className = "collapsed";
};
