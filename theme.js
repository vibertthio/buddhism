(() => {
  const saved = localStorage.getItem('buddhism-theme') || 'system';
  document.documentElement.dataset.theme = saved;
  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-select]').forEach(select => {
      select.value = saved;
      select.addEventListener('change', () => {
        document.documentElement.dataset.theme = select.value;
        localStorage.setItem('buddhism-theme', select.value);
        document.querySelectorAll('[data-theme-select]').forEach(other => { other.value = select.value; });
      });
    });
  });
})();
