const inputs = document.querySelectorAll('.pin-inputs input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (!/^\d$/.test(input.value)) {
      input.value = '';
      return;
    }

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
