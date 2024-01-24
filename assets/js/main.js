const btnCrypt = document.querySelector('btnEncryt');
let msgAlert = document.getElementById('msgAlert');
const btnCopy = document.getElementById('btnCopy');
const resultMsg = document.getElementById('resultTxt');

function encryptografando(msgDesencryptada) {
   //Lista de parametros de comparação da Matrix de Code
   const codeFonte = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   //Deixando a msg minúscula para que possa ser utilizada na comparação da matrixCode
   msgDesencryptada = msgDesencryptada.toLowerCase();
   //Aqui eu faço com que meu array seja percorrido e fazendo uma comparação das letras do msgDesencryptada
   for (let i = 0; i < codeFonte.length; i++) {
      if (msgDesencryptada.includes(codeFonte[i][0])) {
         //Aqui ele ira reescrever a mensagem substituindo as letras da mensagem pelas letras criptografadas
         msgDesencryptada = msgDesencryptada.replaceAll(codeFonte[i][0], codeFonte[i][1]);
         console.log(msgDesencryptada);
      } else {
         alert('Ocorreu um erro na cryptografia, verifique se seu texto atende a todos os requisitos necessários!');
         return;
      }
   }
   return msgDesencryptada;
}
function btnActionEncrypt() {
   let txtArea = document.getElementById('txtArea');
   console.log(txtArea.value);
   console.log(resultMsg);
   const msgCryptada = encryptografando(txtArea.value);
   console.log(`Está é a mensagem encrypitada:  ${msgCryptada}`);
   if (msgCryptada.length === 0 || /^\s+$/.test(msgCryptada)) {
      msgAlert.classList.add('font-size:90px;');
      txtArea.innerHTML = '';
      txtArea.innerHTML = "Este campo não pode estar vazio, informe a mensagem que deseja que seja cryptografada";
   } else if (/[^a-z ]/.test(msgCryptada)) {

      alert('Algum erro foi detectado');
   } else {
      resultMsg.innerHTML = msgCryptada;
   }

}
function btnActionDescrypt() {
   let txtArea = document.getElementById('txtArea');
   console.log(txtArea.value);
   console.log(resultMsg);
   const msgDescryptada = descryptografando(txtArea.value);
   console.log(`Está é a mensagem encrypitada:  ${msgDescryptada}`);
   if (msgDescryptada.length === 0 || /^\s+$/.test(msgDescryptada)) {
      msgAlert.classList.add('font-size:90px;');
      txtArea.innerHTML = '';
      txtArea.innerHTML = "Este campo não pode estar vazio, informe a mensagem que deseja que seja descryptografada";
   } else if (/[^a-z ]/.test(msgDescryptada)) {

      alert('Algum erro foi detectado');
   } else {
      resultMsg.innerHTML = msgDescryptada;
   }
}
function descryptografando(msgDescryptada) {
   //Lista de parametros de comparação da Matrix de Code
   const codeFonte = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   ;
   //Aqui eu faço com que meu array seja percorrido e fazendo uma comparação das letras da msgEncryptada
   for (let i = 0; i < codeFonte.length; i++) {
      if (msgDescryptada.includes(codeFonte[i][1])) {
         //Aqui ele ira reescrever a mensagem substituindo as letras da mensagem  criptografadas pelas letras traduzidas
         msgDescryptada = msgDescryptada.replaceAll(codeFonte[i][1], codeFonte[i][0]);
         console.log(msgDescryptada);
      } else {
         alert('Ocorreu um erro na cryptografia, verifique se seu texto atende a todos os requisitos necessários!');
         return;
      }
   }
   return msgDescryptada;
}
btnCopy.addEventListener('click', (e) => {
   e.preventDefault();
   navigator.clipboard.writeText(resultMsg.value);
});




