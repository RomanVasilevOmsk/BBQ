document.addEventListener("DOMContentLoaded", function(event) {
  console.log("hello word");
  const openPayModalBtn = document.querySelector('.order-form__submit');
  const payModal = document.querySelector('.modal-pay');
  const overlay = document.querySelector('.overlay');
  const closePayModalBtn = payModal.querySelector('.modal-pay__close-btn');

  openPayModalBtn.addEventListener('click', function(event) {
    event.preventDefault();
    showModal(payModal);
  });

  closePayModalBtn.addEventListener('click', closeModal(payModal));
  overlay.addEventListener('click', function() {
    if (!payModal.classList.contains('js-hide')) {
      closeModal(payModal);
    }
  });

  function closeModal(modal) {
    modal.classList.add('js-hide');
    overlay.classList.add('js-hide');
  }

  function showModal(modal) {
    modal.classList.remove('js-hide');
    overlay.classList.remove('js-hide');
  }
});

