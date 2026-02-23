/* ========================================
   Polegon — Тест: На танкиста
   Проверка способностей и знаний по игре танки онлайн
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // === База слов для мини-игры (вопрос 3) ===
    const wordDatabase = [
        "ТРАКТОР", "ПИВОЗ", "СЕМКА", "ТАНКИСТ", "КРЕНДЕЛЬ",
        "БАБУШКА", "ПОДЪЕЗД", "ХОМЯЧОК", "БАРАБАН", "КАЛЬМАР",
        "ДИНОЗАВР", "КОМПЬЮТЕР", "МОРОЖЕНОЕ", "СКОВОРОДА", "БАНАН",
        "ВЕЛОСИПЕД", "ТЕЛЕВИЗОР", "ХОЛОДИЛЬНИК", "СТИРАЛЬНАЯ", "МИКРОВОЛНОВКА",
        "КАСТРЮЛЯ", "ЛОПАТА", "МОЛОТОК", "ОТВЕРТКА", "НАКОВАЛЬНЯ",
        "АРБУЗИК", "ОГУРЕЧИК", "ПОМИДОРКА", "КАПУСТКА", "МОРКОВКА"
    ];

    // === База брейнротов (вопрос 14) ===
    const brainrots = [
        { id: 1, name: "Баллерина капучино", image: "../Картинки/Баллерина капучино.jpg" },
        { id: 2, name: "Бр бр потапим", image: "../Картинки/Бр бр потапим.jpg" },
        { id: 3, name: "Лирили ларила", image: "../Картинки/Лирили ларила.jpg" },
        { id: 4, name: "Пипи Сатурно Сатурнита", image: "../Картинки/Пипи Сатурно Сатурнита.jpg" },
        { id: 5, name: "Тралалело Тралала", image: "../Картинки/Тралалело Тралала.jpg" },
        { id: 6, name: "Триппи Троппа", image: "../Картинки/Триппи Троппа.jpg" }
    ];

    // === Предупреждения ===
    const warnings = [
        "В тесте активно используются звуки, наденьте наушники для полного погружения!",
        "В тесте активно используется компьютерная мышь или сенсорный экран для взаимодействия с объектами!",
        "В тесте активно используется клавиатура для взаимодействия с текстовой частью теста!",
        "В тесте активно используется экран для получения информации из теста и его прохождении!",
        "В тесте активно используется микрофон для записи ваших стонов и получения AI копии вашего голоса для получения доступа к вашему личному счету в банке! Спасибо за внимание",
        "Крайне рекомендуем для полного погружения и лучшего результата теста иметь при себе Пиво, чипсики и еще что нибудь вкусненькое. Пиво обязательно!"
    ];

    // === Вопросы теста ===
    const quizQuestions = [
        {
            // Вопрос 1: Ряженка
            type: "normal",
            question: "Сколько стоит ряженка \"домик в деревне\" в пятерочке с 10.02.26 по сегодняшний день?",
            options: [
                { text: "143.99р", correct: false },
                { text: "129.99р", correct: true },
                { text: "72.99р", correct: false }
            ]
        },
        {
            // Вопрос 2: Какой танк сильнее
            type: "tank",
            question: "Какой танк сильнее?",
            options: [
                { text: "Наш", correct: true },
                { text: "Не наш", correct: false, special: "spinner" }
            ]
        },
        {
            // Вопрос 3: Семечки от Мартина
            type: "semechki",
            question: "Почему семечки от \"Мартина\" лучше \"бабкиных семечек\"?",
            options: [
                { text: "Старая кашелка не знает толк в семечках", correct: true },
                { text: "Они не лучше", correct: false, special: "wordgame" }
            ]
        },
        {
            // Вопрос 4: Перевернутый текст
            type: "flipped",
            question: "ьнед йыджак тюьп ытсикнат отч?",
            options: [
                { text: "овип", correct: true },
                { text: "сром", correct: false },
                { text: "мор", correct: false }
            ]
        },
        {
            // Вопрос 5: Философский вопрос
            type: "normal",
            question: "Если исходить из того, что любая форма человеческого самосознания формируется внутри языковой структуры, которая сама по себе является исторически обусловленным конструктом коллективного опыта, и если допустить, что сама возможность рефлексии над собственным мышлением опосредована теми же символическими механизмами, которые одновременно ограничивают и определяют поле мысли, то в какой мере субъект, пытающийся критически осмыслить собственную обусловленность, способен выйти за пределы эпистемологической рамки, в которой он уже изначально заключён, и не превращается ли сам акт попытки такого выхода в очередной виток самоподтверждающейся герменевтической спирали, где иллюзия трансцендирования системы является лишь функцией самой системы, воспроизводящей себя через видимость отрицания, а если это так, то можно ли вообще говорить о подлинной автономии мышления как таковой, или всякая претензия на неё неизбежно оказывается внутренним эффектом структур, которые она стремится преодолеть, тем самым парадоксальным образом укрепляя их онтологический статус?",
            options: [
                { text: "разум ограничен априорными формами, но внутри них возможна автономия через практический разум", correct: true },
                { text: "мышление всегда «заброшено» в язык и бытие, но подлинность возможна через особый способ понимания своего положения", correct: true },
                { text: "Да", correct: true }
            ]
        },
        {
            // Вопрос 6: Загадка с Пепе
            type: "riddle",
            question: "Загадка про Пепе",
            lines: [
                { text: "Пепе ехал через ___", options: ["Что блять?", "Шнейне", "Ватафа"], correct: 1 },
                { text: "Видел ___ шнейне фа", options: ["Кхэ", "Фо", "Пепе"], correct: 2 },
                { text: "Тянет пепе руку ___", options: ["Шнейне", "Фа", "ватафа"], correct: 0 },
                { text: "Пепе шнейне ___", options: ["Кхэ", "Фа", "Ватафа"], correct: 2 }
            ]
        },
        {
            // Вопрос 7: Таблетки
            type: "normal",
            question: "К вам подходит мужчина и говорит \"Превiт Софiйка це я зайчик Джуди Хобс из зверотрополиса\", какие таблетки вы принимали перед прогулкой?",
            options: [
                { text: "Тунтум Верде", correct: true },
                { text: "Никакие", correct: false },
                { text: "У меня глаза не видят, не могу разглядеть название", correct: true }
            ]
        },
        {
            // Вопрос 8: Хоровод
            type: "horo",
            question: "Какой тип брони лучше всего снижает урон от артиллерии на дальних дистанциях?",
            options: [
                { text: "Лёгкая броня", correct: false },
                { text: "Средняя броня", correct: false },
                { text: "Тяжёлая броня", correct: true },
                { text: "Нет разницы", correct: false }
            ]
        },
        {
            // Вопрос 9: Смешарики
            type: "normal",
            question: "Сколько всего смешариков в мультсериале смешарики (не новые, не пин код и прочие спинофы)?",
            options: [
                { text: "9", correct: false },
                { text: "10", correct: true },
                { text: "11", correct: false }
            ]
        },
        {
            // Вопрос 10: Шутка про слепого
            type: "joke",
            question: "Почему слепой всегда улыбается на фото?",
            punchline: "Потому что ему похуй, как он выглядит - ему вообще на всё похуй."
        },
        {
            // Вопрос 11: Кнопка В Бой
            type: "normal",
            question: "Где находиться кнопка \"В Бой\"?",
            options: [
                { text: "В правом нижнем углу экрана", correct: true },
                { text: "В танке", correct: false },
                { text: "В сердце", correct: true }
            ]
        },
        {
            // Вопрос 12: CAPTCHA
            type: "captcha"
        },
        {
            // Вопрос 13: Укажи Брейнрота
            type: "brainrot"
        },
        {
            // Вопрос 14: Собери корзину танкисту
            type: "basket"
        },
        {
            // Вопрос 15: Проверка аима настоящего танкиста
            type: "aim"
        }
    ];

    // === Результаты теста (6 концовок) ===
    const quizResults = {
        ending1: {
            title: "💀 Тотальный треш",
            emoji: "💀",
            description: "Ты не просто провалил тест, ты даже меня удивил, как можно пройти настолько плохо я хз. Тест сможет пройти аниме девочка, а  про танкиста я вообще молчу...Просто позорище.",
            features: [
                "Попуск",
                "Олух",
                "Дятел",
                "Ты сука даже на ватафа шнейне фа не ответил...",
                "У меня слов нет чувак"
            ],
            history: "Этот человек настолько олух и тотальный ебаклак, что провалил тест, с которым картошка вымоченная в ведре с одой, справиться и то лучше. Я заготовил этот вариант ответа чисто на всякий случай, надеюсь ты не олух."
        },
        ending2: {
            title: "😐 Слабый результат",
            emoji: "😐",
            description: "Ты ответил на несколько вопросов, но этого явно недостаточно. Нужно ещё много учиться.",
            features: [
                "Хоть что то знает",
                "Иногда нажимает правильные кнопки",
                "Ну это лучше чем провал",
                "ты лох но не максимальный я так скажу"
            ],
            history: "Ну он хотя бы пытался, но безуспешно. Хотя не поздно переиграть, верно? :)"
        },
        ending3: {
            title: "🤔 Ну такое",
            emoji: "🤔",
            description: "Ты показал средний результат. Не плохо, но и не хорошо. Где-то посередине. Я так учусь примерно(это не комплимент)",
            features: [
                "Знает основные механики танкостроения",
                "Прошел базовые вопросы",
                "Различает некоторые брейнроты",
                "Пойдет короче"
            ],
            history: "Ты - воплощение золотой середины. Ты не танкист, но и не неудачник. "
        },
        ending4: {
            title: "🙂 Хороший результат",
            emoji: "🙂",
            description: "Ты показал хороший результат! Большинство вопросов решено правильно. Можно гордиться!",
            features: [
                "Фа ватафо шнеле",
                "Прошёл хоровод с немецкой песней",
                "Распознаёт большинство брейнротов",
                "Короче прям нормис"
            ],
            history: "Этот игрок заслуживает уважения. Он прошёл через множество испытаний и вышел победителем из большинства из них. "
        },
        ending5: {
            title: "😎 Отличный результат",
            emoji: "😎",
            description: "Ты показал отличный результат! Почти идеальный проход! Осталось совсем немного до совершенства.",
            features: [
                "Знает ВСЁ про танки",
                "Понимает философию на высоком уровне",
                "Распознаёт всех брейнротов",
                "Знает что любит танкист",
                "Имеет хороший аим"
            ],
            history: "Этот игрок - почти легенда. Ты прошел почти все, но все таки не дотянул до идеала. Гордись крч."
        },
        ending6: {
            title: "👑 АБСОЛЮТНЫЙ ТАНКИСТ",
            emoji: "👑",
            description: "ТЫ - Абсолютный СИГМО. Знаешь все о танках, ты просто очебуителен.",
            features: [
                "Знает ВСЁ про танки и не только",
                "Понимает философию на уровне богов",
                "Распознаёт перевернутый текст с закрытыми глазами",
                "Прошёл испытание с Пепе и шнейне фа",
                "Выжил в хороводе с немецкой песней",
                "Распознаёт всех брейнротов",
                "Знает что любит танкист (Хугарден и конина)",
                "Имеет стальной аим (7+ попаданий)",
                "Собрал идеальную корзину"
            ],
            history: "Ты просто - Легенда вся руси. Ты как Джони Сильверхенд в киберпанке, только в костроме. Уважение от всех танкистов."
        }
    };

    // === Состояние теста ===
    let currentQuestion = 0;
    let correctAnswers = 0;
    let wordGameActive = false;
    let wordGameWord = "";
    let wordGameAttempts = 0;
    let riddleAnswers = [];
    let horoActive = false;
    let currentWarning = 0;
    let brainrotMatchedCount = 0;
    let brainrotCorrectMatches = 0;
    let draggedElement = null;
    let touchDraggedElement = null;
    let touchClone = null;
    let selectedBrainrotOption = null;

    // === DOM элементы ===
    const warningOverlay = document.getElementById('warning-overlay');
    const warningText = document.getElementById('warning-text');
    const warningNextBtn = document.getElementById('warning-next-btn');
    const quizIntroEl = document.getElementById('quiz-intro');
    const quizQuestionsEl = document.getElementById('quiz-questions');
    const quizResultEl = document.getElementById('quiz-result');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const horoAudio = document.getElementById('horo-audio');
    const drumAudio = document.getElementById('drum-audio');
    const shotAudio = document.getElementById('shot-audio');
    const brainrotAudio = document.getElementById('brainrot-audio');

    // === Инициализация ===
    // Показываем первое предупреждение сразу при загрузке
    setTimeout(() => {
        showWarning(0);
    }, 100);

    warningNextBtn.addEventListener('click', () => {
        currentWarning++;
        if (currentWarning < warnings.length) {
            showWarning(currentWarning);
        } else {
            // После всех предупреждений показываем стандартное интро
            warningOverlay.classList.remove('active');
            setTimeout(() => {
                warningOverlay.style.display = 'none';
                quizIntroEl.classList.add('active');
                quizIntroEl.style.opacity = '0';
                setTimeout(() => {
                    quizIntroEl.style.transition = 'opacity 0.4s ease';
                    quizIntroEl.style.opacity = '1';
                }, 50);
            }, 400);
        }
    });

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', restartQuiz);
    closeQuizBtn.addEventListener('click', () => {
        horoAudio.pause();
        brainrotAudio.pause();
        if (aimAudio) {
            aimAudio.pause();
        }
        if (starwarsAudio) {
            starwarsAudio.pause();
        }
        horoAudio.currentTime = 0;
        brainrotAudio.currentTime = 0;
        window.history.back();
    });

    // === Функции предупреждений ===
    function showWarning(index) {
        // Плавное скрытие текущего контента
        const contentEl = warningOverlay.querySelector('.warning-content');
        if (contentEl) {
            contentEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            contentEl.style.opacity = '0';
            contentEl.style.transform = 'translateY(20px)';
        }

        setTimeout(() => {
            warningOverlay.style.display = 'flex';
            warningText.textContent = warnings[index];
            
            requestAnimationFrame(() => {
                warningOverlay.classList.add('active');
                
                setTimeout(() => {
                    const newContentEl = warningOverlay.querySelector('.warning-content');
                    if (newContentEl) {
                        newContentEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        newContentEl.style.opacity = '1';
                        newContentEl.style.transform = 'translateY(0)';
                    }
                }, 50);
            });
        }, 350);
    }

    function startQuiz() {
        quizIntroEl.classList.remove('active');
        setTimeout(() => {
            quizIntroEl.style.display = 'none';
            quizQuestionsEl.classList.add('active');
            quizQuestionsEl.style.display = 'block';
        }, 400);
        currentQuestion = 0;
        correctAnswers = 0;
        riddleFailed = false;
        brainrotMatchedCount = 0;
        brainrotCorrectMatches = 0;
        renderQuestion();
    }

    function restartQuiz() {
        quizResultEl.classList.remove('active');
        quizResultEl.style.display = 'none';
        currentWarning = 0;
        brainrotMatchedCount = 0;
        brainrotCorrectMatches = 0;
        basketItemsInCart = 0;
        basketCorrectItems = 0;
        aimHits = 0;
        aimMisses = 0;
        aimTotalShots = 0;
        correctAnswers = 0;
        if (starwarsAudio) {
            starwarsAudio.pause();
            starwarsAudio.currentTime = 0;
        }
        showWarning(0);
    }

    function renderQuestion() {
        quizQuestionsEl.innerHTML = '';

        const q = quizQuestions[currentQuestion];

        // Прогресс бар
        const progressDots = createProgressDots();
        quizQuestionsEl.appendChild(progressDots);

        // Рендеринг в зависимости от типа вопроса
        switch (q.type) {
            case "normal":
                renderNormalQuestion(q);
                break;
            case "tank":
                renderTankQuestion(q);
                break;
            case "semechki":
                renderSemechkiQuestion(q);
                break;
            case "flipped":
                renderFlippedQuestion(q);
                break;
            case "riddle":
                renderRiddleQuestion(q);
                break;
            case "horo":
                renderHoroQuestion(q);
                break;
            case "joke":
                renderJokeQuestion(q);
                break;
            case "captcha":
                renderCaptchaQuestion(q);
                break;
            case "brainrot":
                renderBrainrotQuestion();
                break;
            case "basket":
                renderBasketQuestion();
                break;
            case "aim":
                renderAimQuestion();
                break;
        }
    }

    function createProgressDots() {
        const progressDots = document.createElement('div');
        progressDots.className = 'quiz-progress';
        for (let i = 0; i < quizQuestions.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'quiz-progress-dot';
            if (i < currentQuestion) dot.classList.add('completed');
            if (i === currentQuestion) dot.classList.add('active');
            progressDots.appendChild(dot);
        }
        return progressDots;
    }

    // === Вопрос 1, 5, 7, 9, 11: Обычный вопрос ===
    function renderNormalQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `<h3>${q.question}</h3><div class="quiz-options"></div>`;
        quizQuestionsEl.appendChild(questionEl);

        const optionsEl = questionEl.querySelector('.quiz-options');
        let hasSelectedCorrect = false;

        q.options.forEach((opt, idx) => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = opt.text;
            optionBtn.addEventListener('click', () => {
                if (opt.correct && !hasSelectedCorrect) {
                    correctAnswers++;
                    hasSelectedCorrect = true;
                }
                nextQuestion();
            });
            optionsEl.appendChild(optionBtn);
        });
    }

    // === Вопрос 2: Танк с вращающейся кнопкой ===
    function renderTankQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `<h3>${q.question}</h3><div class="quiz-options"></div>`;
        quizQuestionsEl.appendChild(questionEl);

        const optionsEl = questionEl.querySelector('.quiz-options');

        setTimeout(() => {
            q.options.forEach((opt, idx) => {
                const optionBtn = document.createElement('div');
                optionBtn.className = 'quiz-option';
                optionBtn.textContent = opt.text;

                if (opt.text === "Не наш") {
                    optionBtn.classList.add('spinner-btn');
                    optionBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        optionBtn.classList.add('rainbow-btn', 'spinning');
                    });
                } else {
                    optionBtn.addEventListener('click', () => {
                        correctAnswers++;
                        nextQuestion();
                    });
                }

                optionsEl.appendChild(optionBtn);
            });
        }, 1000);
    }

    // === Вопрос 13: Укажи Брейнрота ===
    function renderBrainrotQuestion() {
        // Сбрасываем счетчики
        brainrotMatchedCount = 0;
        brainrotCorrectMatches = 0;
        
        // Включаем музыку
        brainrotAudio.volume = 0.5;
        brainrotAudio.play().catch(e => console.log('Audio play error:', e));

        const containerEl = document.createElement('div');
        containerEl.className = 'brainrot-quiz-container';
        containerEl.innerHTML = `
            <h3 class="brainrot-title">Укажи Брейнрота</h3>
            <p class="brainrot-subtitle">Перетащи названия к правильным картинкам</p>
            <div class="brainrot-images" id="brainrot-images"></div>
            <div class="brainrot-options" id="brainrot-options"></div>
            <div class="brainrot-message" id="brainrot-message"></div>
        `;
        quizQuestionsEl.appendChild(containerEl);

        const imagesContainer = document.getElementById('brainrot-images');
        const optionsContainer = document.getElementById('brainrot-options');
        const messageEl = document.getElementById('brainrot-message');

        // Создаём картинки сверху (перемешанные)
        const shuffledBrainrots = [...brainrots].sort(() => Math.random() - 0.5);
        shuffledBrainrots.forEach(brainrot => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'brainrot-image-container';
            imgContainer.dataset.id = brainrot.id;

            const img = document.createElement('img');
            img.src = brainrot.image;
            img.alt = brainrot.name;
            img.className = 'brainrot-image';
            img.draggable = false;

            imgContainer.appendChild(img);
            imagesContainer.appendChild(imgContainer);

            // Drop события
            imgContainer.addEventListener('dragover', handleDragOver);
            imgContainer.addEventListener('dragenter', handleDragEnter);
            imgContainer.addEventListener('dragleave', handleDragLeave);
            imgContainer.addEventListener('drop', handleDrop);
            imgContainer.addEventListener('touchend', handleContainerTouchEnd);
        });

        // Создаём варианты ответов снизу (перемешанные)
        const shuffledNames = [...brainrots].sort(() => Math.random() - 0.5);
        shuffledNames.forEach(brainrot => {
            const optionEl = document.createElement('div');
            optionEl.className = 'brainrot-option';
            optionEl.textContent = brainrot.name;
            optionEl.dataset.id = brainrot.id;
            optionEl.draggable = true;

            optionEl.addEventListener('dragstart', handleDragStart);
            optionEl.addEventListener('dragend', handleDragEnd);
            optionEl.addEventListener('touchstart', handleTouchStart, { passive: false });
            optionEl.addEventListener('touchmove', handleTouchMove, { passive: false });
            optionEl.addEventListener('touchend', handleTouchEnd);
            optionEl.addEventListener('click', handleOptionClick);

            optionsContainer.appendChild(optionEl);
        });
    }

    // === Обработчики Drag-and-Drop для брейнротов ===
    function handleDragStart(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.classList.remove('dragging');
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const container = this.closest('.brainrot-image-container');
        if (container) {
            container.classList.add('drag-over');
        }
    }

    function handleDragEnter(e) {
        e.preventDefault();
        const container = this.closest('.brainrot-image-container');
        if (container) {
            container.classList.add('drag-over');
        }
    }

    function handleDragLeave(e) {
        const container = this.closest('.brainrot-image-container');
        if (container) {
            container.classList.remove('drag-over');
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const container = this.closest('.brainrot-image-container');
        if (container) {
            container.classList.remove('drag-over');
        }
        if (draggedElement && container) {
            checkBrainrotMatch(draggedElement, container);
            draggedElement = null;
        }
    }

    // === Обработчики Touch ===
    function handleTouchStart(e) {
        e.preventDefault();
        touchDraggedElement = this;
        this.classList.add('dragging');

        touchClone = this.cloneNode(true);
        touchClone.classList.add('touch-clone');
        touchClone.style.position = 'fixed';
        touchClone.style.zIndex = '10000';
        touchClone.style.pointerEvents = 'none';
        document.body.appendChild(touchClone);

        moveTouchClone(e.touches[0]);
    }

    function handleTouchMove(e) {
        e.preventDefault();
        if (touchClone) {
            moveTouchClone(e.touches[0]);
        }
    }

    function moveTouchClone(touch) {
        if (touchClone) {
            touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
            touchClone.style.top = (touch.clientY - touchClone.offsetHeight / 2) + 'px';
        }
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        if (touchClone) {
            touchClone.remove();
            touchClone = null;
        }
        if (touchDraggedElement) {
            touchDraggedElement.classList.remove('dragging');

            const touch = e.changedTouches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const container = elementBelow ? elementBelow.closest('.brainrot-image-container') : null;

            if (container) {
                checkBrainrotMatch(touchDraggedElement, container);
            }

            touchDraggedElement = null;
        }
    }

    function handleContainerTouchEnd(e) {
        e.preventDefault();
        if (touchDraggedElement) {
            checkBrainrotMatch(touchDraggedElement, this);
            touchDraggedElement = null;
        }
    }

    // === Обработчик клика ===
    function handleOptionClick(e) {
        e.preventDefault();

        // Если кликнули на уже выбранный вариант - снимаем выделение
        if (selectedBrainrotOption === this) {
            this.classList.remove('selected');
            selectedBrainrotOption = null;
            const messageEl = document.getElementById('brainrot-message');
            messageEl.style.display = 'none';
            return;
        }

        // Снимаем выделение с предыдущего
        if (selectedBrainrotOption) {
            selectedBrainrotOption.classList.remove('selected');
        }

        // Выделяем новый
        selectedBrainrotOption = this;
        this.classList.add('selected');

        const messageEl = document.getElementById('brainrot-message');
        messageEl.textContent = 'Теперь нажмите на картинку, чтобы сопоставить';
        messageEl.style.display = 'block';
        messageEl.style.color = '#aaa';

        // Добавляем обработчики клика на картинки
        const imageContainers = document.querySelectorAll('.brainrot-image-container');
        imageContainers.forEach(container => {
            container.addEventListener('click', handleImageClick, { once: false });
        });
    }

    function handleImageClick(e) {
        e.preventDefault();

        if (selectedBrainrotOption) {
            const container = this.closest('.brainrot-image-container') || this;
            checkBrainrotMatch(selectedBrainrotOption, container);

            // Снимаем выделение
            selectedBrainrotOption.classList.remove('selected');
            selectedBrainrotOption = null;

            const messageEl = document.getElementById('brainrot-message');
            messageEl.style.display = 'none';
        }
    }

    // === Проверка соответствия брейнротов ===
    function checkBrainrotMatch(optionEl, containerEl) {
        const optionId = optionEl.dataset.id;
        const containerId = containerEl.dataset.id;
        const messageEl = document.getElementById('brainrot-message');

        if (optionId === containerId) {
            // Правильное совпадение!
            brainrotCorrectMatches++;
            brainrotMatchedCount++;

            optionEl.classList.add('matched');
            containerEl.classList.add('matched');

            containerEl.appendChild(optionEl);
            optionEl.draggable = false;
            optionEl.style.cursor = 'default';
            optionEl.removeEventListener('click', handleOptionClick);

            messageEl.textContent = '✅ Правильно!';
            messageEl.style.color = '#4ecdc4';
            messageEl.style.display = 'block';

            if (brainrotMatchedCount === brainrots.length) {
                setTimeout(() => {
                    brainrotAudio.pause();
                    brainrotAudio.currentTime = 0;
                    nextQuestion();
                }, 1000);
            }
        } else {
            // Неправильно - просто показываем сообщение, вариант остаётся доступным
            messageEl.textContent = '❌ Неправильно! Этот брейнрот называется по-другому.';
            messageEl.style.color = '#ff6b6b';
            messageEl.style.display = 'block';

            // Анимация ошибки на варианте
            optionEl.classList.add('error');
            setTimeout(() => {
                optionEl.classList.remove('error');
            }, 500);
        }

        setTimeout(() => {
            if (brainrotMatchedCount < brainrots.length) {
                messageEl.style.display = 'none';
            }
        }, 1500);
    }

    // === База продуктов для корзины ===
    const basketProducts = [
        { id: 1, name: "Хугарден", image: "../Картинки2/Хугарден.jpg", correct: true },
        { id: 2, name: "конина", image: "../Картинки2/конина.jpg", correct: true },
        { id: 3, name: "ананас", image: "../Картинки2/ананас.png", correct: false },
        { id: 4, name: "квадрокоптер", image: "../Картинки2/квадрокоптер.jpg", correct: false },
        { id: 5, name: "кирпич", image: "../Картинки2/кирпич.jpg", correct: false },
        { id: 6, name: "кола", image: "../Картинки2/кола.jpg", correct: false },
        { id: 7, name: "милка", image: "../Картинки2/милка.jpg", correct: false },
        { id: 8, name: "Картошка фри", image: "../Картинки2/Картошка фри.png", correct: false }
    ];

    // === Обработчики для корзины ===
    let basketDraggedElement = null;
    let basketTouchDraggedElement = null;
    let basketTouchClone = null;
    let basketItemsInCart = 0;
    let basketCorrectItems = 0;

    // === Вопрос 14: Собери корзину танкисту ===
    function renderBasketQuestion() {
        basketItemsInCart = 0;
        basketCorrectItems = 0;

        const containerEl = document.createElement('div');
        containerEl.className = 'basket-quiz-container';
        containerEl.innerHTML = `
            <h3 class="basket-title">Собери корзину танкисту</h3>
            <p class="basket-subtitle">Поместите 2 предмета в корзину для продуктов. Хорошо подумайте, что любит танкист!</p>
            <div class="basket-products" id="basket-products"></div>
            <div class="basket-container-wrapper">
                <div class="basket-drop-zone" id="basket-drop-zone">
                    <img src="../Картинки2/корзина.jpg" alt="Корзина" class="basket-image">
                    <div class="basket-items-area" id="basket-items-area"></div>
                </div>
            </div>
            <div class="basket-message" id="basket-message"></div>
        `;
        quizQuestionsEl.appendChild(containerEl);

        const productsContainer = document.getElementById('basket-products');
        const dropZone = document.getElementById('basket-drop-zone');
        const itemsArea = document.getElementById('basket-items-area');
        const messageEl = document.getElementById('basket-message');

        // Перемешиваем продукты
        const shuffledProducts = [...basketProducts].sort(() => Math.random() - 0.5);

        // Создаём карточки продуктов
        shuffledProducts.forEach(product => {
            const productEl = document.createElement('div');
            productEl.className = 'basket-product';
            productEl.dataset.id = product.id;
            productEl.dataset.correct = product.correct;
            productEl.draggable = true;

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.className = 'basket-product-image';
            img.draggable = false;

            const nameEl = document.createElement('div');
            nameEl.className = 'basket-product-name';
            nameEl.textContent = product.name;

            productEl.appendChild(img);
            productEl.appendChild(nameEl);
            productsContainer.appendChild(productEl);

            // Drag события
            productEl.addEventListener('dragstart', handleBasketDragStart);
            productEl.addEventListener('dragend', handleBasketDragEnd);

            // Touch события
            productEl.addEventListener('touchstart', handleBasketTouchStart, { passive: false });
            productEl.addEventListener('touchmove', handleBasketTouchMove, { passive: false });
            productEl.addEventListener('touchend', handleBasketTouchEnd);

            // Клик
            productEl.addEventListener('click', handleBasketClick);
        });

        // Drop зона
        dropZone.addEventListener('dragover', handleBasketDragOver);
        dropZone.addEventListener('dragenter', handleBasketDragEnter);
        dropZone.addEventListener('dragleave', handleBasketDragLeave);
        dropZone.addEventListener('drop', handleBasketDrop);
        dropZone.addEventListener('touchend', handleBasketZoneTouchEnd);
    }

    function handleBasketDragStart(e) {
        if (basketItemsInCart >= 2) {
            e.preventDefault();
            return;
        }
        basketDraggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleBasketDragEnd(e) {
        this.classList.remove('dragging');
        basketDraggedElement = null;
    }

    function handleBasketDragOver(e) {
        e.preventDefault();
        if (basketItemsInCart < 2) {
            e.dataTransfer.dropEffect = 'move';
            const dropZone = document.getElementById('basket-drop-zone');
            dropZone.classList.add('drag-over');
        }
    }

    function handleBasketDragEnter(e) {
        e.preventDefault();
        if (basketItemsInCart < 2) {
            const dropZone = document.getElementById('basket-drop-zone');
            dropZone.classList.add('drag-over');
        }
    }

    function handleBasketDragLeave(e) {
        const dropZone = document.getElementById('basket-drop-zone');
        dropZone.classList.remove('drag-over');
    }

    function handleBasketDrop(e) {
        e.preventDefault();
        const dropZone = document.getElementById('basket-drop-zone');
        dropZone.classList.remove('drag-over');

        if (basketDraggedElement && basketItemsInCart < 2) {
            addProductToBasket(basketDraggedElement);
        }
        basketDraggedElement = null;
    }

    function handleBasketTouchStart(e) {
        if (basketItemsInCart >= 2) {
            return;
        }
        e.preventDefault();
        basketTouchDraggedElement = this;
        this.classList.add('dragging');

        basketTouchClone = this.cloneNode(true);
        basketTouchClone.classList.add('touch-clone');
        basketTouchClone.style.position = 'fixed';
        basketTouchClone.style.zIndex = '10000';
        basketTouchClone.style.pointerEvents = 'none';
        document.body.appendChild(basketTouchClone);

        moveBasketTouchClone(e.touches[0]);
    }

    function handleBasketTouchMove(e) {
        e.preventDefault();
        if (basketTouchClone) {
            moveBasketTouchClone(e.touches[0]);
        }
    }

    function moveBasketTouchClone(touch) {
        if (basketTouchClone) {
            basketTouchClone.style.left = (touch.clientX - basketTouchClone.offsetWidth / 2) + 'px';
            basketTouchClone.style.top = (touch.clientY - basketTouchClone.offsetHeight / 2) + 'px';
        }
    }

    function handleBasketTouchEnd(e) {
        e.preventDefault();
        if (basketTouchClone) {
            basketTouchClone.remove();
            basketTouchClone = null;
        }
        if (basketTouchDraggedElement) {
            basketTouchDraggedElement.classList.remove('dragging');

            const touch = e.changedTouches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const dropZone = elementBelow ? elementBelow.closest('#basket-drop-zone') : null;

            if (dropZone && basketItemsInCart < 2) {
                addProductToBasket(basketTouchDraggedElement);
            }

            basketTouchDraggedElement = null;
        }
    }

    function handleBasketZoneTouchEnd(e) {
        e.preventDefault();
        if (basketTouchDraggedElement && basketItemsInCart < 2) {
            addProductToBasket(basketTouchDraggedElement);
            basketTouchDraggedElement = null;
        }
    }

    function handleBasketClick(e) {
        e.preventDefault();
        if (basketItemsInCart >= 2) {
            const messageEl = document.getElementById('basket-message');
            messageEl.textContent = 'В корзине уже 2 предмета!';
            messageEl.style.color = '#ff6b6b';
            messageEl.style.display = 'block';
            setTimeout(() => { messageEl.style.display = 'none'; }, 1500);
            return;
        }
        addProductToBasket(this);
    }

    function addProductToBasket(productEl) {
        const messageEl = document.getElementById('basket-message');
        const itemsArea = document.getElementById('basket-items-area');
        const isCorrect = productEl.dataset.correct === 'true';

        basketItemsInCart++;

        if (isCorrect) {
            basketCorrectItems++;
            productEl.classList.add('basket-correct');
        } else {
            productEl.classList.add('basket-wrong');
        }

        // Перемещаем продукт в корзину
        productEl.draggable = false;
        productEl.classList.add('in-basket');
        productEl.removeEventListener('click', handleBasketClick);

        itemsArea.appendChild(productEl);

        // Проверяем результат
        if (basketItemsInCart === 2) {
            if (basketCorrectItems === 2) {
                messageEl.textContent = '✅ Правильно! Танкист доволен!';
                messageEl.style.color = '#4ecdc4';
                messageEl.style.display = 'block';
                setTimeout(() => {
                    nextQuestion();
                }, 1500);
            } else {
                messageEl.textContent = '❌ Неправильно! Танкист расстроен...';
                messageEl.style.color = '#ff6b6b';
                messageEl.style.display = 'block';
                setTimeout(() => {
                    nextQuestion();
                }, 2000);
            }
        }
    }

    // === Вопрос 15: Проверка аима настоящего танкиста ===
    let aimHits = 0;
    let aimMisses = 0;
    let aimTotalShots = 0;
    let aimGameActive = false;
    let aimTargetVisible = false;
    let aimTimeout = null;
    let aimAudio = null;

    function renderAimQuestion() {
        aimAudio = document.getElementById('aim-audio');
        aimHits = 0;
        aimMisses = 0;
        aimTotalShots = 0;
        aimGameActive = false;
        aimTargetVisible = false;

        const containerEl = document.createElement('div');
        containerEl.className = 'aim-quiz-container';
        containerEl.innerHTML = `
            <h3 class="aim-title">Проверка аима настоящего танкиста</h3>
            <p class="aim-description">
                Мишень будет двигаться по всему экрану с определенной скоростью, ваша задача успеть попасть по ней нажав на нее левой кнопкой мыши 10 раз. Удачи танкисты!
            </p>
            <button id="aim-start-btn" class="btn btn-aim-start">🎯 Старт</button>
            <div class="aim-stats" id="aim-stats">
                <span class="aim-stat">Попаданий: <span id="aim-hits">0</span></span>
                <span class="aim-stat">Осталось: <span id="aim-remaining">10</span></span>
            </div>
            <div class="aim-shooting-zone" id="aim-shooting-zone">
                <div class="aim-target" id="aim-target"></div>
            </div>
            <div class="aim-message" id="aim-message"></div>
        `;
        quizQuestionsEl.appendChild(containerEl);

        const startBtn = document.getElementById('aim-start-btn');
        startBtn.addEventListener('click', startAimGame);

        // Добавляем обработчик клика по мишени после её создания
        setTimeout(() => {
            const target = document.getElementById('aim-target');
            const zone = document.getElementById('aim-shooting-zone');
            if (target) {
                target.addEventListener('click', handleAimTargetClick);
                target.addEventListener('touchstart', handleAimTargetClick);
            }
            if (zone) {
                zone.addEventListener('click', handleAimZoneClick);
            }
        }, 100);
    }

    function startAimGame() {
        aimGameActive = true;
        aimHits = 0;
        aimMisses = 0;
        aimTotalShots = 0;

        const startBtn = document.getElementById('aim-start-btn');
        startBtn.style.display = 'none';

        const statsEl = document.getElementById('aim-stats');
        statsEl.style.display = 'flex';

        updateAimStats();

        // Включаем музыку аима
        if (aimAudio) {
            aimAudio.volume = 0.3;
            aimAudio.play().catch(e => console.log('Aim audio play error:', e));
        }

        // Запускаем мишень
        showAimTarget();
    }

    function showAimTarget() {
        if (!aimGameActive || aimTotalShots >= 10) {
            endAimGame();
            return;
        }

        const target = document.getElementById('aim-target');
        const zone = document.getElementById('aim-shooting-zone');

        if (!target || !zone) return;

        // Получаем размеры зоны
        const zoneRect = zone.getBoundingClientRect();
        const targetSize = 50; // Размер мишени

        // Генерируем случайную позицию (с отступами от краев)
        const padding = 60;
        const maxX = zoneRect.width - targetSize - padding;
        const maxY = zoneRect.height - targetSize - padding;

        const randomX = padding + Math.random() * maxX;
        const randomY = padding + Math.random() * maxY;

        target.style.left = randomX + 'px';
        target.style.top = randomY + 'px';
        target.style.opacity = '1';
        target.style.transform = 'scale(1)';

        aimTargetVisible = true;

        // Мишень исчезает через 0.7-1.2 секунды
        const disappearTime = 700 + Math.random() * 500;

        if (aimTimeout) clearTimeout(aimTimeout);

        aimTimeout = setTimeout(() => {
            if (aimTargetVisible) {
                // Не успели нажать - промах
                target.style.opacity = '0';
                target.style.transform = 'scale(0.5)';
                aimTargetVisible = false;
                aimMisses++;
                aimTotalShots++;
                updateAimStats();

                // Пауза перед следующей мишенью
                setTimeout(() => {
                    if (aimGameActive) {
                        showAimTarget();
                    }
                }, 300 + Math.random() * 400);
            }
        }, disappearTime);
    }

    function updateAimStats() {
        const hitsEl = document.getElementById('aim-hits');
        const remainingEl = document.getElementById('aim-remaining');

        if (hitsEl) hitsEl.textContent = aimHits;
        if (remainingEl) remainingEl.textContent = 10 - aimTotalShots;
    }

    function endAimGame() {
        aimGameActive = false;
        aimTargetVisible = false;

        if (aimTimeout) clearTimeout(aimTimeout);

        // Останавливаем музыку
        if (aimAudio) {
            aimAudio.pause();
            aimAudio.currentTime = 0;
        }

        const target = document.getElementById('aim-target');
        if (target) {
            target.style.opacity = '0';
            target.style.pointerEvents = 'none';
        }

        const messageEl = document.getElementById('aim-message');
        const statsEl = document.getElementById('aim-stats');

        statsEl.style.display = 'none';

        if (aimHits >= 7) {
            messageEl.textContent = `✅ Победа! Ты попал в ${aimHits} из 10 мишеней! Настоящий танкист!`;
            messageEl.style.color = '#4ecdc4';
        } else {
            messageEl.textContent = `❌ Поражение! Ты попал только в ${aimHits} из 10 мишеней. Нужно тренироваться!`;
            messageEl.style.color = '#ff6b6b';
        }
        messageEl.style.display = 'block';

        // Переход к финальной заставке через 3 секунды
        setTimeout(() => {
            showMinecraftEnding();
        }, 3000);
    }

    // === Финальная заставка в стиле Minecraft ===
    let starwarsAudio = null;

    function showMinecraftEnding() {
        quizQuestionsEl.style.display = 'none';
        quizQuestionsEl.classList.remove('active');

        // Создаём экран заставки
        const endingEl = document.createElement('div');
        endingEl.className = 'minecraft-ending';
        endingEl.innerHTML = `
            <div class="minecraft-text-container">
                <div class="minecraft-text" id="minecraft-text">
                    <p>Ну вот и всё.</p>
                    <p>Ты прошёл путь.</p>
                    <p>Путь истинного танкийца.</p>
                    <p>Никто не верил…</p>
                    <p>Но ты смог.</p>
                    <p>Ты заставил замолчать всех -</p>
                    <p>тех, кто сомневался,</p>
                    <p>кто не хотел верить,</p>
                    <p>кто боялся признать неизбежное.</p>
                    <p>Все знали: этот день настанет.</p>
                    <p>И миру явится настоящий Танкистанец.</p>
                    <p>Но никто…</p>
                    <p>никто не думал,</p>
                    <p>что им окажешься именно ты.</p>
                    <p>В наши времена порой достаточно лишь крошечной надежды.</p>
                    <p>Но даже её трудно разглядеть.</p>
                    <p>Ещё труднее - поверить.</p>
                    <p>Ты прошёл все испытания,</p>
                    <p>что были уготованы судьбой.</p>
                    <p>Твоё время пришло.</p>
                    <p>Танкиец явился миру.</p>
                    <p>Но его путь только начинается.</p>
                    <p>Впереди - новые испытания,</p>
                    <p>приключения,</p>
                    <p>хаос.</p>
                    <p>Пока другие блеют,</p>
                    <p>как потревоженные козы,</p>
                    <p>разбрасывая слюну направо и налево -</p>
                    <p>ты идёшь вперёд.</p>
                    <p>Сияя, как неуловимое,</p>
                    <p>нетленное,</p>
                    <p>вечно открытое солнце</p>
                    <p>над полем говна.</p>
                    <p>Все знали - звезда взойдёт.</p>
                    <p>Но никто не ожидал,</p>
                    <p>что ею станет простой старец</p>
                    <p>из самого непримечательного города.</p>
                    <p>И вот теперь</p>
                    <p>его путь лежит в Мордор,</p>
                    <p>ныне известный как Кострома,</p>
                    <p>где среди полчищ орков,</p>
                    <p>неведомых существ</p>
                    <p>и любителей аниме</p>
                    <p>он будет сиять,</p>
                    <p>как вечная звезда</p>
                    <p>на закате времён.</p>
                    <p>Спасибо тебе за всё,</p>
                    <p>мой дорогой друг.</p>
                    <br>
                    <p class="credits-title">В РОЛЯХ</p>
                    <p>Автор - Артемидо Дэ Совье</p>
                    <p>Сценарий - Артём Сова</p>
                    <p>Главная роль - Артём Васильев</p>
                    <p>В роли Тралалело Тралала - Артемий Васимильяненко</p>
                    <p>В роли Балерины Капучино - Поварёнок Артемий Васько</p>
                    <p>В роли Бр-Бр Потапима - Артемон Василевкинг</p>
                    <p>В роли Триппи Троппа - Артэ Дэ Васимьян</p>
                    <p>В роли Пили Сатурно Сатурнита - Артемидея Васимильянинка</p>
                    <p>В роли Лирили Ларила - Вася Артемидьян</p>
                    <p>В роли Мишени - неповторимый Артемус Прайм</p>
                    <p>В роли Хугардена - прогульщик всех пар Артемиконг Ван Берренг</p>
                    <p>В роли Кирпича - звезда Голливуда 90-х Артемий Васильенберг Совильянский</p>
                    <br>
                    <p class="the-end">THE END</p>
                </div>
            </div>
            <button id="finish-test-btn" class="btn btn-finish" style="display: none;">Завершить тест</button>
        `;

        quizQuestionsEl.parentNode.appendChild(endingEl);

        // Включаем музыку Звездных войн
        starwarsAudio = document.getElementById('starwars-audio');
        if (starwarsAudio) {
            starwarsAudio.volume = 0.5;
            starwarsAudio.play().catch(e => console.log('Star Wars audio play error:', e));
        }

        // Запускаем прокрутку текста
        const textContainer = endingEl.querySelector('.minecraft-text-container');
        const textEl = endingEl.querySelector('.minecraft-text');
        const finishBtn = endingEl.querySelector('#finish-test-btn');

        // Кнопка пропуска
        const skipBtn = document.createElement('button');
        skipBtn.id = 'skip-titles-btn';
        skipBtn.className = 'btn btn-skip';
        skipBtn.textContent = 'Пропустить';
        endingEl.appendChild(skipBtn);

        // Анимация прокрутки
        let scrollPosition = 0;
        const maxScroll = textEl.scrollHeight - textContainer.clientHeight;
        const scrollSpeed = 0.10; // Пикселей за кадр (ОЧЕНЬ ОЧЕНЬ медленно)

        let isScrolling = true;

        function scrollText() {
            if (!isScrolling) return;
            
            if (scrollPosition < maxScroll) {
                scrollPosition += scrollSpeed;
                textContainer.scrollTop = scrollPosition;
                requestAnimationFrame(scrollText);
            } else {
                // Прокрутка завершена
                finishBtn.style.display = 'block';
                finishBtn.style.opacity = '0';
                setTimeout(() => {
                    finishBtn.style.transition = 'opacity 1s ease';
                    finishBtn.style.opacity = '1';
                }, 100);
                skipBtn.style.display = 'none';
            }
        }

        // Начинаем прокрутку через 2 секунды после старта
        setTimeout(() => {
            scrollText();
        }, 2000);

        // Обработчик кнопки пропуска
        skipBtn.addEventListener('click', () => {
            isScrolling = false;
            // Мгновенно прокручиваем в конец
            textContainer.scrollTop = maxScroll;
            finishBtn.style.display = 'block';
            finishBtn.style.opacity = '1';
            skipBtn.style.display = 'none';
        });

        // Обработчик кнопки завершения
        finishBtn.addEventListener('click', () => {
            if (starwarsAudio) {
                starwarsAudio.pause();
            }
            endingEl.remove();
            showResult();
        });

        // Если музыка закончилась до завершения прокрутки
        if (starwarsAudio) {
            starwarsAudio.addEventListener('ended', () => {
                // Показываем кнопку если еще не показана
                if (finishBtn.style.display === 'none') {
                    finishBtn.style.display = 'block';
                    finishBtn.style.opacity = '1';
                }
            });
        }
    }

    // Обработчик клика по мишени
    function handleAimTargetClick(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!aimGameActive || !aimTargetVisible) return;

        // Воспроизводим звук выстрела
        const shotAudio = document.getElementById('shot-audio');
        if (shotAudio) {
            shotAudio.currentTime = 0;
            shotAudio.play().catch(e => console.log('Shot audio play error:', e));
        }

        aimHits++;
        aimTotalShots++;
        aimTargetVisible = false;

        const target = document.getElementById('aim-target');
        target.style.opacity = '0';
        target.style.transform = 'scale(1.3)';

        updateAimStats();

        // Пауза перед следующей мишенью
        setTimeout(() => {
            if (aimGameActive) {
                showAimTarget();
            }
        }, 300 + Math.random() * 400);
    }

    // Обработчик клика по зоне (промах)
    function handleAimZoneClick(e) {
        if (!aimGameActive || e.target.id === 'aim-target') return;

        // Клик мимо мишени не считается за выстрел
        // Игрок может кликать сколько угодно, считается только попадание по мишени
    }

    // === Вопрос 3: Семечки с мини-игрой ===
    function renderSemechkiQuestion(q, removeOptionB = false) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `<h3>${q.question}</h3><div class="quiz-options"></div>`;
        quizQuestionsEl.appendChild(questionEl);

        const optionsEl = questionEl.querySelector('.quiz-options');

        q.options.forEach((opt, idx) => {
            if (removeOptionB && opt.special === "wordgame") {
                return;
            }

            const optionBtn = document.createElement('div');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = opt.text;

            if (opt.special === "wordgame") {
                optionBtn.addEventListener('click', () => {
                    startWordGame();
                });
            } else {
                optionBtn.addEventListener('click', () => {
                    if (opt.correct) {
                        correctAnswers++;
                    }
                    nextQuestion();
                });
            }

            optionsEl.appendChild(optionBtn);
        });
    }

    function startWordGame() {
        wordGameActive = true;
        wordGameWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
        wordGameAttempts = 0;

        const maskedWord = maskWord(wordGameWord);

        const overlay = document.createElement('div');
        overlay.className = 'word-game-overlay active';
        overlay.innerHTML = `
            <h2 class="word-game-title">Испытание за право выбора!</h2>
            <p class="word-game-desc">
                Ты выбрал не правильный ответ. <br>
                Однако ты можешь доказать свою точку зрения если пройдешь с трех раз задание.
            </p>
            <p class="word-game-attempts">Попыток: <span id="wg-attempts">0</span> из 3</p>
            <div class="word-game-word" id="wg-word">${maskedWord}</div>
            <input type="text" class="word-game-input" id="wg-input" placeholder="Введи слово" autocomplete="off">
            <p class="word-game-message" id="wg-message"></p>
            <button class="btn" id="wg-submit">Проверить</button>
        `;

        document.body.appendChild(overlay);

        const input = overlay.querySelector('#wg-input');
        const submit = overlay.querySelector('#wg-submit');
        const message = overlay.querySelector('#wg-message');
        const attemptsEl = overlay.querySelector('#wg-attempts');

        input.focus();

        submit.addEventListener('click', () => {
            const userWord = input.value.trim().toUpperCase();
            wordGameAttempts++;
            attemptsEl.textContent = wordGameAttempts;

            if (userWord === wordGameWord) {
                overlay.classList.remove('active');
                setTimeout(() => {
                    overlay.remove();
                    correctAnswers++;
                    nextQuestion();
                }, 500);
            } else {
                message.textContent = `Неверно! Попробуй ещё раз.`;

                if (wordGameAttempts >= 3) {
                    overlay.classList.remove('active');
                    setTimeout(() => {
                        overlay.remove();
                        quizQuestionsEl.innerHTML = '';
                        renderSemechkiQuestion(quizQuestions[2], true);
                    }, 500);
                }
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submit.click();
            }
        });
    }

    function maskWord(word) {
        let masked = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0 || i % 3 === 0) {
                masked += word[i];
            } else {
                masked += '_';
            }
        }
        return masked;
    }

    // === Вопрос 4: Перевернутый текст ===
    function renderFlippedQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `<h3><span class="flipped-text">${q.question}</span></h3><div class="quiz-options"></div>`;
        quizQuestionsEl.appendChild(questionEl);

        const optionsEl = questionEl.querySelector('.quiz-options');

        q.options.forEach((opt, idx) => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = opt.text;
            optionBtn.addEventListener('click', () => {
                if (opt.correct) {
                    correctAnswers++;
                }
                nextQuestion();
            });
            optionsEl.appendChild(optionBtn);
        });
    }

    // === Вопрос 6: Загадка с Пепе ===
    function renderRiddleQuestion(q) {
        riddleAnswers = [];
        riddleFailed = false;

        const container = document.createElement('div');
        container.className = 'riddle-container';
        container.id = 'riddle-container';
        quizQuestionsEl.appendChild(container);

        let currentLine = 0;

        function showLine(lineIndex) {
            if (lineIndex >= q.lines.length) {
                setTimeout(() => {
                    checkRiddleAnswers();
                }, 800);
                return;
            }

            const line = q.lines[lineIndex];
            const lineEl = document.createElement('div');
            lineEl.className = 'riddle-line';

            const blankIndex = line.text.indexOf('___');
            const beforeBlank = line.text.substring(0, blankIndex);
            const afterBlank = line.text.substring(blankIndex + 3);

            lineEl.innerHTML = `${beforeBlank}<span class="blank" id="riddle-blank-${lineIndex}">...</span>${afterBlank}`;
            container.appendChild(lineEl);

            const optionsEl = document.createElement('div');
            optionsEl.className = 'riddle-options';
            optionsEl.id = `riddle-opts-${lineIndex}`;

            line.options.forEach((opt, optIdx) => {
                const optBtn = document.createElement('div');
                optBtn.className = 'riddle-option';
                optBtn.textContent = opt;
                optBtn.addEventListener('click', () => {
                    optionsEl.innerHTML = '';

                    const blankEl = document.getElementById(`riddle-blank-${lineIndex}`);
                    blankEl.textContent = opt;
                    blankEl.parentElement.classList.add('revealed');

                    riddleAnswers.push(optIdx);

                    setTimeout(() => {
                        showLine(lineIndex + 1);
                    }, 400);
                });
                optionsEl.appendChild(optBtn);
            });

            container.appendChild(optionsEl);
        }

        showLine(0);
    }

    function checkRiddleAnswers() {
        const q = quizQuestions[5];
        let allCorrect = true;

        q.lines.forEach((line, idx) => {
            if (riddleAnswers[idx] !== line.correct) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            correctAnswers++;
            const container = document.getElementById('riddle-container');
            if (container) {
                container.style.border = '2px solid #4ecdc4';
                container.style.boxShadow = '0 0 30px rgba(78, 205, 196, 0.3)';
            }
        }
        // Всегда переходим к следующему вопросу независимо от результата
        setTimeout(() => {
            currentQuestion++;
            renderQuestion();
        }, 1000);
    }

    // === Вопрос 8: Хоровод с музыкой ===
    function renderHoroQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `<h3>${q.question}</h3>`;
        quizQuestionsEl.appendChild(questionEl);

        const horoContainer = document.createElement('div');
        horoContainer.className = 'horo-container';
        horoContainer.id = 'horo-container';
        questionEl.appendChild(horoContainer);

        const angles = [0, 90, 180, 270];
        const buttons = [];

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('div');
            btn.className = 'horo-btn';
            btn.textContent = opt.text;
            btn.style.cursor = 'pointer';

            const angle = angles[idx] * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            btn.style.left = `calc(50% + ${x}px - 50px)`;
            btn.style.top = `calc(50% + ${y}px - 20px)`;

            btn.addEventListener('click', () => {
                if (opt.text.includes('Тяжёлая')) {
                    correctAnswers++;
                    horoActive = false;
                    horoAudio.pause();
                    horoAudio.currentTime = 0;
                    nextQuestion();
                } else {
                    btn.style.opacity = '0';
                    btn.style.pointerEvents = 'none';
                }
            });

            buttons.push(btn);
            horoContainer.appendChild(btn);
        });

        setTimeout(() => {
            horoActive = true;
            horoAudio.volume = 0.5;
            horoAudio.play().catch(e => console.log('Audio play error:', e));

            let rotation = 0;
            const rotateInterval = setInterval(() => {
                if (!horoActive) {
                    clearInterval(rotateInterval);
                    return;
                }

                rotation += 2;
                buttons.forEach((btn, idx) => {
                    const angle = (angles[idx] + rotation) * (Math.PI / 180);
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    btn.style.left = `calc(50% + ${x}px - 50px)`;
                    btn.style.top = `calc(50% + ${y}px - 20px)`;
                });
            }, 20);
        }, 2000);
    }

    // === Вопрос 10: Шутка про слепого ===
    function renderJokeQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `
            <h3>${q.question}</h3>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                <button id="joke-why-btn" class="btn">Почему?</button>
                <div id="joke-punchline" style="display: none; margin-top: 20px; font-size: 1.1rem; color: #aaa; line-height: 1.6; text-align: center;"></div>
                <div id="joke-next" style="display: none; margin-top: 20px; text-align: center;">
                    <p style="color: #888; margin-bottom: 15px;">Ээ ну ладно дальше идите...</p>
                    <button id="joke-next-btn" class="btn">Дальше</button>
                </div>
            </div>
        `;
        quizQuestionsEl.appendChild(questionEl);

        const whyBtn = questionEl.querySelector('#joke-why-btn');
        const punchlineEl = questionEl.querySelector('#joke-punchline');
        const nextEl = questionEl.querySelector('#joke-next');
        const nextBtn = questionEl.querySelector('#joke-next-btn');

        whyBtn.addEventListener('click', () => {
            whyBtn.style.display = 'none';
            punchlineEl.textContent = q.punchline;
            punchlineEl.style.display = 'block';

            setTimeout(() => {
                drumAudio.currentTime = 0;
                drumAudio.play().catch(e => console.log('Audio play error:', e));

                setTimeout(() => {
                    nextEl.style.display = 'block';
                }, 5000);
            }, 1500);
        });

        nextBtn.addEventListener('click', () => {
            correctAnswers++;
            nextQuestion();
        });
    }

    // === Вопрос 12: CAPTCHA ===
    function renderCaptchaQuestion(q) {
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `
            <h3>Подтвердите что вы танкист</h3>
            <div class="captcha-container">
                <div class="captcha-checkbox" id="captcha-checkbox">
                    <div class="captcha-checkmark" id="captcha-checkmark"></div>
                </div>
                <span class="captcha-label">Вы танкист?</span>
                <div class="captcha-loading" id="captcha-loading" style="display: none;">
                    <div class="captcha-spinner"></div>
                </div>
            </div>
        `;
        quizQuestionsEl.appendChild(questionEl);

        const checkbox = questionEl.querySelector('#captcha-checkbox');
        const checkmark = questionEl.querySelector('#captcha-checkmark');
        const loading = questionEl.querySelector('#captcha-loading');

        checkbox.addEventListener('click', () => {
            shotAudio.currentTime = 0;
            shotAudio.play().catch(e => console.log('Audio play error:', e));

            checkmark.style.display = 'block';
            loading.style.display = 'block';

            setTimeout(() => {
                correctAnswers++;
                nextQuestion();
            }, 1000);
        });
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizQuestionsEl.style.display = 'none';
        quizQuestionsEl.classList.remove('active');
        quizResultEl.classList.add('active');
        quizResultEl.style.display = 'block';

        // Добавляем правильные ответы из брейнротов, корзины и аима
        correctAnswers += brainrotCorrectMatches;
        correctAnswers += basketCorrectItems;
        if (aimHits >= 7) {
            correctAnswers += 1; // Победа в аим-тесте = 1 правильный ответ
        }

        // Определяем результат (6 концовок в зависимости от количества правильных ответов)
        // 13-14+ = ending6, 11-12 = ending5, 9-10 = ending4, 7-8 = ending3, 4-6 = ending2, ≤3 = ending1
        let result;
        if (correctAnswers >= 13) {
            result = quizResults.ending6;
        } else if (correctAnswers >= 11) {
            result = quizResults.ending5;
        } else if (correctAnswers >= 9) {
            result = quizResults.ending4;
        } else if (correctAnswers >= 7) {
            result = quizResults.ending3;
        } else if (correctAnswers >= 4) {
            result = quizResults.ending2;
        } else {
            result = quizResults.ending1;
        }

        document.getElementById('result-title').textContent = result.emoji + ' ' + result.title;
        document.getElementById('result-description').textContent = result.description;

        const featuresEl = document.getElementById('result-features');
        featuresEl.innerHTML = '';
        result.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            featuresEl.appendChild(li);
        });

        document.getElementById('result-history').textContent = result.history;

        const placeholder = quizResultEl.querySelector('.result-tank-placeholder');
        placeholder.innerHTML = result.emoji;
    }
});
