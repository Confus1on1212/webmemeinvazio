const iconPlus = document.querySelector('.fixed');
console.log(iconPlus);

window.addEventListener('DOMContentLoaded', getMeme())
iconPlus.addEventListener('click', () => {
    window.location.href = '../html/newMeme.html';
    
})

async function getMeme() {
    const response = await fetch('http://127.0.0.1:3000/api/memes/getMemes', {
        method: 'GET',
        credentials: 'include',
    })

    const memes = await response.json();
    render(memes)
}

function render(memes) {
    const row = document.querySelector('.row')

    row.innerHTML =''
    memes.forEach(meme => {
        row.innerHTML = `
            <div class="card">
            <div class="card-header">
                <img src="http://127.0.0.1:3000/uploads/${meme.profile_pic}" alt="${meme.name}">
                ${meme.name}
            </div>

            <div class="card-body">
                <div class="card-piv">
                    <img src="http://127.0.0.1:3000/uploads/${meme.meme}" alt="${meme.name}">
                </div>
            </div>
            <div class="card-footer">
                <span>${meme.like}</span>
                <i class="fa-solid fa-thumbs-up"></i>
            </div>
        `
    })
}