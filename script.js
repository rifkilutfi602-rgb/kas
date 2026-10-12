document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    // Navigasi antar halaman (Tab Switching)
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Hapus kelas aktif dari semua tombol dan halaman
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Tambahkan kelas aktif ke tombol yang diklik
            this.classList.add('active');

            // Tampilkan halaman tujuan
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Simulasi aksi saat Form Transaksi disubmit
    const kasForm = document.getElementById('kasForm');
    if (kasForm) {
        kasForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const keterangan = document.getElementById('keterangan').value;
            const jenis = document.getElementById('jenis').value;
            const nominal = document.getElementById('nominal').value;

            alert(`Berhasil!\nTransaksi "${keterangan}" (${jenis}) senilai Rp ${nominal} berhasil dicatat.`);
            kasForm.reset();
        });
    }
});