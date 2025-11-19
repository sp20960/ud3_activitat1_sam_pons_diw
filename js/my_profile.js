document.addEventListener('DOMContentLoaded', () => {
    const btnNoAddress = document.getElementById("button-no-address");
    const containerAddAddress = document.getElementById('container-add-address');
    const closeAddAddress = document.getElementById('close-add-address');

    btnNoAddress.addEventListener('click', () => {
        containerAddAddress.classList.add('flex!')
    })

    closeAddAddress.addEventListener('click', () => {
        containerAddAddress.classList.remove('flex!')
    })
})