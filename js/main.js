apiKey = 'a944a4e4-f699-4628-9083-8f831562154a'

function search(){
fetch(`https://api.pokemontcg.io/v2/cards`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
    data.data.forEach(num => {
        let pokemon = num.images.small;

        const myImage = document.createElement('img')
        myImage.src = pokemon
        const cardSection = document.getElementById('cards')
        cardSection.appendChild(myImage);
    })
})
.catch(err => {
    console.log(`error ${err}`)
});
};

search()