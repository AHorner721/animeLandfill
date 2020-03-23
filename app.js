//Anime Landfill Scripts

let index = 0;
var question = document.querySelectorAll('.question');

function rollingQuotes(){

    const quoteList = [
        `"I'm Duo, Duo Maxwell. I might run and hide, but I never tell a lie. That's me in a nut shell." - Duo Maxwell, Mobile Suit Gundam Wing`,
        `"D'oh! This is such a lame way to die! This is so not cool!" - Duo Maxwell, Mobile Suit Gundam Wing`,
        `"One should never give up till the end." - Trowa Barton, Mobile Suit Gundam Wing`,
        `"Those who have laid eyes on a Gundam shall not live to tell about it." - Trowa Barton, Mobile Suit Gundam Wing`,
        `"Don't believe in yourself. Believe in me! Believe in the Kamina who believes in you!" - Kamina, Gurren Lagann`,
        `"Let's see ya grit those teeth!" - Kamina, Gurren Lagann`,
        `"I will face tomorrow." - Nia Teppelin, Gurren Lagann`,
        `"Mission Complete." - Heero Yuy, Mobile Suit Gundam Wing`,
        `"You've got such a gloomy personality, why don't you just give up and stop pretending to be human?" - Duo Maxwell, Mobile Suit Gundam Wing`
    ];

    const time = 8000;
    let quotes = document.querySelector('.quotes');
    if(index < quoteList.length -1){
        index++
    }else{
        index = 0;
    }
    quotes.textContent = quoteList[index];
    setTimeout(rollingQuotes,time);
}

rollingQuotes();

function toggleModal(){
    let modal = document.querySelector('.modal');
    modal.classList.toggle('hidden');
}

function gradeQuiz(){
    
    let numYes = 0;
    let level = document.querySelector('.level');
    let img = document.querySelector('.modal-img');

    const imgList = [
        "images/zero.gif", "images/one.gif", "images/two.gif",
        "images/three.gif", "images/four.gif", "images/five.gif"
    ];
    question.forEach(ans => {
        if(ans.value == 1){
            numYes++;
        }
    });
    switch(numYes){
        case 1:
            img.src = "images/one.gif";
            level.innerText = `Trash Level: Meh, almost empty.`;
            break;
        case 2:
            img.src = "images/two.gif";
            level.innerText = `Trash Level: Normal.`;
            break;
        case 3:
            img.src = "images/three.gif";
            level.innerText = `Trash Level: Half full. O_O'`;
            break;
        case 4:
            img.src = "images/four.gif";
            level.innerText = `Trash Level: Full. Very, very full.`;
            break;
        case 5:
            img.src = "images/five.gif";
            level.innerText = `Trash Level: Overflowing and not ashamed!`;
            break;
        default:
            img.src = "images/zero.gif";
            level.innerText = `Trash Level: non-existent. Watch more anime.`;
            break;
    }
    toggleModal();
}

function resetQuiz(){

    question.forEach(ans =>{
        ans.selectedIndex = 0;
    });
    toggleModal();
}
