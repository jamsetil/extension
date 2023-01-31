let MyLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("MyLeads"))
const tabBtn = document.getElementById("tab-btn")

function render(leads){
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++){
     
    //    listItems += "<li><a target='_blank' href= '"+ MyLeads[i] +"' >"+MyLeads[i]+"</li> "
    listItems += `<li>
    <a target='_blank' href= '${leads[i]}' >${leads[i]}</a>
    </li>`
       
    }
    
    ulEl.innerHTML= listItems
    }


if (leadsFromLocalStorage){
    MyLeads = leadsFromLocalStorage
    render(MyLeads)
}



deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    MyLeads=[]
    render(MyLeads)
})

inputBtn.addEventListener("click", function (){
    MyLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("MyLeads", JSON.stringify(MyLeads))
    render(MyLeads)
    console.log ( localStorage.getItem("MyLeads"))
})

tabBtn.addEventListener("click",function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        MyLeads.push(tabs[0].url)
        localStorage.setItem("MyLeads",JSON.stringify(MyLeads))
        render(MyLeads)
        
     });
   
})