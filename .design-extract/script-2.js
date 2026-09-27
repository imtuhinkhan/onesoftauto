
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const cards=[...document.querySelectorAll('.scard')];if(!cards.length)return;
  function upd(){
    cards.forEach((c,i)=>{
      let depth=0;
      for(let j=i+1;j<cards.length;j++){
        const a=c.getBoundingClientRect(),b=cards[j].getBoundingClientRect();
        const ov=Math.max(0,Math.min(1,(a.bottom-b.top)/a.height));
        depth+=ov;
      }
      const s=1-Math.min(depth,3)*0.045;
      c.style.transform='scale('+s.toFixed(4)+')';
      c.style.filter='brightness('+(1-Math.min(depth,3)*0.05).toFixed(3)+')';
    });
  }
  let raf=0;addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;upd();});},{passive:true});
  addEventListener('resize',upd);upd();
})();
