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

console.log(finding)

search = search.slice(finding+1,taman)
console.log(search)

let url_streaming =`https://search.imdbot.workers.dev/?q=${search}`
let xhr = new XMLHttpRequest()
xhr.open("GET",url_streaming,true);
xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
        let streaming = JSON.parse(this.responseText)
        console.log(streaming)
        searchArray=streaming.description
        console.log(searchArray)
        searchArray.forEach(movie => {
            console.log(movie)
            
        });
    } else if(this.readyState === 4){
        console.log("Error :(",this.statusText)
    }
}
xhr.send();

const moviesForm = document.getElementById("searchmovies");
moviesForm.addEventListener("submit", (event) => {
    let results = document.getElementById("src_results")
    const searchBarValue = document.getElementById("search_box").value;
    event.preventDefault();
    window.location.href = `movieList.html?value=${searchBarValue}`;
    console.log(searchBarValue)
});

