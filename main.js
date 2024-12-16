document.addEventListener('DOMContentLoaded', () => {
    const pricingBoxesBody = document.querySelectorAll('.box-body');
    const totalDisplay = document.querySelector('.bottom p:nth-child(2)');

    pricingBoxesBody.forEach(boxBody => {
        boxBody.addEventListener('click', () => {

            // script for box expansion

            pricingBoxesBody.forEach(body => body.classList.remove('active'));

            boxBody.classList.add('active');

            // script for radio button 

            const radioId = boxBody.querySelector('input[type="radio"]').id;
            const radioButton = document.getElementById(radioId);

            if (radioButton) {
                radioButton.checked = true;
            }

            // script for total value 

            const priceValue = boxBody.querySelector('.box-body .box-body-right p:nth-child(1)').textContent;

            totalDisplay.textContent = `Total: ${priceValue}`;

        });
    });

});