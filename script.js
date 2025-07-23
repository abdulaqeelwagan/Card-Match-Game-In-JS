let containers = document.querySelectorAll(".container");
let emojies = ["🎶", "👍", "😂", "🍕", "❤️", "😎", "😊", "🤣"];
let clickedBtns = [];



containers.forEach(function (container) {

    for (let i = 1; i <= 4; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");

        for (let j = 1; j <= 4; j++) {
            let btn = document.createElement("button");
            row.appendChild(btn);
            btn.classList.add("btn");
            

            btn.addEventListener("click", function () {

                if (btn.style.transform === "rotateY(180deg)") {
                    btn.style.transform = "rotateY(0deg)";
                } else {
                    btn.style.transform = "rotateY(180deg)";
                }

                
                if (btn.innerHTML !== "") return
           


                let randomIndex = Math.floor(Math.random() * emojies.length);
                let randomEmoji = emojies[randomIndex];
                btn.innerHTML = randomEmoji;


                clickedBtns.push(btn);


                if (clickedBtns.length === 2) {

                    let [btn1, btn2] = clickedBtns;

                    if (btn1.innerHTML !== btn2.innerHTML) {
                        
                        setTimeout(() => {

                            btn1.innerHTML = "";
                            btn2.innerHTML = "";
                            btn1.style.transform = "rotateY(0deg)";
                            btn2.style.transform = "rotateY(0deg)";
                         
                        }, 500);
                    }

                    clickedBtns = [];
                }


            });
        }
    }

    let restart = document.createElement("button")
    restart.innerText = "Restart"
    container.appendChild(restart)

    restart.addEventListener("click",function(){
        location.reload()


    })



    restart.style.backgroundColor = "orange"
        restart.style.color = "White"
        restart.style.padding = "15px"
        restart.style.border = "none"
        restart.style.borderRadius = "20px"
        restart.style.fontSize = "1.5rem"


        

        
}
);
