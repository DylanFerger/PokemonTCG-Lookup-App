
function search(){
fetch('https://api.pokemontcg.io/v2/cards')
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)

    data.data.forEach(num => {
        let imgElement = document.createElement('img');
        let pokemon = num.images.small;
        imgElement.src = pokemon
        document.body.appendChild(imgElement);
    })
})
.catch(err => {
    console.log(`error ${err}`)
});
}
