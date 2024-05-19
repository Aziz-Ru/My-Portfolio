const TypingText = document.getElementById("typing-text");
const navLinkList = document.querySelectorAll("#nav-links");
const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navigation");
const allTypedText = [
  "A Web Developer.",
  "A Photographer.",
  "A Web Desginer.",
  "A Backend Developer",
];

let alltypeTextCnt = 0;
let text = allTypedText[alltypeTextCnt];
let i = 0,
  cnt = 0;

function typeWriting() {
  if (alltypeTextCnt < allTypedText.length) {
    if (i < text.length && cnt == 0) {
      if (i == text.length - 1) cnt = 1;
      TypingText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriting, 300);
    } else if (cnt == 1) {
      if (i == 0) {
        cnt += 1;
        // alltypeTextCnt += 1;
      }
      const viewString = TypingText.innerHTML;
      TypingText.innerHTML = viewString.substring(0, i);
      i--;
      setTimeout(typeWriting, 200);
    } else if (cnt == 2) {
      alltypeTextCnt += 1;
      if (alltypeTextCnt == allTypedText.length) {
        alltypeTextCnt = 0;
      }
      cnt = 0;
      text = allTypedText[alltypeTextCnt];
      setTimeout(typeWriting, 200);
    }
  }
}
typeWriting();

window.onscroll = () => {
  sections.forEach((section) => {
    const scrollY = window.scrollY;
    const offset = section.offsetTop;
    const id = section.getAttribute("id");
    if (scrollY > 400) {
      navbar.style.backgroundColor = "#ffffff";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
    if (scrollY > offset - 100) {
      navLinkList.forEach((link) => {
        link.classList.remove("active");
        const href = link.href;
        const index = href.indexOf("#");
        if (id == href.substr(index + 1)) {
          link.classList.add("active");
        }
      });
    }
  });
};

