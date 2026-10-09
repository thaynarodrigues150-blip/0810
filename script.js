/* ═══ Jogo do Dino — lógica do jogo ═══ */
const DINOS = [
    { emoji: "🦕", name: "Braquio" },
    { emoji: "🦖", name: "T-Rex" },
    { emoji: "🐉", name: "Dragão" },
{ emoji: "🦎", name: "Iguana" },
{ emoji: "🐊", name: "Crocosso" },
{ emoji: "🦴", name: "Osso" },
{ emoji: "🥚", name: "Dinovo" },
{ emoji: "🌋", name: "Vulcano" },
{ emoji: "🍃", name: "Folhasso" },
{ emoji: "⚡", name: "Rapto" },
];
const PRIZE_LIMIT = 500;
let totalArrecadado = 0;
let totalPremios = 0;
let selectedDino = null;
let freeRound = false;
let lastBet = 0;
let gameOver = false;
/* ─── Formatação ─── */
function fmt(v) {
return 'R$ ' + v.toFixed(2).replace('.', ',');
}
/* ─── Renderiza grid de dinos ─── */
function renderDinos() {
    const grid = document.getElementById('dinos-grid');
    grid.innerHTML = '';
    DINOS.forEach((d, i) => {
    const btn = document.createElement('button');
    btn.className = 'dino-btn' + (selectedDino === i ? ' selected' : '');
    btn.innerHTML = `${d.emoji}<span>${d.name}</span>`;
    btn.onclick = () => { selectedDino = i; renderDinos(); };
    grid.appendChild(btn);
    });
    }
    /* ─── Atualiza painel de stats ─── */
    function updateStats() {
    document.getElementById('stat-arrecadado').textContent =
    fmt(totalArrecadado);
    document.getElementById('stat-premios').textContent = fmt(totalPremios);
    document.getElementById('stat-limite').textContent = fmt(Math.max(0,
        PRIZE_LIMIT - totalPremios));
        const pct = Math.min(100, (totalPremios / PRIZE_LIMIT) * 100);
        document.getElementById('limit-bar').style.width = pct + '%';
        document.getElementById('limit-pct').textContent = pct.toFixed(0) + '%';
        if (pct >= 100) {
        document.getElementById('limit-bar').style.background = '#e24b4a';
        }
        }
        /* ─── Escolha aleatória ─── */
        function escolherAleatorio() {
        selectedDino = Math.floor(Math.random() * DINOS.length);
        renderDinos();
        }
        /* ─── Init (mantenha sempre no fim do arquivo) ─── */
        renderDinos();
        updateStats();
/* ─── Lógica principal da aposta ─── */
function apostar() {
    if (gameOver) {
    showResult('🔒 O limite de prêmios foi atingido. Obrigado por jogar!',
    'info');
    return;
    }
}
    