document.body.insertAdjacentHTML("beforeend", `
  <footer style="padding: 32px 0; border-top: 1px solid #ddd;">
    <div class="wrap" style="text-align: center;">
      <p><strong>Hemiola Chamber Music Initiative</strong></p>

      <nav
        aria-label="Social media"
        style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;"
      >
        <a
          href="https://www.instagram.com/thehcmi/"
          target="_blank"
          rel="noopener noreferrer"
        >Instagram</a>

        <a
          href="https://www.facebook.com/thehcmi"
          target="_blank"
          rel="noopener noreferrer"
        >Facebook</a>
      </nav>

      <p style="margin-top: 20px; font-size: 0.875rem;">
        &copy; ${new Date().getFullYear()} Hemiola Chamber Music Initiative
      </p>
    </div>
  </footer>
`);
