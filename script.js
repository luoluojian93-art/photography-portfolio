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

// 服务套餐数据
const servicesData = [
    {
        id: 1,
        name: '人像写真',
        price: 1200,
        duration: '2小时',
        description: '专业人像拍摄，展现你的气质和风采',
        features: [
            '2小时拍摄时间',
            '包含场景2-3个',
            '精修20-30张照片',
            '赠送1张大幅相册',
            '免费化妆服务'
        ]
    },
    {
        id: 2,
        name: '纪实抓拍',
        price: 1500,
        duration: '4小时',
        description: '记录生活中最真挚的瞬间',
        features: [
            '4小时拍摄时间',
            '全程跟拍',
            '精修50-80张照片',
            '赠送电子相册',
            '快速交付'
        ]
    },
    {
        id: 3,
        name: '商业静物',
        price: 2000,
        duration: '8小时',
        description: '产品拍摄和商业合作',
        features: [
            '8小时拍摄时间',
            '专业打光设备',
            '精修100+张照片',
            '包含视频拍摄',
            '商用授权'
        ]
    },
    {
        id: 4,
        name: '环境氛围',
        price: 1800,
        duration: '3小时',
        description: '营造画面情绪与故事感',
        features: [
            '3小时拍摄时间',
            '环境勘景',
            '精修40-50张照片',
            '赠送视频短片',
            '后期调色'
        ]
    }
];

// 客户评价数据
const reviewsData = [
    {
        id: 1,
        name: '小芳',
        role: '新娘',
        avatar: '小',
        stars: 5,
        text: '光影摄影师非常专业，拍摄过程中很舒适自在，最终呈现的照片超级满意，每一张都是我喜欢的风格！'
    },
    {
        id: 2,
        name: '王先生',
        role: '企业主',
        avatar: '王',
        stars: 5,
        text: '商品拍摄效果出众，打光和构图都很专业，大大提升了我们产品的视觉效果，强烈推荐！'
    },
    {
        id: 3,
        name: '李女士',
        role: '模特',
        avatar: '李',
        stars: 5,
        text: '摄影师很有想法，能够快速理解我的需求，拍出来的照片既自然又有故事感，合作愉快！'
    },
    {
        id: 4,
        name: '张家一家',
        role: '家庭客户',
        avatar: '张',
        stars: 5,
        text: '全家人都很满意，摄影师很耐心，孩子们都很放松，记录下了最温暖的家庭时刻。'
    }
];

let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredData = [];

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio('all');
    renderServices();
    renderReviews();
    setupEventListeners();
    loadTheme();
    setMinDate();
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

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 暗黑模式切换
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // 搜索功能
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // 预约表单
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', handleBooking);

    // 服务类型选择更新价格
    document.getElementById('serviceType').addEventListener('change', updatePrice);

    // 联系表单
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContact);

    // 邮件订阅
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', handleNewsletter);
}

// 渲染作品集
function renderPortfolio(filter) {
    currentFilter = filter;
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (filter === 'all') {
        filteredData = portfolioData;
    } else {
        filteredData = portfolioData.filter(item => item.category === filter);
    }

    portfolioGrid.innerHTML = '';

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

// 渲染服务套餐
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';

    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.name}</h3>
            <div class="service-price">¥${service.price}</div>
            <p class="service-description">${service.description}</p>
            <p style="color: var(--light-text); margin-bottom: 1rem;"><i class="fas fa-clock"></i> ${service.duration}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        servicesGrid.appendChild(card);
    });
}

// 渲染客户评价
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = '';

    reviewsData.forEach(review => {
        const stars = '★'.repeat(review.stars) + '☆'.repeat(5 - review.stars);
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-stars">${stars}</div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">
                <div class="review-avatar">${review.avatar}</div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <p>${review.role}</p>
                </div>
            </div>
        `;
        reviewsGrid.appendChild(card);
    });
}

// 更新预约价格
function updatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const service = servicesData.find(s => s.name.includes(serviceType) || s.name === serviceType.charAt(0).toUpperCase() + serviceType.slice(1));
    
    if (service) {
        document.getElementById('estimatedPrice').textContent = `¥${service.price}`;
    } else {
        document.getElementById('estimatedPrice').textContent = '¥0';
    }
}

// 设置最小日期为今天
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').setAttribute('min', today);
}

// 处理预约提交
function handleBooking(e) {
    e.preventDefault();
    
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const email = document.getElementById('clientEmail').value;
    const serviceType = document.getElementById('serviceType').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    
    // 基础验证
    if (!name || !phone || !email || !serviceType || !date || !time) {
        alert('请填写所有必填项！');
        return;
    }
    
    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址！');
        return;
    }
    
    // 电话验证
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('请输入有效的手机号码！');
        return;
    }
    
    // 预约成功
    alert(`预约成功！\n\n服务类型：${serviceType}\n拍摄日期：${date}\n拍摄时间：${time}\n\n我们会在24小时内通过邮箱和电话向您确认预约详情。感谢您的选择！`);
    
    // 记录到本地存储
    const booking = {
        name, phone, email, serviceType, date, time,
        timestamp: new Date().toLocaleString()
    };
    
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // 重置表单
    document.getElementById('bookingForm').reset();
    updatePrice();
}

// 处理联系表单
function handleContact(e) {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快回复您。');
    document.getElementById('contactForm').reset();
}

// 处理邮件订阅
function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`感谢订阅！我们会将最新的摄影作品和优惠信息发送到 ${email}`);
    e.target.reset();
}

// 执行搜索
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) {
        renderPortfolio('all');
        return;
    }
    
    const searchResults = portfolioData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    
    if (searchResults.length === 0) {
        alert('未找到匹配的作品，请尝试其他搜索词。');
        return;
    }
    
    filteredData = searchResults;
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';
    
    searchResults.forEach((item, index) => {
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

// 暗黑模式切换
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // 更新图标
    const icon = document.querySelector('.theme-toggle i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// 加载主题
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.theme-toggle i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// 页面卸载时保存数据
window.addEventListener('beforeunload', () => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    console.log('已保存的预约数据：', bookings);
});