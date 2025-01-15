// function validarFormulario() {
 //   const cpf_cnpj = document.getElementById("cpf_cnpj").value; 
 //   const valor = document.getElementById("valor").value; 
 //   const telefone = document.getElementById("telefone").value; 
 //   const cep = document.getElementById("cep").value; 
 //   if (!cpf_cnpj || !valor || !telefone || !cep) { 
  //      alert("Por favor, preencha todos os campos antes de enviar.");
 //       return false; 
 //   } return true; 

//}

function verifCampos1() { 
    const opt1 = document.getElementById("unidadeFornecedor").value; 
    const opt2 = document.getElementById("vendedorFornecedor").value;
    const opt3 = document.getElementById("gridRadios1").checked; 
    const botaoEnviar = document.getElementById("nextBtn3"); 
    if (opt1 && opt2 && opt3) { 
        botaoEnviar.disabled = false; 
    } else { 
        botaoEnviar.disabled = true; 
    } 
}

function verifCampos2() { 
    const opt1 = document.getElementById("cadUnicoCliente").value; 
    const opt2 = document.getElementById("faturamentoCliente").value; 
    const opt3 = document.getElementById("razaoCliente").value; 
    const opt4 = document.getElementById("fantasiaCliente").value; 
    const opt5 = document.getElementById("emailCliente").value; 
    const botaoEnviar = document.getElementById("nextBtn4"); 
    if (opt1 && opt2 && opt3 && opt4 && opt5) { 
        botaoEnviar.disabled = false; 
    } else { 
        botaoEnviar.disabled = true; 
    } 
}

function verifCampos3() { 
    const opt1 = document.getElementById("cpfContato").value; 
    const opt2 = document.getElementById("nomeContato").value; 
    const opt3 = document.getElementById("celContato").value; 
    const opt4 = document.getElementById("emailContato").value; 
    const botaoEnviar = document.getElementById("nextBtn5"); 
    if (opt1 && opt2 && opt3 && opt4) { 
        botaoEnviar.disabled = false; 
    } else { 
        botaoEnviar.disabled = true; 
    } 
}

function verifCampos4() { 
    const opt1 = document.getElementById("cep").value; 
    const opt2 = document.getElementById("logradouro").value; 
    const opt3 = document.getElementById("numLogradouro").value; 
    const opt4 = document.getElementById("bairroLogradouro").value; 
    const opt5 = document.getElementById("nomeEntrega").value; 
    const opt6 = document.getElementById("celEntrega").value; 
    const opt7 = document.getElementById("emailEntrega").value; 
    const botaoEnviar = document.getElementById("nextBtn6"); 
    if (opt1 && opt2 && opt3 && opt4 && opt5 && opt6 && opt7) { 
        botaoEnviar.disabled = false; 
    } else { 
        botaoEnviar.disabled = true; 
    } 
}

function verifCampos5() { 
    const opt1 = document.getElementById("nroAgencia").value; 
    const opt2 = document.getElementById("digitoAgencia").value; 
    const opt3 = document.getElementById("nroConta").value; 
    const opt4 = document.getElementById("digitoConta").value; 
    const botaoEnviar = document.getElementById("nextBtn7"); 
    if (opt1 && opt2 && opt3 && opt4) { 
        botaoEnviar.disabled = false; 
    } else { 
        botaoEnviar.disabled = true; 
    } 
}