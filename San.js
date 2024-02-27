document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// back
document.getElementById('backBtn').addEventListener('click', function () {
    window.location.href = './礼 (Rai).html';
});

document.getElementById('backBtn').addEventListener('touch', function () {
    window.location.href = './礼 (Rai).html';
});

// next
document.getElementById('nextBtn').addEventListener('click', function () {
    window.location.href = './index.html';
});

document.querySelector('.bodyText').addEventListener('mouseover', function () {
    document.querySelector('.cursor').style.padding = '4rem';
    document.querySelector('.cursor').style.backgroundColor = '#888';
});

document.querySelector('.bodyText').addEventListener('mouseout', function () {
    document.querySelector('.cursor').style.padding = '2rem';
});