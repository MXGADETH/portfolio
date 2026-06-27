document.addEventListener('DOMContentLoaded', async () => {
    checkLoginState();
    await fetchPortfolios();
});
