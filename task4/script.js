const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let dirX = Math.random() > 0.5 ? 1 : -1;
    let dirY = Math.random() > 0.5 ? 1 : -1;

    const moveBlock = () => {
        posX += dirX;
        posY += dirY;

        if (posX >= window.innerWidth - 50 || posX <= 0) {
            dirX *= -1;
        }
        if (posY >= window.innerHeight - 50 || posY <= 0) {
            dirY *= -1;
        }

        block.style.left = posX + 'px';
        block.style.top = posY + 'px';
        requestAnimationFrame(moveBlock);
    };

    moveBlock();
});
