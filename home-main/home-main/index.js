let chatVisible = false;
let isScrolling = false;
const chatContainer = document.getElementById('chatContainer');
const videoContainer = document.getElementById('videoContainer');
let scrollTimeout;



function handleScroll() {

const video = document.getElementById('scrollVideo');
if (scrollTimeout) {
clearTimeout(scrollTimeout);
}

video.play();

scrollTimeout = setTimeout(() => {
video.pause();
},1); // Adjust this timeout as per your preference
}


window.addEventListener('scroll', handleScroll);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'videoContainer') {
                // Start playing video when it enters the viewport
                const video = document.getElementById('scrollVideo');
                video.play();
            } else if (entry.target.id === 'chatContainer') {
                // Start scrolling chat when it starts entering the viewport
                chatVisible = true;
                scrollChat();
            }
        } else {
            if (entry.target.id === 'videoContainer') {
                // Pause video when it leaves the viewport
                const video = document.getElementById('scrollVideo');
                video.pause();
            }
        }
    });
});

observer.observe(videoContainer);
observer.observe(chatContainer);

window.addEventListener('scroll', () => {
    isScrolling = true;
});

function scrollChat() {
    if (isScrolling && chatVisible) {
        chatContainer.scrollTop += 2;
        isScrolling = false;
    }
    setTimeout(scrollChat, );
}

// navbar
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});


// bottom navbar
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));


// bootom mode
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
//   document.querySelector('.indicator').style.backgroundColor = 'black';
})



