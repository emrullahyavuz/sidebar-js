const sidebar = document.querySelector(".sidebar");
const bar = document.querySelector(".bar");
const close = document.querySelector(".closeIcon");

bar.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})

close.addEventListener("click", () => {
    sidebar.classList.remove("active")
})