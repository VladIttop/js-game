var yearCheckBtn=document.querySelector(".year");function isLeapYear(e){return e%4==0&&e%100!=0||e%400==0}function checkYear(){var e=document.getElementById("year-input").value,t=document.getElementById("message");e<1900?(t.textContent="Будь ласка, введіть рік не менше 1900",t.className="message error"):isLeapYear(e)?(t.textContent="Ви народилися у високосний рік!",t.className="message success"):(t.textContent="Ви народилися не у високосний рік!",t.className="message error")}yearCheckBtn.addEventListener("click",(function(){checkYear()}));
//# sourceMappingURL=index.84321a9b.js.map
