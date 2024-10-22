document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('intro').style.opacity = '1';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('intro').style.opacity = '0';
});
