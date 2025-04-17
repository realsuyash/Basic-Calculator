const display = document.getElementById("display")

const buttons = document.querySelectorAll("#btn")

buttons.forEach(buttons =>{
    buttons.addEventListener("click", function(){
        const value = buttons.innerHTML;

        if(value ==="AC"){
            display.value = "";
        }else if(value ==="Back"){
            display.value = display.value.slice(0, -1)
        }else if(value === "="){
            try{
                display.value = eval(display.value)
            }catch{
                display.value = "error, please try again"
            }
        }else if(value ==="😇"){
            window.open("https://www.github.com/realsuyash", "_blank")
        }else{
            display.value += value
        }
    })
})