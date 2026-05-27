document.addEventListener('DOMContentLoaded', () => {
    // Simulator logic
    const breathBtn = document.getElementById('breath-btn');
    const resetBtn = document.getElementById('reset-btn');
    const tempDisplay = document.getElementById('temp-value');
    const statusLabel = document.getElementById('status-label');
    const simDisplay = document.getElementById('sim-display');
    const progressFill = document.getElementById('progress-fill');

    let currentTemp = 45; // Start at 45 degrees Celsius
    const minTemp = -15;  // Goal temperature

    function updateSimulator() {
        tempDisplay.textContent = `${currentTemp}°C`;
        
        // Calculate cooling percentage
        const totalRange = 45 - (-15);
        const currentDiff = 45 - currentTemp;
        const percent = Math.min(100, Math.max(0, (currentDiff / totalRange) * 100));
        
        if (progressFill) {
            progressFill.style.width = `${percent}%`;
        }

        if (currentTemp <= 15) {
            // Cool state
            simDisplay.classList.add('cool');
            statusLabel.textContent = '아크틱 실드 활성화 (쾌적)';
            statusLabel.style.color = '#e0f7fa';
        } else if (currentTemp <= 30) {
            // Mild state
            simDisplay.classList.remove('cool');
            statusLabel.textContent = '냉각 시스템 가동 중';
            statusLabel.style.color = '#fffde7';
            simDisplay.style.background = 'radial-gradient(circle, #fff9c4 0%, #fbc02d 100%)';
            simDisplay.style.boxShadow = '0 20px 50px rgba(251, 192, 45, 0.3)';
        } else {
            // Hot state
            simDisplay.classList.remove('cool');
            statusLabel.textContent = '지구 온난화 경보 (위험)';
            statusLabel.style.color = '#ffebee';
            simDisplay.style.background = 'radial-gradient(circle, #ffebee 0%, #ff5252 100%)';
            simDisplay.style.boxShadow = '0 20px 50px rgba(255, 82, 82, 0.3)';
        }
    }

    if (breathBtn) {
        breathBtn.addEventListener('click', (e) => {
            if (currentTemp > minTemp) {
                currentTemp = Math.max(minTemp, currentTemp - 5);
                updateSimulator();
                
                // Create particle effect
                createIceParticle(e.clientX, e.clientY);
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentTemp = 45;
            updateSimulator();
        });
    }

    function createIceParticle(x, y) {
        const particle = document.createElement('div');
        particle.textContent = '❄️';
        particle.style.position = 'fixed';
        particle.style.left = `${x - 10}px`;
        particle.style.top = `${y - 10}px`;
        particle.style.fontSize = `${Math.random() * 20 + 10}px`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 0.8s ease-out';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * -150 - 50}px) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = '0';
        }, 10);

        setTimeout(() => {
            particle.remove();
        }, 800);
    }
});
