const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyRight = document.createElement('p');

copyRight.innerHTML = `Raíssa Gomes; ${thisYear}`;
footer.appendChild(copyRight);

const skills = [HTML, CSS, JavaScript];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}