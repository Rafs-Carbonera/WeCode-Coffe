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
    $(this).children("ul").stop(true, true).slideToggle("fast");
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
    if ($(".rodape-input > input").val() === "") {
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
    var name = $("#name-value").val();
    var email = $("#email-value").val();
    var telefone = $("#tel-value").val();
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
    $(".rodape-input input").val("");
  });
});

/*------------------------------footer-menu-------------------------------*/

$(document).ready(function ($) {
  $(".rodape-menu-item > ul").hide();
  $(".rodape-menu-item").click(function (e) {
    e.preventDefault();
    $(".rodape-menu-item p").toggle();
    $(this).siblings().children("ul").hide("fast");
    $(this).children("ul").slideToggle("fast");
    $(this).toggleClass("dropdown-active");
  });
});

// $(".rodape-menu-btn-abre-sobre").click(function () {
//   $(".rodape-menu-sublista-sobre").toggleClass("mostra");
//   $(".rodape-menu-btn-fecha-sobre").toggleClass("mostra");
//   $(".rodape-menu-btn-abre-sobre").toggleClass("fecha");
// });

// $(".rodape-menu-btn-fecha-sobre").click(function () {
//   $(".rodape-menu-btn-abre-sobre").removeClass("fecha");
//   $(".rodape-menu-btn-fecha-sobre").removeClass("mostra");
//   $(".rodape-menu-sublista-sobre").removeClass("mostra");
// });

// // /*---------------------------------------------*/

// $(".rodape-menu-btn-abre-conta").click(function () {
//   $(".rodape-menu-sublista-conta").toggleClass("mostra");
//   $(".rodape-menu-btn-fecha-conta").toggleClass("mostra");
//   $(".rodape-menu-btn-abre-conta").toggleClass("fecha");
// });

// $(".rodape-menu-btn-fecha-conta").click(function () {
//   $(".rodape-menu-btn-abre-conta").removeClass("fecha");
//   $(".rodape-menu-btn-fecha-conta").removeClass("mostra");
//   $(".rodape-menu-sublista-conta").removeClass("mostra");
// });

// // /*---------------------------------------------*/

// $(".rodape-menu-btn-abre-politicas").click(function () {
//   $(".rodape-menu-sublista-politicas").toggleClass("mostra");
//   $(".rodape-menu-btn-fecha-politicas").toggleClass("mostra");
//   $(".rodape-menu-btn-abre-politicas").toggleClass("fecha");
// });

// $(".rodape-menu-btn-fecha-politicas").click(function () {
//   $(".rodape-menu-btn-abre-politicas").removeClass("fecha");
//   $(".rodape-menu-btn-fecha-politicas").removeClass("mostra");
//   $(".rodape-menu-sublista-politicas").removeClass("mostra");
// });

// // /*---------------------------------------------*/

// $(".rodape-menu-btn-abre-contato").click(function () {
//   $(".rodape-menu-sublista-contato").toggleClass("mostra");
//   $(".rodape-menu-btn-fecha-contato").toggleClass("mostra");
//   $(".rodape-menu-btn-abre-contato").toggleClass("fecha");
// });

// $(".rodape-menu-btn-fecha-contato").click(function () {
//   $(".rodape-menu-btn-abre-contato").removeClass("fecha");
//   $(".rodape-menu-btn-fecha-contato").removeClass("mostra");
//   $(".rodape-menu-sublista-contato").removeClass("mostra");
// });

/*---------------------------------------------*/
