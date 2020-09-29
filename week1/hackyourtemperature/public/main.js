
const sendData =()=>{
    axios.post('/city',{
        name:'sadeq'
    }).then(res => {
        console.log(res)
    })
}
const submit = document.getElementById('submit')
submit.addEventListener('click',sendData)