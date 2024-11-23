//========================================== DECLARAÇÃO DOS SELECTORES ========================================== 
const container = document.querySelector(".container");
const button = document.querySelector("#qr-form button");
const input = container.querySelector("#qr-form input");
const img = container.querySelector("#qr-code img");



//========================================== FUNÇÕES ========================================== 
//Função Gerar QR Code
function gerarQR() {
  const inputValue = input.value;
  if (!inputValue) {
    return;
  }
  button.innerHTML = "Gerando QR Code...";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  img.addEventListener("load", () => {
    container.classList.add("active");
    button.innerHTML = "Sucesso!";
    button.addEventListener("mouseenter", () => {
      button.innerHTML = "Gerar novamente...";
    });
    button.addEventListener("mouseout", () => {
      button.innerHTML = "Sucesso!";
    });
  });

  console.log(input.value);
}

//========================================== EVENTOS ========================================== 
//Evento Clicar no Botão
button.addEventListener("click", () => {
  gerarQR();
});

//Evento Enter no Input
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    gerarQR();
  }
});

//Evento Limpar o Input
input.addEventListener("keyup", () => {
  if (!input.value) {
    container.classList.remove("active");
    button.innerText = "Gerar QR Code";
  }
});
