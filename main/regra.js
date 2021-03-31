let sobre = document.getElementById("texto").innerHTML
/* let produtos = 
let servicos = 
let downloads = 
let contato =  */

function direciona(bt) {
   let txt = document.getElementById("texto")
   let idBotao = bt.id

   switch (idBotao) {
      case '1': /* Sobre Nós */
         txt.innerHTML=sobre
         corBotao(idBotao)
         break;
      case '2': /* Produtos */
         txt.innerHTML='<h1>Produtos</h1><p><strong>#1 - Automatização do processo industrial de fabricação de Paver e Lajotas.</strong></p><p>Nesse projeto foi desenvolvido uma placa eletrônica microcontrolada programável, a fim de converter uma máquina industrial de processo manual para automático. A automação aumentou a produção e resultou em uma qualidade consistente.</p><br><div id="video"><iframe class="responsive-iframe" src="https://www.youtube.com/embed/Bj9OIfq1y4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
         corBotao(idBotao)
         break;
      case '3': /* Serviços */
         txt.innerHTML="<h1>Serviços</h1><p><strong>Sistemas Embarcados</strong></p><p>Trabalhamos com os microcontroladores e processadores mais difundidos do mercado. Microchip PIC, Atmel AVR (Arduino), ARM Cortex (STM32 e RaspBerry Pi) e Espressif (ESP32 e NodeMCU).<br> Voltado a IoT (internet das coisas), Domótica (automação residencial) e automatização de pequenas máquinas</p><p><strong>Desenvolvimento Web</strong></p><p>No desenvolvimento Web usamos as stacks mais populares como HTML5, CSS3, JavaScript, ReactJS, JSON, NodeJS e SQL, na criação de sites, SPAs, Aplicações Web, entre outros.</p><p><strong>Sistemas Desktop - Software</strong></p><p>Para sistemas operacionais aproveitamos a beleza e responsividade das tecnologias Web juntamente com framework Electron para resultar em softwares multiplataforma.</p><p><strong>Aplicações Mobile</strong></p><p>Desenvolvimento de Apps para smartphones com React Native.</p><p><strong>Programação de CLPs</strong></p><p>Automatização de máquinas industriais com controladores lógicos programáveis na linguagem Ladder.</p><p><strong>Desenvolvimento de IHMs</strong></p><p>Desenvolvimento de interfaces gráficas e trouch para supervisão e controle de máquinas industriais.</p>"
         corBotao(idBotao)
         break;
      case '4': /* Downloads */
         txt.innerHTML="<h1>Downloads</h1><p>Algumas páginas ainda estão em desenvolvimento</p>"
         corBotao(idBotao)
         break;
      case '5': /* Contato */
         txt.innerHTML='<h1>Contato</h1><p>Para orçamentos ou sugestões.<br>Atendemos de Segunda a Sexta-feira das 8:00h as 18:00h.</p><p>WhatsApp: (47) 99705-2402 <br>E-mail: <a href="#">dacla.automacao@hotmail.com</a></p>'
         corBotao(idBotao)
         break;
      default:
         txt.innerHTML="ERROR - button value"
   }
}

function corBotao(bt) {
   for(let i = 1; i <=5; i++) {
      if(bt != i) {
         document.getElementById(i).style.backgroundColor="#26538A"
         document.getElementById(i).style.color="white"
      } else {
         document.getElementById(bt).style.backgroundColor="white"
         document.getElementById(i).style.color="black"
      }
   }
}