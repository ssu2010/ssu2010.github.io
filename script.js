// Данные для слайдов
const cityCoordinates = {
    "Саратов": { lat: 51.542197, lng: 45.997803 },
    "Аткарск": { lat: 51.877210, lng: 45.011192 },
    "Ртищево": { lat: 52.259943, lng: 43.780883 },
    "Тамбов": { lat: 52.718848, lng: 41.427558 },
    "Мичуринск": { lat: 52.898802, lng: 40.496993 },
    "Рязань": { lat: 54.629122, lng: 39.700222 },
    "Тверь": { lat: 56.835874, lng: 35.892572 },
    "Бологое": { lat: 57.886115, lng: 34.060572 },
    "Карамыш": { lat: 50.963493, lng: 45.524210 },
    "Петров Вал": { lat: 50.139286, lng: 45.205989 },
    "Волгоград": { lat: 48.714757, lng: 44.513347},
    "Сальск": { lat: 46.540458, lng: 41.489767},
    "Краснодар": { lat: 45.018912, lng: 38.988551},
    "Суздаль": { lat: 56.430676, lng: 40.444658 },
    "Владимир": { lat: 56.0800, lng: 40.2500 },
    "Дудинка": { lat: 69.408206, lng: 86.177522 },
    "Челябинск": { lat: 55.159902, lng: 61.402554 },
    "Лисаковск": { lat: 52.544616, lng: 62.492470 },
    "Костанай": { lat: 53.215324, lng: 63.627997 },
    "Новосибирск": { lat: 55.042949, lng: 82.888943 },
    "Чок-Тал": { lat: 42.586249, lng: 76.742404 },
    "Красноярск": { lat: 56.011496, lng: 92.852403 },
    "Воскресенск" : { lat: 55.341220, lng: 38.631683 },
    "Туапсе": { lat: 44.0600, lng: 39.0500 },
    "Москва": { lat: 55.751179, lng: 37.617712 },
    "Казань": { lat: 55.4727, lng: 49.0652 },
    "Пятигорск": { lat: 44.039847, lng: 43.063187},
    "Баксан": { lat: 43.681863, lng: 43.526729},
    "Эльбрус": { lat: 43.250689, lng: 42.638590 },
    "Екатеринбург": { lat: 56.5000, lng: 60.3500 },
    "Берлин": { lat: 52.554191, lng: 13.292866},
    "Потсдам": { lat: 52.409185, lng: 12.973840 },
    "Санкт-Петербург": { lat: 59.930000, lng: 30.363831 }
};
const slidesData = [
    {
        year: "1992",
        month: "Декабрь",
        event: "Рождение",
        location: "Дудинка, Россия",
        description: "Родился и прожил на Таймыре до 17 лет.",
        lat: 69.408206,
        lng: 86.177522,
        city: "Дудинка"
    },
    {
        year: "2000",
        month: "Сентябрь",
        event: "Начал ходить в школу",
        location: "Дудинка, Россия",
        description: "Учился в школе №1",
        lat: 69.408206,
        lng: 86.177522,
        city: "Дудинка"
    },
    {
        year: "2001",
        month: "Май",
        event: "Каникулы после 1 класса",
        location: "Лисаковск, Казахстан",
        description: "Тут есть деревья и тополиный пух",
        lat: 52.544616,
        lng: 62.492470,
        city: "Лисаковск",
        through: [ { city: "Челябинск", transport: "airplane" }, { city: "Костанай", transport: "car" } ],
        transport: "car"
    },
    {
        year: "2001",
        month: "Июнь",
        event: "Первый визит в Саратов",
        location: "Саратов, Россия",
        description: "Были на набережной",
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов",
        transport: "train"
    },
    {
        year: "2002",
        month: "Июнь",
        event: "Каникулы в детском лагере в Киргизии",
        location: "Чок-Тал, Киргизия",
        description: "Спортивный лагерь с трехразовыми тренеровками на берегу озера Иссык-Куль",
        lat: 42.586249,
        lng: 76.742404,
        city: "Чок-Тал",
        through: [ { city: "Лисаковск", transport: "train" }, { city: "Костанай", transport: "car" }, { city: "Челябинск", transport: "car" }, { city: "Дудинка", transport: "airplane" }, { city: "Новосибирск", transport: "airplane" } ],
        transport: "airplane"
    },
    {
        year: "2005",
        month: "Июнь",
        event: "Каникулы в деревне",
        location: "Красноярск, Россия",
        description: "Было интересно гулять по тайге",
        lat: 56.011496,
        lng: 92.852403,
        city: "Красноярск",
        through: [ { city: "Новосибирск", transport: "airplane" }, { city: "Дудинка", transport: "airplane" } ],
        transport: "airplane"
    },
    {
        year: "2007",
        month: "Январь",
        event: "Детский лагерь 'Химик'",
        location: "Воскресенск, Россия",
        description: "Судя по отзывам с Яндекс карт, лагерь давно заброшен. Печально смотреть на фотки заброшенных мест, которые ты помнишь 'живыми'.",
        lat: 55.341220,
        lng: 38.631683,
        city: "Воскресенск",
        through: [ { city: "Дудинка", transport: "airplane" }, { city: "Москва", transport: "airplane" }],
        transport: "car"
    },
    {
        year: "2010",
        month: "Июнь",
        event: "Окончание школы",
        location: "Дудинка, Россия",
        description: "Закончил химико-биологический класс. Также 9 лет занимался тхэквон-до (ИТФ) и окончил художественную школу. Сдавал ЕГЭ по физике, химии, обществознанию и истории.",
        lat: 69.408206,
        lng: 86.177522,
        city: "Дудинка",
        through: [ { city: "Москва", transport: "car" }],
        transport: "airplane"
    },
    {
        year: "2010",
        month: "Сентябрь",
        event: "Поступление в университет",
        location: "Саратов, Россия",
        description: "Поступил в Саратовский государственный университет имени Н.Г. Чернышевского на факультет нано-и биомедицинских технологий, специальность 'Материаловедение и технология материалов'.",
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов",
        through: [ { city: "Москва", transport: "airplane" }, { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2014",
        month: "Сентябрь",
        event: "Участие в третьей международной конференции стран СНГ «Золь-гель-2014»",
        location: "Суздаль, Россия",
        description: "Устный доклад: Освещение как фактор формирования полимерного покрытия на поверхности полупроводника",
        lat: 56.430676,
        lng: 40.444658,
        city: "Суздаль",
        through: [ { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Москва", transport: "train" } ],
        transport: "car"
    },
    {
        year: "2015",
        month: "Май",
        event: "Участие на международной школе-семинаре «Nanoparticles, Nanostructured Coatings and Microcontainers: Technology, Properties, Applications»",
        location: "Саратов, Россия",
        description: "Были участники из 11 стран. Первый опыт устного доклада на английском. Тема доклада: Photocontrolled layer-by-layer adsorption of glucose oxidase on various surfaces",
        lat: 51.3200,
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов",
        through: [ { city: "Владимир", transport: "car" }, { city: "Москва", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2015",
        month: "Июнь",
        event: "Окончил университет",
        location: "Саратов, Россия",
        description: "GPA 4.69. Тема диплома: Зависимость параметров и характеристик структуры кремний/полиэтиленимин/глюкозооксидаза от условий получения органических покрытий. За время обучения получал правительственную стипендию. Участвовал в около 10 конференциях разного уровня",
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов"
    },
    {
        year: "2015",
        month: "Сентябрь",
        event: "Поступление в аспирантуру",
        location: "Саратов, Россия",
        description: "Специальность: Электроника, радиотехника и системы связи",
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов"
    },
    {
        year: "2015",
        month: "Сентябрь",
        event: "Симпозиум «Современная химическая физика»",
        location: "Туапсе, Россия",
        description: "Симпозиум на берегу черного моря в пансионате 'Маяк'. Один устный и один стендовый доклад.",
        lat: 44.0600,
        lng: 39.0500,
        city: "Туапсе",
        through: [ { city: "Карамыш", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Сальск", transport: "train" }, { city: "Краснодар", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2016",
        month: "Апрель",
        event: "V Международная научно-техническая конференция «Технологии микро- и наноэлектроники в микро- и наносистемной технике»",
        location: "Москва, Россия",
        description: "Устный доклад 'Влияние фотоэлектронных процессов в полупроводниковой подложке на иммобилизацию молекул фермента'",
        lat: 55.751179,
        lng: 37.617712,
        city: "Москва",
        through: [ { city: "Краснодар", transport: "train" }, { city: "Сальск", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Саратов", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2016",
        month: "Сентябрь",
        event: "Симпозиум «Современная химическая физика»",
        location: "Туапсе, Россия",
        description: "Отмечен дипломом за лучший доклад среди молодых учёных.",
        lat: 44.0600,
        lng: 39.0500,
        city: "Туапсе",
        through: [ { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Саратов", transport: "train" }, { city: "Карамыш", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Сальск", transport: "train" }, { city: "Краснодар", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2017",
        month: "Апрель",
        event: "Олимпиада по управлению качеством и стандартизации",
        location: "Казань, Россия",
        description: "Сопровождал студентов на олимпиаду. На самой олимпиаде занимался проверкой работ участников.",
        lat: 55.4727,
        lng: 49.0652,
        city: "Казань",
        through: [ { city: "Краснодар", transport: "train" }, { city: "Сальск", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Саратов", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2017",
        month: "Май",
        event: "Международная научно-техническая конференция 'Микро- и нанотехнологии в электронике'",
        location: "Эльбрус, Россия",
        description: "Доклад: Электрические свойства и морфология гибридной структуры на основе кремния при изменении режима фотоадсорбции молекул органического пассивирующего покрытия",
        lat: 43.250689,
        lng: 42.638590,
        city: "Эльбрус",
        through: [ { city: "Саратов", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Сальск", transport: "train" }, { city: "Пятигорск", transport: "train" }, { city: "Баксан", transport: "car" } ],
        transport: "car"
    },
    {
        year: "2017",
        month: "Август",
        event: "Международная конференция Scanning probe microscopy",
        location: "Екатеринбург, Россия",
        description: "Один устный и один стендовый доклад на английском",
        lat: 56.5000,
        lng: 60.3500,
        city: "Екатеринбург",
        through: [ { city: "Баксан", transport: "car" }, { city: "Пятигорск", transport: "car" }, { city: "Сальск", transport: "train" }, { city: "Волгоград", transport: "train" }, { city: "Петров Вал", transport: "train" }, { city: "Саратов", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2017",
        month: "Октябрь",
        event: "Стажировка",
        location: "Потсдам, Германия",
        description: "Стажировка на один месяц со стипендией 1250 евро в Потсдамский университет в группу экспериментальной физики проф. Светланы Сантер",
        lat: 52.409185,
        lng: 12.973840,
        city: "Потсдам",
        through: [ { city: "Саратов", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Москва", transport: "train" }, { city: "Берлин", transport: "airplane"}  ],
        transport: "train"
    },
    {
        year: "2018",
        month: "Апрель",
        event: "Школа-конференция с международным участием по оптоэлектронике, фотонике и наноструктурам Saint Petersburg OPEN",
        location: "Санкт-Петербург, Россия",
        description: "Стендовый доклад",
        lat: 59.930000,
        lng: 30.363831,
        city: "Санкт-Петербург",
        through: [ { city: "Москва", transport: "airplane" }, { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Саратов", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Рязань", transport: "train" }, { city: "Тверь", transport: "train" }, { city: "Бологое", transport: "train" }  ],
        transport: "train"
    },
    {
        year: "2018",
        month: "Апрель-май",
        event: "Стажировка",
        location: "Потсдам, Германия",
        description: "Стажировка в Потсдамский университет в группу экспериментальной физики проф. Светланы Сантер",
        lat: 52.409185,
        lng: 12.973840,
        city: "Потсдам",
        through: [ { city: "Бологое", transport: "train" }, { city: "Тверь", transport: "train" }, { city: "Рязань", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Саратов", transport: "train" }, { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Москва", transport: "train" }, { city: "Берлин", transport: "airplane"}  ],
        transport: "train"
    },
    {
        year: "2019",
        month: "Декабрь",
        event: "Защита кандидатской диссертации",
        location: "Саратов, Россия",
        description: "Название диссертации 'Фотостимуляция твердотельных сенсорных структур на основе кремния и полиэлектролитного покрытия'",
        lat: 51.542197,
        lng: 45.997803,
        city: "Саратов",
        through: [ { city: "Санкт-Петербург", transport: "airplane" }, { city: "Москва", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Аткарск", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2024",
        month: "Сентябрь",
        event: "Переезд в Санкт-Петербург",
        location: "Санкт-Петербург, Россия",
        description: "",
        lat: 59.930000,
        lng: 30.363831,
        city: "Санкт-Петербург",
        through: [ { city: "Аткарск", transport: "train" }, { city: "Ртищево", transport: "train" }, { city: "Тамбов", transport: "train" }, { city: "Мичуринск", transport: "train" }, { city: "Рязань", transport: "train" }, { city: "Тверь", transport: "train" }, { city: "Бологое", transport: "train" } ],
        transport: "train"
    },
    {
        year: "2024",
        month: "Октябрь",
        event: "Новая должность",
        location: "Санкт-Петербург, Россия",
        description: "Устроился на должность доцента кафедры высшей математики в Политехе Петра Великого. Я решил, что это поможет мне вспомнить/освоить высшую математику и подготовится к магистратуре по вычислительной биологии и биоинформатике",
        lat: 59.930000,
        lng: 30.363831,
        city: "Санкт-Петербург"
    },
    {
        year: "2025",
        month: "Август",
        event: "Поступление в НИУ ВШЭ",
        location: "Санкт-Петербург, Россия",
        description: "Учуся...",
        lat: 59.930000,
        lng: 30.363831,
        city: "Санкт-Петербург"
    }
];

function getTransportColor(transportType) {
    switch(transportType) {
        case 'train': return '#e74c3c';
        case 'airplane': return '#3498db';
        case 'car': return '#2c3e50';
        default: return '#95a5a6';
    }
}

function getTransportName(transportType) {
    switch(transportType) {
        case 'train': return 'Поезд';
        case 'airplane': return 'Самолет';
        case 'car': return 'Автомобиль';
        default: return 'Транспорт';
    }
}

// Функция для построения маршрута с сегментами
function buildRoute(prevSlideData, currentSlideData) {
    const segments = [];
    let previousPoint = [prevSlideData.lat, prevSlideData.lng];
    
    if (currentSlideData.through && Array.isArray(currentSlideData.through)) {
        currentSlideData.through.forEach(throughPoint => {
            const cityCoords = cityCoordinates[throughPoint.city];
            if (cityCoords) {
                segments.push({
                    points: [previousPoint, [cityCoords.lat, cityCoords.lng]],
                    transport: throughPoint.transport || 'train'
                });
                previousPoint = [cityCoords.lat, cityCoords.lng];
            }
        });
    }
    
    segments.push({
        points: [previousPoint, [currentSlideData.lat, currentSlideData.lng]],
        transport: currentSlideData.transport || 'train'
    });
    
    return segments;
}

// Основной код
window.addEventListener('load', function() {
    const map = L.map('map').setView([55.7558, 37.6173], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const linesStack = []; // Теперь храним массивы линий (сегменты)
    let currentMarker = null;
    let currentSlideIndex = 0;
    let isAnimating = false;
    const totalSlides = slidesData.length;

    const slidesContainer = document.getElementById('slidesContainer');
    const slideCounter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearLinesBtn = document.getElementById('clearLines');

    function createSlides() {
        slidesData.forEach((slideData, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.setAttribute('data-index', index);
            
            slide.innerHTML = `
                <div class="timeline-date">${slideData.month} ${slideData.year}</div>
                <div class="timeline-event">${slideData.event}</div>
                <div class="timeline-location">${slideData.location}</div>
                <div class="timeline-description">${slideData.description}</div>
            `;
            
            slidesContainer.appendChild(slide);
        });
        
        updateSlidesPosition();
    }

    function updateSlidesPosition() {
        const slides = document.querySelectorAll('.slide');
        
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'hidden');
            
            if (index === currentSlideIndex) {
                slide.classList.add('active');
            } else if (index === currentSlideIndex - 1) {
                slide.classList.add('prev');
            } else if (index === currentSlideIndex + 1) {
                slide.classList.add('next');
            } else {
                slide.classList.add('hidden');
            }
        });
        
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;
        
        slideCounter.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    }

    function goToSlide(index) {
        if (isAnimating || index < 0 || index >= totalSlides) return;
        isAnimating = true;
        
        const prevIndex = currentSlideIndex;
        currentSlideIndex = index;
        
        updateSlidesPosition();
        
        const slideData = slidesData[index];
        const lat = slideData.lat;
        const lng = slideData.lng;
        const city = slideData.city;
        const year = slideData.year;
        
        const isForward = index > prevIndex;
        
        if (prevIndex !== index && prevIndex !== -1) {
            const prevSlideData = slidesData[prevIndex];
            const prevLat = prevSlideData.lat;
            const prevLng = prevSlideData.lng;
            
            if (prevLat !== lat || prevLng !== lng) {
                if (isForward) {
                    const routeSegments = buildRoute(prevSlideData, slideData);
                    const segmentLines = [];
                    
                    routeSegments.forEach(segment => {
                        const color = getTransportColor(segment.transport);
                        const transportName = getTransportName(segment.transport);
                        
                        const line = L.polyline(segment.points, {
                            color: color,
                            weight: 4,
                            opacity: 0.7
                        }).addTo(map);
                        
                        line.bindTooltip(transportName, {
                            permanent: false,
                            direction: 'center'
                        });
                        
                        segmentLines.push(line);
                    });
                    
                    linesStack.push(segmentLines);
                } else {
                    if (linesStack.length > 0) {
                        const lastSegmentLines = linesStack.pop();
                        lastSegmentLines.forEach(line => {
                            map.removeLayer(line);
                        });
                    }
                }
            }
        }
        
        moveMarker(lat, lng, city, year, () => {
            isAnimating = false;
        });
    }

    function nextSlide() {
        if (currentSlideIndex < totalSlides - 1) {
            goToSlide(currentSlideIndex + 1);
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            goToSlide(currentSlideIndex - 1);
        }
    }

    function moveMarker(lat, lng, city, year, callback) {
        if (!currentMarker) {
            currentMarker = L.marker([lat, lng]).addTo(map);
            currentMarker.bindPopup(`<b>${year}</b><br>${city}`).openPopup();
            map.setView([lat, lng], 5);
            callback();
            return;
        }
        
        const startLat = currentMarker.getLatLng().lat;
        const startLng = currentMarker.getLatLng().lng;
        const steps = 10;
        const stepLat = (lat - startLat) / steps;
        const stepLng = (lng - startLng) / steps;
        let currentStep = 0;
        
        const interval = setInterval(() => {
            currentStep++;
            const currentLat = startLat + stepLat * currentStep;
            const currentLng = startLng + stepLng * currentStep;
            
            currentMarker.setLatLng([currentLat, currentLng]);
            
            if (currentStep >= steps) {
                clearInterval(interval);
                currentMarker.setLatLng([lat, lng]);
                currentMarker.bindPopup(`<b>${year}</b><br>${city}`).openPopup();
                map.setView([lat, lng], 5);
                callback();
            }
        }, 30);
    }

    function clearAllLines() {
        linesStack.forEach(segmentLines => {
            segmentLines.forEach(line => {
                map.removeLayer(line);
            });
        });
        linesStack.length = 0;
    }

    const timelineContainer = document.querySelector('.timeline-container');
    
    if (timelineContainer) {
        let lastScrollTime = 0;
        const scrollThrottle = 200;

        timelineContainer.addEventListener('wheel', function(e) {
            e.preventDefault();
            
            const currentTime = Date.now();
            if (currentTime - lastScrollTime < scrollThrottle) {
                return;
            }
            
            lastScrollTime = currentTime;
            
            if (e.deltaY > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        });
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    clearLinesBtn.addEventListener('click', clearAllLines);

    createSlides();
    goToSlide(0);
});