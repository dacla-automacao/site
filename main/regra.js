let sobre = document.getElementById("texto").innerHTML
let servicos = `
<h1>Serviços</h1>
<h4><strong>Sistemas Embarcados</strong></h4>
<p>Fabricamos PCBs usando os microcontroladores e processadores mais difundidos do mercado. Microchip PIC, Atmel AVR (Arduino), ARM Cortex (STM32 e RaspBerry Pi) e Espressif (ESP32 e NodeMCU).<br>
Sobre medida para atender as mais diversas necessidades, IoT (internet das coisas), Domótica (automação residencial), automatização de máquinas, interfaces musicais e artísticas.</p>

<h4><strong>Aplicações Web</strong></h4>
<p>No desenvolvimento Web usamos as stacks mais populares como HTML5, CSS3, JavaScript, ReactJS, JSON, NodeJS e SQL, na criação de sites, SPAs, aplicações Web, games, entre outros.</p>

<h4><strong>Softwares Multiplataforma</strong></h4>
<p>Para sistemas operacionais aproveitamos a beleza e responsividade das tecnologias Web juntamente com framework Electron para resultar em softwares para Windows e Linux.</p>

<h4><strong>Aplicações Mobile</strong></h4>
<p>Desenvolvimento de Apps Nativos para smartphones com React Native.</p>

<h4><strong>Automação Industrial - Programação de CLPs</strong></h4>
<p>Automatização de máquinas industriais com controladores lógicos programáveis na linguagem Ladder.</p>

<h4><strong>Desenvolvimento de IHMs</strong></h4>
<p>Desenvolvimento de interfaces gráficas e trouch para supervisão e controle de processos industriais.</p>`
let produtos = `
<h1>Produtos</h1>
<h4><strong>#1 - Automatização do processo industrial de fabricação de Paver e Lajotas.</strong></h4>
<p>Nesse projeto foi desenvolvido uma placa eletrônica microcontrolada programável, a fim de converter uma máquina industrial de processo manual para automático. A automação aumentou a produção e resultou em uma qualidade consistente.</p>
<br>
<div id="video">
   <iframe class="responsive-iframe" src="https://www.youtube.com/embed/Bj9OIfq1y4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`
let downloads = `
<h1>Downloads</h1>
<p>Desculpe!</p>
<p>Algumas páginas ainda estão em desenvolvimento.</p>`
let contato = `
<h1>Contato</h1>
<p>Para orçamentos ou sugestões.<br>Atendemos de Segunda a Sexta-feira das 8:00h as 18:00h.</p>
<p>E-mail: <a href="#">dacla.automacao@hotmail.com</a></p>`

function direciona(bt) {
   let txt = document.getElementById("texto")
   let idBotao = bt.id

   switch (idBotao) {
      case '1': /* Sobre Nós */
         txt.innerHTML=sobre
         corBotao(idBotao)
         break;
      case '2': /* Serviços */
         txt.innerHTML=servicos
         corBotao(idBotao)
         break;
      case '3': /* Produtos */
         txt.innerHTML=produtos
         corBotao(idBotao)
         break;
      case '4': /* Downloads */
         txt.innerHTML=downloads
         corBotao(idBotao)
         break;
      case '5': /* Contato */
         txt.innerHTML=contato
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
