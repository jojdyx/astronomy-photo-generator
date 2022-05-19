//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=fzKPVO08s3cAc0VnZFabBrdOQIH3iqwzaPB5ktr8&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('main').style.backgroundImage = `url('${data.hdurl}')`;
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h1').innerText = data.title
        document.querySelector('h3').classList.remove('hidden')
        document.querySelector('h4').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}