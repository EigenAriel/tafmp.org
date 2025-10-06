
(function(){
  const d=document, dd=d.querySelector('.dropdown');
  if(dd){
    dd.querySelector('button').addEventListener('click',()=>dd.classList.toggle('open'));
    d.addEventListener('click',e=>{ if(!dd.contains(e.target)) dd.classList.remove('open'); });
  }
})();
