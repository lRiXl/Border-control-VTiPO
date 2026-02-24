function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const questions = [
    {
        text: "1. Что тебе интереснее изучать самостоятельно?",
        options: [
            { text: "Как работают программы", type: "tech" },
            { text: "Техники рисования и дизайна", type: "creative" },
            { text: "Как снимать видео", type: "media" },
            { text: "Психологию общения", type: "social" },
            { text: "Научные эксперименты", type: "science" },
            { text: "Тренировки и упражнения", type: "active" }
        ]
    },
    {
        text: "2. Какую роль ты выберешь в проекте?",
        options: [
            { text: "Программист", type: "tech" },
            { text: "Дизайнер", type: "creative" },
            { text: "Видеооператор", type: "media" },
            { text: "Презентующий", type: "social" },
            { text: "Исследователь", type: "science" },
            { text: "Организатор активности", type: "active" }
        ]
    },
    {
        text: "3. Чем займёшься в выходные?",
        options: [
            { text: "Играть в игры", type: "tech" },
            { text: "Гулять с друзьями", type: "social" },
            { text: "Тренироваться", type: "active" },
            { text: "Создавать что-то", type: "creative" },
            { text: "Снимать видео или контент", type: "media" },
            { text: "Проводить эксперименты", type: "science" }
        ]
    },
    {
        text: "4. Как ты предпочитаешь проводить свободное время?",
        options: [
            { text: "Решать логические задачи и программировать", type: "tech" },
            { text: "Рисовать, создавать дизайн или музыку", type: "creative" },
            { text: "Общаться и работать в команде", type: "social" },
            { text: "Заниматься спортом и активными играми", type: "active" },
            { text: "Снимать видео или создавать медиа-контент", type: "media" },
            { text: "Проводить эксперименты и исследовать новое", type: "science" }
        ]
    },
    {
        text: "5. Какая сфера деятельности кажется тебе наиболее увлекательной?",
        options: [
            { text: "Разработка программ и технологий", type: "tech" },
            { text: "Творчество и дизайн", type: "creative" },
            { text: "Создание видео и контента", type: "media" },
            { text: "Социальное взаимодействие", type: "social" },
            { text: "Научные открытия", type: "science" },
            { text: "Спортивные соревнования", type: "active" }
        ]
    },
    {
        text: "6. Ты предпочитаешь:",
        options: [
            { text: "Работать за компьютером", type: "tech" },
            { text: "Создавать руками", type: "creative" },
            { text: "Работать в команде", type: "social" },
            { text: "Быть в движении", type: "active" },
            { text: "Снимать видео", type: "media" },
            { text: "Проводить эксперименты", type: "science" }
        ]
    },
    {
        text: "7. Тебе нравится:",
        options: [
            { text: "Придумывать игры и алгоритмы", type: "tech" },
            { text: "Создавать художественные проекты", type: "creative" },
            { text: "Помогать людям", type: "social" },
            { text: "Тренироваться и соревноваться", type: "active" },
            { text: "Монтировать видео", type: "media" },
            { text: "Исследовать новые идеи", type: "science" }
        ]
    },
    {
        text: "8. Какая цель ближе?",
        options: [
            { text: "Стать программистом", type: "tech" },
            { text: "Стать дизайнером", type: "creative" },
            { text: "Стать блогером", type: "media" },
            { text: "Стать лидером команды", type: "social" },
            { text: "Стать учёным", type: "science" },
            { text: "Стать спортсменом", type: "active" }
        ]
    },
    {
        text: "9. Что для тебя важнее всего при выборе кружка?",
        options: [
            { text: "Развивать навыки программирования", type: "tech" },
            { text: "Развивать творческие способности", type: "creative" },
            { text: "Уметь создавать медиа-контент", type: "media" },
            { text: "Научиться общаться и работать с людьми", type: "social" },
            { text: "Изучать науку и проводить эксперименты", type: "science" },
            { text: "Быть активным и спортивным", type: "active" }
        ]
    },
    {
        text: "10. Где тебе интереснее всего пробовать что-то новое?",
        options: [
            { text: "В компьютерной лаборатории или кабинете информатики", type: "tech" },
            { text: "В мастерской или творческой студии", type: "creative" },
            { text: "На съемочной площадке или медиа-студии", type: "media" },
            { text: "В команде с друзьями или на групповых проектах", type: "social" },
            { text: "В лаборатории или исследовательской зоне", type: "science" },
            { text: "На спортивной площадке или на тренировках", type: "active" }
        ]
    },
    {
        text: "11. Что легче даётся?",
        options: [
            { text: "Логическое мышление", type: "tech" },
            { text: "Воображение и креативность", type: "creative" },
            { text: "Работа с камерой", type: "media" },
            { text: "Коммуникация", type: "social" },
            { text: "Анализ и эксперименты", type: "science" },
            { text: "Физическая активность", type: "active" }
        ]
    },
    {
        text: "12. Что вдохновляет?",
        options: [
            { text: "Технологические новинки", type: "tech" },
            { text: "Искусство и дизайн", type: "creative" },
            { text: "Социальные сети и медиа", type: "media" },
            { text: "Работа с людьми", type: "social" },
            { text: "Научные открытия", type: "science" },
            { text: "Спорт и движение", type: "active" }
        ]
    },
    {
        text: "13. Где тебе комфортнее работать над проектом?",
        options: [
            { text: "За компьютером", type: "tech" },
            { text: "В студии или мастерской", type: "creative" },
            { text: "Перед камерой или микрофоном", type: "media" },
            { text: "В команде и на встречах", type: "social" },
            { text: "В лаборатории или на экспериментах", type: "science" },
            { text: "На спортивной площадке", type: "active" }
        ]
    },
    {
        text: "14. Какие новые навыки хочешь попробовать развить?",
        options: [
            { text: "Программирование и робототехника", type: "tech" },
            { text: "Творчество и визуальный дизайн", type: "creative" },
            { text: "Съемка и монтаж видео", type: "media" },
            { text: "Командное взаимодействие и лидерство", type: "social" },
            { text: "Проведение экспериментов", type: "science" },
            { text: "Физическая подготовка и спорт", type: "active" }
        ]
    },
    {
        text: "15. Какая деятельность ближе к твоей будущей профессии?",
        options: [
            { text: "Разработчик", type: "tech" },
            { text: "Дизайнер", type: "creative" },
            { text: "Контент-мейкер", type: "media" },
            { text: "Менеджер или ведущий", type: "social" },
            { text: "Учёный", type: "science" },
            { text: "Спортсмен", type: "active" }
        ]
    }
];

let current = 0;

let scores = {
    tech: 0,
    creative: 0,
    media: 0,
    social: 0,
    science: 0,
    active: 0
};

function loadQuestion() {
    const q = questions[current];
    document.getElementById("questionTitle").innerText = q.text;
    document.getElementById("progress").innerText =
        `Вопрос ${current + 1} из ${questions.length}`;
    let answersHTML = "";
    const shuffledOptions = shuffleArray(q.options);
    shuffledOptions.forEach(option => {
        answersHTML += `
        <div class="question">
            <label>
                <input type="radio" name="answer" value="${option.type}">
                ${option.text}
            </label>
        </div>`;
    });
    document.getElementById("answers").innerHTML = answersHTML;
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Выберите вариант!");
        return;
    }
    scores[selected.value]++;
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    const clubs = document.getElementById("clubs");
    const profile = document.getElementById("profile");
    const maxScore = questions.length;
    function createBar(title, value) {
        const percent = Math.round((value / maxScore) * 100);
        return `
        <div class="profile-item">
            <strong>${title} — ${percent}%</strong>
            <div class="bar">
                <div class="fill" style="width:${percent}%"></div>
            </div>
        </div>`;
    }
    profile.innerHTML =
        createBar("💻 Технологии", scores.tech) +
        createBar("🎨 Творчество", scores.creative) +
        createBar("🎥 Медиа", scores.media) +
        createBar("👥 Коммуникации", scores.social) +
        createBar("🔬 Наука", scores.science) +
        createBar("🏃 Активность", scores.active);
    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    clubs.innerHTML = "";
    sorted.forEach(([type, value]) => {
        const percent = Math.round((value / maxScore) * 100);
        let title = "", description = "", emoji = "";
        switch(type) {
            case "tech":
                title = "Программирование & Робототехника";
                description = "Создание сайтов, приложении, роботы";
                emoji = "💻";
                break;
            case "creative":
                title = "Творчество";
                description = "Рисунок, дизайн, музыка";
                emoji = "🎨";
                break;
            case "media":
                title = "Медиа";
                description = "Видео, монтаж, блогинг";
                emoji = "🎥";
                break;
            case "social":
                title = "Коммуникации";
                description = "Дебаты, лидерство, публичные выступления";
                emoji = "👥";
                break;
            case "science":
                title = "Наука & Исследования";
                description = "Эксперименты, исследования, лаборатория";
                emoji = "🔬";
                break;
            case "active":
                title = "Спорт & Активность";
                description = "Футбол, баскетбол, походы, тренировки";
                emoji = "🏃";
                break;
        }
        clubs.innerHTML += `
        <div class="club-card">
            <h3>${emoji} ${title} — ${percent}%</h3>
            <p>${description}</p>
        </div>`;
    });
    result.style.display = "block";
}

loadQuestion();