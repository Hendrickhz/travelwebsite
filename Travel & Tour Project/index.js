let closeBtn = document.getElementById("closeBtn");
let showBtn = document.getElementById("showBtn");
let navBar = document.getElementById("nav-bar")

showBtn.addEventListener("click",()=> {
 navBar.style.display = "block";
 showBtn.style.display = "none";
 closeBtn.style.display ="block";
})
closeBtn.addEventListener("click",()=>{
  navBar.style.display = "none";
  showBtn.style.display = "block";
  closeBtn.style.display ="none";

})