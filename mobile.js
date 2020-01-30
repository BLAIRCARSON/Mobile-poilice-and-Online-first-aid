const submitBtn = document.querySelector('#register');
const emailaddress =  document.querySelector('#emailaddress');
const lastname =  document.querySelector('#lastname');




submitBtn.addEventListener('mouseover',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid #D02D8B";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid #D02D8B";
  }
})


submitBtn.addEventListener('mouseleave',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid transparent";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid transparent";
  }
})