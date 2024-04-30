const button = document.querySelector('button');

button.addEventListener('click', function(e){
    // Get the positin and dimension of button relative to viewport to calculate click poition relative to the button
    const rect = button.getBoundingClientRect();

    //Calculate the click position relative to the button
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    //Create ripple element
    const ripple = document.createElement('span');

    //Trigger ripple effect animation
    ripple.classList.add('ripple-effect')
    
    //Position ripple element
    ripple.style.left = clickX + 'px';
    ripple.style.top = clickY + 'px';
    
    //Append the ripple element to the button
    button.appendChild(ripple);


})


