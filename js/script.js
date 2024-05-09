let light_mode = document.getElementById("switch")
light_mode.addEventListener("change",function(){
    if(this.checked){
        console.log("Check")
        document.getElementById('information').style.backgroundColor = '#000000'

    } else {
        console.log("No check")
        document.getElementById('information').style.backgroundColor = '#ffffff'
    }
})

