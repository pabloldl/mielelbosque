(() => {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const mobile = window.matchMedia('(max-width: 800px)');
  header.classList.add('js-menu');
  toggle.hidden = false;
  function closeMenu(returnFocus = false) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('span').textContent = 'Menú';
    nav.classList.remove('open');
    if (returnFocus) toggle.focus();
  }
  function syncMenu() {
    closeMenu();
    toggle.hidden = !mobile.matches;
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? 'Cerrar' : 'Menú';
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) closeMenu(true);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  mobile.addEventListener('change', syncMenu);
  syncMenu();
  const copyButton = document.querySelector('.copy-number');
  const copyStatus = document.querySelector('#copy-status');
  const manualNumber = document.querySelector('.manual-number');
  let announcement;
  function announceCopy(message) {
    clearTimeout(announcement);
    copyStatus.textContent = '';
    announcement = setTimeout(() => { copyStatus.textContent = message; }, 30);
  }
  function copyWithSelection() {
    const field = document.createElement('textarea');
    field.value = '625318041';
    field.setAttribute('readonly', '');
    field.setAttribute('aria-label', 'Número de teléfono');
    field.style.cssText = 'position:fixed;left:-9999px;top:0;';
    document.body.append(field);
    let copied = false;
    try {
      field.focus({ preventScroll: true });
      field.select();
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    } finally {
      field.remove();
      copyButton.focus({ preventScroll: true });
    }
    return copied;
  }
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    manualNumber.hidden = true;
    let copied = false;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText('625318041');
        copied = true;
      } catch {
        // Local files or browser permissions can prevent Clipboard API access.
      }
    }
    if (!copied) copied = copyWithSelection();
    if (copied) {
      announceCopy('Número copiado: 625 318 041.');
    } else {
      manualNumber.hidden = false;
      manualNumber.focus({ preventScroll: true });
      manualNumber.select();
      announceCopy('No se pudo copiar automáticamente. Copia el número seleccionado.');
    }
  });
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('waiting');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('waiting');
      observer.observe(element);
    });
    motion.addEventListener('change', () => {
      if (motion.matches) {
        document.querySelectorAll('.waiting').forEach(element => element.classList.remove('waiting'));
        observer.disconnect();
      }
    });
  }
})();
