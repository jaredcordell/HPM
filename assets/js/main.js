const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
const mb=document.getElementById('menubtn'),nl=document.getElementById('navlinks');
mb.addEventListener('click',()=>{mb.classList.toggle('open');nl.classList.toggle('open')});
nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mb.classList.remove('open');nl.classList.remove('open')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
