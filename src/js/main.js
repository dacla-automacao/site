const conteudoExibicaoInicial = 'btn-services';

function getContent(id_botao) {
  displayNoneTodosConteudos();
  disnableActiveStyleTodosBotoes();
  document.getElementById(id_botao).className += ' active';
  let id_conteudo = id_botao.replace('btn-', '');
  id_conteudo += '-content';
  document.getElementById(id_conteudo).style.display = '';
}

function displayNoneTodosConteudos() {
  let conteudos = document.getElementById('main-content').children;

  for(let i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none';
  }
}

function disnableActiveStyleTodosBotoes() {
  let botoes = document.getElementById('menu').children;

  for(let i = 0; i < botoes.length; i++) {
    botoes[i].className = botoes[i].className.replace(' active','');
  }
}

document.getElementById(conteudoExibicaoInicial).click();