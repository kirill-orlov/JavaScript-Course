const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = `Мне ${plan.age} и я владею языками: `;
        const langs = plan.skills.languages;
        for (let index of langs) {
            str += `${index.toUpperCase()} `;
        }

        const resultStr = str.slice(0, str.length-1);
        return resultStr
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    
    return exp
}

function showProgrammingLangs(plan) {
    let str = ``;
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str
}

