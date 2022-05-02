let searchitem=async (query)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
        
        let data=await res.json();
        return data;
    }catch{
        console.log(err);
    }
}
let searchbar=async (query)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        
        let data=await res.json();
        return data;
    }catch{
        console.log(err);
    }
}
let append=(data,container)=>{
    data.forEach(({content,source:{urlToImage},title})=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        let h3=document.createElement("p");
        let h2=document.createElement('h3');
        let box=document.createElement("div")
        h2.innerText=title
        img.src=urlToImage;
        box.append(h2,h3)
        h3.innerText=content;
        div.append(img,box);
        container.append(div)
    })
}
export {searchitem,append}