let light_mode = document.getElementById("switch")
light_mode.addEventListener("change",function(){
    if(this.checked){
        console.log("Check")
        document.getElementById('information').style.backgroundColor = '#121212'
        document.querySelector('body').style.backgroundColor = '#121212'
        document.querySelector('body').style.animation = "toDark 1s"
        document.querySelector('html').style.backgroundColor = '#121212'
        document.querySelector('html').style.animation = "toDark 1s"
        document.getElementById('information').style.color = '#ffffff'
        document.getElementById('information').style.animation = "toDark 1s"
    } else {
        console.log("No check")
        document.getElementById('information').style.backgroundColor = '#fafafa'
        document.getElementById('information').style.color = '#121212'
        document.querySelector('body').style.animation = "toLight 1s"
        document.querySelector('html').style.backgroundColor = '#fafafa'
        document.querySelector('html').style.animation = "toLight 1s"
        document.querySelector('body').style.backgroundColor = '#fafafa'

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
            newdiv.setAttribute("style",
            `text-align: start,
            display: flex,
            width: 13vw;
            height: 20.5vi; background: linear-gradient(#ff000000, #00000075), url('${movie["#IMG_POSTER"]}');background-size: cover;`)
            
            newdiv.innerHTML =`
                <p style="width: 13vw;font-size= 1vi; color:#ffffff; position: relative; margin: 0vi 1vi; top: 7vi"><b>${movie["#TITLE"]}</b></p>`
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
