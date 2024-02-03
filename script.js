//Header item start
const hed = document.getElementById('HD');
const div = document.createElement('div');
div.className = 'flex w-4/5 items-center';

//logo
const a = document.createElement('a');
a.className = 'mx-auto w-36 p-2';
a.href = '#';

const img = document.createElement('img');
img.src = 'image/logos.png';


//menu start
const nav = document.createElement('nav');

const ul = document.createElement('ul');
ul.className = 'flex';

const li = document.createElement('li');

const a2 = document.createElement('a');
a2.className = 'mx-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded';
a2.textContent = 'Home';
a2.href = '#';
const a3 = document.createElement('a');
a3.className = 'mx-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded';
a3.textContent = 'About';
a3.href = '#';
const a4 = document.createElement('a');
a4.className = 'mx-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded';
a4.textContent = 'Blog';
a4.href = '#';
const a5 = document.createElement('a');
a5.className = 'mx-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded';
a5.textContent = 'Log in';
a5.href = '#';

hed.appendChild(div);
div.appendChild(a);
a.appendChild(img);
div.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);
li.appendChild(a2);
li.appendChild(a3);
li.appendChild(a4);
li.appendChild(a5);
//Header item end

//read more start
function readMrFunction(btnId) {
    const more = document.getElementById("more-" + btnId);
    const mainBtn = document.getElementById("mainBtn-" + btnId);

    if (more.style.display == "block") {
      more.style.display = "none";
      mainBtn.innerHTML = "Read More"; 
    } else {
      more.style.display = "block";
      mainBtn.innerHTML = "Hide";
    }
  }
//read more start end

//Section one start
const mainSection = document.getElementById('main');
const div1 = document.createElement('div');
div1.className = 'm-5 p-3 w-full text-center bg-white mx-9';
const hed1 = document.createElement('h3');
hed1.className = 'text-center p-3 font-bold text-2xl';
hed1.textContent = 'Set Your Goals';
const secondA1 = document.createElement('a');
secondA1.href = '#';
const secondImg1 = document.createElement('img');
secondImg1.src='image/goal-1.png';
secondImg1.className = 'mx-auto w-3/5';
secondImg1.alt = 'Set Your Goals';
const secondP1 = document.createElement('p');
secondP1.className = 'mx-auto w-3/5';
secondP1.textContent = 'Setting goals is a fundamental aspect of personal and professional';
const secondSpan1 = document.createElement('span');
secondSpan1.className = 'hidden';
secondSpan1.id = 'more-7';
secondSpan1.textContent = 'growth. Whether in career pursuits, health aspirations, or educational endeavors, establishing clear objectives provides direction and motivation. This guide explores the importance of goal-setting, effective strategies, and the transformative impact it can have on various facets of life.';
const buttonOne = document.createElement('button');
buttonOne.id = 'mainBtn-7';
buttonOne.className = 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none p-2';
buttonOne.textContent = 'Read more';
buttonOne.onclick = function() { readMrFunction(7) };

mainSection.appendChild(div1);
div1.appendChild(hed1);
div1.appendChild(secondA1);
secondA1.appendChild(secondImg1);
div1.appendChild(secondP1);
secondP1.appendChild(secondSpan1);
div1.appendChild(buttonOne);
//Section one End

//Section Two Start
const div2 = document.createElement('div');
div2.className = 'm-5 p-3 w-full text-center bg-white mx-9';
const hed2 = document.createElement('h3');
hed2.className = 'text-center p-3 font-bold text-2xl';
hed2.textContent = 'Get Your Plan';
const secondA2 = document.createElement('a');
secondA2.href = '#';
const secondImg2 = document.createElement('img');
secondImg2.src='image/thumb.png';
secondImg2.className = 'mx-auto w-3/5';
secondImg2.alt = 'Get Your Plan';
const secondP2 = document.createElement('p');
secondP2.className = 'mx-auto w-3/5';
secondP2.textContent = 'Crafting a solid plan is the crucial next step after setting goals.';
const secondSpan2 = document.createElement('span');
secondSpan2.className = 'hidden';
secondSpan2.id = 'more-8';
secondSpan2.textContent = 'A well-thought-out plan serves as a roadmap, guiding individuals towards their objectives. This guide delves into the art of creating actionable plans, emphasizing organization, adaptability, and the power of strategic thinking to turn aspirations into tangible achievements.';
const buttonTwo = document.createElement('button');
buttonTwo.id = 'mainBtn-8';
buttonTwo.className = 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none p-2';
buttonTwo.textContent = 'Read more';
buttonTwo.onclick = function() { readMrFunction(8) };

mainSection.appendChild(div2);
div2.appendChild(hed2);
div2.appendChild(secondA2);
secondA2.appendChild(secondImg2);
div2.appendChild(secondP2);
secondP2.appendChild(secondSpan2);
div2.appendChild(buttonTwo);
//Section Two End

//Section Three Start
const div3 = document.createElement('div');
div3.className = 'm-5 p-3 w-full text-center  bg-white mx-9';
const hed3 = document.createElement('h3');
hed3.className = 'text-center p-3 font-bold text-2xl';
hed3.textContent = 'Get Your Plan';
const secondA3 = document.createElement('a');
secondA3.href = '#';
const secondImg3 = document.createElement('img');
secondImg3.src='image/train-jog.png';
secondImg3.className = 'mx-auto w-3/5';
secondImg3.alt = 'Get Your Plan';
const secondP3 = document.createElement('p');
secondP3.className = 'mx-auto w-3/5';
secondP3.textContent = 'Crafting a solid plan is the crucial next step after setting goals.';
const secondSpan3 = document.createElement('span');
secondSpan3.className = 'hidden';
secondSpan3.id = 'more-9';
secondSpan3.textContent = 'A well-thought-out plan serves as a roadmap, guiding individuals towards their objectives. This guide delves into the art of creating actionable plans, emphasizing organization, adaptability, and the power of strategic thinking to turn aspirations into tangible achievements.';
const buttonThree = document.createElement('button');
buttonThree.id = 'mainBtn-9';
buttonThree.className = 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none p-2';
buttonThree.textContent = 'Read more';
buttonThree.onclick = function() { readMrFunction(9) };

mainSection.appendChild(div3);
div3.appendChild(hed3);
div3.appendChild(secondA3);
secondA3.appendChild(secondImg3);
div3.appendChild(secondP3);
secondP3.appendChild(secondSpan3);
div3.appendChild(buttonThree);
//Section Three End


//Footer Start
const footer = document.getElementById('ftr');
const divFooter = document.createElement('div');
divFooter.className = 'flex w-4/5 items-center';
const aFooter = document.createElement('a');
aFooter.className = 'mx-auto w-36 p-2';
aFooter.href = '#';
const imgFooter = document.createElement('img');
imgFooter.src = 'image/logos.png';

const socialImage1 = document.createElement('img');
socialImage1.className = 'w-7 ml-5';
socialImage1.src = 'image/facebook.png';

const socialImage2 = document.createElement('img');
socialImage2.className = 'w-7 ml-5';
socialImage2.src = 'image/twitter.png';

const socialImage3 = document.createElement('img');
socialImage3.className = 'w-8 ml-5';
socialImage3.src = 'image/instagram.png';
const socialImage4 = document.createElement('img');
socialImage4.className = 'w-8 ml-5';
socialImage4.src = '';


footer.appendChild(divFooter);
divFooter.appendChild(aFooter);
aFooter.appendChild(imgFooter);
divFooter.appendChild(socialImage1);
divFooter.appendChild(socialImage2);
divFooter.appendChild(socialImage3);
divFooter.appendChild(socialImage4);
//Footer End
