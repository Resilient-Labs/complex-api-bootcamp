const universityUrl = 'http://universities.hipolabs.com/search'
const container = document.querySelector('.container')
let state

fetch(universityUrl)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (data[i].country === "United States" && data[i]['state-province'] !== null) {
                let subcontainer = document.createElement('section')
                container.appendChild(subcontainer)
                
                let university = document.createElement('h2')
                university.innerText = data[i].name
                university.classList.add('univeristy')
                subcontainer.appendChild(university)

                let state = abbrState(data[i]['state-province'])
                // console.log('abbrState', state, data[i]['state-province'],data[i])

                let covidUrl = `https://api.covidtracking.com/v2/states/${state}/daily.json`
                fetch(covidUrl)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.data[0].cases.confirmed.value)
                        state = state.toUpperCase()
                        let covidStats = document.createElement('h3')
                        covidStats.innerText = `Total Confirmed Covid cases in ${state}: ${data.data[0].cases.confirmed.value} cases`
                        covidStats.classList.add('covidStats')
                        subcontainer.appendChild(covidStats)
                        if (data.data[0].cases.confirmed.value === null){
                            subcontainer.remove()
                        }
                    })
                    .catch(err => {
                        console.log(`error ${err}`)
                    })
            }
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })


function abbrState(fullName) {

    const states = [
        ['arizona', 'AZ'],
        ['alabama', 'AL'],
        ['alaska', 'AK'],
        ['arkansas', 'AR'],
        ['california', 'CA'],
        ['colorado', 'CO'],
        ['connecticut', 'CT'],
        ['delaware', 'DE'],
        ['florida', 'FL'],
        ['georgia', 'GA'],
        ['hawaii', 'HI'],
        ['idaho', 'ID'],
        ['illinois', 'IL'],
        ['indiana', 'IN'],
        ['iowa', 'IA'],
        ['kansas', 'KS'],
        ['kentucky', 'KY'],
        ['louisiana', 'LA'],
        ['maine', 'ME'],
        ['maryland', 'MD'],
        ['massachusetts', 'MA'],
        ['michigan', 'MI'],
        ['minnesota', 'MN'],
        ['mississippi', 'MS'],
        ['missouri', 'MO'],
        ['montana', 'MT'],
        ['nebraska', 'NE'],
        ['nevada', 'NV'],
        ['new hampshire', 'NH'],
        ['new jersey', 'NJ'],
        ['new mexico', 'NM'],
        ['new york', 'NY'],
        ['north carolina', 'NC'],
        ['north dakota', 'ND'],
        ['ohio', 'OH'],
        ['oklahoma', 'OK'],
        ['oregon', 'OR'],
        ['pennsylvania', 'PA'],
        ['rhode island', 'RI'],
        ['south carolina', 'SC'],
        ['south dakota', 'SD'],
        ['tennessee', 'TN'],
        ['texas', 'TX'],
        ['utah', 'UT'],
        ['vermont', 'VT'],
        ['virginia', 'VA'],
        ['washington', 'WA'],
        ['west virginia', 'WV'],
        ['wisconsin', 'WI'],
        ['wyoming', 'WY'],
    ];
    fullName = fullName.toLowerCase()
    for (i = 0; i < states.length; i++) {
        // console.log('comparing', fullName, states[i][0])
        if (states[i][0] === fullName) {
            return (states[i][1]).toLowerCase();
        }
    }
    return fullName
}


// console.log(abbrState('New York'))