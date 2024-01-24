const btnCrypt = document.querySelector('btnEncryt');
let msgAlert = document.getElementById('msgAlert');

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
      } else {
         alert('Ocorreu um erro na cryptografia, verifique se seu texto atende a todos os requisitos necessários!');
         return;
      }
   }
   return msgDesencryptada;
}
function btnAction() {
   let txtArea = document.getElementById('txtArea');
   console.log(txtArea.value);
   console.log(resultMsg);
   const msgCryptada = encryptografando(txtArea.value);
   console.log(msgCryptada);
   if (msgCryptada.length === 0 || /^\s+$/.test(msgCryptada)) {
      msgAlert.classList.add('font-size:90px;');
      txtArea.innerHTML = '';
      msgAlert.innerHTML = "Este campo não pode estar vazio, informe a mensagem que deseja que seja cryptografada";
   } else if (!txtArea) {
       return; 
   } else {
      txtArea.innerHTML = ' ';
      resultMsg.innerHTML = msgCryptada;
   }

}

