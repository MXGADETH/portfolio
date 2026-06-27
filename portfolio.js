let allPortfolios = [];
let currentPage = 1;
const itemsPerPage = 6;

async function fetchPortfolios() {
    const res = await fetch(PORTFOLIO_API);
    allPortfolios = await res.json();
    renderPortfolios();
}

function renderPortfolios() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    const start = (currentPage - 1) * itemsPerPage;
    const data = allPortfolios.slice(start, start + itemsPerPage);
    grid.innerHTML = data.map(item => `<div>${item.fullname}</div>`).join('');
}
