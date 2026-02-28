function atualizarRelogio() {
  const agora = new Date();

  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  document.getElementById('relogio').textContent =
    `${horas}:${minutos}:${segundos}`;

  document.getElementById('data').textContent =
    agora.toLocaleDateString('pt-BR');

  const horaAtual = agora.getHours();
  let mensagem = '';

  if (horaAtual < 12) mensagem = 'Bom dia!';
  else if (horaAtual < 18) mensagem = 'Boa tarde!';
  else mensagem = 'Boa noite!';

  document.getElementById('mensagem').textContent = mensagem;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();


// 🔊 SOM DIGITAL SUAVE (CURTO)
function toggleSom() {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = 600; // tom mais elegante

  gainNode.gain.value = 0.05; // volume moderado

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();

  // fade out suave
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.6
  );

  oscillator.stop(audioContext.currentTime + 0.6);
}