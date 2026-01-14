document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    c.style.transform='translateY(-6px)';
  });
});
