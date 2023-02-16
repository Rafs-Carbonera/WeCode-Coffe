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

// $(".cabecalho-menu-lateral-primeiro-departamento").click(function () {
//   $(".cabecalho-menu-lateral-primeiro-departamento-lista").toggleClass(
//     "mostra"
//   );
// });

// $(".cabecalho-menu-lateral-segundo-departamento").click(function () {
//   $(".cabecalho-menu-lateral-segundo-departamento-lista").toggleClass("mostra");
// });

// $(".cabecalho-menu-lateral-terceiro-departamento").click(function () {
//   $(".cabecalho-menu-lateral-terceiro-departamento-lista").toggleClass(
//     "mostra"
//   );
// });

// $(".cabecalho-menu-lateral-quarto-departamento").click(function () {
//   $(".cabecalho-menu-lateral-quarto-departamento-lista").toggleClass("mostra");
// });

// $(".cabecalho-menu-lateral-quinto-departamento").click(function () {
//   $(".cabecalho-menu-lateral-quinto-departamento-lista").toggleClass("mostra");
// });

// $(".cabecalho-menu-lateral-sexto-departamento").click(function () {
//   $(".cabecalho-menu-lateral-sexto-departamento-lista").toggleClass("mostra");
// });

$(document).ready(function ($) {
  $(".cabecalho-menu-lateral-itens > ul").hide();
  $(".cabecalho-menu-lateral-itens").click(function () {
    $(this).siblings().children("ul").hide("fast");
    $(this).children("ul").stop(true, true).slideToggle("fast"),
      $(this).toggleClass("dropdown-active");
  });
});

/*-------------------------------menu-lateral-fechar-------------------------------------*/

const $menuLateral = $(".cabecalho-menu-lateral");

$(document).mouseup((e) => {
  if (!$menuLateral.is(e.target) && $menuLateral.has(e.target).length === 0) {
    $menuLateral.removeClass("mostra");
    // $(".cabecalho-menu-lateral-primeiro-departamento-lista").removeClass(
    //   "mostra"
    // );
    // $(".cabecalho-menu-lateral-segundo-departamento-lista").removeClass(
    //   "mostra"
    // );
    // $(".cabecalho-menu-lateral-terceiro-departamento-lista").removeClass(
    //   "mostra"
    // );
    // $(".cabecalho-menu-lateral-quarto-departamento-lista").removeClass(
    //   "mostra"
    // );
    // $(".cabecalho-menu-lateral-quinto-departamento-lista").removeClass(
    //   "mostra"
    // );
    // $(".cabecalho-menu-lateral-sexto-departamento-lista").removeClass("mostra");
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
    if ($.trim($(".rodape-inputs").val()) != "") {
      $(".rodape-email-enviado").toggleClass("mostra");
    } else {
      $(".rodape-email-erro").toggleClass("mostra");
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
  });
});

/*------------------------------footer-menu-------------------------------*/

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

// /*---------------------------------------------*/

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

// /*---------------------------------------------*/

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

// /*---------------------------------------------*/

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

$(document).ready(function ($) {
  $(".rodape-menu-item > ul").hide();
  $(".rodape-menu-item").click(function () {
    $(this).siblings().children("ul").hide("fast");
    $(this).children("ul").stop(true, true).slideToggle("fast"),
      $(this).toggleClass("dropdown-active");
  });
});
