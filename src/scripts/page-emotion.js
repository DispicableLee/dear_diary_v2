class PageEmotion{
    static emotionArray = ["Anger", "Disgust", "Fear", "Joy", "Sadness", "Surprise"]
    static gifArray = ['./src/styles/sunrise.gif', './src/styles/bulb-1.gif', './src/styles/diamond-spinner.gif', './src/styles/eye.gif']
    constructor(page){
        this.page = page
        const emoteDiv = document.createElement('div')
        emoteDiv.setAttribute('id', 'emote-div')
        this.fillEmotionPage(emoteDiv)

        const clearEmotions = document.createElement('input')
        clearEmotions.type = "submit"
        clearEmotions.value = "Clear the Mind"
        clearEmotions.setAttribute('id', 'clear-the-mind')
        this.page.htElement.appendChild(emoteDiv)
        this.plugInGif(emoteDiv)
        this.page.htElement.appendChild(clearEmotions)
    }

    fillEmotionPage(emoteDiv){
        const header = document.createElement('h1')
        header.textContent = "Emotional Readout"

        const emotionsList = document.createElement('ul')
        emotionsList.setAttribute('id', 'emotion-list')
        this.fillEmotionList(emotionsList)
        emoteDiv.appendChild(header)
        emoteDiv.appendChild(emotionsList)
    }

    fillEmotionList(ul){
        for(const emotion of PageEmotion.emotionArray){
            let liId = `${emotion.toLowerCase()+'-li'}`
            let labelId = `${emotion.toLowerCase()+'-label-li'}`
            const emoteLi = document.createElement('li')
            emoteLi.setAttribute('id', liId)

            const emoteLiLabel = document.createElement('label')
            emoteLiLabel.setAttribute('id', labelId)
            emoteLiLabel.innerText = `${emotion}: `
            emoteLi.appendChild(emoteLiLabel)
            ul.appendChild(emoteLi)
        }
    }


    plugInGif(el){
        let bulb = document.createElement('img')
        bulb.src = PageEmotion.gifArray[Math.floor(Math.random()*PageEmotion.gifArray.length)]
        
        bulb.style.width = '100px'
        bulb
        el.appendChild(bulb)
    }
}


export default PageEmotion