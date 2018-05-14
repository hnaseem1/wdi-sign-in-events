var signIn = document.querySelector('button')
var closeButton = document.querySelector('.getstarted').querySelector('button')
var submitButton = document.querySelector('.getstarted').querySelector('.submit')
var userBox = document.getElementById('user')
var passBox = document.getElementById('pass')

signIn.addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'block';
})

closeButton.addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
})

submitButton.addEventListener('click', function() {
  userBox.className = 'error'
  passBox.className = 'error'
})

userBox.addEventListener('click', function() {
  userBox.className = '';
})

passBox.addEventListener('click', function() {
  passBox.className = '';
})
