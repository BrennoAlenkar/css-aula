function gerarNumeroAleatorio(min, max) {
    // Garante que o valor mínimo seja inclusivo e o valor máximo seja exclusivo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Exemplo de uso:
  console.log(gerarNumeroAleatorio(1, 100));