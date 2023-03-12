const container = document.querySelector('.banner-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotList = [...document.querySelectorAll('.dot')];
const dot = document.querySelector('.dot');
dotList[0].style.backgroundColor = 'black';

let slideIndex = 0;

nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > container.children.length - 3) {
        slideIndex = 0;
    }
    container.style.transform = `translateX(-${slideIndex * (100/3)}%)`;
    updateDots(slideIndex);
    onsole.log(slideIndex);
});

prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = container.children.length - 3;
    }
    container.style.transform = `translateX(-${slideIndex * (100/3)}%)`;
    updateDots(slideIndex);
    console.log(slideIndex);
});

dotList.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        container.style.transform = `translateX(-${slideIndex * (100/3)}%)`;
        updateDots(index);
    });
    
});

updateDots = (index) => {
    dotList.forEach(dot => { dot.style.backgroundColor = '#bbb'; });
    dotList[index].style.backgroundColor = 'black';
}