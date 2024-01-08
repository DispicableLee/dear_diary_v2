// makeDiaryEntries

class DiaryEntries{

    static entries = localStorage.getItem("entries") ? JSON.parse(localStorage.getItem("entries")) : [];
    
    

    constructor(){
    }

    static addToDiary = (entry)=>{
        // debugger
        DiaryEntries.entries.unshift(entry)
        localStorage.setItem("entries", JSON.stringify(this.entries))
    }



    static getDiary=()=>{
        // debugger
        return JSON.parse(localStorage.getItem("entries"))
    }


}

export default DiaryEntries