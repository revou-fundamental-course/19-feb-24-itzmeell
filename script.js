document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('openPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const usernameInput = document.getElementById('usernameInput');
    const headerHeading = document.querySelector('header h2');

    // Menampilkan popup ketika tombol "Enter Your Username" diklik
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    // Menyembunyikan popup ketika tombol close diklik
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Menyimpan username yang dimasukkan dan menampilkannya di header
    document.getElementById('saveUsername').addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username !== '') {
            headerHeading.textContent = `Welcome, ${username}!`;
            popup.style.display = 'none';
        } else {
            alert('Please enter your username.');
        }
    });
});
