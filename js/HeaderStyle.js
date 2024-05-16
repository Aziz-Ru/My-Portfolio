const navigation = document.getElementById("navigation");
window.onscroll = () => {
  if (document.body.scrollTop > 100) {
    navigation.style.top = "absolute";
    navigation.style.backgroundColor = "transparent";
  } else {
    navigation.style.position = "fixed";
    navigation.style.backgroundColor = "#ffffff";
    navigation.style.zIndex = 10;
  }
};
