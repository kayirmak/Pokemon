$(document).ready(() => {


// const countryUrl = 'https://restcountries.eu/rest/v2/all';
// const getAlpha = 'https://restcountries.eu/rest/v2/alpha';

// let obj = {
//     name: 'kairat',
//     phone: 996778453265
// }

// $.ajax({
//     method: 'POST',
//     url: countryUrl,
//     data: JSON.stringify(obj),

//     success: function(data){
//         console.log(data)
//     },
//     error: function(error){
//         console.log(error)
//     }
// })



//     const listCountry = (data) => {
//     // const response = await fetch(countryUrl);
//     // const data = await response.json();

    
//         data.forEach((item, i) => {    
//             $('tbody').append(`
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${item.alpha2Code}</td>
//                     <td><img src = ${item.flag} width = "30px"></td>
//                     <td>${item.name}</td>
//                     <td>${item.capital}</td>
//                     <td>${item.population}</td>
//                 </tr>
//             `)

//             console.log(item);
//         });
//     }




const pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
$('.right').on('click', () => {
    console.log('hello')
    const pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=21&limit=20';
    listPokemon()
})

const listPokemon = async () => {
   

    const result = await fetch(pokemons);
    const data = await result.json();
  
    $('.window').hide()
    $('.window-back').hide()
   
    data.results.forEach(async (item, id) => {
        let pok = `https://pokeapi.co/api/v2/pokemon/${id+1}`;
        const res = await fetch(pok);
        const datab = await res.json();

        $('.list').append(`
            <a class = 'item-${id = id + 1}'>${item.name}</a>
            <br>
        `)

        $(`.item-${id}`).on('click', () => {
            $('.window').show()
            $('.window-back').show()
            $('.modal').append(`
                <h3>Имя - ${datab.name}</h3>
                <p>Тип - ${datab.types[0].type.name}</p>
                <p>Вес - ${datab.weight}</p>
                <p>Рост - ${datab.height}</p>
                <img src = ${datab.sprites.front_default} width = "200px">
            `)
        })
        
            
        }) 
        $('.btn').on('click', () => {
            $('.window').hide()
            $('.window-back').hide()
            $('.modal').html('')
            
        })

        

}




listPokemon()




})








































