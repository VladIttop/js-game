var randomNumber=Math.floor(100*Math.random())+1;function checkNumber(){var e=parseInt(document.getElementById("number-input").value),m=document.getElementById("message_numb");console.log("Загадане число:",randomNumber),console.log("Введене число:",e),isNaN(e)?(m.textContent="Будь ласка, введіть число.",m.className="message_numb error"):e===randomNumber?(m.textContent="Вітаю, ви вгадали число! "+e+"!",m.className="message_numb success",randomNumber=Math.floor(100*Math.random())+1):(m.textContent="Спробуйте ще раз! Число було "+randomNumber+"!",m.className="message_numb error",randomNumber=Math.floor(100*Math.random())+1)}
//# sourceMappingURL=index.b63398c9.js.map
