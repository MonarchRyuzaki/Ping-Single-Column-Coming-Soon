const input = document.querySelector('input');
const btn = document.querySelector('button');
const noEmail = document.querySelector('.no-email')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    if (isEmptyForm() || !isValid){
        noEmail.style.display = 'block';
        input.style.borderColor = 'red'; 
        noEmail.style.position = 'relative';
    } else {
        noEmail.style.display = 'none'; 
    }
});

const isEmptyForm = () => {
    if (input.innerText === ''){
        return true;
    }
    return false;
} 