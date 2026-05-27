document.addEventListener('DOMContentLoaded', () => {
    // Star Bridge Slider Logic
    const slider = document.getElementById('bridge-slider');
    const starLeft = document.getElementById('star-left');
    const starRight = document.getElementById('star-right');
    const messageReveal = document.getElementById('message-reveal');

    if (slider && starLeft && starRight && messageReveal) {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            
            // Calculate movement from 0% to 45%
            const offset = (val / 100) * 45;
            
            starLeft.style.left = `${offset}%`;
            starRight.style.right = `${offset}%`;

            if (parseInt(val) === 100) {
                starLeft.innerHTML = '✨';
                starRight.innerHTML = '✨';
                messageReveal.style.opacity = '1';
                messageReveal.textContent = '우리가 마침내 마주한 자리, 온 은하가 우리의 사랑을 축복하리라.';
            } else {
                starLeft.innerHTML = '⭐';
                starRight.innerHTML = '⭐';
                messageReveal.style.opacity = '0';
            }
        });
    }

    // Guestbook Board Logic
    const guestbookForm = document.getElementById('guestbook-form');
    const letterList = document.getElementById('letter-list');

    if (guestbookForm && letterList) {
        guestbookForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const authorInput = document.getElementById('input-author');
            const tagInput = document.getElementById('input-tag');
            const contentInput = document.getElementById('input-content');

            if (authorInput && contentInput) {
                const author = authorInput.value.trim();
                const tag = tagInput ? tagInput.value.trim() || '사랑' : '사랑';
                const content = contentInput.value.trim();

                if (author && content) {
                    // Create new letter card
                    const newCard = document.createElement('div');
                    newCard.className = 'letter-card';
                    newCard.style.opacity = '0';
                    newCard.style.transform = 'translateY(10px)';
                    newCard.style.transition = 'all 0.4s ease';

                    newCard.innerHTML = `
                        <div class="letter-header">
                            <span class="letter-author">${escapeHtml(author)}</span>
                            <span class="letter-tag">${escapeHtml(tag)}</span>
                        </div>
                        <p class="letter-content">${escapeHtml(content)}</p>
                    `;

                    letterList.prepend(newCard);

                    // Reset form
                    authorInput.value = '';
                    if (tagInput) tagInput.value = '';
                    contentInput.value = '';

                    // Soft entry animation
                    setTimeout(() => {
                        newCard.style.opacity = '1';
                        newCard.style.transform = 'translateY(0)';
                    }, 50);
                }
            }
        });
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
});
