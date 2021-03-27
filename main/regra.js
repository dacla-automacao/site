function corBotao(bt) {
   bt.style.backgroundColor='white'
}
function resetBotao(bt) {
   bt.style.backgroundColor='#e1e1e1'
}
function direciona(bt) {
   let txt = document.getElementById("texto")

   switch (bt) {
      case 'bt1': /* Sobre Nós */
         txt.innerHTML='<h1>Sobre Nós</h1><p>DACLA Automação é uma empresa desenvolvedora de Sistemas Desktop, Mobile, Web e Embarcados.</p><p>Criada em 2020 pelo CEO Daniel Clarinda. Desenvolvemos sistemas inteligentes e personalizados voltados a automatização de processos. Do hardware a interface do usuário.</p><p>Usando stacks modernas conseguimos desenvolver projetos de automatização industriais, residenciais e artísticas de forma rápida, responsiva e multiplataforma.</p><article id="contato"><h5>WhatsApp: (47) 99705-2402</h5><h5>E-mail: <a href="#">dacla.automacao@hotmail.com</a></h5></article>'
         break;
      case 'bt2': /* Produtos */
         txt.innerHTML="<h1>Produtos</h1>Algumas páginas ainda estão em desenvolvimento"
         break;
      case 'bt3': /* Serviços */
         txt.innerHTML="<h1>Serviços</h1>Algumas páginas ainda estão em desenvolvimento"
         break;
      case 'bt4': /* Downloads */
         txt.innerHTML="<h1>Downloads</h1>Algumas páginas ainda estão em desenvolvimento"
         break;
      case 'bt5': /* Contato */
         txt.innerHTML='<h1>Contato</h1><article id="contato"><h5>WhatsApp: (47) 99705-2402</h5><h5>E-mail: <a href="#">dacla.automacao@hotmail.com</a></h5></article>'
         break;
      default:
         txt.innerHTML="ERROR - button value"
   }
}
