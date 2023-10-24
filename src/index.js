import Page from "./scripts/page"
import PageForm from "./scripts/page-form"
import PageEmotion from "./scripts/page-emotion"
import { PageFlip } from "../node_modules/page-flip/dist/js/page-flip.module.js";


document.addEventListener("DOMContentLoaded", ()=>{
    openDiary()
    
    const diaryFormSubmit = document.querySelector('#dear-diary input')
    const diaryFormTextarea = document.querySelector('#dear-diary textarea')
    
    const diaryEntries = document.getElementById('entries')
    const clearTheMind = document.getElementById('clear-the-mind')
    clearTheMind.addEventListener('click', (e)=>{
        e.preventDefault()
        const emotionLabels = document.querySelectorAll('#emote-div li label')
        for(const label of emotionLabels){
            let temp = label.innerHTML
            label.innerHTML = removeNumber(temp)
        }
    })

    tutorialsHelp()


    
// ================================ form submission =================================
    diaryFormSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        let eImg = document.querySelector('#emote-div img')
        eImg.style.visibility = 'visible'
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
                    let readOut = document.createTextNode(`${Math.ceil(resEmotions[emote])}`)
                    emotionLi.appendChild(readOut)
                    // console.log("done")
                }
                createEntry(value, diaryEntries)
                eImg.style.visibility = 'hidden'
            })
    })
// ==================== page-flip implementation ================

})

// ==================== sets up the application =====================
function openDiary(){
    const main = document.getElementById('main')
    const emotionPage = new Page(main)
    new PageEmotion(emotionPage)
    const formPage = new Page(main)
    new PageForm(formPage)
    console.log("loaded")
}

function createEntry(text, div){
    const newEntry = document.createElement('div')
    const newEntryText = document.createTextNode(text)
    newEntry.appendChild(newEntryText)
    div.appendChild(newEntry)
}







function removeNumber(string){
    let colonIndex = string.indexOf(":")
    return string.slice(0, colonIndex+1)
}







function tutorialsHelp(){
    // handles the span tags in the instructions section
    document.getElementById('text-help').addEventListener('mouseover',(e)=>{
        document.getElementById('text-help').style.border ="2px solid #8A4D0F"
        document.querySelector('#dear-diary textarea').style.border = "2px solid #8A4D0F"
    })
    document.getElementById('text-help').addEventListener('mouseout',(e)=>{
        document.getElementById('text-help').style.border = null
        document.querySelector('#dear-diary textarea').style.border = null
    })

    document.getElementById('submit-help').addEventListener('mouseover',(e)=>{
        document.getElementById('submit-help').style.border="2px solid #8A4D0F"
        document.querySelector('#dear-diary input[type="submit"]').style.border="2px solid #8A4D0F"
    })
    document.getElementById('submit-help').addEventListener('mouseout',(e)=>{
        document.getElementById('submit-help').style.border = null
        document.querySelector('#dear-diary input[type="submit"]').style.border = null
    })

    document.getElementById('read-help').addEventListener('mouseover',(e)=>{
        document.getElementById('read-help').style.border="2px solid #8A4D0F"
        document.querySelector('#emote-div').style.border="2px solid #8A4D0F"
    })
    document.getElementById('read-help').addEventListener('mouseout',(e)=>{
        document.getElementById('read-help').style.border=null
        document.querySelector('#emote-div').style.border=null
    })

    document.getElementById('clear-help').addEventListener('mouseover',(e)=>{
        document.getElementById('clear-help').style.border="2px solid #8A4D0F"
        document.getElementById('clear-the-mind').style.border="2px solid #8A4D0F"
    })
    document.getElementById('clear-help').addEventListener('mouseout',(e)=>{
        document.getElementById('clear-help').style.border=null
        document.getElementById('clear-the-mind').style.border=null
    })
}

