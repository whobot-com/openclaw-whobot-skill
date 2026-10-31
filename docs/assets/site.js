(function () {
  var btn = document.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  // kramdown 用 > [!WARN] 无法区分，这里约定以“注意：”开头的引用块显示为提醒色
  document.querySelectorAll('.doc blockquote').forEach(function (q) {
    if (/^\s*注意[:：]/.test(q.textContent)) q.classList.add('warn');
  });

  document.querySelectorAll('.doc .prompt').forEach(function (box) {
    var text = box.textContent.trim();
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'prompt-copy';
    b.textContent = '复制这句话';
    b.addEventListener('click', function () {
      navigator.clipboard.writeText(text).then(function () {
        b.textContent = '已复制，去发给 Agent';
        setTimeout(function () { b.textContent = '复制这句话'; }, 2000);
      });
    });
    box.appendChild(b);
  });

  document.querySelectorAll('.doc pre').forEach(function (pre) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'copy-btn';
    b.textContent = '复制';
    b.addEventListener('click', function () {
      var text = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      navigator.clipboard.writeText(text.replace(/\n$/, '')).then(function () {
        b.textContent = '已复制';
        setTimeout(function () { b.textContent = '复制'; }, 1500);
      });
    });
    pre.appendChild(b);
  });
})();
