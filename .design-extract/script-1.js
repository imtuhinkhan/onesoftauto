
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bar=document.createElement('div');bar.className='sprog';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  const orb=document.querySelector('.hero2 .orb');
  function onScroll(){const h=document.documentElement,max=(h.scrollHeight-h.clientHeight)||1,y=h.scrollTop;
    bar.style.transform='scaleX('+Math.min(1,y/max)+')';
    if(orb&&!reduce&&y<1200){orb.style.transform='translateY('+(y*0.18)+'px) rotate('+(y*0.03)+'deg) scale('+(1-Math.min(y,800)/4000)+')';}}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(reduce||!('IntersectionObserver' in window))return;
  const vh=innerHeight;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.classList.contains('stat'))count(e.target);}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
  function below(el){return el.getBoundingClientRect().top>vh*0.92;}
  // word-by-word statements
  document.querySelectorAll('.q2 blockquote,.lead2,.ct2 h2,.split h2').forEach(el=>{
    let i=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(t));}else{const s=document.createElement('span');s.className='w';s.style.setProperty('--i',i++);s.textContent=t;f.appendChild(s);}});c.replaceWith(f);}else if(c.nodeType===1&&c.tagName!=='BR')walk(c);});};
    walk(el);el.classList.add('ws');
    if(below(el))io.observe(el);else requestAnimationFrame(()=>el.classList.add('in'));
  });
  // staggered reveals
  const groups=['.sec-top','.tile','.svc3 > div','.steps > div','.faq2 details','.ct2 .l > p','.ct2 .l > div','.ct2 form','.pts > div','.plist a','.stat','.feat li','.tl3 li','.split p.body','.cs-vis2','.facts2','.pager','.article > *','.q2 > p','.foot3 > div'];
  groups.forEach(sel=>{let k=0,lastParent=null;document.querySelectorAll(sel).forEach(el=>{
    if(el.parentElement!==lastParent){k=0;lastParent=el.parentElement;}
    if(below(el)){el.style.setProperty('--d',(Math.min(k,6)*0.08)+'s');el.classList.add('rv');io.observe(el);}else{el.classList.add('in');}
    k++;});});
  // count-up numbers
  function count(st){const b=st.querySelector('b');if(!b)return;const m=b.textContent.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);if(!m)return;
    const target=parseInt(m[2].replace(/,/g,''),10),comma=m[2].includes(','),t0=performance.now(),dur=1400;
    (function step(t){const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3),v=Math.round(target*e);
      b.textContent=m[1]+(comma?v.toLocaleString('en-US'):v)+m[3];if(p<1)requestAnimationFrame(step);})(t0);}
})();
