const blocks = document.querySelectorAll('.main_bloks');

function animEvent(params) {
  for(block of blocks) {
    const animItemH = block.offsetHeight,
          animItemOffset = offset(block),
          animStart = 2;

    let animItemPoin = window.innerHeight - window.innerHeight / animStart;

    if ((pageYOffset > animItemOffset - animItemPoin) && (pageYOffset < animItemOffset)) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let i = rect.top + scrollTop;
  return i;
}

window.addEventListener('scroll', animEvent);
