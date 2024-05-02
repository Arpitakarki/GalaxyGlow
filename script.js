document.getElementById('loginText').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log("Email:", email);
    console.log("Password:", password);

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';


    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('loginText').style.display = 'none';
});






















document.addEventListener('DOMContentLoaded', function() {
    let modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('click', function() {
        if (this.checked) {
            document.body.style.backgroundColor = '#1d1d1d';
            let contentSections = document.getElementsByClassName("content-section");
            for (let i = 0; i < contentSections.length; i++) {
                contentSections[i].style.color = "#fadb72"; 
            }
            document.querySelector('footer').style.backgroundColor = 'rgb(32, 32, 32)';
            document.querySelector('footer').style.color = '#d8d8d8';
        } else {
            document.body.style.backgroundColor = '#fff'; 
            let contentSections = document.getElementsByClassName("content-section");
            for (let i = 0; i < contentSections.length; i++) {
                contentSections[i].style.color = "#074d4b"; 
            }
            document.querySelector('footer').style.backgroundColor = '#fff'; 
            document.querySelector('footer').style.color = '#000'; 
        }
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Toggle the 'gold' class for clicked and all preceding stars
            for (let i = 0; i <= index; i++) {
                stars[i].classList.toggle('gold');
            }
        });
    });
});
