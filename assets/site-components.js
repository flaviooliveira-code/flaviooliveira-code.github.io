class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const depth = Number(this.getAttribute("depth") || "0");
    const isHome = depth === 0;
    const root = depth === 0 ? "" : "../".repeat(depth);
    const sectionRoot = isHome ? "" : root;
    const blogHref = depth === 0 ? "blog/" : depth === 1 ? "./" : "../";
    const homeHref = isHome ? "#home" : root;

    const links = [
      ["// sobre", `${sectionRoot}#about`],
      ["// projetos", `${sectionRoot}#projects`],
      ["// blog", blogHref],
      ["// habilidades", `${sectionRoot}#skills`],
      ["// experiência", `${sectionRoot}#experience`],
      ["// contato", `${sectionRoot}#contact`],
    ];

    const linksMarkup = links
      .map(([label, href]) => `<a href="${href}">${label}</a>`)
      .join("");

    this.innerHTML = `
      <header class="topbar">
        <div class="container">
          <nav class="nav" aria-label="Navegação principal">
            <a class="brand" href="${homeHref}" aria-label="Página inicial de Flávio Oliveira">
              <span class="prompt-mark" aria-hidden="true">~/</span>
              <span>
                Flávio Oliveira
                <small>full-stack.dev</small>
              </span>
            </a>

            <div class="nav-links">
              ${linksMarkup}
            </div>

            <button
              class="mobile-toggle"
              type="button"
              aria-label="Abrir menu"
              aria-expanded="false"
              data-menu-toggle
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>

          <div class="mobile-panel" data-mobile-menu>
            ${linksMarkup}
          </div>
        </div>
      </header>
    `;

    const menuButton = this.querySelector("[data-menu-toggle]");
    const mobileMenu = this.querySelector("[data-mobile-menu]");

    menuButton?.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        menuButton?.setAttribute("aria-expanded", "false");
      });
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container footer-inner">
          <span>© 2026 Flávio Oliveira · Desenvolvedor Full Stack</span>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-navbar", SiteNavbar);
customElements.define("site-footer", SiteFooter);
