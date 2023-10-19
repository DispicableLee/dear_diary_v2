import Page from "./scripts/page"
import PageForm from "./scripts/page-form"


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("loaded")
    const main = document.getElementById('main')
    const page = new Page(main)
    main.appendChild(page)

})