
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav=document.getElementById('nav'),mb=document.getElementById('menuBtn');
  addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>8),{passive:true});
  mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu';});
  document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');mb.textContent='Menu';}));
  const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}}),{threshold:.3}):null;
  document.querySelectorAll('.dial').forEach(d=>io?io.observe(d):d.classList.add('on'));
  const f=document.getElementById('form');
  if(f) f.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('note');
    if(!f.name.value.trim()||!/\S+@\S+\.\S+/.test(f.email.value)||!f.message.value.trim()){n.style.color='var(--accent)';n.textContent='Add your name, a valid email and a few words about the project.';return;}
    n.style.color='var(--good)';n.textContent='Thanks, '+f.name.value.trim().split(' ')[0]+'. Design preview: on the live site this goes straight to the studio inbox.';});
  const orb=document.querySelector('.orb .tilt');
  if(orb&&!reduce&&matchMedia('(hover:hover)').matches){
    addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;orb.style.transform=`rotateY(${x*22}deg) rotateX(${-y*22}deg)`;},{passive:true});
  }
})();
