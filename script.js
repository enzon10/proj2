const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button=> {
    button.addEventListener('click,' fuction (){
    const atual = document.querySelector ('.ativo');
    const proximoPasso = 'passo-' this.getAttribute('data-proximo')

      atual.classList.remove('ativo');
      document.getElementByID (proximoPasso). classList.add('ativo')
    })
})




