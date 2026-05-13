// GAMER.STORE - Основной файл JavaScript

// База данных игр
const gamesDatabase = [
    {
        id: 1,
        name: "Cyberpunk 2077",
        genre: "RPG",
        rating: 4.2,
        oldPrice: 3499,
        newPrice: 1799,
        discount: 49,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        description: "Cyberpunk 2077 — это ролевая игра в открытом мире, действие которой происходит в Найт-Сити, мегаполисе, одержимом властью, гламуром и модификациями тела.",
        releaseDate: "10 декабря 2020",
        developer: "CD Projekt Red",
        publisher: "CD Projekt Red",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-3570K или AMD FX-8310",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 780 или AMD Radeon RX 470",
            storage: "70 GB свободного места"
        }
    },
    {
        id: 2,
        name: "Elden Ring",
        genre: "RPG",
        rating: 4.9,
        oldPrice: 3999,
        newPrice: 2799,
        discount: 30,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
        description: "Elden Ring — это ролевой экшен от создателей Dark Souls. Исследуйте огромный открытый мир и сражайтесь с могущественными боссами.",
        releaseDate: "25 февраля 2022",
        developer: "FromSoftware",
        publisher: "Bandai Namco",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-8400 или AMD Ryzen 3 3300X",
            memory: "12 GB RAM",
            graphics: "NVIDIA GTX 1060 или AMD Radeon RX 580",
            storage: "60 GB свободного места"
        }
    },
    {
        id: 3,
        name: "Counter-Strike 2",
        genre: "Shooter",
        rating: 4.5,
        oldPrice: 0,
        newPrice: 0,
        discount: 0,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
        description: "Counter-Strike 2 — это бесплатный тактический шутер, развивающий наследие CS:GO с улучшенной графикой и геймплеем.",
        releaseDate: "27 сентября 2023",
        developer: "Valve",
        publisher: "Valve",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-750 или AMD Phenom II X4",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 650 или AMD Radeon HD 7750",
            storage: "50 GB свободного места"
        }
    },
    {
        id: 4,
        name: "Baldur's Gate 3",
        genre: "RPG",
        rating: 4.9,
        oldPrice: 3999,
        newPrice: 3399,
        discount: 15,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        description: "Baldur's Gate 3 — это глубокая RPG, основанная на правилах Dungeons & Dragons 5-й редакции. Создайте своего персонажа и отправьтесь в эпическое путешествие.",
        releaseDate: "3 августа 2023",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-4690 или AMD FX-8350",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 970 или AMD Radeon RX 480",
            storage: "150 GB свободного места"
        }
    },
    {
        id: 5,
        name: "Hogwarts Legacy",
        genre: "Adventure",
        rating: 4.3,
        oldPrice: 2999,
        newPrice: 1999,
        discount: 33,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
        description: "Hogwarts Legacy — это захватывающая ролевая игра в открытом мире, действие которой происходит во вселенной Гарри Поттера.",
        releaseDate: "10 февраля 2023",
        developer: "Avalanche Software",
        publisher: "Warner Bros",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-8400 или AMD Ryzen 5 2600",
            memory: "16 GB RAM",
            graphics: "NVIDIA GTX 1070 или AMD RX Vega 56",
            storage: "85 GB свободного места"
        }
    },
    {
        id: 6,
        name: "Red Dead Redemption 2",
        genre: "Action",
        rating: 4.8,
        oldPrice: 3999,
        newPrice: 1599,
        discount: 60,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        description: "Red Dead Redemption 2 — это эпическая история жизни в безжалостном американском краю с огромным открытым миром и захватывающим сюжетом.",
        releaseDate: "5 декабря 2019",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-2500K или AMD FX-6300",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 770 или AMD Radeon R9 280",
            storage: "150 GB свободного места"
        }
    },
    {
        id: 7,
        name: "The Witcher 3",
        genre: "RPG",
        rating: 4.9,
        oldPrice: 1999,
        newPrice: 499,
        discount: 75,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
        description: "The Witcher 3 — это сюжетная RPG в открытом мире в тёмном фэнтези-сеттинге. Играйте за Геральта из Ривии, охотника на чудовищ.",
        releaseDate: "18 мая 2015",
        developer: "CD Projekt Red",
        publisher: "CD Projekt Red",
        minRequirements: {
            os: "Windows 7 64-bit",
            processor: "Intel Core i5-2500K или AMD Phenom II X4 940",
            memory: "6 GB RAM",
            graphics: "NVIDIA GTX 660 или AMD Radeon HD 7870",
            storage: "50 GB свободного места"
        }
    },
    {
        id: 8,
        name: "Battlefield 2042",
        genre: "Shooter",
        rating: 3.5,
        oldPrice: 2499,
        newPrice: 999,
        discount: 60,
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
        description: "Battlefield 2042 — это шутер от первого лица с масштабными сражениями в мире недалёкого будущего.",
        releaseDate: "19 ноября 2021",
        developer: "DICE",
        publisher: "EA",
        minRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600K или AMD Ryzen 5 1600",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 1050 Ti или AMD Radeon RX 560",
            storage: "100 GB свободного места"
        }
    }
];

// Система авторизации (на основе localStorage)
class Auth {
    static register(username, email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Пользователь с таким email уже существует' };
        }
        users.push({ id: Date.now(), username, email, password: btoa(password) });
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true };
    }

    static login(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && atob(u.password) === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify({ id: user.id, username: user.username, email: user.email }));
            return { success: true };
        }
        return { success: false, error: 'Неверный email или пароль' };
    }

    static logout() {
        localStorage.removeItem('currentUser');
    }

    static getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    static isAuthenticated() {
        return this.getCurrentUser() !== null;
    }
}

// Отображение сетки игр на главной странице
function renderGamesGrid(containerId, gamesList = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const games = gamesList || gamesDatabase;
    container.innerHTML = '';

    games.forEach(game => {
        const card = document.createElement('a');
        card.className = 'game-card';
        card.href = `game.html?id=${game.id}`;
        card.innerHTML = `
            <div class="game-img">
                <img src="${game.img}" alt="${game.name}" onerror="this.src='https://placehold.co/400x160?text=Game+Image'">
                ${game.discount > 0 ? `<div class="discount-badge">-${game.discount}%</div>` : ''}
            </div>
            <div class="game-info">
                <h3>${game.name}</h3>
                <div class="game-meta">
                    <span class="genre">${game.genre}</span>
                    <span class="rating">${'★'.repeat(Math.floor(game.rating))}${game.rating % 1 >= 0.5 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(game.rating))}</span>
                </div>
                <div class="price-block">
                    ${game.oldPrice > 0 ? `<span class="old-price">${game.oldPrice.toLocaleString()} ₽</span>` : ''}
                    <span class="new-price">${game.newPrice === 0 ? 'Бесплатно' : game.newPrice.toLocaleString() + ' ₽'}</span>
                </div>
                <button class="buy-btn" onclick="event.preventDefault(); addToCart(${game.id})">Купить →</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Функции корзины
function addToCart(gameId) {
    const game = gamesDatabase.find(g => g.id === gameId);
    if (!game) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === gameId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...game, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${game.name} добавлена в корзину!`);
}

// Получение игры по ID
function getGameById(id) {
    return gamesDatabase.find(g => g.id === parseInt(id));
}

// Поиск игр
function searchGames(query) {
    const lowerQuery = query.toLowerCase();
    return gamesDatabase.filter(game =>
        game.name.toLowerCase().includes(lowerQuery) ||
        game.genre.toLowerCase().includes(lowerQuery)
    );
}

// Обновление UI авторизации
function updateAuthUI() {
    const authContainer = document.getElementById('auth-container');
    const userContainer = document.getElementById('user-container');

    if (!authContainer || !userContainer) return;

    if (Auth.isAuthenticated()) {
        const user = Auth.getCurrentUser();
        authContainer.style.display = 'none';
        userContainer.style.display = 'flex';
        const usernameSpan = document.getElementById('username-display');
        if (usernameSpan) usernameSpan.textContent = user.username;
    } else {
        authContainer.style.display = 'flex';
        userContainer.style.display = 'none';
    }
}

// Выход из системы
function logout() {
    Auth.logout();
    updateAuthUI();
    if (window.location.pathname.includes('profile.html')) {
        window.location.href = 'index.html';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();

    // Функционал поиска
    const searchInput = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query.trim()) {
                const results = searchGames(query);
                if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
                    renderGamesGrid('gamesGrid', results);
                } else {
                    localStorage.setItem('searchResults', JSON.stringify(results));
                    localStorage.setItem('searchQuery', query);
                    window.location.href = 'index.html';
                }
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Загрузка результатов поиска
    const savedResults = localStorage.getItem('searchResults');
    if (savedResults && (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '')) {
        const results = JSON.parse(savedResults);
        if (results.length > 0) {
            renderGamesGrid('gamesGrid', results);
        } else {
            const container = document.getElementById('gamesGrid');
            if (container) container.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Игры не найдены</p>';
        }
        localStorage.removeItem('searchResults');
    }
});

// Экспорт для использования в других файлах
window.gamesDatabase = gamesDatabase;
window.Auth = Auth;
window.renderGamesGrid = renderGamesGrid;
window.addToCart = addToCart;
window.getGameById = getGameById;
window.searchGames = searchGames;
window.logout = logout;