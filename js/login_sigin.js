

export default function login_sigin() {


    // nut dang  nhap o dau trang
    const btnSigin = document.querySelector('.header_chil .header_sigin');
    console.log('nut dang ky da co', btnSigin)


    const formLogin = document.querySelector('.form-login');
    console.log('form login', formLogin)
    const formSigin = document.querySelector('.form');
    console.log('form sigon', formSigin)
    const linkToSigin = document.querySelector('.sigin_hrefs');
    formLogin.style.display = 'none';
    console.log(formLogin.style.display);
    formSigin.style.display = 'none';
    // Khi click khu vực đăng ký
    btnSigin.addEventListener('click', () => {
        formLogin.style.display = 'block';
        console.log(formLogin.style.display);
        formSigin.style.display = 'none';
    });

    // Khi click link "đăng ký ?" trong form đăng nhập
    linkToSigin.addEventListener('click', (e) => {
        e.preventDefault(); // chặn load lại trang
        formLogin.style.display = 'none';
        formSigin.style.display = 'block';
    });
}
