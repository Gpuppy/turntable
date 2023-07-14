/*Contrôlez le format de l'e-mail à l'aide de l'expression régulière suivante :


const email = document.getElementById('email');
const form = document.querySelector('form');
const error = document.getElementById('error');

var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

email.addEventListener('input', (event) => {
  if(!regexEmail.test(event.target.value)){
    error.innerText = 'le format de l\'email est incorrecte'
  }
  else{innerText =''
      }
})

/*Contrôlez que le mot de passe comporte au moins 8 caractères.

const password = document.getElementById('password');

password.addEventListener('input', (event) =>
  {
    if(event.target.value.length < 8){
      error.innerText = 'Le mot de passe doit contenir 8 lettres minimum '
    }
    else{innerText = ''}
    
  })

form.addEventListener('submit',(event) => {
  if(error.innerText !== ''){
    event.preventDefault()
  }else{alert('Le formulaire contient des erreurs et n/'a pas pu etre envoyé')
  }}
  ); */
  
  var btn = document.getElementById('btn');
  addEventListener('click',function(e){
      e.preventDefault()
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      var body = 'name: '+name + '<br> email:' + email + '<br> subject: ' +subject + '<br> message : '+ message;

      Email.send({
        SecureToken : "a643db89-3df1-44c5-848a-a643eb899d64",
        To : 'gaelswim@hotmail.com',
        From : "gadetreg@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }
  )