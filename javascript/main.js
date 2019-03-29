// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $nav = document.getElementById('#nav');
var $footer = document.getElementById('#footer');
// Helpers
var
/**
* @description Test if the body id is something
* @param  		{string}
* @return 		{bool}
*
*/
page = function page(name) {
  if (!name) {
    return $body.getAttribute('id');
  }

  return $body.getAttribute('id') == name;
};
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");

  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }

    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".tab-pane");

    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }

    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks);
  }
});
var tableMenus = document.querySelectorAll('.table-js--toggle');
tableMenus.forEach(function (tableMenu) {
  tableMenu.addEventListener('click', function (event) {
    console.log("forEach worked");
    console.log(event.target); // Get the parent with the `.accordion` class

    var closestParent = event.target.closest('.table-js--parent');
    console.log(closestParent);
    closestParent.classList.toggle('open');
  });
});
var activityLog = document.querySelectorAll('.activity-entry__tab');
activityLog.forEach(function (logItem) {
  logItem.addEventListener('click', function (event) {
    console.log("forEach worked");
    console.log(event.target); // Get the parent with the `.accordion` class
    // var closestParent = event.target.closest('.table-js--parent');
    // console.log(closestParent);

    logItem.classList.toggle('activity-entry__tab--expand');
    logItem.classList.toggle('activity-entry__tab--collapse'); // logItem.classList.toggle('activity-entry__tab--expand');
  });
});