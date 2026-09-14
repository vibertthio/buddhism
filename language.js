(() => {
  const language = localStorage.getItem('buddhism-language') || 'traditional';
  document.documentElement.dataset.script = language;
  document.documentElement.lang = language === 'simplified' ? 'zh-CN' : 'zh-Hant';
  const convert = language === 'simplified' ? OpenCC.Converter({ from: 'tw', to: 'cn' }) : text => text;
  window.displayChinese = convert;

  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language-select]').forEach(select => {
      select.value = language;
      select.addEventListener('change', () => {
        localStorage.setItem('buddhism-language', select.value);
        location.reload();
      });
    });

    if (language !== 'simplified') return;
    const skip = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE']);

    function convertNode(root) {
      if (root.nodeType === Node.TEXT_NODE) {
        if (root.parentElement && !skip.has(root.parentElement.tagName)) root.nodeValue = convert(root.nodeValue);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
      if (root.nodeType === Node.ELEMENT_NODE) {
        if (skip.has(root.tagName)) return;
        for (const attribute of ['placeholder', 'title', 'aria-label']) {
          if (root.hasAttribute(attribute)) root.setAttribute(attribute, convert(root.getAttribute(attribute)));
        }
      }
      root.childNodes.forEach(convertNode);
    }

    convertNode(document.body);
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(convertNode));
    }).observe(document.documentElement, { childList: true, subtree: true });
  });
})();
