javascript:(function(){
  var outerTrs = document.querySelectorAll('#Panel1 > table > tbody > tr');
  if (!outerTrs.length) return;

  // table 本身變 block
  document.querySelector('#Panel1 > table').style.display = 'block';

  outerTrs.forEach(function(tr){
    tr.style.display = 'block';
    Array.from(tr.children).forEach(function(td){
      td.style.display = 'block';
      td.style.border = 'none';
      td.style.padding = '10px 0';
    });
  });

  window.scrollTo(0, 0);
})();
