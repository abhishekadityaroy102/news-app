// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// function navbar(){
//     `<div id="search_bar">
//     <h1>News App</h1>
//     <input type="text" id="search_input">
//   </div>`
// }
// export default navbar;
import {navbar} from "../components/navbar.js";
import {searchitem,append} from "./fetch.js";
document.getElementById("navbar").innerHTML=navbar();
let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country={query}`;
let slidebar=document.getElementById("slidebar").children
function cSearch(){
    // console.log(this.id)
searchitem(this.id).then((data)=>{
    console.log(data)
    let container=document.getElementById("results");
    container.innerHTML=null;
    append(data.articles,container)
})
}
for(let el of slidebar){
    el.addEventListener("click",cSearch)
}
searchitem("in").then((data)=>{
    let container=document.getElementById("results");
    container.innerHTML=null;
    append(data.articles,container)
})
document.getElementById("search_input").addEventListener("keydown",function(){
    searchnews("searc_input.value")
});
function searchnews(el){
    window.location.href="search.html"
    searchbar(this.id).then((data)=>{
        console.log(data)
        let container=document.getElementById("results");
        container.innerHTML=null;
        append(data.articles,container)
    })
    
}
