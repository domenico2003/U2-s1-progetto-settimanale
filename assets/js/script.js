// scipt navbar

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
        document.querySelector("nav button").classList.add("button-green")
        document.querySelector("nav").classList.add("slideUp");
    }else{
        document.querySelector("nav button").classList.remove("button-green")
        document.querySelector("nav").classList.remove("slideUp");
    }
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        document.querySelector("main").classList.add("padding-destro");
        document.querySelector("aside").classList.add("side-fissata");
    }else{
        document.querySelector("aside").classList.remove("side-fissata");
        document.querySelector("main").classList.remove("padding-destro");
    }
}



// scipt m
   
    let m = document.querySelectorAll("svg path")

    setInterval(() => {
        let random = Math.floor(Math.random() * m.length)
        let mSelected = m[random]
        mSelected.style.opacity && mSelected.style.opacity === "0" ? mSelected.style.opacity = 1 : mSelected.style.opacity = 0
    }, 40);
    // }