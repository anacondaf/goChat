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
};