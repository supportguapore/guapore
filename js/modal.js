document.getElementById('agreeterm1').onclick = function() {
     document.getElementById('polPrivacidade').checked = true; 
};

document.getElementById('disagree1').onclick = function() {
    document.getElementById('polPrivacidade').checked = false; 
};

document.getElementById('agreeterm2').onclick = function() {
    document.getElementById('termosUso').checked = true; 
};

document.getElementById('disagree2').onclick = function() {
   document.getElementById('termosUso').checked = false; 
};