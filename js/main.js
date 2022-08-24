
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value

  const url = `https://www.amiiboapi.com/api/amiibo/?character=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("img").src = data.amiibo[0].image
        document.querySelector("h2").innerText = `Name: ${data.amiibo[0].name}`
        document.querySelector(".gameSeries").innerText = `Game Series: ${data.amiibo[0].gameSeries}`
        document.querySelector(".amiiboSeries").innerText = `amiibo Series: ${data.amiibo[0].amiiboSeries}`
        document.querySelector(".releaseDate").innerText = `Release Date: ${data.amiibo[0].release.na}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

