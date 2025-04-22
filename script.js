$(document).ready(() => {
  // Iniciar animações com um pequeno atraso entre cada ícone
  setTimeout(() => {
    animateIcons()
  }, 500)

  // Função para animar todos os ícones em sequência
  function animateIcons() {
    $(".social-icon").each(function (index) {
      const $icon = $(this)
      const $wrapper = $icon.find(".icon-wrapper")
      const $trail = $icon.find(".light-trail")
      const color = $icon.data("color")

      // Atraso baseado no índice para criar efeito sequencial
      setTimeout(() => {
        // Aplicar cor ao rastro de luz
        $trail.css("background-color", color)

        // Adicionar classes de animação
        $wrapper.addClass("rotate")

        // Após a rotação, adicionar efeito de elevação e rastro
        setTimeout(() => {
          $wrapper.removeClass("rotate").addClass("lift")
          $trail.addClass("trail-effect")

          // Mostrar o nome do ícone
          $icon.find(".icon-label").css("opacity", "1")

          // Remover classes de animação após completar
          setTimeout(() => {
            $trail.removeClass("trail-effect")
          }, 1000)
        }, 1000)
      }, index * 300)
    })
  }

  // Reiniciar animações ao clicar em qualquer ícone
  $(".social-icon").click(function () {
    const $wrapper = $(this).find(".icon-wrapper")
    const $trail = $(this).find(".light-trail")
    const color = $(this).data("color")

    // Remover classes existentes
    $wrapper.removeClass("rotate lift")
    $trail.removeClass("trail-effect")

    // Aplicar cor ao rastro
    $trail.css("background-color", color)

    // Reiniciar animações
    setTimeout(() => {
      $wrapper.addClass("rotate")

      setTimeout(() => {
        $wrapper.removeClass("rotate").addClass("lift")
        $trail.addClass("trail-effect")

        setTimeout(() => {
          $trail.removeClass("trail-effect")
        }, 1000)
      }, 1000)
    }, 50)
  })

  // Efeito de hover personalizado
  $(".social-icon").hover(
    function () {
      // Mouse enter
      const $icon = $(this)
      const $wrapper = $icon.find(".icon-wrapper")

      // Adicionar classe para efeito 3D embossed específico para cada ícone
      // (Os estilos já estão definidos no CSS)
    },
    function () {
      // Mouse leave
      const $icon = $(this)
      const $wrapper = $icon.find(".icon-wrapper")

      // Se não estiver no meio de uma animação de elevação, remover o efeito
      if (!$wrapper.hasClass("lift")) {
        $wrapper.css("transform", "translateZ(0)")
      }
    },
  )
})
