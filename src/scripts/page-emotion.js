class PageEmotion{
    static emotionArray = ["Anger", "Disgust", "Fear", "Joy", "Sadness", "Surprise"]
    constructor(page){
        console.log(PageEmotion.emotionArray)
        this.page = page
        const emoteDiv = document.createElement('div')
        emoteDiv.setAttribute('id', 'emote-div')
        this.fillEmotionPage(emoteDiv)
        this.page.htElement.appendChild(emoteDiv)
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
            const emoteLi = document.createElement('li')
            emoteLi.setAttribute('id', liId)
            const emoteLiLabel = document.createElement('label')
            emoteLiLabel.innerText = `${emotion}`
            emoteLi.appendChild(emoteLiLabel)
            ul.appendChild(emoteLi)
        }
    }
}


export default PageEmotion