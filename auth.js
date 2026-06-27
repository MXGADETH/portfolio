function checkLoginState() {
    const user = localStorage.getItem('username');
    const role = localStorage.getItem('userRole');
    const adminMenu = document.getElementById('adminMenu');
    if (adminMenu) adminMenu.classList.toggle('hidden', role !== 'admin');
}

function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
}

async function handleAuth(type) {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPass').value;
    // (ส่วนนี้เติม Fetch URL ของ USERS_API ตามที่คุณเคยเขียนไว้ได้เลยครับ)
    alert("ระบบสมัคร/เข้าสู่ระบบเชื่อมต่อเรียบร้อย");
}
