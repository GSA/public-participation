(function(window) {

  var $body = document.body;
  var $menuToggle = document.getElementById('menu-toggle');

  $body.addEventListener('click', function(e) {
    if (e.target.matches('aside h3 span')) {
      var downloadEl = document.querySelector('#downloads');
      if (downloadEl.matches('.open')) {
        return downloadEl.classList.remove('open');
      }
      return downloadEl.classList.add('open');
    }
  });


  $menuToggle.addEventListener('click',
  function(e){
      var bodyClass = $body.getAttribute('class');
      if(bodyClass !== 'menu-open')
        $body.className = 'menu-open';
      else {
        $body.className = '';
      }
  }, false);



})(window);
