let pokemonName = localStorage.getItem('pokemonInput')


apiKey = ''


function search(){
fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
    data.data.forEach(num => {
        let pokemon = num.images.small;

        const myImage = document.createElement('img')
        myImage.src = pokemon
        const cardSection = document.getElementById('cards')
        cardSection.appendChild(myImage);

        // let images = document.getElementsByTagName('img')
        // for (let i = 0; i < images.length; i++){
        //     images[i].addEventListener('click', function(){
        //         this.classList.toggle('fullSize')
        //     })
        // }
    })
})
.catch(err => {
    console.log(`error ${err}`)
});
};
search()