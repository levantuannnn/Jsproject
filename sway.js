export default function loca() {
    let container = document.querySelector('.container');
    if (container) container.style.display = 'none'; // kiểm tra tồn tại

    fetch('header.html')
        .then(response => response.text()) // phải return text()
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        })
        .catch(err => console.error('Lỗi khi nạp header:', err));
    fetch('login.html')
    .then(response=>{ response.text()}  )
    .then(data=>{
         document.querySelector('container_login_sigin').innerHTML=data
    }) 
}
