document.getElementById('cform').addEventListener('submit', function(event) {
    // Defina o assunto do email aqui
    var subject = "Preenchimento de formulário: ";
    // Defina os emails para cópia carbono aqui, separados por vírgula
    var ccEmails = "brunomr2307@gmail.com";
    // Atribua os valores aos inputs hidden
    document.getElementById('subject_email').value = subject;
    document.getElementById('mailto').value = ccEmails;
});

