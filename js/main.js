const prev = document.getElementById('btn_prev'),
      next = document.getElementById('btn_next'),
      // slides = document.getElementsByClass('slide'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

// function activeSlide(n) {
const activeSlide = n => {
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const active = ind => {
  activeSlide(ind);
  activeDot(ind);
}

// function mextSlide() {
const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  active(index);
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  active(index);
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    active(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
setInterval(nextSlide, 2500);
