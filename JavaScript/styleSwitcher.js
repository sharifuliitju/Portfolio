const links = document.querySelectorAll(".alternate-style"),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        }
        else {
            links[i].setAttribute("disabled", "true");
        }
    }
}

// body Skin

const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.className = "dark";
        }
        else {
            document.body.className = "";
        }
    })
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

var typed = new Typed(".typing", {
    strings: ["Graphic Designer","Photographer", "Contest Programmer","Cyber Security Beginner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



// Aside navbar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSelection = allSection.length;

for(let i = 0;i<totalNavList;i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    for(let i=0;i<totalSelection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}