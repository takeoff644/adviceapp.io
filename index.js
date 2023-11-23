const dice=document.getElementById("dice-el")
let advicetext=document.getElementById("blocktext")
let counter= document.getElementById("counter")
let count=0
const url ="https://api.adviceslip.com/advice"
		

dice.addEventListener("click",()=>{
	count+=1
	counter.textContent = `ADVICE #${count}`
	fetch(url)
		.then(res => res.json())
		.then(data =>{
			JSON.stringify(data)
			advicetext.textContent=	`"${data.slip.advice}"`
		})
	

})