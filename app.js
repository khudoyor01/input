const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    
    let input = document.getElementById("input").value;
    console.log(input);
    localStorage.setItem("server", input);
})

