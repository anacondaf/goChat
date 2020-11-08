window.onload = () => {
    //avatar event
    const userAvatarImg = document.querySelector(".user__avatar img");
    const userAvatarBound = document.querySelector(".avatar__bound");
    //sub_menu toggling
    const submenu = document.querySelector(".user__submenu");

    userAvatarImg.addEventListener("click", (e) => {
        userAvatarBound.classList.toggle("bound__status");

        submenu.classList.toggle("submenu__hidden");
    });

    userAvatarImg.addEventListener("mouseover", (e) => {
        userAvatarBound.style.opacity = 1;
    });

    userAvatarImg.addEventListener("mouseleave", (e) => {
        userAvatarBound.style.opacity = 0;
    });
};
