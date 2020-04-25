const
  toggle = document.getElementById('toggle'),
  close = document.getElementById('close'),
  open = document.getElementById('open'),
  modal = document.getElementById('modal');


//Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

//Show Modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
//Hide Modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);