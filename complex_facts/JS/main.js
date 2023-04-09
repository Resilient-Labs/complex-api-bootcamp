const select = document.querySelector('select')
const input = document.querySelector("input")
const span = document.querySelector("span")


const fact = document.querySelector("p")

function checkType() { //checks which option it is on to make sure the structure is correct
    const p = document.querySelector("p")
    p.classList.add('hidden')
    const span = document.querySelector("span")
    span.classList.add('hidden') // hides all p's and span's until it is called upon
    if (select.value === "date") {
        input.value = ""
        fact.innerText = ""
        span.innerText = ""
        input.placeholder = "Enter Date i.e 1/01"
    } else {
        fact.innerText = ""
        span.innerText = ""
        input.placeholder = "Enter Number"
    }
}

function getFact() {
    const number = document.querySelector("input").value
    const type = document.querySelector("select").value
    const fact = document.querySelector("p")
    const url = `http://numbersapi.com/${number}/${type}`;
    const validInput = (type === "date" && /^\d{1,2}\/\d{1,2}$/.test(number)); //had to look up this code to test whether the date input was structured correctly 
    if (!Number(number) && type !== "date") {
        fact.innerText = "Please Enter a Valid Number"
    } else if (!validInput && type === "date") {
        fact.innerText = "Please Enter a Valid Date" //checks for proper structure using the previous checkType function
    } else {
        fact.innerText = ""
        span.innerText = ""
        fetch(url)
            .then(res => res.text())
            .then(data => {
                fact.innerText = data
                const newStr = `${data}`
                const word = newStr.split(" ");
                const lastWord = word.slice(word.length - 1); //takes the last word in the string to find related content for 2nd api
                const p = document.querySelector("p")
                p.classList.remove('hidden')
                const span = document.querySelector("span")
                span.classList.add('hidden')
                $.ajax({
                    method: 'GET',
                    url: `https://api.api-ninjas.com/v1/historicalevents?text=${lastWord}`,
                    headers: { 'X-Api-Key': '[Key]' },
                    contentType: 'application/json',
                    success: function (result) {
                        if (result[0].event === undefined) {
                            console.log("shhh")
                        } else {
                            const span = document.querySelector("span")
                            span.classList.remove('hidden')
                            const bonusFact = document.querySelector("span")
                            bonusFact.innerText = `Related Fact: ${result[0].event} - Year: ${result[0].year}`;
                        }
                    },
                    error: function ajaxError(jqXHR) {
                        console.error('Error: ', jqXHR.responseText); //pre-written syntax from the api
                        console.log(result)
                    }
                })
                    .catch(err => {
                        console.log(`error ${err}`)
                    });
            })
    }
}

select.addEventListener('change', checkType)
document.querySelector("button").addEventListener("click", getFact)

