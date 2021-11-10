// function fetchCuties() {
//     fetch('http://localhost:3000/characters') 
//     .then(resp => resp.json())
//      .then(data => { 
//             const cuties = {
//                 id: data.id,
//                 name: data.name,
//                 image: data.image,
//                 votes: data.votes,
//             }

//             const mrCute = document.createElement('span')
//             const mxMonkey = document.createElement('span')
//             const msZebra = document.createElement('span')
//             const drLion = document.createElement('span')
//             const mmePanda = document.createElement('span')

//             const charBar = document.getElementById('character-bar')

//             mrCute.textContent = cuties.name
//             charBar.appendChild(mrCute)
//      })
    
// }


// document.addEventListener('DOMContentLoaded', fetchCuties);



function renderCuties(cutie) {
    const cuteSpan = document.createElement('span')
    // const mxMonkey = document.createElement('span')
    // const msZebra = document.createElement('span')
    // const drLion = document.createElement('span')
    // const mmePanda = document.createElement('span')
    
    const charBar = document.getElementById('character-bar')

    cuteSpan.textContent = cutie.name
    // mxMonkey.textContent = `${cutie.name}`
    // msZebra.textContent = `${cutie.name}`
    // drLion.textContent = `${cutie.name}`
    // mmePanda.textContent = `${cutie.name}`

    charBar.appendChild(cuteSpan)

    // cuteSpan.addEventListener('click', () => {
    //     const image = document.createElement('img'))
    //     const insertImage = document.getElementById('div#detailed-info')

    //     image.append(imageCute)

    // }
}






function getCutie(){
    fetch('http://localhost:3000/characters') 
    .then(resp => resp.json())
     .then(cuties => cuties.forEach(renderCuties))
    .catch(error => console.log(`My Error: ${error}`))
 }

 document.addEventListener('DOMContentLoaded', getCutie);
 