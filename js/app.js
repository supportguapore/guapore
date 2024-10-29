class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
    
      // Recupera manualmente os valores dos campos
      formObject["_cc"] = document.querySelector("#_cc").value;
      formObject["_subject"] = document.querySelector("#_subject").value + document.querySelector("#recoverRazao").placeholder;
      formObject["Fornecedor"] = document.querySelector("#recoverFornecedor").placeholder;
      formObject["Vendedor"] = document.querySelector("#recoverVendedor").placeholder;
      formObject["Taxas"] = document.querySelector("#recoverTaxas").placeholder;
      formObject["MCC"] = document.querySelector("#mcc").placeholder;
      formObject["Maquininhas"] = document.querySelector("#qtdMaquininha").placeholder;
      formObject["Cadastro único (CPF/CNPJ)"] = document.querySelector("#recoverCadunico").placeholder;
      formObject["Faturamento"] = document.querySelector("#recoverFaturamento").placeholder;
      formObject["Razao Social"] = document.querySelector("#recoverRazao").placeholder;
      formObject["Nome Fantasia"] = document.querySelector("#recoverFantasia").placeholder;
      formObject["Email Empresa"] = document.querySelector("#recoverEmail").placeholder;
      formObject["Tipo de Contato"] = document.querySelector("#recoverTipoContato").placeholder;
      formObject["CPF Contato"] = document.querySelector("#recoverCpfcontato").placeholder;
      formObject["Nome do Contato"] = document.querySelector("#recoverNomeContato").placeholder;
      formObject["Telefone Contato"] = document.querySelector("#recoverTelContato").placeholder;
      formObject["Celular Contato"] = document.querySelector("#recoverCelContato").placeholder;
      formObject["Email Contato"] = document.querySelector("#recoverEmailContato").placeholder;
      formObject["Banco"] = document.querySelector("#recoverBanco").placeholder;
      formObject["Tipo Conta (banco)"] = document.querySelector("#recoverTipoConta").placeholder;
      formObject["Nro Agência (banco)"] = document.querySelector("#recoverNroAgencia").placeholder;
      formObject["Dígito Agência (banco)"] = document.querySelector("#recoverDigitoAgencia").placeholder;
      formObject["Nro Conta (banco)"] = document.querySelector("#recoverNroConta").placeholder;
      formObject["Dígito Conta (banco)"] = document.querySelector("#recoverDigitoConta").placeholder;
      formObject["CEP"] = document.querySelector("#recoverCep").placeholder;
      formObject["Estado"] = document.querySelector("#recoverEstado").placeholder;
      formObject["Cidade"] = document.querySelector("#recoverCidade").placeholder;
      formObject["Logradouro"] = document.querySelector("#recoverLogradouro").placeholder;
      formObject["Bairro"] = document.querySelector("#recoverBairro").placeholder;
      formObject["Receptor"] = document.querySelector("#recoverReceptor").placeholder;
      formObject["Celular Receptor"] = document.querySelector("#recoverCelReceptor").placeholder;
      formObject["Email Receptor"] = document.querySelector("#recoverEmailReceptor").placeholder;
    
      return formObject;
    }
    
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
      $('#sendingMessage').text('Estamos enviando as informações, aguarde um momento.');
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      } finally { 
        // Atualiza a mensagem após o envio 
        $('#sendingMessage').text('Informações enviadas, obrigado por aguardar :)');
        $('#titleSendingMessage').text('Tudo certo!'); 
        $('#returnButton').show(); // Mostra o botão para retornar à página principal 
        }
    }
  
    init() {
      if (this.form) document.getElementById("nextBtnFinal").addEventListener("click", this.sendForm);

      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Formulário enviado!</h1>",
    error: "<h1 class='error'>Não foi possível enviar seu formulário.</h1>",
  });
  formSubmit.init();
  