// file sway.js ĐÃ SỬA
export default function loca() {
    let container = document.querySelector('.container');
    if (container) container.style.display = 'none';

    // Tạo mảng các Promise
    const headerLoad = fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        }); // Không cần .catch() ở đây nếu bạn muốn xử lý lỗi tập trung

    const loginLoad = fetch('login.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.container_login_sigin').innerHTML = data;
        });

    // Trả về một Promise sẽ giải quyết khi cả hai (headerLoad và loginLoad) hoàn tất
    return Promise.all([headerLoad, loginLoad]);
}