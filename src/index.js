import Example from "./scripts/example"



document.addEventListener("DOMContentLoaded", ()=>{
    console.log("loaded")
    const main = document.getElementById('main')
    new Example(main)
})