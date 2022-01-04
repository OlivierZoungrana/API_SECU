// // function redu (arr){
// //   let somme = arr.reduce((a,b)=> a+b,0)

// //   return somme
// // }

// // console.log(redu([1,2,3,4]))

// // function maper(arr){

// //   let mape=  arr.map(x=>x*0.5)

// //   return mape
// // }


// function totalReduc(arr){
//     let total =[]
//   for(let i=0 ; i<arr.length ; i++){

//     if(arr[i]>50){
//         total.push(arr[i])
//         let totalRe = total.map(x =>x*0.5).reduce((a,b)=>a+b)
//         console.log(totalRe)
//     }
//   }


  
// }

// // // console.log(maper([2,4,8]))
// console.log("eligible "+totalReduc([50,200,300,400]))


function isPalindrome(str){

  let reverseWord= str.split("").reverse().join("")
  console.log(reverseWord)
  if(str == reverseWord){
    return str + " est un palindrome"
  }else{
    return str + " n'est pas un palindrome"
  }
}

function isPair(nbr){
  if(nbr%2==0){
    return nbr + " is Pair"
  }else{
    return nbr + " is Impair"
  }
}
function nbrPair(){
  for(let i=0; i<=100; i++){
    if(i%2===0){
      return i + " est pair "
    }else{
      return i + " est impair"
    }
  }
}

isPalindrome("olive")
isPair(5)
console.log(nbrPair())
