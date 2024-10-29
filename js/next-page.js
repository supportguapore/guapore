$(document).ready(function(){
  var currentScreen = 1;
  var totalScreens = $('.tela').length;

  $('.next').click(function() {
    if (currentScreen < totalScreens) {
      // Verifica se todos os termos foram marcados na tela 2
      if (currentScreen === 2) {
        const polPrivacidadeChecked = $('#polPrivacidade').prop('checked');
        const termosUsoChecked = $('#termosUso').prop('checked');
        const polPgtoChecked = $('#polPgto').prop('checked');

        // Se algum termo não estiver marcado, exibe uma mensagem de alerta e retorna
        if (!polPrivacidadeChecked || !termosUsoChecked || !polPgtoChecked) {
          alert('Por favor, concorde com todos os termos antes de continuar.');
          return;
        }
      }

      $('#tela' + currentScreen).hide();
      currentScreen++;
      $('#tela' + currentScreen).show();
    }
  });

  $('.prev').click(function() {
    if (currentScreen > 1) {
      $('#tela' + currentScreen).hide();
      currentScreen--;
      $('#tela' + currentScreen).show();
    }
  });
});
