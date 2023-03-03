window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
        document.querySelector("nav button").classList.add("button-green")
        document.querySelector("nav").classList.add("slideUp");
    }else{
        document.querySelector("nav button").classList.remove("button-green")
        document.querySelector("nav").classList.remove("slideUp");
    }
}