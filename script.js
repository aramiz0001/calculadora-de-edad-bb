document.getElementById('submit-btn').addEventListener('click', () => {
    const d1 = parseInt(document.getElementById('day').value);
    const m1 = parseInt(document.getElementById('month').value);
    const y1 = parseInt(document.getElementById('year').value);

    const date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    const d = d2 - d1;
    const m = m2 - m1;
    const y = y2 - y1;


    if(!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        document.getElementById('res-years').innerText = y;
        document.getElementById('res-months').innerText = m;
        document.getElementById('res-days').innerText = d;
    }

});
