const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrInput = document.querySelector("#qr-input")
const qrImg = document.querySelector("#qr-code img")
const qrDownload = document.querySelector("#qr-code a")
const qrDivImg = document.querySelector("#qr-code")
qrDivImg.style.display = 'none'

// Eventos
async function genereateQr() {
  const value = qrInput.value
  if (!value) { return }
  
  
  qrImg.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
  qrDownload.setAttribute('href', `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
  qrDownload.setAttribute('download', `${value.slice(0, 2)}-qr-code.png`)
  container.classList.toggle('active')
  qrDivImg.style.display = 'flex'
  
  qrCodeBtn.innerText = 'Gerando QR Code...'
  qrImg.addEventListener('load', () => {
    qrCodeBtn.innerText = 'QR Code gerado!'
    setTimeout(() => {
      qrCodeBtn.innerText = 'Gerar QR Code'
    }, 1000);
  })
}

qrCodeBtn.addEventListener("click", () => {
  genereateQr()
})

qrInput.addEventListener("keydown", (e) => {
  if (e.code === 'Enter') { genereateQr() } 
})

qrInput.addEventListener("input", async(e) => {
  if (!qrInput.value) {
    qrDivImg.style.display = 'none'
    container.classList.remove('active')
    qrCodeBtn.innerText = 'Gerar QR Code'
    return
  }
})
