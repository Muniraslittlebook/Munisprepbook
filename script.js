let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
    
    {
  profileImage : "https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5419.jpg?v=1585177784144",
  name : "Munira",
  quote: "That's wicked",
  superlative : "Always forgets something, but she is calm and down to earth",
},
    {
      profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5677.JPG?v=1585177695284",
      name : "Babamayakun aka Baba",
      quote: "did i ask",
      superlative : "Big Marlian and most likely to be successful ",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5676.PNG?v=1585177633748",
      name : "Djaliatou aka Jolly",
      quote: "woy-yo nene",
      superlative : "most likely to be the succed and become a doctor",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5681.JPG?v=1585177731790",
      name : "Drissa",
      quote: "say dat",
      superlative : "Big times African chef",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5678.JPG?v=1585177722768",
      name : "Worokiya aka Kiya",
      quote: "I want halal",
      superlative : "most likely to sleep through out college and become part of top 10 students",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5679.JPG?v=1585177719101",
      name : "Andrew",
      quote: "Bueno",
      superlative : "best supporter",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5680.jpg?v=1585177744540",
      name : "Adriana",
      quote: "OHH HELLL NAWWW",
      superlative : "mostly likely to be tiktok famous",
    },
  {
  profileImage:"https://cdn.glitch.com/d64ab10d-9544-4849-ae42-c5d435273b7b%2FIMG-5780.jpg?v=1585542952325",
      name : "James aka BJ",
      quote: "you're slow",
      superlative : "future NBA player",
    },
]

let count = 0

document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
document.querySelector("#quote").innerHTML= students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
let lastStudent = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  if (count > lastStudent){
    count=0
  }
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML= students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --;
  if (count <0) {
    count =lastStudent
  }
  console.log(count)
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML= students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
})

let  randomButton = document.querySelector("#random")

randomButton.addEventListener("click",()=>{
  let randomStudent = students[Math.floor(Math.random()* students.length)]
  
  document.querySelector("#pic").src = randomStudent.profileImage
  document.querySelector("#name").innerHTML = randomStudent.name
  document.querySelector("#quote").innerHTML = randomStudent.quote
  document.querySelector("#superlative").innerHTML = randomStudent.superlative
}) 