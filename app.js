let newbox = document.getElementById('newbox');
const move = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event=>{


    
    
    if(event.key.startsWith("Arrow")){
    
        switch(event.key){
            case "ArrowUp" :
                y -= move;
            
                newbox.style.backgroundImage = "url(media/snow.png)"
                break;
        }
        switch(event.key){
            case "ArrowDown" :
                y += move;
        
                newbox.style.backgroundImage = "url(media/snow.png)"

                break;
        }
        switch(event.key){
            case "ArrowLeft" :
                x += move;
newbox.style.backgroundImage = "url(media/snow.png)"
                break;
        }
        switch(event.key){
            case "ArrowRight" :
                x -= move;
                newbox.style.backgroundImage = "url(media/snow.png)"
                break;
        }
        newbox.style.top = `${y}px`;
        newbox.style.left = `${x}px`;
    
    }
    


    
});
