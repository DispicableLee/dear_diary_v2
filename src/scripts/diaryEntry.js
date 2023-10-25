// makeDiaryEntries

class DiaryEntries{
    static entries = localStorage.getItem("entries") || []

    constructor(){
    }

    static addToDiary = (entry)=>{
        DiaryEntries.entries.unshift(entry)
        localStorage.setItem("entries", JSON.stringify(this.entries))
    }



    static getDiary = ()=>{
        return JSON.parse(localStorage.getItem("entries"))
    }


}

export default DiaryEntries