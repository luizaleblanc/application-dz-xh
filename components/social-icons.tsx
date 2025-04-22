"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export function SocialIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Função para iniciar animações com um pequeno atraso entre cada ícone
    const animateIcons = () => {
      if (!containerRef.current) return

      const icons = containerRef.current.querySelectorAll(".social-icon")

      icons.forEach((icon, index) => {
        const wrapper = icon.querySelector(".icon-wrapper") as HTMLElement
        const trail = icon.querySelector(".light-trail") as HTMLElement
        const color = icon.getAttribute("data-color") || ""

        // Atraso baseado no índice para criar efeito sequencial
        setTimeout(() => {
          // Aplicar cor ao rastro de luz
          if (trail) trail.style.backgroundColor = color

          // Adicionar classes de animação
          wrapper?.classList.add("rotate")

          // Após a rotação, adicionar efeito de elevação e rastro
          setTimeout(() => {
            wrapper?.classList.remove("rotate")
            wrapper?.classList.add("lift")
            trail?.classList.add("trail-effect")

            // Remover classes de animação após completar
            setTimeout(() => {
              trail?.classList.remove("trail-effect")

              // Adicionar a classe de animação float após a animação inicial
              if (!icon.classList.contains("instagram-icon")) {
                wrapper?.classList.add("float-animation")
              }
            }, 1000)
          }, 1000)
        }, index * 300)
      })
    }

    // Adicionar event listeners para cliques nos ícones
    const setupClickHandlers = () => {
      if (!containerRef.current) return

      const icons = containerRef.current.querySelectorAll(".social-icon")

      icons.forEach((icon) => {
        icon.addEventListener("click", () => {
          const wrapper = icon.querySelector(".icon-wrapper") as HTMLElement
          const trail = icon.querySelector(".light-trail") as HTMLElement
          const color = icon.getAttribute("data-color") || ""

          // Remover classes existentes
          wrapper?.classList.remove("rotate", "lift")
          trail?.classList.remove("trail-effect")

          // Aplicar cor ao rastro
          if (trail) trail.style.backgroundColor = color

          // Reiniciar animações
          setTimeout(() => {
            wrapper?.classList.add("rotate")

            setTimeout(() => {
              wrapper?.classList.remove("rotate")
              wrapper?.classList.add("lift")
              trail?.classList.add("trail-effect")

              setTimeout(() => {
                trail?.classList.remove("trail-effect")
              }, 1000)
            }, 1000)
          }, 50)
        })
      })
    }

    // Aplicar cores e tamanhos diretamente aos ícones após o carregamento
    const applyIconStyles = () => {
      if (!containerRef.current) return

      const icons = containerRef.current.querySelectorAll(".social-icon i")
      icons.forEach((icon: Element) => {
        const iconElement = icon as HTMLElement
        // Aplicar tamanho intermediário
        iconElement.style.fontSize = "1.8rem"
        iconElement.style.transform = "scale(1.2)"
      })

      // Aplicar cor ao Facebook
      const facebookIcon = containerRef.current.querySelector(".facebook-icon i") as HTMLElement
      if (facebookIcon) {
        facebookIcon.style.color = "#1877f2"
      }

      // Aplicar cor ao label do Facebook
      const facebookLabel = containerRef.current.querySelector(".facebook-icon .icon-label") as HTMLElement
      if (facebookLabel) {
        facebookLabel.style.color = "#1877f2"
      }

      // Aplicar cor ao Twitter
      const twitterIcon = containerRef.current.querySelector(".twitter-icon i") as HTMLElement
      if (twitterIcon) {
        twitterIcon.style.color = "#1DA1F2"
      }

      // Aplicar cor ao label do Twitter
      const twitterLabel = containerRef.current.querySelector(".twitter-icon .icon-label") as HTMLElement
      if (twitterLabel) {
        twitterLabel.style.color = "#1DA1F2"
      }

      // Aplicar cor ao Instagram
      const instagramIcon = containerRef.current.querySelector(".instagram-icon i") as HTMLElement
      if (instagramIcon) {
        instagramIcon.style.color = "#E1306C"
      }

      // Aplicar cor ao label do Instagram
      const instagramLabel = containerRef.current.querySelector(".instagram-icon .icon-label") as HTMLElement
      if (instagramLabel) {
        instagramLabel.style.color = "#E1306C"
      }

      // Aplicar cor ao LinkedIn
      const linkedinIcon = containerRef.current.querySelector(".linkedin-icon i") as HTMLElement
      if (linkedinIcon) {
        linkedinIcon.style.color = "#0A66C2"
      }

      // Aplicar cor ao label do LinkedIn
      const linkedinLabel = containerRef.current.querySelector(".linkedin-icon .icon-label") as HTMLElement
      if (linkedinLabel) {
        linkedinLabel.style.color = "#0A66C2"
      }

      // Aplicar cor ao YouTube
      const youtubeIcon = containerRef.current.querySelector(".youtube-icon i") as HTMLElement
      if (youtubeIcon) {
        youtubeIcon.style.color = "#FF0000"
      }

      // Aplicar cor ao label do YouTube
      const youtubeLabel = containerRef.current.querySelector(".youtube-icon .icon-label") as HTMLElement
      if (youtubeLabel) {
        youtubeLabel.style.color = "#FF0000"
      }
    }

    // Iniciar animações após um pequeno atraso
    setTimeout(() => {
      applyIconStyles() // Aplicar cores e tamanhos primeiro
      animateIcons()
      setupClickHandlers()
    }, 500)

    // Garantir que as cores e tamanhos sejam aplicadas após o carregamento do Font Awesome
    document.addEventListener("DOMContentLoaded", applyIconStyles)

    // Cleanup
    return () => {
      if (!containerRef.current) return

      const icons = containerRef.current.querySelectorAll(".social-icon")
      icons.forEach((icon) => {
        icon.removeEventListener("click", () => {})
      })
      document.removeEventListener("DOMContentLoaded", applyIconStyles)
    }
  }, [])

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="social-icons-row" ref={containerRef}>
        <div className="social-icon facebook-icon" data-color="#1877F2">
          <div className="icon-wrapper">
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer main-layer">
              <i
                className="fab fa-facebook-f"
                style={{
                  color: "#1877F2",
                  fontSize: "1.8rem",
                  transform: "scale(1.2)",
                }}
              ></i>
            </div>
            <div className="light-trail"></div>
          </div>
          <p className="icon-label" style={{ color: "#1877F2" }}>
            Facebook
          </p>
        </div>

        <div className="social-icon twitter-icon" data-color="#1DA1F2">
          <div className="icon-wrapper">
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer main-layer">
              <i
                className="fab fa-twitter"
                style={{
                  color: "#1DA1F2",
                  fontSize: "1.8rem",
                  transform: "scale(1.2)",
                }}
              ></i>
            </div>
            <div className="light-trail"></div>
          </div>
          <p className="icon-label" style={{ color: "#1DA1F2" }}>
            Twitter
          </p>
        </div>

        <div className="social-icon instagram-icon" data-color="#E1306C">
          <div className="icon-wrapper">
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer main-layer">
              <i
                className="fab fa-instagram"
                style={{
                  color: "#E1306C",
                  fontSize: "1.8rem",
                  transform: "scale(1.2)",
                }}
              ></i>
            </div>
            <div className="light-trail"></div>
          </div>
          <p className="icon-label" style={{ color: "#E1306C" }}>
            Instagram
          </p>
        </div>

        <div className="social-icon linkedin-icon" data-color="#0A66C2">
          <div className="icon-wrapper">
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer main-layer">
              <i
                className="fab fa-linkedin-in"
                style={{
                  color: "#0A66C2",
                  fontSize: "1.8rem",
                  transform: "scale(1.2)",
                }}
              ></i>
            </div>
            <div className="light-trail"></div>
          </div>
          <p className="icon-label" style={{ color: "#0A66C2" }}>
            LinkedIn
          </p>
        </div>

        <div className="social-icon youtube-icon" data-color="#FF0000">
          <div className="icon-wrapper">
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer"></div>
            <div className="icon-layer main-layer">
              <i
                className="fab fa-youtube"
                style={{
                  color: "#FF0000",
                  fontSize: "1.8rem",
                  transform: "scale(1.2)",
                }}
              ></i>
            </div>
            <div className="light-trail"></div>
          </div>
          <p className="icon-label" style={{ color: "#FF0000" }}>
            YouTube
          </p>
        </div>
      </div>

      {/* Font Awesome */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Aplicar cores e tamanhos após o carregamento do Font Awesome
          const icons = document.querySelectorAll(".social-icon i")
          icons.forEach((icon: Element) => {
            const iconElement = icon as HTMLElement
            // Aplicar tamanho intermediário
            iconElement.style.fontSize = "1.8rem"
            iconElement.style.transform = "scale(1.2)"
          })

          const facebookIcon = document.querySelector(".facebook-icon i") as HTMLElement
          if (facebookIcon) facebookIcon.style.color = "#1877F2"

          const facebookLabel = document.querySelector(".facebook-icon .icon-label") as HTMLElement
          if (facebookLabel) facebookLabel.style.color = "#1877F2"

          const twitterIcon = document.querySelector(".twitter-icon i") as HTMLElement
          if (twitterIcon) twitterIcon.style.color = "#1DA1F2"

          const twitterLabel = document.querySelector(".twitter-icon .icon-label") as HTMLElement
          if (twitterLabel) twitterLabel.style.color = "#1DA1F2"

          const instagramIcon = document.querySelector(".instagram-icon i") as HTMLElement
          if (instagramIcon) instagramIcon.style.color = "#E1306C"

          const instagramLabel = document.querySelector(".instagram-icon .icon-label") as HTMLElement
          if (instagramLabel) instagramLabel.style.color = "#E1306C"

          const linkedinIcon = document.querySelector(".linkedin-icon i") as HTMLElement
          if (linkedinIcon) linkedinIcon.style.color = "#0A66C2"

          const linkedinLabel = document.querySelector(".linkedin-icon .icon-label") as HTMLElement
          if (linkedinLabel) linkedinLabel.style.color = "#0A66C2"

          const youtubeIcon = document.querySelector(".youtube-icon i") as HTMLElement
          if (youtubeIcon) youtubeIcon.style.color = "#FF0000"

          const youtubeLabel = document.querySelector(".youtube-icon .icon-label") as HTMLElement
          if (youtubeLabel) youtubeLabel.style.color = "#FF0000"
        }}
      />
    </div>
  )
}
