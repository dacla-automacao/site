const aboutUs = `
<div class="item">
<p>DACLA Automação é uma empresa desenvolvedora de;</p>

<ul class="unstyledList">
	<li><strong>Sistemas Embarcados</strong></li>
	<li><strong>Aplicações Web</strong></li>
	<li><strong>Softwares Multiplataforma</strong></li>
	<li><strong>Aplicações Mobile</strong></li>
	<li><strong>Programação de CLPs</strong></li>
	<li><strong>IHMs</strong></li>
</ul>

<p>Criada em 2020 pelo CEO Daniel Clarinda. Desenvolvemos sistemas inteligentes e personalizados voltados a automatização de processos. Do hardware a interface do usuário.</p>

<p>Usando stacks modernas conseguimos desenvolver projetos de automatização industriais, residenciais e artísticas de forma rápida, responsiva e multiplataforma.</p>
</div>`;

const services = `
<div class="item">
<h4><strong>Sistemas Embarcados</strong></h4>

<p>Fabricamos placas de circuito impresso(PCBs) usando os microcontroladores e processadores mais difundidos do mercado.<br>
Tudo sobre medida para atender as mais diversas necessidades, internet das coisas(IoT), automação residencial(Domótica), automação de máquinas, interfaces musicais e artísticas.</p>

<div class="picture">
	<a href="./images/sistema-embarcado.jpg">
		<img src="./images/sistema-embarcado.jpg" alt="Foto de um sistema embarcado">
	</a>
</div>
</div>

<div class="item">
<h4><strong>Aplicações Web</strong></h4>

<p>No desenvolvimento web usamos as stacks mais populares para criar sites, SPAs, Web Apps, games, entre outros.</p>

<div class="picture">
	<a href="./images/dashboard.png">
		<img src="./images/dashboard.png" alt="Imagem de um painel de controle web - Dashboard">
	</a>
</div>
</div>

<div class="item">
<h4><strong>Softwares Multiplataforma</strong></h4>

<p>Aproveitamos a beleza e responsividade das tecnologias Web para desenvolver programas para sistemas operacionais Windows e Linux.</p>

<div class="picture">
	<a href="./images/weather.jpg">
		<img src="./images/weather.jpg" alt="Exemplo que software desenvolvido com electron - Weather">
	</a>
</div>
</div>

<div class="item">
<h4><strong>Aplicações Mobile</strong></h4>

<p>Desenvolvimento de Aplicativos Nativos para smartphones Android e iOS.</p>

<div class="picture">
	<a href="./images/mobile-app.png">
		<img src="./images/mobile-app.png" alt="Exemplo de aplicações mobile">
	</a>
</div>
</div>

<div class="item">
<h4><strong>Programação de CLPs</strong></h4>

<p>Automatização de máquinas industriais com controladores lógicos programáveis(CLPs).</p>

<div class="picture">
	<a href="./images/clp-ladder.jpg">
		<img src="./images/clp-ladder.jpg" alt="CLP Clic02 WEG progamado em Ladder">
	</a>
</div>
</div>

<div class="item">
<h4><strong>Desenvolvimento de IHMs</strong></h4>

<p>Desenvolvimento de interfaces gráficas e trouch para supervisão e controle de processos industriais.</p>

<div class="picture">
	<a href="./images/supervisorio.jpg">
		<img src="./images/supervisorio.jpg" alt="Sistema supervisório de cervejaria">
	</a>
</div>
</div>`;

const products = `
<div class="item">
<h4><strong>Automação do processo de fabricação de Paver e Lajotas.</strong></h4>

<p>Nesse projeto foi desenvolvido um controlador programável, a fim de converter a máquina originalmente de processo manual para automático. A automação aumentou a produção e resultou em uma maior consistência da qualidade do produto.</p>
<br>
<div id='video'>
	<iframe class='responsive-iframe' src='https://www.youtube.com/embed/Bj9OIfq1y4I' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
</div>
</div>`
;

const downloads = `
<div class="item">
<p>Nenhum item disponível</p>
</div>`
;

const contact = `
<div class="item">
<h4>Para orçamentos ou sugestões.</h4>

<p>Atendemos de Segunda a Sexta-feira das 8:00h as 18:00h.</p>
<br>
<p>Fone (WhatsApp): (47) 9 9705-2402</p>
<p>E-mail: <a href='#'>dacla.automacao@hotmail.com</a></p>
<br>
<p> Dacla Automação no <a href="https://www.youtube.com/channel/UChazDXIuQ71YFWU7EQbSK5w" target="_blank"><strong>YouTube</strong></a> & <a href="http://instagram.com/daclaautomacao" target="_blank"><strong>Instagram</strong></a></p>
</div>`
;

function selectedStyleControl() {
	let selectedList = document.querySelectorAll(".selected");

	selectedList.forEach((selectedItem)=>{
		document.getElementsByName(selectedItem.name)[0].className = "noSelected";
	})
}

function handleContent(option) {
	let content = "";
	
	selectedStyleControl();
	
	document.getElementsByName(option.name)[0].className = "selected";
	
	switch (option.name) {
		case "aboutUs":
			content = aboutUs;
			break;
		case "services":
			content = services;
			break;
		case "products":
			content = products;
			break;
		case "downloads":
			content = downloads;
			break;
		case "contact":
			content = contact;
			break;
		default:
			content = "Erro - handleContent('invalid')";
	}

	document.querySelector(".content").innerHTML = content;
};

const firstMenuOption = document.querySelector("nav > a");
handleContent(firstMenuOption);