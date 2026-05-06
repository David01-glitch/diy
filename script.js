function toggleArticle(btn){
  const full = btn.nextElementSibling;
  const isOpen = full.classList.toggle('open');
  btn.textContent = isOpen ? 'Show less ↑' : 'Read more ↓';
  if(isOpen){
    setTimeout(()=>btn.scrollIntoView({behavior:'smooth',block:'center'}),300);
  }
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>document.querySelector('.nav')?.classList.remove('open'));
});
