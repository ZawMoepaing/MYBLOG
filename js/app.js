let bars = document.querySelector('.bars');
let left_links = document.querySelector('.nav-top__left-links')
bars.onclick = function (){
    console.log(this.src);
    left_links.classList.toggle('show');
    if(this.src === "http://127.0.0.1:5500/blog/img/icons/bars.svg"){
        this.src = "http://127.0.0.1:5500/blog/img/icons/cross.svg";
    }else{
        this.src =  "http://127.0.0.1:5500/blog/img/icons/bars.svg"
    }
}