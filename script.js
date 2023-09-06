let isMyTurn = true;
let currentPhaseIndex = 0;
const phases = ["指揮フェイズ", "移動フェイズ", "射撃フェイズ"];

function nextPhase() {
    if (currentPhaseIndex < phases.length - 1) {
        currentPhaseIndex++;
    } else {
        // フェイズが終了したら相手のターンに移行
        isMyTurn = !isMyTurn;
        currentPhaseIndex = 0; // 指揮フェイズに戻る
        updateTurnDisplay();
    }
    updatePhaseDisplay();
}

function updateTurnDisplay() {
    const turnDisplay = document.getElementById("turnDisplay");
    if (isMyTurn) {
        turnDisplay.textContent = "自分のターン";
    } else {
        turnDisplay.textContent = "相手のターン";
    }
}

function updatePhaseDisplay() {
    const phaseDisplay = document.getElementById("phaseDisplay");
    phaseDisplay.textContent = phases[currentPhaseIndex];
}

updateTurnDisplay();
updatePhaseDisplay();