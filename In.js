document.getElementById('pageHeading').addEventListener('mouseover', function() {
    this.textContent = "In";
});

document.getElementById('pageHeading').addEventListener('mouseout', function() {
    this.textContent = "陰";
});

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

// back
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = './index.html';
});

// next
document.getElementById('nextBtn').addEventListener('click', function() {
    window.location.href = './翳 (Ei).html';
});

document.querySelector('.bodyText').addEventListener('mouseover', function() {
    document.querySelector('.cursor').style.padding = '4rem'; 
});

document.querySelector('.bodyText').addEventListener('mouseout', function() {
    document.querySelector('.cursor').style.padding = '2rem'; 
});

const meteorShower = document.getElementById('meteor-shower');

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.left = `${Math.random() * window.innerWidth}px`;
    meteorShower.appendChild(meteor);
    setTimeout(() => {
        meteor.remove();
    }, 2000);
}

setInterval(createMeteor, 100);
