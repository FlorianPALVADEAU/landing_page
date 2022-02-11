var form = document.querySelector('.rightPart')
var input1 = document.getElementById('s1')
var input2 = document.querySelector('#s2')
var input3 = document.querySelector('#s3')
var input4 = document.querySelector('#s4')
var input5 = document.querySelector('#s5')
var input6 = document.querySelector('#s6')
var submit = document.querySelector('.submit')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(input5.value != null && input6.value != null && input3 != null && input4 != null)
    {
        e.preventDefault();

       
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "IsExcludedFromCampaigns": false,
          "Name": input5.value,
          "Email": `khiter.adel@gmail.com`
        });
    

        console.log(raw)
        alert('utilisateur enregistré !');

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch("https://api.mailjet.com/v3/REST/contact", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));


    }else{
        alert('Veuillez remplir tous les champs !')
        e.preventDefault();
    }

    
})