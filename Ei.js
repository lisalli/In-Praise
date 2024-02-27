document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('scratchCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fill the canvas with black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const startDrawing = (e) => {
        isDrawing = true;
        draw(e);
    };

    const stopDrawing = () => {
        isDrawing = false;
        ctx.beginPath(); // Begin a new path (to not connect lines)
    };

    const draw = (e) => {
        if (!isDrawing) return;
        ctx.globalCompositeOperation = 'destination-out'; // Set to erase instead of draw
        ctx.lineWidth = 300; // Increase this value to make the eraser bigger
        ctx.lineCap = 'round'; // Round eraser shape
        // Get the correct position for touch events or mouse events
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        ctx.lineTo(clientX, clientY); // Go to cursor position
        ctx.stroke(); // Draw the line
        ctx.beginPath(); // Begin a new path
        ctx.moveTo(clientX, clientY); // Move to cursor position
    };

    // Event listeners for mouse actions
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    // Add touch support for mobile devices
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent scrolling when touching canvas
        startDrawing(e.touches[0]);
    });
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling when touching canvas
        draw(e.touches[0]);
    });

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
});

document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    // 手动还原鼠标动效
    let bodyTextClientRect = document.querySelector('.bodyText').getClientRects()[0];
    if (e.clientX >= bodyTextClientRect.x && e.clientX <= bodyTextClientRect.x + bodyTextClientRect.width
        && e.clientY >= bodyTextClientRect.y && e.clientY <= bodyTextClientRect.y + bodyTextClientRect.height) {
        document.querySelector('.cursor').style.padding = '4rem';
    } else {
        document.querySelector('.cursor').style.padding = '2rem';
    }
    bodyTextClientRect = document.querySelector('#pageHeading').getClientRects()[0];
    let header = document.getElementById('pageHeading');
    if (e.clientX >= bodyTextClientRect.x && e.clientX <= bodyTextClientRect.x + bodyTextClientRect.width
        && e.clientY >= bodyTextClientRect.y && e.clientY <= bodyTextClientRect.y + bodyTextClientRect.height) {
        header.textContent = "Ei";
        if(document.body.clientWidth <= 1024){
            header.style.fontSize = "110px"
        } else {
            header.style.fontSize = "10vw"
        }
        
    } else {
        header.textContent = "翳";
        if(document.body.clientWidth <= 1024){
            header.style.fontSize = "80px"
        } else header.style.fontSize = "8vw"
    }
});

let cur_state = 0;
document.onwheel = (event) => {
    cur_state = cur_state + event.deltaY;
    cur_state = Math.min(cur_state, document.body.scrollHeight);
    cur_state = Math.max(0, cur_state);
    document.body.scrollTo({ top: cur_state, left: 0, behavior: "smooth" });
}

document.onclick = (e) => {
    // 手动还原按钮点击
    let bodyTextClientRect = document.querySelector('#backBtn').getClientRects()[0];
    if (e.clientX >= bodyTextClientRect.x && e.clientX <= bodyTextClientRect.x + bodyTextClientRect.width
        && e.clientY >= bodyTextClientRect.y && e.clientY <= bodyTextClientRect.y + bodyTextClientRect.height) {
        window.location.href = './陰 (In).html';
    }
    bodyTextClientRect = document.querySelector('#nextBtn').getClientRects()[0];
    if (e.clientX >= bodyTextClientRect.x && e.clientX <= bodyTextClientRect.x + bodyTextClientRect.width
        && e.clientY >= bodyTextClientRect.y && e.clientY <= bodyTextClientRect.y + bodyTextClientRect.height) {
        window.location.href = './礼 (Rai).html';
    }
}

// back
document.getElementById('backBtn').addEventListener('click', function () {
    window.location.href = './陰 (In).html';
});

// next
document.getElementById('nextBtn').addEventListener('click', function () {
    window.location.href = './翳 (Ei).html';
});

document.querySelector('.bodyText').addEventListener('mouseover', function () {
    document.querySelector('.cursor').style.padding = '4rem';
});

document.querySelector('.bodyText').addEventListener('mouseout', function () {
    document.querySelector('.cursor').style.padding = '2rem';
});