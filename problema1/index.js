function main(arrays) {
  let menor = null;
  let mayor = null;

  const indicesActuales = [];

  for (let i = 0; i < arrays.length; i++) {
    indicesActuales.push(0);
  }

  let continuar = true;

  while (continuar) {
    let menorActual = 0;
    let mayorActual = 0;

    for (let i = 0; i < arrays.length; i++) {
      const indiceActual = indicesActuales[i];
      const numeroActual = arrays[i][indiceActual];

      if (numeroActual <= menorActual) {
        if (indiceActual == arrays[i].length - 1) continuar = false;

        menorActual = numeroActual;
        indicesActuales[i]++;
      }

      if (numeroActual >= mayorActual) mayorActual = numeroActual;
    }

    if (mayor == null && menor == null) {
      mayor = mayorActual;
      menor = menorActual;
      continue;
    }

    const restaAnterior = mayor - menor;
    const restaActual = mayorActual - menorActual;

    if (restaActual == restaAnterior && menorActual < menor) {
      menor = menorActual;
      mayor = mayorActual;
    } else if (restaActual < restaAnterior) {
      menor = menorActual;
      mayor = mayorActual;
    }
  }

  return [menor, mayor];
}

console.log(
  main([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ])
);
