class PageForm{
    constructor(page){
        this.page = page
        // console.log(page)
        const form = document.createElement('form')
        form.setAttribute('id', 'dear-diary')
        this.makeFormStuff(form)
        this.page.htElement.appendChild(form)
    }

    makeFormStuff(form){
        const formTextArea = document.createElement('textarea')
        const formSubmit = document.createElement('input')
        formSubmit.type = "submit"
        form.appendChild(formTextArea)
        form.appendChild(formSubmit)
    }
    // E.PREVENTDEFAULT()
    // e.stopPropagation()

}

export default PageForm