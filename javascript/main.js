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