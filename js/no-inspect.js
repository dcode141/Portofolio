
  // Menonaktifkan klik kanan
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      alert('Fungsi dinonaktifkan!');
    });

  // Menonaktifkan kombinasi tombol seperti F12, Ctrl+Shift+I, dan Ctrl+U
    document.addEventListener('keydown', function(e) {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('Fungsi dinonaktifkan!');
      }
    });
