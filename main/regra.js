function direciona(bt) {
   let txt = document.getElementById("texto")
   let idBotao = bt.id

   switch (idBotao) {
      case '1': /* Sobre Nós */
         txt.innerHTML='<h1>Sobre Nós</h1><p>DACLA Automação é uma empresa desenvolvedora de Sistemas Desktop, Mobile, Web e Embarcados.</p><p>Criada em 2020 pelo CEO Daniel Clarinda. Desenvolvemos sistemas inteligentes e personalizados voltados a automatização de processos.<br> Do hardware a interface do usuário.</p><p>Usando stacks modernas conseguimos desenvolver projetos de automatização industriais, residenciais e artísticas de forma rápida, responsiva e multiplataforma.</p>'
         corBotao(idBotao)
         break;
      case '2': /* Produtos */
         txt.innerHTML="<h1>Produtos</h1><p>Algumas páginas ainda estão em desenvolvimento</p>"
         corBotao(idBotao)
         break;
      case '3': /* Serviços */
         txt.innerHTML="<h1>Serviços</h1><p>Algumas páginas ainda estão em desenvolvimento</p>"
         corBotao(idBotao)
         break;
      case '4': /* Downloads */
         txt.innerHTML="<h1>Downloads</h1><p>Algumas páginas ainda estão em desenvolvimento</p>"
         corBotao(idBotao)
         break;
      case '5': /* Contato */
         txt.innerHTML='<h1>Contato</h1><p>Para cotação ou sugestões.<br>Atendemos de Segunda a Sexta-feira das 8:00h as 18:00h.</p><p>WhatsApp: (47) 99705-2402 <br>E-mail: <a href="#">dacla.automacao@hotmail.com</a></p>'
         corBotao(idBotao)
         break;
      default:
         txt.innerHTML="ERROR - button value"
   }
}

function corBotao(bt) {
   for(let i = 1; i <=5; i++) {
      if(bt != i) {
         document.getElementById(i).style.backgroundColor="#e1e1e1"
      } else {
         document.getElementById(bt).style.backgroundColor="white"
      }
   }
}