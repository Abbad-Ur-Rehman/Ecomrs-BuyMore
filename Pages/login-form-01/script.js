let loginBtn = document.getElementById('a-login');
let loginfrom = document.getElementById('Sigin-form');

loginBtn.addEventListener('click',()=>{
    loginfrom.style.display="block"
})

let signIn = document.getElementById('')
let signUpBtn = document.getElementById('sign_btn');
signUpBtn.addEventListener('click',()=>{
    loginfrom.style.display = 'none'

})

// =-=-=-=-=-=-=-=-=-=-=-=LOCAL STORAGE =-=-=-=-=-=-=-=-=-=-=-=-
let name = document.getElementById('name')
let lastName = document.getElementById('last_name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let btnSignUp = document.getElementById('btnsignup')

btnSignUp.addEventListener('click' , storeUserData)
function storeUserData(){
    const fName = name.value
    const lName = lastName.value
    const userEmail = email.value
    const userpassword = password.value

    const alreadyExUserData = localStorage.getItem('allDataStored');
    
    let allDataStored = [];
    if(alreadyExUserData){
        allDataStored = JSON.parse(alreadyExUserData)
    }
    allDataStored.push({fName, lName,userEmail,userpassword});
    localStorage.setItem('allDataStored' , JSON.stringify(allDataStored))
    console.log(allDataStored)
    
    name.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
}
    

        
