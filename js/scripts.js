function doar() {
  alert('Obrigado por apoiar a ONG Esperança!');
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
