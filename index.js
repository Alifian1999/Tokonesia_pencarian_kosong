let arr = [1,2,3,4,-2,-10,1,0,100]
// let getRidNegativeValue = arr.reduce()

// function positiveValue(value){
//     let positivNum = []
//     for(let i=0; i<=value.length; i++){
//         if(value[i] <= 0){
//             positivNum.push(value[i])
//         }
//     }
//     return positivNum
// }

// console.log(positiveValue(arr));

function diagonalDifference(arr) {
    // Write your code here
    let arrsIndex = arr.map(e => e.length)
    let findTheBiggestIndex = Math.max(...arrsIndex)
    let square = []
    let baseIndex = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i].length == findTheBiggestIndex){
            square.push( arr[i] )
        }
    }
    let mappingSquare = square.map(e => e)
    let findDiagonalLeft = mappingSquare[baseIndex][0] + mappingSquare[baseIndex+1][1] + mappingSquare[baseIndex+2][2]
    let findDiagonalRight = mappingSquare[baseIndex+2][0] + mappingSquare[baseIndex+1][1] + mappingSquare[baseIndex][2]
    console.log(findDiagonalRight);
    let absoluteDifference = Math.abs( findDiagonalLeft - findDiagonalRight )
    return absoluteDifference
}

// console.log(
// diagonalDifference([
//     [3],
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ]));

let mk = [1,2,31,2,5,1,26,1,77,85,2]
let sortedArr = arr.sort((a,b) => b - a)
console.log(sortedArr);













// const containerHasilPencarian = document.getElementById('container-content-result')  
// const containerListKategori = document.getElementById('container-kategori-top')
// const allButton = document.getElementById('container-kategori-top').getElementsByTagName('button')


// const renderKategoriList = () =>{
//     fetch('./data.json')
//         .then(res => res.json())
//         .then(res =>{
//             let listKategoriData = res.list_kategori
//             for(let i = 0; i<listKategoriData.length; i++){
//                 containerListKategori.innerHTML +=`
//                 <button onclick="handleHasilPencarian(id)" id="${listKategoriData[i].id}">
//                     <img src="${listKategoriData[i].image}" alt="">
//                     <p>${listKategoriData[i].kategori}</p>
//                 </button>
//                 `
//             }
//         })
//         .catch(err => console.log(err))
// }
// renderKategoriList()


// const handleHasilPencarian = (types) =>{
//     const clickedButton = document.getElementById(`${types}`)
//     for(let i=0; i<allButton.length;i++){
//         allButton[i].style.backgroundColor = 'white'
//     }
//     containerHasilPencarian.innerHTML = null

//     fetch('./data.json')
//         .then(res => res.json())
//         .then(res =>{ 
//             const data = res.type[types]
//             for(let i = 0; i<data.length; i++){
//                 clickedButton.style.backgroundColor = '#FEC14E'
//                 containerHasilPencarian.innerHTML += ` 
//                     <div id="hasilPencarian"  class="${data[i].class}" >
//                         <div class="title-accordion">
//                             <div class="accordion accordion-flush" id="accordionFlushExample">
//                                 <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
//                                     <h2 class="accordion-header mb-0" id="flush-headingOne">
//                                         <button class="accordion-button
//                                             relative
//                                             items-center
//                                             flex
//                                             w-full
//                                             py-4
//                                             px-5
//                                             text-base text-gray-800 text-left
//                                             bg-white
//                                             border-0
//                                             rounded-none
//                                             transition
//                                             focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#${data[i].class}"
//                                             aria-expanded="false" aria-controls="${data[i].class}">
//                                             <p>${data[i].text}</p>
//                                         </button>
//                                     </h2>
//                                     <div id="${data[i].class}" class="accordion-collapse border-0 collapse show"
//                                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                                         <div class="accordion-body py-4 px-5">
//                                         Placeholder content for this accordion, which is intended to
//                                         demonstrate
//                                         the <code>.accordion-flush</code> class. This is the first item's accordion body.
//                                         </div>
//                                     </div>
//                                 </div>
//                           </div>
//                         </div>
//                     </div>  
//                 `
//             }
//         })
//         .catch(err => console.log(err))
// }

