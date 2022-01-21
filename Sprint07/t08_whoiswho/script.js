window.onload = function() {
    document.querySelectorAll('select').forEach(item => {
        item.addEventListener('change', () => {
            sendFilter();
        });
    });
    function sendFilter() {
        document.querySelector('#submit').click();
    }
}