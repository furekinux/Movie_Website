let light_mode = document.getElementById("switch")
light_mode.addEventListener("change",function(){
    if(this.checked){
        console.log("Check")
        let items = document.querySelectorAll("movies")
        items.forEach(element => {
            element.style.backgroundColor = '#121212'
            element.style.color = '#ffffff'
            element.style.animation = "toDark 1s"
        });
    } else {
        console.log("No check")
        let items = document.querySelectorAll("movies")
        items.forEach(element => {
            element.style.backgroundColor = '#fafafa'
            element.style.color = '#121212'
            element.style.animation = "toLight 1s"
        });
    }
})
searchArray=[]
function searchMovie(){
    let search = document.getElementById("search_box").value
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
}
const moviesForm = document.getElementById("searchmovies");
moviesForm.addEventListener("submit", (event) => {
   const searchBarValue = document.getElementById("search_box").value;
   event.preventDefault();
   window.location.href = `movieList.html?value=${searchBarValue}`;
   console.log(searchBarValue)
});
console.log(window.location.href)
