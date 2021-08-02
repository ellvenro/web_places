const blocks = document.querySelectorAll('.main_bloks');

function animEvent()
{
  for(block of blocks)
  {
    const animItemH = block.offsetHeight,
          animItemOffset = offset(block),
          animStart = 2;
    let animItemPoin = window.innerHeight - window.innerHeight / animStart;

    if ((pageYOffset > animItemOffset - animItemPoin) && (pageYOffset < animItemOffset))
    {
      block.classList.add('active');
    }
    else
    {
      block.classList.remove('active');
    }
  }
}

function offset(el)
{
  const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let i = rect.top + scrollTop;
  return i;
}

function animHead()
{
  const head = document.getElementById('logo'),
        head_text = document.getElementById('text_head');
  head.classList.add('active');
  head_text.classList.add('active');
}

setTimeout(() => {animHead()}, 1000);
window.addEventListener('scroll', animEvent);
