// copyright on footer
const renderCopyright = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.querySelector('#copyright')
    
    copyright.innerHTML = `&copy; Raissa Gomes ${thisYear}`

}


//skilss section
const renderSkillsList = () => {
const skills = ['JavaScript', 'HTML', 'CSS', 'GIT']


//DOM
const skillsSection = document.getElementById('#skills');
const skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
    
 }
}


const messageForm = document.getElementsByName('leave_message');
const messageSection = document.getElementById('messages');
messageSection.hidden = true;

messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    if (!name || !email ||!message) {
        return
    }

const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.hidden = false;
    messageForm.item(0).reset();
});