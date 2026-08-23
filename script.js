// 示例作品数据
const portfolioData = [
    {
        id: 1,
        title: '城市夕阳',
        category: 'landscape',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop',
        description: '光影在城市建筑间舞动'
    },
    {
        id: 2,
        title: '人像特写',
        category: 'portrait',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        description: '捕捉眼神中的故事'
    },
    {
        id: 3,
        title: '商品展示',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        description: '精心打光的商业摄影'
    },
    {
        id: 4,
        title: '日常抓拍',
        category: 'documentary',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70907b6e?w=500&h=500&fit=crop',
        description: '生活中的真挚瞬间'
    },
    {
        id: 5,
        title: '室内氛围',
        category: 'landscape',
        image: 'https://images.unsplash.com/photo-1495474472645-4c60eca07120?w=500&h=500&fit=crop',
        description: '光影营造的温暖空间'
    },
    {
        id: 6,
        title: '人物侧影',
        category: 'portrait',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
        description: '轮廓中的情绪表达'
    },
    {
        id: 7,
        title: '产品静物',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        description: '细节中的品质展现'
    },
    {
        id: 8,
        title: '街景记录',
        category: 'documentary',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
        description: '城市脉搏的跳动'
    }
];

let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredData = [];

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio('all');
    setupEventListeners();
});

// 设置事件监听
function setupEventListeners() {
    // 过滤按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.dataset.filter;
            renderPortfolio(filter);
        });
    });

    // 灯箱控制
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightbox = document.getElementById('lightbox');

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => showPrevImage());
    lightboxNext.addEventListener('click', () => showNextImage());

    // 点击背景关闭灯箱
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeLightbox();
    });

    // 汉堡菜单
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 点击菜单项关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 联系表单
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的留言！我们会尽快回复您。');
        contactForm.reset();
    });
}

// 渲染作品集
function renderPortfolio(filter) {
    currentFilter = filter;
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    // 过滤数据
    if (filter === 'all') {
        filteredData = portfolioData;
    } else {
        filteredData = portfolioData.filter(item => item.category === filter);
    }

    // 清空网格
    portfolioGrid.innerHTML = '';

    // 添加作品项
    filteredData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        portfolioItem.addEventListener('click', () => openLightbox(index));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// 打开灯箱
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const item = filteredData[index];
    
    document.getElementById('lightboxImg').src = item.image;
    document.getElementById('lightboxCaption').textContent = `${item.title} - ${item.description}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭灯箱
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 显示上一张
function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredData.length) % filteredData.length;
    const item = filteredData[currentLightboxIndex];
    document.getElementById('lightboxImg').src = item.image;
    document.getElementById('lightboxCaption').textContent = `${item.title} - ${item.description}`;
}

// 显示下一张
function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredData.length;
    const item = filteredData[currentLightboxIndex];
    document.getElementById('lightboxImg').src = item.image;
    document.getElementById('lightboxCaption').textContent = `${item.title} - ${item.description}`;
}

// 懒加载优化
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}