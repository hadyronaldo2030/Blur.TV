// let theEnd = 0;
// navbar = document.getElementById('navbar');
// window.addEventListener('scroll',()=>{
//     var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
//     if(scrollTop > theEnd){
//         navbar.style.top = '-70px';
//     }
//     else{
//         navbar.style.top = '0';
//     }
//     theEnd = scrollTop;
// })

let theEnd = 0;
navbar = document.getElementById('navbar');
const debounce = (func, delay) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};
const handleScroll = debounce(() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    navbar.style.top = '-70px';
  } else {
    navbar.style.top = '0';
  }
  theEnd = scrollTop;
}, 10);
window.addEventListener('scroll', handleScroll);
