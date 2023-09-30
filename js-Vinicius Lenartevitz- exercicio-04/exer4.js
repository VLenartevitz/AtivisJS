function calcular() {
    const modelo = document.querySelector('.modelo');
    const qtdDias = document.querySelector('.qtdDias');
    const p = document.querySelector('p');
  
    let valor;
    switch (modelo.value) {
      case 'hatch':
        valor = 80 * Number.parseInt(qtdDias.value);
        p.innerText = valor;
        break;
      case 'compacto':
        valor = 90 * Number.parseInt(qtdDias.value);
        p.innerText = valor;
        break;
      case 'sedan':
        valor = 100 * Number.parseInt(qtdDias.value);
        p.innerText = valor;
        break;
      case 'esportivo':
        valor = 300 * Number.parseInt(qtdDias.value);
        p.innerText = valor;
        break;
    }
  }
  