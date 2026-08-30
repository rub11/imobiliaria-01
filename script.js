// ====================================================
// DADOS DOS IMÓVEIS
// ====================================================
const propertiesData = [
    {
        id: 1,
        type: 'casa',
        name: 'Casa Contemporânea',
        location: 'Alphaville, Barueri - SP',
        bedrooms: 4,
        bathrooms: 5,
        area: 420,
        price: 3850000,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop',
        description: 'Casa contemporânea com acabamentos de alto padrão, ampla área de lazer e vista privilegiada.',
        features: ['Piscina', 'Churrasqueira', 'Home theater', 'Jardim'],
        highlight: true
    },
    {
        id: 2,
        type: 'cobertura',
        name: 'Cobertura Vista Jardins',
        location: 'Jardins, São Paulo - SP',
        bedrooms: 4,
        bathrooms: 6,
        area: 380,
        price: 5200000,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop',
        description: 'Cobertura duplex com terraço panorâmico, acabamento premium e vista para os Jardins.',
        features: ['Terraço', 'Piscina privativa', 'Sauna', 'Vista 360°'],
        highlight: true
    },
    {
        id: 3,
        type: 'casa',
        name: 'Residência Reserva',
        location: 'Tamboré, Barueri - SP',
        bedrooms: 5,
        bathrooms: 7,
        area: 650,
        price: 7900000,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop',
        description: 'Residência em condomínio fechado com lago, campos de golfe e total privacidade.',
        features: ['Campo de golfe', 'Lago', 'Academia', 'Segurança 24h'],
        highlight: true
    },
    {
        id: 4,
        type: 'apartamento',
        name: 'Apartamento Signature',
        location: 'Itaim Bibi, São Paulo - SP',
        bedrooms: 3,
        bathrooms: 4,
        area: 220,
        price: 2950000,
        image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop',
        description: 'Apartamento de alto padrão com acabamento diferenciado e localização estratégica.',
        features: ['Academia', 'Piscina', 'Playground', 'Vista livre'],
        highlight: false
    },
    {
        id: 5,
        type: 'casa',
        name: 'Casa Reserva Privada',
        location: 'Alphaville, Barueri - SP',
        bedrooms: 5,
        bathrooms: 6,
        area: 720,
        price: 8500000,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format&fit=crop',
        description: 'Casa com arquitetura assinada, ampla área verde e acabamentos de luxo.',
        features: ['Piscina', 'Quadra', 'Cozinha gourmet', 'Área gourmet'],
        highlight: true
    },
    {
        id: 6,
        type: 'cobertura',
        name: 'Penthouse Skyline',
        location: 'Vila Nova Conceição, São Paulo - SP',
        bedrooms: 4,
        bathrooms: 5,
        area: 410,
        price: 6800000,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop',
        description: 'Penthouse com vista para a cidade, terraço exclusivo e acabamento requintado.',
        features: ['Jacuzzi', 'Home office', 'Varanda gourmet', 'Vista panorâmica'],
        highlight: true
    }
];

// ====================================================
// LOCALIZAÇÕES
// ====================================================
const locationsData = [
    { name: 'Alphaville', region: 'Barueri', count: 12, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&auto=format&fit=crop' },
    { name: 'Jardins', region: 'São Paulo', count: 8, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&auto=format&fit=crop' },
    { name: 'Itaim Bibi', region: 'São Paulo', count: 15, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=300&auto=format&fit=crop' },
    { name: 'Vila Nova Conceição', region: 'São Paulo', count: 6, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&auto=format&fit=crop' },
    { name: 'Morumbi', region: 'São Paulo', count: 10, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&auto=format&fit=crop' },
    { name: 'Tamboré', region: 'Barueri', count: 7, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&auto=format&fit=crop' }
];

// ====================================================
// DEPOIMENTOS
// ====================================================
const testimonialsData = [
    {
        text: 'Desde o primeiro atendimento sentimos que estávamos falando com profissionais que realmente entendiam o que procurávamos.',
        author: 'Mariana Oliveira',
        stars: 5
    },
    {
        text: 'Encontramos a casa dos nossos sonhos em menos de uma semana. Atendimento impecável e suporte em todo o processo.',
        author: 'Roberto Almeida',
        stars: 5
    },
    {
        text: 'A Vértice Imóveis transformou a busca pela nossa cobertura em uma experiência prazerosa. Recomendo a todos.',
        author: 'Carla Mendes',
        stars: 5
    },
    {
        text: 'Profissionais atenciosos e conhecimento profundo do mercado. Fizeram toda a diferença na nossa negociação.',
        author: 'Fernando Santos',
        stars: 5
    }
];

// ====================================================
// VARIÁVEIS GLOBAIS
// ====================================================
let favorites = JSON.parse(localStorage.getItem('verticeFavorites')) || [];
let currentTestimonialIndex = 0;
let allProperties = [...propertiesData];

// ====================================================
// FUNÇÕES AUXILIARES
// ====================================================
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function getPropertyById(id) {
    return allProperties.find(p => p.id === id);
}

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('verticeFavorites', JSON.stringify(favorites));
    renderProperties();
    updateFavoritesCounter();
}

// ====================================================
// RENDER: PROPRIEDADES
// ====================================================
function renderProperties(filtered = null) {
    const grid = document.getElementById('propertiesGrid');
    const list = filtered || allProperties;

    if (!grid) return;
    if (list.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:40px;">Nenhum imóvel encontrado com esses filtros.</p>';
        return;
    }

    grid.innerHTML = list.map(prop => {
        const fav = isFavorite(prop.id) ? 'active' : '';
        return `
            <div class="property-card" data-id="${prop.id}">
                <div class="property-card__image">
                    <img src="${prop.image}" alt="${prop.name}" loading="lazy" />
                    ${prop.highlight ? '<span class="property-card__badge">Destaque</span>' : ''}
                    <button class="property-card__favorite ${fav}" data-id="${prop.id}" aria-label="Favoritar">${isFavorite(prop.id) ? '♥' : '♡'}</button>
                </div>
                <div class="property-card__body">
                    <div class="property-card__type">${prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</div>
                    <div class="property-card__name">${prop.name}</div>
                    <div class="property-card__location">${prop.location}</div>
                    <div class="property-card__details">
                        <span>🛏 ${prop.bedrooms}</span>
                        <span>🛁 ${prop.bathrooms}</span>
                        <span>📐 ${prop.area} m²</span>
                    </div>
                    <div class="property-card__price">${formatCurrency(prop.price)}</div>
                    <div class="property-card__actions">
                        <button class="btn btn--outline modal-trigger" style="border-color:#ccc; color:#333;" data-id="${prop.id}">Ver detalhes</button>
                        <button class="btn btn--gold favorite-btn" data-id="${prop.id}">${isFavorite(prop.id) ? '❤️ Favorito' : '♡ Favoritar'}</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Event listeners para favoritos e modal
    document.querySelectorAll('.favorite-btn, .property-card__favorite').forEach(el => {
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            toggleFavorite(id);
        });
    });

    document.querySelectorAll('.modal-trigger').forEach(el => {
        el.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            openModal(id);
        });
    });

    updateFavoritesCounter();
}

// ====================================================
// RENDER: LOCALIZAÇÕES
// ====================================================
function renderLocations() {
    const grid = document.getElementById('locationsGrid');
    if (!grid) return;
    grid.innerHTML = locationsData.map(loc => `
        <div class="location-card">
            <img src="${loc.image}" alt="${loc.name}" loading="lazy" />
            <div class="location-card__name">${loc.name}</div>
            <div class="location-card__count">${loc.count} imóveis</div>
        </div>
    `).join('');
}

// ====================================================
// RENDER: DEPOIMENTOS (carrossel)
// ====================================================
function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    // Renderiza todos os depoimentos
    track.innerHTML = testimonialsData.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-card__stars">${'★'.repeat(t.stars)}</div>
            <div class="testimonial-card__text">"${t.text}"</div>
            <div class="testimonial-card__author">— ${t.author}</div>
        </div>
    `).join('');

    // Posiciona no primeiro
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 24; // + gap
    const maxIndex = Math.max(0, cards.length - 1);
    if (currentTestimonialIndex > maxIndex) currentTestimonialIndex = maxIndex;
    track.style.transform = `translateX(-${currentTestimonialIndex * cardWidth}px)`;
}

// ====================================================
// CONTADOR DE FAVORITOS
// ====================================================
function updateFavoritesCounter() {
    const counter = document.getElementById('favoritesCounter');
    if (counter) {
        counter.textContent = `Favoritos (${favorites.length})`;
    }
}

// ====================================================
// BUSCA
// ====================================================
function handleSearch(e) {
    e.preventDefault();

    const finalidade = document.getElementById('finalidade').value;
    const tipo = document.getElementById('tipo').value;
    const localizacao = document.getElementById('localizacao').value.toLowerCase().trim();
    const precoMin = parseFloat(document.getElementById('precoMin').value) || 0;
    const precoMax = parseFloat(document.getElementById('precoMax').value) || Infinity;
    const quartos = parseInt(document.getElementById('quartos').value) || 1;

    const filtered = allProperties.filter(prop => {
        // Finalidade (para simplificar, todos os imóveis são para compra e aluguel)
        // Tipo
        if (tipo && prop.type !== tipo) return false;
        // Localização
        if (localizacao && !prop.location.toLowerCase().includes(localizacao)) return false;
        // Preço
        if (prop.price < precoMin || prop.price > precoMax) return false;
        // Quartos
        if (prop.bedrooms < quartos) return false;
        return true;
    });

    renderProperties(filtered);

    const msg = document.getElementById('searchResults');
    if (msg) {
        msg.textContent = filtered.length > 0
            ? `🔍 ${filtered.length} imóvel(is) encontrado(s) com esses filtros.`
            : '🔍 Nenhum imóvel encontrado. Tente ajustar os filtros.';
    }
}

// ====================================================
// MODAL
// ====================================================
function openModal(id) {
    const prop = getPropertyById(id);
    if (!prop) return;
    const modal = document.getElementById('propertyModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <img src="${prop.image}" alt="${prop.name}" />
        <h2>${prop.name}</h2>
        <div class="modal__location">${prop.location}</div>
        <div class="modal__price">${formatCurrency(prop.price)}</div>
        <div class="modal__details">
            <span>🛏 ${prop.bedrooms} quartos</span>
            <span>🛁 ${prop.bathrooms} banheiros</span>
            <span>📐 ${prop.area} m²</span>
        </div>
        <div class="modal__desc">${prop.description}</div>
        <p><strong>Características:</strong> ${prop.features.join(', ')}</p>
        <button class="btn btn--gold" id="modalInterestBtn">Tenho interesse</button>
    `;

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modalInterestBtn').addEventListener('click', function() {
        const msg = `Olá! Tenho interesse no imóvel ${prop.name}, localizado em ${prop.location}.`;
        const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    });
}

function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
}

// ====================================================
// FORMULÁRIO DE CONTATO
// ====================================================
function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const type = document.getElementById('contactType').value;
    const goal = document.getElementById('contactGoal').value;
    const message = document.getElementById('contactMessage').value.trim();

    // Validação simples: pelo menos um campo preenchido
    const hasData = name || email || phone || type || goal || message;
    const successEl = document.getElementById('contactSuccess');

    if (!hasData) {
        successEl.textContent = 'Por favor, preencha pelo menos um campo.';
        successEl.style.color = '#e67e22';
        return;
    }

    // Simula envio
    successEl.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
    successEl.style.color = '#27ae60';
    document.getElementById('contactForm').reset();

    // Limpa a mensagem após 6 segundos
    setTimeout(() => {
        successEl.textContent = '';
    }, 6000);
}

// ====================================================
// WHATSAPP
// ====================================================
const whatsappNumber = "5511999999999";
const whatsappMsg = "Olá! Gostaria de falar com um especialista da Vértice Imóveis.";

function setupWhatsApp() {
    const btn = document.getElementById('whatsappBtn');
    if (btn) {
        btn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
    }
}

// ====================================================
// HEADER SCROLL
// ====================================================
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 60) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

// ====================================================
// MENU MOBILE
// ====================================================
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('nav--open');
        // Ajusta a posição do menu se o header estiver com fundo
        if (nav.classList.contains('nav--open')) {
            header.style.position = 'relative';
        } else {
            header.style.position = 'fixed';
        }
    });

    // Fecha ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            header.style.position = 'fixed';
        });
    });
}

// ====================================================
// CONTADORES ANIMADOS
// ====================================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 20);
    });
}

// ====================================================
// CARROSSEL DE DEPOIMENTOS (setas)
// ====================================================
function setupTestimonialArrows() {
    const prev = document.getElementById('testimonialPrev');
    const next = document.getElementById('testimonialNext');
    const track = document.getElementById('testimonialsTrack');
    if (!prev || !next || !track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    const maxIndex = cards.length - 1;

    prev.addEventListener('click', () => {
        if (currentTestimonialIndex > 0) {
            currentTestimonialIndex--;
            updateTestimonialPosition();
        }
    });

    next.addEventListener('click', () => {
        if (currentTestimonialIndex < maxIndex) {
            currentTestimonialIndex++;
            updateTestimonialPosition();
        }
    });

    // Ajuste em resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateTestimonialPosition();
        }, 200);
    });
}

// ====================================================
// FECHAR MODAL (ESC, overlay, botão)
// ====================================================
function setupModalClose() {
    const modal = document.getElementById('propertyModal');
    const overlay = modal.querySelector('.modal__overlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
            closeModal();
        }
    });
}

// ====================================================
// INICIALIZAÇÃO
// ====================================================
document.addEventListener('DOMContentLoaded', function() {
    // Renderizações iniciais
    renderProperties();
    renderLocations();
    renderTestimonials();
    updateFavoritesCounter();

    // Event listeners
    document.getElementById('searchForm').addEventListener('submit', handleSearch);
    document.getElementById('contactForm').addEventListener('submit', handleContact);

    // Header scroll
    window.addEventListener('scroll', handleScroll);

    // Menu mobile
    setupMobileMenu();

    // WhatsApp
    setupWhatsApp();

    // Carrossel
    setupTestimonialArrows();

    // Modal
    setupModalClose();

    // Contadores animados (quando a seção about entra em view)
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(aboutSection);
    }

    // Ajuste do carrossel após carregar imagens
    setTimeout(() => {
        updateTestimonialPosition();
    }, 300);
});

// ====================================================
// EXPOR PARA DEBUG (opcional)
// ====================================================
window.vertice = {
    properties: allProperties,
    favorites,
    toggleFavorite,
    renderProperties,
    openModal,
    closeModal
};