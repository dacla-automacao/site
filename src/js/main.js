const initialContent = 'btn-services';          //id_button

function getContent(id_button) {
  hideAllContent();
  disableActiveStyleAllButtons();
  document.getElementById(id_button).className += ' active';
  let id_content = id_button.replace('btn-', '');
  id_content += '-content';
  document.getElementById(id_content).style.display = '';
}

function hideAllContent() {
  let allContent = document.getElementById('main-content').children;

  for(let i = 0; i < allContent.length; i++) {
    allContent[i].style.display = 'none';
  }
}

function disableActiveStyleAllButtons() {
  let buttons = document.getElementById('menu').children;

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(' active','');
  }
}

document.getElementById(initialContent).click();