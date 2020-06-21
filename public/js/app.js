

console.log("javascript loggin");


fetch("http://localhost:3000/weather?address=chennai").then((response)=>{
  response.json().then((data) => {
    console.log(data)
    if(data.error){
      console.log(data.error)
    } else {
      console.log(data.place)
      console.log(data.forecast)
    }
  })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
weatherForm.addEventListener('submit',(e) =>{
  e.preventDefault()
  const val = search.value
  console.log("test"+val)
  messageOne.textContent = "loading..."
  messageTwo.textContent=""
  fetch("http://localhost:3000/weather?address="+encodeURIComponent(val)).then((response)=>{
  response.json().then((data) => {
    console.log(data)
    if(data.error){
      console.log(data.error)
      messageOne.textContent=data.error
    } else {
      console.log(data.place)
      messageOne.textContent=data.place
      messageTwo.textContent=data.forecast
      console.log(data.forecast)
    }
  })
})
})