const courses =[
    {
        name: "Complete React JS",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },

    {
        name: "Complete Mern course",
        price: "2.7"
    },
    {
        name: "Complete C++ course",
        price: "2.9"
    },
    {
        name: "Complete JAVA Bootcamp",
        price: "3.2"
    },
    {
        name: "JavaScript",
        price: "2.0"
    }
];
function generatLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML ="";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);


        
    });
    
}
//generatLIST();
window.addEventListener("load",generatLIST);
const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price - b.price );
    generatLIST();
})
window.addEventListener("load",generatLIST);
const btn = document.querySelector(".button");
btn.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price - a.price );
    generatLIST();
})