import Page from "./scripts/page"
import PageForm from "./scripts/page-form"
import PageEmotion from "./scripts/page-emotion"
import { PageFlip } from "../node_modules/page-flip/dist/js/page-flip.module.js";


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("loaded")
    const main = document.getElementById('main')
    const emotionPage = new Page(main)
    new PageEmotion(emotionPage)
    const formPage = new Page(main)
    new PageForm(formPage)
    
    const diaryFormSubmit = document.querySelector('#dear-diary input')
    const diaryFormTextarea = document.querySelector('#dear-diary textarea')
    // PageFlip logic below
    diaryFormTextarea.addEventListener('focus', (e)=>{
        console.log('click')
        console.log(e.target)
        // e.stopPropagation()
    })

    const pageFlip = new PageFlip(main, {
        height: 600,
        width: 400,
        showCover: true,
        // minWidth: 400,
        // startPage: 1
        disableFlipByClick: true
        
    })
    pageFlip.loadFromHTML(document.querySelectorAll('.page'))
// ================================ form submission =================================
    diaryFormSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        const value = document.querySelector('textarea').value
        console.log(value)
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '7610dada3bmsh61f05a1a07c8822p1b4f32jsnfe2ddedeac0b',
                'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
            },
            body: new URLSearchParams({
		        text: value
	        })
        }
        fetch('https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/', options)
            .then((r)=>r.json())
            .then((json)=>{
                let resEmotions = json.emotions_normalized
                for(const emote of Object.keys(resEmotions)){
                    let idSearch = `${emote+'-label-li'}`
                    // console.log(idSearch)
                    let emotionLi = document.getElementById(idSearch)
                    let readOut = document.createTextNode(`${resEmotions[emote]}`)
                    emotionLi.appendChild(readOut)
                    // console.log("done")
                }
            })
    })
// ==================== page-flip implementation ================

})

