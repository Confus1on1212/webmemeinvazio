const fileUpload = document.querySelector('#fileUpload')
let meme = null
const btnUpload = document.querySelector('.uploadButton')

const iconHome =  document.querySelector('.icon-home')

fileUpload.addEventListener('change', selectPic)
btnUpload.addEventListener('click', uploadMeme);
iconHome.addEventListener('click', () => {
    window.location.href ="../html/home.html"
})

async function selectPic(){
    const file = fileUpload.files[0]
    console.log(file);
    if(file) {
        meme = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            const newMeme = document.querySelector('.newMeme')
            newMeme.style.backgroundImage = `url('${e.target.result}')`
            newMeme.style.backgroundRepeat = 'no-repeat'
        }
        reader.readAsDataURL(file);
    }
}

async function uploadMeme() {
    try {
        console.log(meme);
        if (meme) {
            const formData = new FormData;
            formData.append('meme', meme)

            const response = await fetch('http://127.0.0.1:3000/api/memes/uploadMeme', 
                {
                    method: 'POST',
                    body: formData,
                    credentials: "include",

                }
            )

        }
        else{
            alert("Valassz ki egy kepet")
        }
    } catch (e) {
        console.log(e);
    }
}