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






















let modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#1d1d1d';
        let contentSections = document.getElementsByClassName("content-section");
        for (let i = 0; i < contentSections.length; i++) {
            contentSections[i].style.color = "#fadb72";
        }
    } else {
        document.body.style.backgroundColor = '#fff'; 
        let contentSections = document.getElementsByClassName("content-section");
        for (let i = 0; i < contentSections.length; i++) {
            contentSections[i].style.color = "#074d4b";
        }
    }
});



document.querySelectorAll('.kpop-group').forEach(group => {
    group.addEventListener('mouseover', () => {
      // Add hover effects or other interactive elements here
    });
  });
  