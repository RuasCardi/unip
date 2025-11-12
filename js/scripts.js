function doar() {
  alert('Obrigado por apoiar a ONG Planeta Azul! Juntos pela conservação dos mares e do planeta.');
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem enviada! Obrigado pelo contato.');
      form.reset();
    });
  }
});
