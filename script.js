
let kraj = document.querySelectorAll('.kraj');
let kraj1 = document.querySelectorAll('.kraj1');
let popupBg = document.querySelector('.info__bg');
let popup__photo = document.querySelector('.info__photo');
let popup__title = document.querySelector('.info__title');
let popup__text = document.querySelector('.info__text');
let tooltip = document.querySelector('.tooltip');

kraj.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });

    item.addEventListener('mouseenter', function() {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'none';
    });

    item.addEventListener('mousemove', function(e) {
        tooltip.style.top = (e.y + 10) + 'px';
        tooltip.style.left = (e.x + 10) + 'px';
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});

kraj1.forEach((item) => {
    item.addEventListener('click', function() {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });

    item.addEventListener('mouseenter', function() {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'none';
    });

    item.addEventListener('mousemove', function(e) {
        tooltip.style.top = (e.y + 10) + 'px';
        tooltip.style.left = (e.x + 10) + 'px';
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});