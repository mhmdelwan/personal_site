  var cvBtn = document.getElementById('cv-btn');
  var cvModal = new bootstrap.Modal(document.getElementById('cv-modal'));

  cvBtn.addEventListener('click', function() {
    cvModal.show();
  });

  document.querySelector('#cv-modal .btn-close').addEventListener('click', function() {
    cvModal.hide();
  });



  