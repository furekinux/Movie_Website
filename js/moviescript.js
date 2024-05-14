let light_mode = document.getElementById("switch")
light_mode.addEventListener("change",function(){
    if(this.checked){
        console.log("Check")
        document.getElementById('information').style.backgroundColor = '#121212'
        document.getElementById('information').style.color = '#ffffff'
        document.getElementById('information').style.animation = "toDark 1s"
    } else {
        console.log("No check")
        document.getElementById('information').style.backgroundColor = '#fafafa'
        document.getElementById('information').style.color = '#121212'
        document.getElementById('information').style.animation = "toLight 1s"
    }
})

searchArray=[]
let search = window.location.href
let taman = search.length
console.log(search)
console.log(taman)
let ArrayS = search.split("")
let finding = ArrayS.indexOf("=");
console.log(ArrayS)

search = search.slice(finding+1,taman).replaceAll("%20"," ")

console.log(search)
let url =`https://search.imdbot.workers.dev/?q=${search}`

let xhr = new XMLHttpRequest()
xhr.open("GET",url,true);
xhr.onreadystatechange = function(){
if (this.readyState === 4 && this.status === 200){
    let src_res = JSON.parse(this.responseText)
    searchArray=src_res.description
    console.log("sear arr",searchArray)
    searchArray.forEach(movie => {
        console.log(movie)
        if(movie["#IMG_POSTER"]!=undefined){
            let results = document.getElementById("src_results")
            let newdiv = document.createElement("div")
            newdiv.setAttribute("style","margin: 1vi;text-align: start,display: flex,width:23vi")
            newdiv.innerHTML =`
                <img style="width: 10vi" src="${movie["#IMG_POSTER"]}"/>
                <p style="font-size= 1em">${movie["#TITLE"]}</p>`
            results.appendChild(newdiv)
        }else{
            let results = document.getElementById("src_results")
            let newdiv = document.createElement("div").innerHTML = `
            <p>${movie["#TITLE"]}</p>`
            results.appendChild(newdiv)
        }
        

        });
} else if(this.readyState === 4){
    console.log("Error :(",this.statusText)
}
}
xhr.send();

const moviesForm = document.getElementById("searchmovies");
moviesForm.addEventListener("submit", (event) => {
   const searchBarValue = document.getElementById("search_box").value;
   event.preventDefault();
   window.location.href = `movieList.html?value=${searchBarValue}`;
   console.log(searchBarValue)
});
console.log(window.location.href)
