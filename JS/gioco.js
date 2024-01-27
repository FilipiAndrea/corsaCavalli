window.onload = ()=>{
    document.getElementById("esci").addEventListener("click", ()=>{
        if(this !== null)
            var currentUrl = window.location.href;
            window.location.href = currentUrl.replace('/PHP/gioco.php', '/index.html');
    });
}


document.getElementById('esci').addEventListener('click', function() {
    document.body.classList.remove('winning');
});