import Page from "./scripts/page"
import PageForm from "./scripts/page-form"
import PageEmotion from "./scripts/page-emotion"
// import { PageFlip } from "../node_modules/page-flip/dist/js/page-flip.module.js";
import DiaryEntries from "./scripts/diaryEntry"


document.addEventListener("DOMContentLoaded", ()=>{
    openDiary()
    const diaryFormSubmit = document.querySelector('#dear-diary input')
    debugger
    if(JSON.parse(localStorage.entries)){
        for(const entry of JSON.parse(localStorage.entries)){
            console.log(entry)
            createEntry(entry)
        }
    }

    
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
                console.log(json)
                let detectedEmotion = json.emotions_detected[0]
                let resEmotions = json.emotions_normalized
                for(const emote of Object.keys(resEmotions)){
                    let idSearch = `${emote+'-label-li'}`
                    let emotionLi = document.getElementById(idSearch)
                    let readOut = document.createTextNode(`${Math.ceil(resEmotions[emote])}`)
                    emotionLi.appendChild(readOut)
                }
                changeStyleBasedOnResponse(detectedEmotion)
                DiaryEntries.addToDiary(value)
                console.log(localStorage.entries)
                createEntry(value)               
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

function createEntry(text){
    const entriesDiv = document.getElementById('entries')
    const newEntry = document.createElement('div')
    const newEntryText = document.createTextNode(text)
    newEntry.appendChild(newEntryText)
    entriesDiv.appendChild(newEntry)
}

function removeNumber(string){
    let colonIndex = string.indexOf(":")
    return string.slice(0, colonIndex+1)
}




function changeStyleBasedOnResponse(response){
    console.log(response)
    const pages = document.getElementsByTagName('div')
    const headers = document.getElementsByTagName('h1')
    const texts = document.getElementsByTagName('p')
    const labels =  document.getElementsByTagName('label')
    const textForm = document.querySelector('textarea')
    const uL = document.querySelector('ul')
    const inputs =document.getElementsByTagName('input')
    if(response === "anger"){
        for(const page of pages){ 
            page.style.border = "3px solid #FFC07F"
            page.style.backgroundColor = "#721121"
        }
        for(const header of headers){
            header.style.color = "#FFC07F"
        }
        for(const label of labels){
            label.style.color = "#FFC07F"
        }
        for(const text of texts){
            text.style.color = "#FFC07F"
        }
        for(const input of inputs){
            input.style.border = "3px solid #FFC07F"
            input.style.color = "3px solid #FFC07F"
        }
        textForm.style.color = "#FFC07F"
        uL.style.border = "3px solid #FFC07F"

    }else if(response === "disgust"){
        for(const page of pages){ 
            page.style.border = "3px solid #38369A"
            page.style.backgroundColor = "#A9DBB8"
        }
        for(const header of headers){
            header.style.color = "#FFC07F"
        }
        for(const label of labels){
            label.style.color = "#FFC07F"
        }
        for(const text of texts){
            text.style.color = "#FFC07F"
        }
        for(const input of inputs){
            input.style.border = "3px solid #FFC07F"
            input.style.color = "3px solid #FFC07F"
        }
        textForm.style.color = "#FFC07F"
        uL.style.border = "3px solid #FFC07F"
    }else if(response === "fear"){
        for(const page of pages){ 
                page.style.border = "3px solid purple"
        }

    }else if(response === "joy"){
        for(const page of pages){ 
            page.style.border = "3px solid #80CED7"
            page.style.backgroundColor = "#F08CAE"
        }
        for(const header of headers){
            header.style.color = "#80CED7"
        }
        for(const label of labels){
            label.style.color = "#80CED7"
        }
        for(const text of texts){
            text.style.color = "#80CED7"
        }
        for(const input of inputs){
            input.style.border = "3px solid #80CED7"
            input.style.color = "3px solid #80CED7"
        }
        textForm.style.color = "#80CED7"
        uL.style.border = "3px solid #80CED7"

    }else if(response === "sadness"){
        for(const page of pages){ 
            page.style.border = "3px solid 	#39546d"
            page.style.backgroundColor = "#13273e"
        }
        for(const header of headers){
            header.style.color = "	#567b89"
        }
        for(const label of labels){
            label.style.color = "#567b89"
        }
        for(const text of texts){
            text.style.color = "#567b89"
        }
        for(const input of inputs){
            input.style.border = "3px solid #567b89"
            input.style.color = "3px solid #567b89"
        }
        textForm.style.color = "#567b89"
        uL.style.border = "3px solid #567b89"

    }else if(response === "surprise"){
        for(const page of pages){ 
            page.style.border = "3px solid #ECD444"
            page.style.backgroundColor = "#372549"
        }
        for(const header of headers){
            header.style.color = "	#ECD444"
        }
        for(const label of labels){
            label.style.color = "#E36397"
        }
        for(const text of texts){
            text.style.color = "#E36397"
        }
        for(const input of inputs){
            input.style.border = "3px solid #ECD444"
            input.style.color = "3px solid #E36397"
        }
        textForm.style.color = "#ECD444"
        textForm.style.border = "3px solid #ECD444"
        uL.style.border = "3px solid #ECD444"
    }
}







function tutorialsHelp(){
    // handles the span tags in the instructions section
    document.getElementById('text-help').addEventListener('mouseover',(e)=>{
        document.getElementById('text-help').style.border ="3px solid #8A4D0F"
        document.querySelector('#dear-diary textarea').style.border = "3px solid #8A4D0F"
    })
    document.getElementById('text-help').addEventListener('mouseout',(e)=>{
        document.getElementById('text-help').style.border = null
        document.querySelector('#dear-diary textarea').style.border = null
    })

    document.getElementById('submit-help').addEventListener('mouseover',(e)=>{
        document.getElementById('submit-help').style.border="3px solid #8A4D0F"
        document.querySelector('#dear-diary input[type="submit"]').style.border="3px solid #8A4D0F"
    })
    document.getElementById('submit-help').addEventListener('mouseout',(e)=>{
        document.getElementById('submit-help').style.border = null
        document.querySelector('#dear-diary input[type="submit"]').style.border = null
    })

    document.getElementById('read-help').addEventListener('mouseover',(e)=>{
        document.getElementById('read-help').style.border="3px solid #8A4D0F"
        document.querySelector('#emote-div').style.border="3px solid #8A4D0F"
    })
    document.getElementById('read-help').addEventListener('mouseout',(e)=>{
        document.getElementById('read-help').style.border=null
        document.querySelector('#emote-div').style.border=null
    })

    document.getElementById('clear-help').addEventListener('mouseover',(e)=>{
        document.getElementById('clear-help').style.border="3px solid #8A4D0F"
        document.getElementById('clear-the-mind').style.border="3px solid #8A4D0F"
    })
    document.getElementById('clear-help').addEventListener('mouseout',(e)=>{
        document.getElementById('clear-help').style.border=null
        document.getElementById('clear-the-mind').style.border=null
    })
}

