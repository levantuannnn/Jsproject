export default function loca() {
    let container = document.querySelector('.container');
    if (container) container.style.display = 'none';

    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        })
        .catch(err => console.error('Lỗi khi nạp header:', err));

    fetch('login.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.container_login_sigin').innerHTML = data;
        })
        .catch(err => console.error('Lỗi khi nạp login:', err));
}
