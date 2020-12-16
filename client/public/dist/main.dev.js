"use strict";

window.onload = function () {
  //avatar event
  var userAvatarImg = document.querySelector(".user__avatar img");
  var userAvatarBound = document.querySelector(".avatar__bound"); //sub_menu toggling

  var submenu = document.querySelector(".user__submenu");
  userAvatarImg.addEventListener("click", function (e) {
    userAvatarBound.classList.toggle("bound__status");
    submenu.classList.toggle("submenu__hidden");
  });
  userAvatarImg.addEventListener("mouseover", function (e) {
    userAvatarBound.style.opacity = 1;
  });
  userAvatarImg.addEventListener("mouseleave", function (e) {
    userAvatarBound.style.opacity = 0;
  });
}; //navbar in Homepage


window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.boxShadow = "2px 2px 8px rgb(122, 122, 122)"; // document.querySelector("nav").style.backgroundColor = "#f1f1f1";
  } else {
    document.querySelector("nav").style.boxShadow = "none"; // document.querySelector("nav").style.backgroundColor = "inherit";
  }
};