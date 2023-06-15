
//addedLang is the new information we want to post
const addedLang = {
    "name":"Prolog",
    "creator":"Colmerauer et al.",
    "year": 1972,
    "users":0
}
/*const postRequestParameters = {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(addedLang)
}*/

//the next line to the next fetch function are turning it into a form that will actually create a new object when you hit submit instead of just adding a hardcoded entry like addedLang from the top
const form = document.getElementById('langForm')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    const name = e.target.name.value
    const year = e.target.year.value
    const creator = e.target.creator.value
    const users = 0

    const newLangObject = {
        'name': name,
        'year': year,
        'creator': creator,
        'users': users,
    }

    fetch('http://localhost:3000/langs', {
    method:'POST',
    headers:{'Content-Type':'application/json'},    
    body:JSON.stringify(newLangObject) //MUST ADD JSON.stringify(onbject you want added)
    }) .then(response => response.json()) //always remember to CALL () json
    .then(jsonData => addLangToPage(jsonData)) //<- jsonData + function will actually create an element -> the next console.log will just recorded it was added to json but not saved as an element - console.log(`form post success: ${JSON.stringify(jsonData)}`))
    .catch(error => console.log(`post error: ${error}`))
})

function addLangToPage(){
    const langDiv = document.createElement('div')
    langDiv.innerText = `Language: ${lang.Name} Name: ${lang.Name}`
    const postedLangs = document.getElementById('posted-langs')
    postedLangs.appendChild(langDiv)
}


fetch("http://localhost:3000/langs",postRequestParameters)
    .then(response => response.json())
    .then(json => console.log(`response from the post ${JSON.stringify(json)}`))
    .catch(error => console.log(`error from post: ${error}`))



// const modification & const patchRequestParamaeters. Showing how we can edit ONE field 
const modification = {
    users:999999
} //the field we want edited key:element

//the code to say what we will be replacing - notice that last body with modification as the argument
const patchRequestParameters = {
    method:"PATCH",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(modification)
}

//telling the JSON where to add in the patchRequest with the data from the const modification
fetch("http://localhost:3000/langs/1",patchRequestParameters)



fetch(`http://localhost:3000/langs/fillInANumber`,{method: 'DELETE'})
//method: 'DELETE' is the way you will delete an object (fillInANumber) would be the index point youd want to delete from the array
//this is just the first step it is the promise and will return a promise
//you have to make a .then .then to resolve from a pending
