document.querySelector('button').addEventListener('click', getNameQuote)

// GET NAME AND QUOTE FROM API 1
function getNameQuote() {
    fetch(`https://api.gameofthronesquotes.xyz/v1/random`)
    .then(res => res.json())
    .then(data => {
        // Fix grammar
        if (data.sentence === 'Every man must die, Jon Snow. but first, he must live') {
            data.sentence = data.sentence.replace('b', 'B')
        }
        if (data.sentence === 'Everything before the word \"but\" is horseshit.') {
            data.sentence = data.sentence.replace('"but"', "'but'")
        }

        // Fix quote
        if (data.sentence === 'I am a Stark of Winterfell, this is my home. And you can\'t frighten me.') {
            data.sentence = 'I\'m Sansa Stark of Winterfell. This is my home, and you can\'t frighten me.'
        }
        if (data.sentence === 'I, Eddard of the house Stark, lord of Winterfell and warden of the North, sentence you to die.') {
            data.sentence = 'I, Eddard of the House Stark, Lord of Winterfell and Warden of the North, sentence you to die.'
        }

        // Add period to quotes lacking one
        if (data.sentence.slice(-1).match(/[a-z]/i)) {
            data.sentence += '.'
        }

        // Display name and quote in DOM
        document.querySelector('h2').innerText = data.character.name
        document.querySelector('p').innerText = `"${data.sentence}"`

        // Use first names to link API 1 and 2
        let firstName1 = data.character.name.split(' ')[0]

        // Change first names to match that of API 2
        if (data.character.name === 'Lord Varys') {
            firstName1 = 'Varys'
        }
        if (data.character.name === 'Bran Stark') {
            firstName1 = 'Brandon'
        }

        let characterImage = document.querySelector('#characterImage')
        getImage(firstName1, characterImage)
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
}

// GET IMAGE FROM API 2
function getImage(firstName1, characterImage) {
    fetch(`https://thronesapi.com/api/v2/Characters`)
    .then(res => res.json())
    .then(data => {
        data[6].firstName = 'Eddard' // API 1 uses 'Eddard' instead of 'Ned'
        data[8].firstName = 'Jaime' // Fix misspelling from 'Jamie'
        data[10].firstName = 'Catelyn' // Fix misspelling from 'Cateyln'

        // Add characters that are in API 1 but not 2
        class MakeCharacter {
            constructor(id, firstName, imageURL) {
                this.id = id
                this.firstName = firstName
                this.imageUrl = imageURL
            }
        }
        let aerys = new MakeCharacter(53, 'Aerys', 'https://images.immediate.co.uk/production/volatile/sites/3/2022/09/King-Aerys-Targaryen-Game-of-Thrones-c21166b.jpg?quality=90&resize=620,414')
        let aemon = new MakeCharacter(54, 'Aemon', 'https://editors.dexerto.com/wp-content/uploads/2022/09/13/Maester-Aemon-targaryen-house-of-the-dragon.jpg')
        let ramsay = new MakeCharacter(55, 'Ramsay', 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/2/27/Ramsay-1024.jpg')
        let mance = new MakeCharacter(56, 'Mance', 'https://www.nme.com/wp-content/uploads/2022/05/Ciaran_Hinds_Mance_Rayder_Game_Of_Thrones.jpg')
        data.push(aerys, aemon, ramsay, mance)

        // Display image in DOM
        for (let i=0; i<data.length; i++) {
            let firstName2 = data[i].firstName
            if (firstName1 === firstName2) {
                characterImage.src = data[i].imageUrl
            }
        }
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
}