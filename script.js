const blocos = document.querySelectorAll('.bloco_arrastavel');

blocos.forEach(bloco => {
    let arrastando = false;
    let offsetX, offsetY;
    
    const header = bloco.querySelector('.header');

    header.addEventListener('mousedown', (e) => {
        arrastando = true;
        offsetX = e.clientX - bloco.offsetLeft;
        offsetY = e.clientY - bloco.offsetTop;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!arrastando) return;
        bloco.style.left = (e.clientX - offsetX) + 'px';
        bloco.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        arrastando = false;
        header.style.cursor = 'move';
    });
});