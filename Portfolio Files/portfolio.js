const lccPara = document.getElementById('lcc-paragraph');
const tsunamiPara = document.getElementById('tsunami-coffee-paragraph');
const storyPara = document.getElementById('story-paragraph');

lccPara.hidden = true;
tsunamiPara.hidden = true;
storyPara.hidden = true;

let lccHeading = document.getElementById('lcc-heading');
let tsunamiHeading = document.getElementById('tsunami-coffee-heading');
let storyHeading = document.getElementById('story-heading');

function appear(para) {
    para.hidden = !para.hidden; 
}

lccHeading.onclick = () => appear(lccPara);
tsunamiHeading.onclick = () => appear(tsunamiPara);
storyHeading.onclick = () => appear(storyPara);
