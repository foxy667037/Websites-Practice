// For Side-Bar Open:
const sideBar = document.getElementById("side-bar");
document.getElementById("buttonClick1").addEventListener('click',() => {
    sideBar.style.width = "19vw";
});

// For Side-Bar Close:
const closeSideBar = document.getElementById("closeSideBar").addEventListener("click",()=>{
    sideBar.style.width = "0vw";
});

// For Second Button:
document.getElementById("buttonClick2").addEventListener('click',()=>{
    alert("Working on it!!!");
});


// For Filter the categories:
const sideBarInput = document.getElementById('SidebarInput');
const sideBarListItems = document.querySelectorAll('.sidebarLists');
sideBarInput.addEventListener('input', () => {
    const filter = sideBarInput.value.toUpperCase();
    for(let index=0; index < sideBarListItems.length; index++){
        const item = sideBarListItems[index]; // Get the current list item
        if(item.textContent.toUpperCase().includes(filter)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }
    }    
});
