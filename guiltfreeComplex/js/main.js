document.querySelector('#question').addEventListener('click', getWorkout);


function getWorkout() {
    let selection = document.querySelector("select").value
    const url0 = `https://api.api-ninjas.com/v1/caloriesburned?activity=${selection}`;
    fetch(url0, {
        headers: {
            'X-Api-Key': 'YMtZrONkqzAGCgRb/UTonQ==WCdMrBY4VHGeHSQ7'
        }
    })
        .then(res => res.json())
        .then(data => {
            const caloriesBurned = data[0].total_calories;
            // document.querySelector("h4").innerText = caloriesBurned;
            document.querySelector("h4").innerText = data[0].total_calories
            getDish(caloriesBurned);


        })
        .catch(error => console.error(error))



    function getDish(caloriesBurned) {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=95126682&app_key=0f2861679f02814dff4dbfb672f5b302&calories=300-${caloriesBurned}`;
        fetch(url)
            .then(res => res.json())
            .then(data0 => {
                console.log(data0)
                const randomNum = Math.floor(Math.random() * 20) + 1;
                document.querySelector("h2").innerText = data0.hits[randomNum].recipe.label
                document.querySelector('img').src = data0.hits[randomNum].recipe.image
            })
    }


}








