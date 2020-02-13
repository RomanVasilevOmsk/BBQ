document.addEventListener("DOMContentLoaded", function (event) {
  console.log("hello word");
  //Show and close modals
  const openPayModalBtn = document.querySelector('.order-form__submit');
  const openHelpModalBtn = document.querySelector('.header__helpBtn');
  const payModal = document.querySelector('.modal-pay');
  const helpModal = document.querySelector('.help-modal');
  const overlay = document.querySelector('.overlay');
  const closePayModalBtn = payModal.querySelector('.modal-pay__close-btn');
  const closeHelpModalBtn = helpModal.querySelector('.help-modal__close-btn');

  openPayModalBtn.addEventListener('click', function (event) {
    event.preventDefault();
    showModal(payModal);
  });

  closePayModalBtn.addEventListener('click', function (event) {
    event.preventDefault();
    closeModal(payModal)
  });

  overlay.addEventListener('click', function () {
    if (!payModal.classList.contains('js-hide')) {
      closeModal(payModal);
    } else if (!helpModal.classList.contains('js-hide')) {
      closeModal(helpModal);
    }
  });

  openHelpModalBtn.addEventListener('click', function (event) {
    event.preventDefault();
    showModal(helpModal)
  });
  closeHelpModalBtn.addEventListener('click', function (event) {
    event.preventDefault();
    closeModal(helpModal)
  });

  function closeModal(modal) {
    modal.classList.add('js-hide');
    overlay.classList.add('js-hide');
  }

  function showModal(modal) {
    modal.classList.remove('js-hide');
    overlay.classList.remove('js-hide');
  }

  //Help modal tabs
  const tabControlsWrap = helpModal.querySelector('.help-modal__tab-controls');
  const tabControls = tabControlsWrap.querySelectorAll('.help-modal__control');
  const tabsWrap = helpModal.querySelector('.help-modal__tabs-section');
  const tabs = tabsWrap.querySelectorAll('.help-modal__tab');

  const hideTabs = (a, tabArr) => {
    for (let i = a; i < tabArr.length; i++) {
      tabArr[i].classList.remove('js-show');
      tabArr[i].classList.add('js-hide');
    }
  };

  const showTabs = (a, tabArr) => {
    if (tabArr[a].classList.contains('js-hide')) {
      tabArr[a].classList.remove('js-hide');
      tabArr[a].classList.add('js-show');
    }
  };

  tabControlsWrap.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('help-modal__control')) {
        event.preventDefault();
        for (let i = 0; i < tabControls.length; i++) {
            tabControls[i].classList.remove('help-modal__control--active');
            if (target == tabControls[i]) {
                tabControls[i].classList.add('help-modal__control--active');
                hideTabs(0, tabs);
                showTabs(i, tabs);
            }
        }
    }
});
  
  hideTabs(0, tabs);
  showTabs(2,tabs);

  //Video play
  Array.prototype.forEach.call(tabs, tab => {
    const video = tab.querySelector('.help-modal__video');
    const videoBtn = tab.querySelector('.help-modal__video-playBtn');

    videoBtn.addEventListener('click', function(event) {
        video.play();
        videoBtn.classList.add('js-hide');
    });

    video.addEventListener('ended', function() {
      if (videoBtn.classList.contains('js-hide')) {
        videoBtn.classList.remove('js-hide');
      }
      video.poster = ['../images/video-poster.png'];
    });

  });

});