function mascaraCPF_CNPJ(input) { 
    const value = input.value.replace(/\D/g, ''); 
    
    if (value.length <= 11) { 
        
        input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); 
    
    } else { 
        
        input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); 
    
    } 

}

function mascaraValor(input) { 
    
    let value = input.value.replace(/\D/g, ''); 
    value = (value / 100).toFixed(2) + ''; 
    value = value.replace('.', ','); 
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
    input.value = 'R$ ' + value; 
}

function mascaraTelefone(input) {
     let value = input.value.replace(/\D/g, ''); 
     if (value.length <= 10) {  // Máscara para telefone fixo (10 dígitos) 
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); 
    } else { // Máscara para celular (11 dígitos) 
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
    } 
    input.value = value; 
}

function mascaraCEP(input) { 
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{5})(\d{3})/, '$1-$2'); 
    input.value = value; 
}