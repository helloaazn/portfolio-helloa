


/* ATALHOS, Pra não ficar escrevendo document.querySelector toda hora. */
function $(seletor, contexto) {
  return (contexto || document).querySelector(seletor);
}
function $$(seletor, contexto) {
  // querySelectorAll devolve uma NodeList; o [...] transforma em array
  return [...(contexto || document).querySelectorAll(seletor)];
}

const MEU_EMAIL = "helloasamille@gmail.com";


/* MENU: fechar ao clicar em um link (celular) */
const menu = $("#menu");
$$(".navbar .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu && menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});


/* AO ROLAR A PÁGINA
   - põe sombra na navbar
   - mostra o botão de voltar ao topo
   - marca no menu em qual seção eu estou (link "ativo") */
const navbar = $(".navbar-helloa");
const botaoTopo = $(".botao-topo");
const secoes = $$("main section[id]");
const linksMenu = $$('.navbar a.nav-link[href^="#"]');

function aoRolar() {
  // scrollY = quantos pixels a página já desceu
  if (navbar) navbar.classList.toggle("rolou", scrollY > 20);
  if (botaoTopo) botaoTopo.classList.toggle("mostrar", scrollY > 600);

  // descobre qual seção está passando agora no topo da tela
  let atual = "";
  secoes.forEach(function (secao) {
    if (scrollY >= secao.offsetTop - 140) {
      atual = secao.id;
    }
  });
  linksMenu.forEach(function (link) {
    link.classList.toggle("ativo", link.getAttribute("href") === "#" + atual);
  });
}
addEventListener("scroll", aoRolar, { passive: true });
aoRolar(); // roda uma vez logo de cara

if (botaoTopo) {
  botaoTopo.addEventListener("click", function () {
    scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ANIMAÇÃO AO APARECER NA TELA
   IntersectionObserver avisa quando um elemento entra na tela.
   Aí eu adiciono a classe "visivel" e o CSS faz a animação. */
const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target); // só anima uma vez
    }
  });
}, { threshold: 0.15 });

$$(".reveal").forEach(function (el) {
  observador.observe(el);
});


/* EFEITO DE DIGITAÇÃO NO HERO */
const digitandoEl = $("#digitando");

if (digitandoEl) {
  const frases = [
    "estudante de Ciência da Computação",
    "movida por sonhos",
    "tia coruja",
    "apaixonada por música",
    "fã de vôlei",
    "futura especialista em tecnologia"
  ];
  let fraseAtual = 0;   // qual frase está sendo escrita
  let letras = 0;       // quantas letras já aparecem
  let apagando = false; // true = está apagando, false = está escrevendo

  function digitar() {
    const frase = frases[fraseAtual];

    // escreve ou apaga uma letra
    if (apagando) {
      letras--;
    } else {
      letras++;
    }
    digitandoEl.textContent = frase.slice(0, letras);

    let espera = apagando ? 40 : 90;

    if (!apagando && letras === frase.length) {
      // terminou de escrever: espera um pouco e começa a apagar
      apagando = true;
      espera = 1500;
    } else if (apagando && letras === 0) {
      // terminou de apagar: vai pra próxima frase
      apagando = false;
      fraseAtual = (fraseAtual + 1) % frases.length;
      espera = 400;
    }
    setTimeout(digitar, espera);
  }
  digitar();
}


/* ESPAÇOS DE FOTO (placeholders)  */
$$(".img-slot").forEach(function (slot) {
  const img = $("img", slot);
  if (!img) return;

  function fotoCarregou() {
    slot.classList.add("tem-foto");
  }

  // se a imagem já carregou antes do script rodar, marca na hora
  if (img.complete && img.naturalWidth > 0) {
    fotoCarregou();
  } else {
    img.addEventListener("load", fotoCarregou);
  }
});


/* CONTADORES ANIMADOS (seção "Sobre mim")
   Os números sobem de 0 até o valor que está em data-count. */
const contador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (!entrada.isIntersecting) return;

    const el = entrada.target;
    const alvo = Number(el.dataset.count);
    let n = 0;

    const intervalo = setInterval(function () {
      n++;
      el.textContent = n;
      if (n >= alvo) clearInterval(intervalo);
    }, Math.max(60, 900 / alvo));

    contador.unobserve(el);
  });
}, { threshold: 0.6 });

$$("[data-count]").forEach(function (el) {
  contador.observe(el);
});


/* PLACAR DE VÔLEI (minijogo) */
const placar = $("#placar");

if (placar) {
  const pontos = { A: 0, B: 0 };
  const pontosA = $("#pontosA");
  const pontosB = $("#pontosB");
  const mensagem = $("#placar-msg");
  const botoesPonto = $$("[data-time]", placar);
  let acabou = false;

  function atualizarPlacar() {
    pontosA.textContent = pontos.A;
    pontosB.textContent = pontos.B;
    pontosA.classList.remove("venceu");
    pontosB.classList.remove("venceu");

    const maior = Math.max(pontos.A, pontos.B);
    const diferenca = Math.abs(pontos.A - pontos.B);

    // verifica se alguém ganhou o set
    if (maior >= 25 && diferenca >= 2) {
      acabou = true;
      const vencedor = pontos.A > pontos.B ? "A" : "B";
      mensagem.textContent = "🏆 Set para o Time " + vencedor + "! Clique em 'Zerar placar' pra jogar de novo.";
      $("#pontos" + vencedor).classList.add("venceu");
      botoesPonto.forEach(function (b) { b.disabled = true; });
    } else if (maior >= 24 && diferenca < 2 && maior > 0) {
      mensagem.textContent = "🔥 Set point! Quem abrir 2 de vantagem leva.";
    } else {
      mensagem.textContent = "Primeiro a chegar em 25 com 2 pontos de vantagem ganha o set.";
    }
  }

  botoesPonto.forEach(function (botao) {
    botao.addEventListener("click", function () {
      if (acabou) return;
      pontos[botao.dataset.time]++;
      atualizarPlacar();
    });
  });

  $("#placar-reset").addEventListener("click", function () {
    pontos.A = 0;
    pontos.B = 0;
    acabou = false;
    botoesPonto.forEach(function (b) { b.disabled = false; });
    atualizarPlacar();
  });
}


/* TOOLTIPS DO BOOTSTRAP
   Os tooltips (balãozinho ao passar o mouse) precisam ser ativados
   com JavaScript, por isso esse trecho. */
$$('[data-bs-toggle="tooltip"]').forEach(function (el) {
  new bootstrap.Tooltip(el);
});


/* FORMULÁRIO DE CONTAT
   Valido com a validação do próprio Bootstrap (.was-validated).
   Se estiver tudo certo, abro o app de e-mail com a mensagem pronta
   e mostro um toast (aviso) de sucesso. */
const form = $("#form-contato");

if (form) {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // não deixa a página recarregar

    // checkValidity() confere os "required", "minlength" e o tipo email
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const nome = $("#nome").value.trim();
    const email = $("#email").value.trim();
    const mensagem = $("#mensagem").value.trim();

    const assunto = encodeURIComponent("Contato pelo portfólio - " + nome);
    const corpo = encodeURIComponent(mensagem + "\n\n" + nome + " (" + email + ")");
    location.href = "mailto:" + MEU_EMAIL + "?subject=" + assunto + "&body=" + corpo;

    // mostra o toast do Bootstrap
    $("#toast-nome").textContent = nome;
    bootstrap.Toast.getOrCreateInstance($("#toast-sucesso")).show();

    form.reset();
    form.classList.remove("was-validated");
  });
}


/* 10. ANO AUTOMÁTICO NO RODAPÉ */
const anoEl = $("#ano");
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}