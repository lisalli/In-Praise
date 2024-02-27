document.getElementById('pageHeading').addEventListener('mouseover', function() {
    this.textContent = "Rai";
});

document.getElementById('pageHeading').addEventListener('mouseout', function() {
    this.textContent = "礼";
});


document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// back
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = './翳 (Ei).html';
});

// next
document.getElementById('nextBtn').addEventListener('click', function() {
    window.location.href = './讃 (San).html';
});

document.querySelector('.bodyText').addEventListener('mouseover', function() {
    document.querySelector('.cursor').style.padding = '4rem'; 
});

document.querySelector('.bodyText').addEventListener('mouseout', function() {
    document.querySelector('.cursor').style.padding = '2rem'; 
});