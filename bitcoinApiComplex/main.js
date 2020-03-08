


fetch("https://financialmodelingprep.com/api/v3/cryptocurrency/BTC")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      document.getElementById('bitcoinPriceUsd').innerHTML = `The bitcoin price at this momment is: [ ${response.price} USD ]! `
      const base = response.price
      console.log(base)

// http://data.fixer.io/api/latest?access_key=19a70b789b043bf9f4b941b61328549d&base=USD&symbols=EUR

  document.getElementById('generatorEuros').addEventListener('click', function(){

      fetch('http://data.fixer.io/api/latest?access_key=19a70b789b043bf9f4b941b61328549d&symbols=EUR,CAD,JPY,USD')
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(hello => {
        // displays the Euro to USD rate
        document.getElementById('convertEuro').innerHTML = `1 Euro = ${hello.rates.USD} USD `
        const converter = hello.rates.USD
        console.log(converter)

        // converting Bitcoin Price (USD) to Euros
        const dollarEuro = base/converter;
        document.getElementById('output').innerHTML = `Bitcoin Price in Euros is ${dollarEuro}`
        console.log(base/converter)
          })

      })


      // GENERATE POUNDS
      document.getElementById('generatorPounds').addEventListener('click', function(){

          fetch('http://data.fixer.io/api/latest?access_key=19a70b789b043bf9f4b941b61328549d&symbols=EUR,CAD,JPY,USD,GBP')
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(hello => {
            // displays the Euro to USD rate
            document.getElementById('convertEuro').innerHTML = `1 Euro = ${hello.rates.GBP} British Pounds `
            const converter = hello.rates.USD
            console.log(converter)

            // converting Bitcoin Price (USD) to Euros
            const dollarEuro = base/converter;
            const convertPounds = dollarEuro * hello.rates.GBP
            document.getElementById('output').innerHTML = `Bitcoin Price in British Pounds is ${convertPounds}`
            console.log(base/converter)
              })

          })

      // GENERATE YEN
      document.getElementById('generatorYen').addEventListener('click', function(){

          fetch('http://data.fixer.io/api/latest?access_key=19a70b789b043bf9f4b941b61328549d&symbols=EUR,CAD,JPY,USD')
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(hello => {
            // displays the Euro to USD rate
            document.getElementById('convertEuro').innerHTML = `1 Euro = ${hello.rates.JPY} JPY `
            const converter = hello.rates.USD
            console.log(converter)

            // converting Bitcoin Price (USD) to Euros
            const dollarEuro = base/converter;
            const convertJapanese = dollarEuro * hello.rates.JPY
            document.getElementById('output').innerHTML = `Bitcoin Price in Yen is ${convertJapanese}`
            console.log(base/converter)
              })

          })

  })
