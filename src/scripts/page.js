class Page{
    constructor(ele){
        this.ele = ele
        const pageDiv = document.createElement('div')
        pageDiv.setAttribute('class', 'page')
        this.htElement = pageDiv
        this.ele.appendChild(pageDiv)
    }


}

export default Page