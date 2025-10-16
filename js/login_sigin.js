export default function login_sigin() {
    const btnLogin = document.querySelector('.header_login');
    const btnSigin = document.querySelector('.header_sigin');
    const formLogin = document.querySelector('.form-login');
    const formSigin = document.querySelector('.form');
    const linkToSigin = document.querySelector('.sigin_href a'); 
    // Ẩn cả hai form lúc đầu (nếu muốn)
    formLogin.style.display = 'none';
    formSigin.style.display = 'none'; 
    // Khi click khu vực đăng nhập
    btnLogin.addEventListener('click', () => {
        formLogin.style.display = 'block';
        formSigin.style.display = 'none';
    }); 
    // Khi click khu vực đăng ký
    btnSigin.addEventListener('click', () => {
        formLogin.style.display = 'block';
        formSigin.style.display = 'none';
    });

    // Khi click link "đăng ký ?" trong form đăng nhập
    linkToSigin.addEventListener('click', (e) => {
        e.preventDefault(); // chặn load lại trang
        formLogin.style.display = 'none';
        formSigin.style.display = 'block';
    });
}
