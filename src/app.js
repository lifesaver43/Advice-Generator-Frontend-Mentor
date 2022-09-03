const adviceId = document.querySelector(".adv-id")
const adviceTxt = document.querySelector(".adv-txt")
const btn = document.querySelector("button");

function adviceGiver() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        const adviceTag = data.slip
        const slipAdvice = adviceTag.advice
        console.log(slipAdvice)

        const num = data.slip.id
        console.log(`ADVICE #${num}`)

        adviceTxt.innerHTML = slipAdvice
        adviceId.innerHTML = `ADVICE #${num}`
    })
}

btn.addEventListener("click", adviceGiver)