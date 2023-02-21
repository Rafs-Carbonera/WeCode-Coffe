/*--------------------------------------header------------------------------------*/
/*-----------------------------------menu-lateral---------------------------------*/

$(".cabecalho-menu-lateral-btn-abre").click(function () {
  $(".cabecalho-menu-lateral").toggleClass("mostra");
});

$(".cabecalho-menu-lateral-btn-fecha").click(function () {
  $(".cabecalho-menu-lateral").toggleClass("mostra");
});

$(".cabecalho-menu-lateral-sair").click(function () {
  $(".cabecalho-menu-lateral").toggleClass("mostra");
});

/*----------------------------menu-lateral-departamentos--------------------------*/

$(document).ready(function ($) {
  $(".cabecalho-menu-lateral-itens > ul").hide();
  $(".cabecalho-menu-lateral-itens").click(function () {
    $(this).siblings().children("ul").hide("fast");
    $(this).children("ul").slideToggle("fast");
    $(this).toggleClass("dropdown-active");
  });
});

/*-------------------------------menu-lateral-fechar-------------------------------------*/

const $menuLateral = $(".cabecalho-menu-lateral");

$(document).mouseup((e) => {
  if (!$menuLateral.is(e.target) && $menuLateral.has(e.target).length === 0) {
    $menuLateral.removeClass("mostra");
    $(".cabecalho-menu-lateral-itens > ul").hide();
  }
});

/*-------------------------------menu-lateral-pesquisa---------------------------------*/

$(".cabecalho-direita-item-lupa").click(function () {
  $(".cabecalho-direita-busca").toggleClass("mostra");
});

$(".cabecalho-direita-busca-btn-close").click(function () {
  $(".cabecalho-direita-busca").toggleClass("mostra");
});

const $barraBusca = $(".cabecalho-direita-busca");

$(document).mouseup((e) => {
  if (!$barraBusca.is(e.target) && $barraBusca.has(e.target).length === 0) {
    $barraBusca.removeClass("mostra");
  }
});

/*------------------------------main-carrossel-imagens-------------------------------*/

const swiper = new Swiper(".produtos-primeiro-carrossel", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*-------------------------------carrossel-produtos---------------------------------*/

const swiperVendidos = new Swiper(".produtos-carrossel", {
  freeMode: {
    enabled: true,
  },
  slidesPerView: 1.2,
  spaceBetween: 10,
  momentum: false,
  speed: 500,
});

/*-------------------------------carrossel-pagamento---------------------------------*/

const swiperPagamento = new Swiper(".pagamento-carrossel", {
  slidesPerView: 2,
  spaceBetween: 2,
  pagination: {
    el: ".pagamento-rolagem",
    type: "bullets",
  },
});

/*------------------------------footer-newsletter--------------------------*/

$(document).ready(function () {
  $(".rodape-email-btn").click(function () {
    if ($(".rodape-input > input").val() == "") {
      $(".rodape-email-erro").toggleClass("mostra");
      setTimeout(function () {
        $(".rodape-email-erro").hide("5000");
      }, 4000);
    } else {
      $(".rodape-email-enviado").toggleClass("mostra");
    }
  });
});

$(function () {
  $(".rodape-email-btn").on("click", function (event) {
    event.preventDefault();
    const name = $("#name-value").val();
    const email = $("#email-value").val();
    const telefone = $("#tel-value").val();
    $("#valores-formulario").html(
      "Nome: " +
        name +
        "<br><br>" +
        "E-mail: " +
        email +
        "<br><br>" +
        "Telefone: " +
        telefone
    );
    setTimeout(function () {
      $("#valores-formulario").hide("5000");
    }, 4000);
    $(".rodape-input input").val("");
  });
});

/*------------------------------footer-menu-------------------------------*/

$(document).ready(function ($) {
  $(".rodape-menu-item > ul").hide();
  $(".rodape-menu-item").click(function (e) {
    e.preventDefault();
    $(this).siblings().children("ul").hide("fast");
    $(this).children("ul").slideToggle("fast");
    $(this).toggleClass("dropdown-active");

    const btnFecha = $(this)
      .children(".rodape-menu-item-texto")
      .children(".rodape-menu-btn-fecha ");
    const btnAbre = $(this)
      .children(".rodape-menu-item-texto")
      .children(".rodape-menu-btn-abre ");
    const comandoMostrar = $(this)
      .siblings()
      .children(".rodape-menu-item-texto")
      .children(".rodape-menu-btn-abre");
    const comandoEsconder = $(this)
      .siblings()
      .children(".rodape-menu-item-texto")
      .children(".rodape-menu-btn-fecha");

    btnFecha.toggleClass("invisivel");
    btnAbre.toggleClass("invisivel");

    if (comandoMostrar.hasClass("invisivel")) {
      comandoMostrar.removeClass("invisivel");
      $(this);
      comandoEsconder.addClass("invisivel");
    }
  });
});
