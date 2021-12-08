let sidebar = document.querySelector(".sidebar");
let side = document.querySelector(".btnTwo");
let btnOne = document.querySelector(".btnOne");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  if(sidebar.classList.contains("sidebar-none")) {
    sidebar.classList.remove("sidebar-none");
  } else {
    sidebar.classList.add("sidebar-none");
  }
  sidebar.classList.toggle("open");
  menuBtnChange();
});

side.addEventListener("click", ()=>{
  if(sidebar.classList.contains("sidebar-none")) {
    sidebar.classList.remove("sidebar-none");
  } else {
    btnOne.classList.add("sidebar-none");
  }
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}
