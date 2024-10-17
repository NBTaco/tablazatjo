const keres = document.getElementById('kereses');

keres.onclick = function() {
    const ev = document.querySelector('.search-input-year').value;
    const nev = document.querySelector('.search-input').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    if (!ev && !nev) {
        rows.forEach(function(row) {
            row.style.display = '';
        });
        return;
    }
    const year = parseInt(ev);

    rows.forEach(function(row) {
        const kezd = parseInt(row.querySelector('.from').textContent);
        const veg = parseInt(row.querySelector('.to').textContent);
        const name = row.querySelector('.nev').textContent.toLowerCase();

        let sormutat = true;

        if (nev && !name.includes(nev)) {
            sormutat = false;
        }

        if (year !== null && (year < kezd || year > veg)) {
            sormutat = false;
        }
        
        if (sormutat) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
};
