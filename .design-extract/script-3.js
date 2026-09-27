
(function(){
  const ds=[...document.querySelectorAll('#discs .disc')];
  function act(d){ds.forEach(x=>{const on=x===d;x.classList.toggle('on',on);x.setAttribute('aria-expanded',on);});}
  const fine=matchMedia('(hover:hover) and (min-width:861px)');
  ds.forEach(d=>{
    d.addEventListener('mouseenter',()=>{if(fine.matches)act(d);});
    d.addEventListener('click',e=>{if(e.target.closest('a'))return;act(d);});
    d.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act(d);}});
  });
})();
