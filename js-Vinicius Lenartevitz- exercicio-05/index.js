function counter() {
    const showCount = document.querySelector('.show');
    const start = document.querySelector('.start');
    const end = document.querySelector('.end');
    const btn = document.querySelector('.contar');
  
    const startValue = Number.parseInt(start.value);
    const endValue = Number.parseInt(end.value);
  
    for (let i = startValue; i <= endValue; i++) {
      showCount.innerText += ' ' + i;
    }
  }
  