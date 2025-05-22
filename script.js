function isInView(element){
    const bounds = element.getBoundingClientRect()
    return bounds.top >= 0 && bounds.bottom <= window.innerHeight - 400
}

function isInViewProjects(element){
    const bounds = element.getBoundingClientRect()
    return bounds.top >= 0 && bounds.bottom <= window.innerHeight
}

const elementsAchievements = []
for(let i = 0; i <= 12; i++){
    elementsAchievements[i] = document.getElementById(`Achievements${i}`)
}

function appearAchievements(){
    const target = document.querySelector('#achievementsText')
    if(isInView(target)){
        for(let i = 0; i <= 12; i++){
                elementsAchievements[i].style = `animation: visible_animation1 1s forwards; animation-delay: ${i/4}s`
        }
    }
}

window.addEventListener('scroll', appearAchievements)

const elementsEducationName = []
const elementsEducationTitle = []

for(let i = 0; i <= 3; i++){
    elementsEducationName[i] = document.getElementById(`EducationName${i}`)
    elementsEducationTitle[i] = document.getElementById(`EducationTitle${i}`)
}

function appearEducation(){
    const target = document.querySelector('#educationText')
    if(isInView(target)){
        for(let i = 0; i <= 3; i++){
                elementsEducationName[i].style = `animation: visible_animation2 1s forwards; animation-delay: ${i/4}s`
                elementsEducationTitle[i].style = `animation: visible_animation2 1s forwards; animation-delay: ${1+i/4}s`
        }
    }
}

window.addEventListener('scroll', appearEducation)

const elementsAchievementsName = []

for(let i = 0; i <= 12; i++){
    elementsAchievementsName[i] = document.getElementById(`AchievementsName${i}`)
}

function glowAchievements(){
    const target = document.querySelector('#achievementsText')
    if(isInView(target)){
        for(let i = 0; i <= 12; i++){
            if(i == 1 || i == 2 || i == 3 || i == 4){
                elementsAchievementsName[i].style = `animation: glowAnimation1 4s; animation-delay: ${17/4}s`
            } else if (i == 0 || i == 10 || i == 12 ){
                elementsAchievementsName[i].style = `animation: glowAnimation2 4s; animation-delay: ${17/4}s`
            } else {
                elementsAchievementsName[i].style = `animation: glowAnimation3 4s; animation-delay: ${17/4}s`
            }
        }
    }
}

window.addEventListener('scroll', glowAchievements)

const proficiencies = document.querySelectorAll('.proficiency')

function animateGraph(){
    const target = document.querySelector('#servicesText')
    if(isInView(target)){
        for(const proficiency of proficiencies){
            proficiency.style = 'animation: graphAnimation 2s linear forwards'
        }
    }
}

window.addEventListener('scroll', animateGraph)

function animateProject(){
    const target = document.querySelector('#cerebrax')
    if(isInViewProjects(target)){
        target.style = 'animation: projectAnimation 1s forwards'
    }
}

window.addEventListener('scroll', animateProject)

document.getElementById('cerebrax').addEventListener('click', () => {
    window.open('https://jirosartin.github.io/cerebrax/', '_blank')
})