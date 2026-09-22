/**
 * Сеть частных детских садов «ЗАЙКА» (Алматы)
 * Точные данные из официального Instagram @zaikasadik.kz
 */

const BRANCHES = [
  {
    id: 'hodzhanova',
    num: 5,
    name: 'Филиал ул. Ходжанова, 5В',
    titleFull: 'Филиал «Зайка» ул. Ходжанова, 5В',
    rating: '10.0',
    district: 'bostandyk',
    districtName: 'Бостандыкский район (рядом с Аль-Фараби)',
    address: 'ул. Ходжанова, 5В (ЖК Rams Luxury)',
    landmark: 'рядом с Аль-Фараби, Бостандыкский район',
    hours: 'с 7:30 до 19:00',
    food: 'Сбалансированное 5-разовое питание',
    slogan: 'Современные знания для счастливого будущего! ♡',
    hasSaltCave: true,
    hasPool: false,
    commercialPrice: 185000,
    voucherPrice: 135000,
    annualFee: 40000,
    image: 'images/branch_hodzhanova.jpg',
    methodology: 'ГОСО, Shichida, STEAM, нейроподход',
    program: [
      { name: 'Английский язык', freq: '2 раза/нед', icon: '🇬🇧' },
      { name: 'Казахский язык', freq: '2 раза/нед', icon: '🇰🇿' },
      { name: 'Хореография', freq: '2 раза/нед', icon: '🩰' },
      { name: 'Айкидо', freq: '2 раза/нед', icon: '🥋' },
      { name: 'Музыка', freq: '2 раза/нед', icon: '🎵' },
      { name: 'Основы этикета', freq: '1 раз/нед', icon: '💖' },
      { name: 'Нейрохайкинг', freq: '2 раза/нед', icon: '🧠' },
      { name: 'Нейро-физминутки', freq: 'ежедневно', icon: '⚡' },
      { name: 'Финансовая грамотность', freq: '1 раз/нед', icon: '📊' },
      { name: 'Соляная шахта (галотерапия)', freq: 'включено', icon: '🧂' }
    ],
    extraSections: [
      { name: 'Шахматы', icon: '♟️' },
      { name: 'Робототехника', icon: '⚙️' },
      { name: 'Арт крафт', icon: '🎨' },
      { name: 'Логопед', icon: '💬' },
      { name: 'Художественная гимнастика', icon: '🎗️' }
    ],
    lat: 43.2188,
    lng: 76.9242,
    mapQuery: 'Алматы Ходжанова 5в Rams Luxury детский сад Зайка',
    yandexQuery: 'Алматы Ходжанова 5в'
  },
  {
    id: 'bayanaul',
    num: 4,
    name: 'Филиал мкр-н Баянауыл, 56',
    titleFull: 'Филиал «Зайка» мкр-н Баянауыл, 56',
    rating: '9.8',
    district: 'auezov',
    districtName: 'Ауэзовский район (рядом ТЦ Car City)',
    address: 'мкр-н Баянауыл, 56',
    landmark: 'рядом ТЦ Car City, Толе би — Яссауи',
    hours: 'с 8:00 до 19:00',
    food: 'Сбалансированное 5-разовое питание',
    slogan: 'Заботимся о всестороннем развитии вашего ребёнка! ♡',
    hasSaltCave: true,
    hasPool: true,
    commercialPrice: 145000,
    voucherPrice: 95000,
    annualFee: 40000,
    image: 'images/branch_bayanaul.jpg',
    methodology: 'ГОСО, Shichida, STEAM, нейроподход',
    program: [
      { name: 'Английский язык', freq: '2 раза/нед', icon: '🇬🇧' },
      { name: 'Казахский язык', freq: '2 раза/нед', icon: '🇰🇿' },
      { name: 'Хореография', freq: '2 раза/нед', icon: '🩰' },
      { name: 'Айкидо', freq: '2 раза/нед', icon: '🥋' },
      { name: 'Музыка', freq: '2 раза/нед', icon: '🎵' },
      { name: 'Основы этикета', freq: '1 раз/нед', icon: '💖' },
      { name: 'Нейрохайкинг', freq: '2 раза/нед', icon: '🧠' },
      { name: 'Нейро-физминутки', freq: 'ежедневно', icon: '⚡' },
      { name: 'Финансовая грамотность', freq: '1 раз/нед', icon: '📊' },
      { name: 'Соляная шахта (галотерапия)', freq: 'включено', icon: '🧂' }
    ],
    extraSections: [
      { name: 'Бассейн (индивидуально/группы)', icon: '🏊' },
      { name: 'Шахматы', icon: '♟️' },
      { name: 'Художественная гимнастика', icon: '🎗️' },
      { name: 'Робототехника', icon: '⚙️' },
      { name: 'Арт крафт', icon: '🎨' },
      { name: 'Логопед', icon: '💬' }
    ],
    lat: 43.2468,
    lng: 76.8295,
    mapQuery: 'Алматы микрорайон Баянаул 56 детский сад Зайка',
    yandexQuery: 'Алматы микрорайон Баянаул 56'
  },
  {
    id: 'kozhamkulova',
    num: 3,
    name: 'Филиал ул. Кожамкулова, 149',
    titleFull: 'Филиал «Зайка» ул. Кожамкулова, 149',
    rating: '9.9',
    district: 'almaly',
    districtName: 'Алмалинский район (угол ул. Гоголя / набережная)',
    address: 'ул. Кожамкулова, 149',
    landmark: 'угол улицы Гоголя, набережная реки Есентай',
    hours: 'с 7:30 до 19:00',
    food: 'Сбалансированное 5-разовое питание',
    slogan: 'Знания. Навыки. Счастливое детство ♡',
    hasSaltCave: false,
    hasPool: false,
    commercialPrice: 175000,
    voucherPrice: 125000,
    annualFee: 40000,
    image: 'images/branch_kozhamkulova.jpg',
    methodology: 'ГОСО, Shichida, STEAM, нейроподход',
    program: [
      { name: 'Английский язык', freq: '2 раза/нед', icon: '🇬🇧' },
      { name: 'Казахский язык', freq: '2 раза/нед', icon: '🇰🇿' },
      { name: 'Хореография', freq: '2 раза/нед', icon: '🩰' },
      { name: 'Айкидо', freq: '2 раза/нед', icon: '🥋' },
      { name: 'Музыка', freq: '2 раза/нед', icon: '🎵' },
      { name: 'Основы этикета', freq: '1 раз/нед', icon: '💖' },
      { name: 'Нейрохайкинг', freq: '2 раза/нед', icon: '🧠' },
      { name: 'Нейро-физминутки', freq: 'ежедневно', icon: '⚡' },
      { name: 'Финансовая грамотность', freq: '1 раз/нед', icon: '📊' }
    ],
    extraSections: [
      { name: 'Шахматы', icon: '♟️' },
      { name: 'Гончарное мастерство', icon: '🏺' },
      { name: 'Робототехника', icon: '⚙️' },
      { name: 'Арт крафт', icon: '🎨' },
      { name: 'Логопед', icon: '💬' }
    ],
    lat: 43.2505,
    lng: 76.9192,
    mapQuery: 'Алматы Кожамкулова 149 детский сад Зайка',
    yandexQuery: 'Алматы Кожамкулова 149'
  },
  {
    id: 'amanzhol',
    num: 2,
    name: 'Филиал ул. Аманжол, 6',
    titleFull: 'Филиал «Зайка» ул. Аманжол, 6 (мкр. Мамыр)',
    rating: '10.0',
    district: 'auezov',
    districtName: 'Ауэзовский район (Момышулы — Шаляпина)',
    address: 'ул. Аманжол, дом 6 (бывш. Пригородная)',
    landmark: 'Момышулы — Шаляпина, мкр. Мамыр',
    hours: 'с 7:30 до 19:00',
    food: 'Сбалансированное 5-разовое питание',
    slogan: 'Больше возможностей для развития и здоровья! ♡',
    hasSaltCave: true,
    hasPool: true,
    commercialPrice: 160000,
    voucherPrice: 110000,
    annualFee: 40000,
    image: 'images/branch_amanzhol.jpg',
    methodology: 'ГОСО, Shichida, STEAM, нейроподход',
    program: [
      { name: 'Английский язык', freq: '2 раза/нед', icon: '🇬🇧' },
      { name: 'Казахский язык', freq: '2 раза/нед', icon: '🇰🇿' },
      { name: 'Хореография', freq: '2 раза/нед', icon: '🩰' },
      { name: 'Айкидо', freq: '2 раза/нед', icon: '🥋' },
      { name: 'Музыка', freq: '2 раза/нед', icon: '🎵' },
      { name: 'Основы этикета', freq: '1 раз/нед', icon: '💖' },
      { name: 'Нейрохайкинг', freq: '2 раза/нед', icon: '🧠' },
      { name: 'Нейро-физминутки', freq: 'ежедневно', icon: '⚡' },
      { name: 'Финансовая грамотность', freq: '1 раз/нед', icon: '📊' },
      { name: 'Соляная шахта (галотерапия)', freq: 'включено', icon: '🧂' }
    ],
    extraSections: [
      { name: 'Бассейн (индивидуально/группы)', icon: '🏊' },
      { name: 'Шахматы', icon: '♟️' },
      { name: 'Художественная гимнастика', icon: '🎗️' },
      { name: 'Робототехника', icon: '⚙️' },
      { name: 'Арт крафт', icon: '🎨' },
      { name: 'Логопед', icon: '💬' }
    ],
    lat: 43.2162,
    lng: 76.8432,
    mapQuery: 'Алматы Аманжол 6 детский сад Зайка',
    yandexQuery: 'Алматы Аманжол 6'
  },
  {
    id: 'markova',
    num: 1,
    name: 'Филиал ул. Маркова, 9',
    titleFull: 'Филиал «Зайка» ул. Маркова, 9',
    rating: '10.0',
    district: 'bostandyk',
    districtName: 'Бостандыкский район (выше бульвара Бухар Жырау)',
    address: 'ул. Маркова, дом 9',
    landmark: 'выше бульвара Бухар Жырау (Ботанический)',
    hours: 'с 7:30 до 19:00',
    food: 'Сбалансированное 5-разовое питание',
    slogan: 'Гармоничное развитие в каждой детали ♡',
    hasSaltCave: false,
    hasPool: false,
    commercialPrice: 185000,
    voucherPrice: 135000,
    annualFee: 40000,
    image: 'images/branch_markova.jpg',
    methodology: 'ГОСО, Shichida, STEAM, нейроподход',
    program: [
      { name: 'Английский язык', freq: '2 раза/нед', icon: '🇬🇧' },
      { name: 'Казахский язык', freq: '2 раза/нед', icon: '🇰🇿' },
      { name: 'Хореография', freq: '2 раза/нед', icon: '🩰' },
      { name: 'Айкидо', freq: '2 раза/нед', icon: '🥋' },
      { name: 'Музыка', freq: '2 раза/нед', icon: '🎵' },
      { name: 'Основы этикета', freq: '1 раз/нед', icon: '💖' },
      { name: 'Нейрохайкинг', freq: '2 раза/нед', icon: '🧠' },
      { name: 'Нейро-физминутки', freq: 'ежедневно', icon: '⚡' },
      { name: 'Финансовая грамотность', freq: '1 раз/нед', icon: '📊' }
    ],
    extraSections: [
      { name: 'Шахматы', icon: '♟️' },
      { name: 'Гончарное мастерство', icon: '🏺' },
      { name: 'Художественная гимнастика', icon: '🎗️' },
      { name: 'Робототехника', icon: '⚙️' },
      { name: 'Арт крафт', icon: '🎨' },
      { name: 'Логопед', icon: '💬' }
    ],
    lat: 43.2285,
    lng: 76.9452,
    mapQuery: 'Алматы Маркова 9 детский сад Зайка',
    yandexQuery: 'Алматы Маркова 9'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderBranchesList('all');
  initFilterControls();
  initCalculator();
  initModals();
  initPhoneMasks();
  initForms();
  initMobileMenu();
  initFAQ();
  initBranchMap();
  initHeroVideoPerformance();
});

// Рендеринг карточек филиалов с точными услугами из Instagram
function renderBranchesList(districtFilter = 'all') {
  const container = document.getElementById('branches-grid');
  if (!container) return;

  const filtered = districtFilter === 'all' 
    ? BRANCHES 
    : BRANCHES.filter(b => b.district === districtFilter);

  container.innerHTML = filtered.map(branch => `
    <div class="b-cardKindergarten overflow-hidden flex flex-col justify-between">
      
      <!-- Фото филиала в стиле Sun School с зайчиком и тематикой -->
      <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 group cursor-pointer" onclick="openBranchModal('${branch.id}')">
        <img src="${branch.image}" alt="${branch.name}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15"></div>
        
        <!-- Верхние бейджи -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span class="px-3 py-1 rounded-full bg-white/95 text-[11px] font-black text-[#F24469] shadow-sm">
            Филиал №${branch.num}
          </span>
          <div class="b-tag_rating shrink-0 shadow-sm bg-white/95">
            ★ ${branch.rating}
          </div>
        </div>

        <!-- Нижняя плашка со слоганом на фото -->
        <div class="absolute bottom-2.5 left-3 right-3">
          <span class="text-[11px] font-bold text-white drop-shadow-md flex items-center gap-1.5">
            <span class="text-[#FFB300]">✨</span> ${branch.slogan}
          </span>
        </div>
      </div>

      <!-- Тело карточки с отступами -->
      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-black text-[#002855] leading-snug mb-3 cursor-pointer hover:text-[#F24469] transition" onclick="openBranchModal('${branch.id}')">
            ${branch.name}
          </h3>

          <!-- Характеристики: часы, питание, адрес -->
          <div class="grid grid-cols-2 gap-2 mb-3.5">
            <div class="p-2 bg-[#FFF8F0] rounded-xl border border-orange-100/80 text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
              <span>⏰</span>
              <span>${branch.hours}</span>
            </div>
            <div class="p-2 bg-[#FFF0F4] rounded-xl border border-pink-100/80 text-[11px] font-bold text-[#F24469] flex items-center gap-1.5">
              <span>🍲</span>
              <span>5-разовое питание</span>
            </div>
          </div>

          <div class="text-xs text-slate-600 space-y-1 mb-3.5">
            <div class="flex items-start gap-1.5 font-medium">
              <span class="text-[#F24469] font-bold">📍</span>
              <span>${branch.address} <span class="text-slate-400">(${branch.landmark})</span></span>
            </div>
            <div class="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
              🎓 Методика: ${branch.methodology}
            </div>
          </div>

          <!-- Мини-список включенных услуг (как на плакатах инсты) -->
          <div class="mb-4 bg-[#F9F8F5] p-3 rounded-2xl border border-slate-200/60">
            <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
              <span>📖</span> Включено в абонемент:
            </div>
            <div class="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
              <div>🇬🇧 Английский — 2 р/нед</div>
              <div>🇰🇿 Казахский — 2 р/нед</div>
              <div>🩰 Хореография — 2 р/нед</div>
              <div>🥋 Айкидо — 2 р/нед</div>
              <div>🧠 Нейрохайкинг — 2 р/нед</div>
              <div>⚡ Нейро-физминутки</div>
              ${branch.hasSaltCave ? '<div class="text-emerald-700 font-bold">🧂 Соляная шахта</div>' : ''}
              ${branch.hasPool ? '<div class="text-[#00B4D8] font-bold">🏊 Собственный бассейн</div>' : ''}
            </div>
          </div>

          <!-- Дополнительные секции -->
          <div class="mb-4">
            <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <span>🧩</span> Доп. секции филиала:
            </div>
            <div class="flex flex-wrap gap-1">
              ${branch.extraSections.map(s => `
                <span class="px-2 py-0.5 bg-white rounded-lg border border-slate-200 text-[10px] font-bold text-slate-700">
                  ${s.icon} ${s.name}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Тариф и кнопки действия -->
        <div class="pt-3.5 border-t border-slate-100">
          <div class="flex items-baseline justify-between mb-3.5">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">По гос. ваучеру DamuBala</span>
              <span class="text-2xl font-black text-[#002855]">${branch.voucherPrice.toLocaleString()} ₸</span>
              <span class="text-xs text-slate-500">/ мес</span>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-400 line-through block">${branch.commercialPrice.toLocaleString()} ₸</span>
              <span class="b-tag_greenLight">Ваучер -50 000 ₸</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button onclick="openTourModal('${branch.titleFull}')" class="b-btn b-btn_pink py-3 text-xs sm:text-sm font-bold">
              <span>Записаться</span>
            </button>
            <button onclick="openBranchModal('${branch.id}')" class="b-btn b-btn_pinkPrimary py-3 text-xs sm:text-sm font-bold">
              <span>Подробнее</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  `).join('');
}

function initFilterControls() {
  const districtSelect = document.getElementById('select-district-filter');
  if (districtSelect) {
    districtSelect.addEventListener('change', (e) => {
      renderBranchesList(e.target.value);
    });
  }
}

function filterByDistrict(district) {
  const select = document.getElementById('select-district-filter');
  if (select) select.value = district;
  renderBranchesList(district);
  
  document.querySelectorAll('.filter-pill').forEach(btn => {
    if (btn.dataset.district === district) {
      btn.className = 'filter-pill px-4 py-2 rounded-full text-xs font-bold bg-[#F24469] text-white shadow-sm transition';
    } else {
      btn.className = 'filter-pill px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition';
    }
  });
}

function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  if (!document.querySelector('.modal-overlay.active')) {
    document.body.style.overflow = '';
  }
}

function openTourModal(branchName = '') {
  const branchSelect = document.getElementById('tour-branch-select');
  if (branchSelect && branchName) {
    for (let option of branchSelect.options) {
      if (option.text.includes(branchName) || branchName.includes(option.value)) {
        option.selected = true;
        break;
      }
    }
  }
  openModal('modal-tour');
}

// Детальное модальное окно филиала с точным оформлением в стиле Instagram постера
function openBranchModal(branchId) {
  const branch = BRANCHES.find(b => b.id === branchId);
  if (!branch) return;

  const content = document.getElementById('branch-modal-content');
  if (!content) return;

  content.innerHTML = `
    <!-- Постер филиала в стиле Instagram Stories -->
    <div class="p-6 sm:p-8 bg-[#FFFDF7] rounded-3xl border-2 border-orange-200 shadow-sm relative overflow-hidden">
      
      <!-- Тематический 3D баннер филиала с зайчиком -->
      <div class="relative h-48 sm:h-60 rounded-2xl overflow-hidden mb-4 shadow-sm border border-orange-200/80 group">
        <img src="${branch.image}" alt="${branch.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        
        <div class="absolute top-3 right-3 b-tag_rating shadow-md bg-white/95">
          ★ ${branch.rating}
        </div>
        
        <div class="absolute bottom-3 left-3 right-3 text-white">
          <span class="text-[10px] font-black uppercase tracking-wider text-pink-300 block">Филиал «Зайка» №${branch.num}</span>
          <h2 class="text-xl sm:text-2xl font-black leading-tight text-white drop-shadow">${branch.name}</h2>
          <p class="text-xs text-slate-200 mt-0.5 font-medium">📍 ${branch.address} (${branch.landmark})</p>
        </div>
      </div>

      <div class="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-bold text-amber-900 mb-6 flex items-center gap-2">
        <span>✨</span>
        <span>${branch.slogan}</span>
      </div>

      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="p-3 bg-white rounded-2xl border border-slate-200 text-xs">
          <span class="text-slate-400 block text-[10px] font-extrabold uppercase">Режим работы</span>
          <span class="text-slate-800 font-black text-sm">${branch.hours}</span>
        </div>
        <div class="p-3 bg-white rounded-2xl border border-slate-200 text-xs">
          <span class="text-slate-400 block text-[10px] font-extrabold uppercase">Питание</span>
          <span class="text-[#F24469] font-black text-sm">${branch.food}</span>
        </div>
      </div>

      <!-- Блок 1: Обучение по госпрограмме и авторским методикам -->
      <div class="mb-6 bg-white rounded-2xl p-5 border border-slate-200">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <h4 class="text-sm font-black text-[#002855] flex items-center gap-2">
            <span>📖</span>
            <span>Обучение по госпрограмме и авторским методикам</span>
          </h4>
          <span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-full">В абонементе</span>
        </div>

        <div class="text-[11px] font-bold text-emerald-800 bg-emerald-50/70 p-2.5 rounded-xl mb-3">
          🎓 Методология: <b>${branch.methodology}</b>
        </div>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          ${branch.program.map(p => `
            <li class="flex items-center justify-between p-2 rounded-xl bg-[#F9F8F5]">
              <span class="font-medium flex items-center gap-1.5">${p.icon} ${p.name}</span>
              <span class="font-black text-[#002855] text-[11px]">${p.freq}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Блок 2: Также есть дополнительные секции -->
      <div class="mb-6 bg-white rounded-2xl p-5 border border-slate-200">
        <h4 class="text-sm font-black text-[#002855] mb-3 flex items-center gap-2">
          <span>🧩</span>
          <span>Также есть дополнительные секции в филиале:</span>
        </h4>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          ${branch.extraSections.map(s => `
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-bold text-slate-800 flex items-center gap-2">
              <span class="text-base">${s.icon}</span>
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Тарифный блок -->
      <div class="p-5 bg-[#FDF0F3] border border-[#F24469]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#F24469] block">Цена с гос. ваучером DamuBala</span>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-[#002855]">${branch.voucherPrice.toLocaleString()} ₸</span>
            <span class="text-xs text-slate-500">/ месяц</span>
          </div>
          <span class="text-xs text-slate-500 block mt-0.5">Коммерческий тариф: ${branch.commercialPrice.toLocaleString()} ₸ (скидка 50 000 ₸)</span>
        </div>

        <button onclick="closeModal('modal-branch'); openTourModal('${branch.titleFull}');" class="b-btn b-btn_pink px-6 py-3.5 text-xs sm:text-sm font-black shrink-0 w-full sm:w-auto">
          <span>Записаться в этот филиал</span>
        </button>
      </div>

      <div class="flex justify-between items-center text-xs text-slate-500 pt-4 mt-4 border-t border-slate-200">
        <span>Счастливое детство начинается здесь! ♡</span>
        <a href="https://2gis.kz/almaty/search/${encodeURIComponent(branch.mapQuery)}" target="_blank" class="text-[#00B4D8] font-black hover:underline flex items-center gap-1">
          <span>Маршрут в 2GIS</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>

    </div>
  `;

  openModal('modal-branch');
}

function initCalculator() {
  const branchSelect = document.getElementById('calc-branch');
  const ageRadios = document.querySelectorAll('input[name="calc-age"]');

  function calculate() {
    if (!branchSelect) return;
    const branchId = branchSelect.value;
    const branch = BRANCHES.find(b => b.id === branchId) || BRANCHES[0];
    
    let isVoucherEligible = true;
    const selectedAge = document.querySelector('input[name="calc-age"]:checked');
    if (selectedAge && selectedAge.value === 'under2') {
      isVoucherEligible = false;
    }

    const commPriceEl = document.getElementById('calc-comm-price');
    const voucherDiscountEl = document.getElementById('calc-voucher-discount');
    const finalPriceEl = document.getElementById('calc-final-price');
    const noteEl = document.getElementById('calc-note');

    const discount = isVoucherEligible ? 50000 : 0;
    const finalPrice = isVoucherEligible ? branch.voucherPrice : branch.commercialPrice;

    if (commPriceEl) commPriceEl.textContent = `${branch.commercialPrice.toLocaleString()} ₸`;
    if (voucherDiscountEl) voucherDiscountEl.textContent = isVoucherEligible ? `- 50 000 ₸` : `0 ₸`;
    if (finalPriceEl) finalPriceEl.textContent = `${finalPrice.toLocaleString()} ₸`;

    if (noteEl) {
      if (isVoucherEligible) {
        noteEl.innerHTML = `🌟 <b>Гос. ваучер активен:</b> По программе DamuBala государство оплачивает <b>50 000 ₸</b> в месяц. Ваша цена: <b>${finalPrice.toLocaleString()} ₸</b>.`;
        noteEl.className = 'text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200';
      } else {
        noteEl.innerHTML = `👶 Для малышей до 2 лет действует ясельный формат с индивидуальным присмотром. С 2 лет автоматически подключается гос. субсидия 50 000 ₸.`;
        noteEl.className = 'text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200';
      }
    }
  }

  if (branchSelect) branchSelect.addEventListener('change', calculate);
  ageRadios.forEach(radio => radio.addEventListener('change', calculate));

  calculate();
}

function initForms() {
  const tourForm = document.getElementById('tour-form');
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('tour-name').value.trim();
      const phone = document.getElementById('tour-phone').value.trim();
      const branch = document.getElementById('tour-branch-select').value;
      const childAge = document.getElementById('tour-age').value.trim();
      const date = document.getElementById('tour-date').value;

      if (!name || !phone) {
        alert('Пожалуйста, укажите имя и телефон.');
        return;
      }

      const message = `👋 Здравствуйте! Заявка на экскурсию в детский сад «Зайка»:\n\n` +
        `👤 Родитель: ${name}\n` +
        `📞 Телефон: ${phone}\n` +
        `🏫 Филиал: ${branch}\n` +
        `👶 Возраст ребенка: ${childAge || 'Не указан'}\n` +
        `📅 Желаемая дата: ${date || 'В ближайшие дни'}`;

      const waUrl = `https://wa.me/77001360606?text=${encodeURIComponent(message)}`;
      closeModal('modal-tour');
      showSuccessToast('Заявка принята! Перенаправляем в WhatsApp к заведующей...');
      setTimeout(() => window.open(waUrl, '_blank'), 800);
    });
  }

  const selectionForm = document.getElementById('selection-form');
  if (selectionForm) {
    selectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('selection-name').value.trim();
      const phone = document.getElementById('selection-phone').value.trim();
      const email = document.getElementById('selection-email').value.trim();

      if (!phone) {
        alert('Пожалуйста, введите ваш номер телефона.');
        return;
      }

      const message = `👋 Здравствуйте! Прошу подобрать детский сад «Зайка» для ребенка:\n\n` +
        `👤 Имя: ${name || 'Родитель'}\n` +
        `📞 Телефон: ${phone}\n` +
        `📧 Email: ${email || 'Не указан'}`;

      const waUrl = `https://wa.me/77001360606?text=${encodeURIComponent(message)}`;
      showSuccessToast('Спасибо! Мы уже подбираем для вас подходящий филиал.');
      setTimeout(() => window.open(waUrl, '_blank'), 800);
    });
  }

  const bookForm = document.getElementById('book-form');
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const email = document.getElementById('book-email').value.trim();

      if (!phone) {
        alert('Пожалуйста, введите телефон.');
        return;
      }

      const message = `👋 Здравствуйте! Хочу получить бесплатное руководство по адаптации ребенка в садик «Зайка».\n` +
        `👤 Имя: ${name}\n` +
        `📞 Телефон: ${phone}\n` +
        `📧 Email: ${email}`;

      const waUrl = `https://wa.me/77001360606?text=${encodeURIComponent(message)}`;
      showSuccessToast('Отправляем вам руководство в WhatsApp!');
      setTimeout(() => window.open(waUrl, '_blank'), 800);
    });
  }
}

function initPhoneMasks() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.startsWith('8')) val = '7' + val.substring(1);
      if (!val.startsWith('7')) val = '7' + val;

      let formatted = '+7';
      if (val.length > 1) formatted += ' (' + val.substring(1, 4);
      if (val.length >= 5) formatted += ') ' + val.substring(4, 7);
      if (val.length >= 8) formatted += '-' + val.substring(7, 9);
      if (val.length >= 10) formatted += '-' + val.substring(9, 11);
      e.target.value = formatted;
    });
  });
}

function showSuccessToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 bg-[#002855] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#F24469] max-w-md';
  toast.innerHTML = `
    <span class="text-2xl">🐰</span>
    <div>
      <p class="text-xs text-[#F24469] font-extrabold uppercase tracking-wider">Сеть садиков Зайка</p>
      <p class="text-sm font-medium">${message}</p>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !answer.classList.contains('hidden');

      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isOpen) {
        answer.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

function openGalleryModal(imgSrc, title = '') {
  const img = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  if (img) img.src = imgSrc;
  if (caption) caption.textContent = title;
  openModal('modal-lightbox');
}

// ==========================================================================
// ИНТЕРАКТИВНАЯ КАРТА 5 ФИЛИАЛОВ (LEAFLET + КАРТЫ ЯНДЕКС И 2GIS)
// ==========================================================================
let branchMap = null;
let branchMarkers = {};
let currentMapMode = 'interactive';

function initBranchMap() {
  const mapContainer = document.getElementById('interactive-map');
  if (!mapContainer) return;

  if (typeof L === 'undefined') {
    console.warn('Leaflet библиотека еще загружается...');
    setTimeout(initBranchMap, 300);
    return;
  }

  // Создаем карту 2ГИС с центром в Алматы
  branchMap = L.map('interactive-map', {
    center: [43.235, 76.885],
    zoom: 12,
    minZoom: 10,
    maxZoom: 17,
    scrollWheelZoom: false
  });

  // Официальные светлые тайлы 2ГИС (Алматы)
  L.tileLayer('https://tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1', {
    subdomains: ['0', '1', '2', '3'],
    attribution: 'Данные карты &copy; <a href="https://2gis.kz/almaty" target="_blank" rel="noopener" class="font-bold text-[#00A86B]">2ГИС</a>',
    maxZoom: 17,
    minZoom: 10
  }).addTo(branchMap);

  // Добавляем фирменные маркеры с зайчиками
  BRANCHES.forEach(branch => {
    if (!branch.lat || !branch.lng) return;

    const bunnyIcon = L.divIcon({
      className: 'custom-bunny-div-icon',
      html: `
        <div class="custom-bunny-pin-wrap" title="${branch.name}">
          <div class="custom-bunny-pulse"></div>
          <div class="custom-bunny-body">
            <span style="font-size: 20px; line-height: 1;">🐰</span>
            <div class="custom-bunny-badge">${branch.num}</div>
          </div>
          <div class="custom-bunny-arrow"></div>
        </div>
      `,
      iconSize: [46, 54],
      iconAnchor: [23, 52],
      popupAnchor: [0, -50]
    });

    // Всплывающее окно в стиле Sun School с интеграцией 2ГИС
    const popupContent = `
      <div class="p-3.5 max-w-[280px] font-sans">
        <div class="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
          <img src="${branch.image}" alt="${branch.name}" class="w-full h-full object-cover">
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 text-[10px] font-black text-[#F24469] shadow-xs">
            Филиал №${branch.num}
          </span>
          <span class="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/95 text-[10px] font-bold text-[#00A86B] shadow-xs flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-[#00A86B]"></span> 2ГИС ★ ${branch.rating}
          </span>
        </div>

        <h4 class="text-sm font-black text-[#002855] leading-snug mb-1">
          ${branch.name}
        </h4>
        <p class="text-[11px] text-slate-500 font-medium mb-2.5">
          📍 ${branch.address}
        </p>

        <div class="flex flex-wrap gap-1 mb-3">
          ${branch.hasPool ? '<span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[9px] font-bold">🏊 Бассейн</span>' : ''}
          ${branch.hasSaltCave ? '<span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[9px] font-bold">🧂 Соляная шахта</span>' : ''}
          <span class="px-2 py-0.5 rounded bg-pink-50 text-pink-700 text-[9px] font-bold">🇬🇧 Английский</span>
        </div>

        <div class="grid grid-cols-2 gap-2 mb-2">
          <a href="https://2gis.kz/almaty/search/${encodeURIComponent(branch.mapQuery)}" target="_blank" class="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#00A86B] hover:bg-[#008f5a] text-white text-[11px] font-extrabold shadow-xs transition">
            <span>🗺️ 2ГИС</span>
          </a>
          <a href="https://yandex.kz/maps/162/almaty/search/${encodeURIComponent(branch.yandexQuery || branch.mapQuery)}" target="_blank" class="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#FC3F1D] hover:bg-[#E03212] text-white text-[11px] font-extrabold shadow-xs transition">
            <span>Яндекс.Карты</span>
          </a>
        </div>

        <button onclick="openTourModal('${branch.id}')" class="w-full py-2 bg-[#F24469] hover:bg-[#D83155] text-white text-center rounded-xl text-[11px] font-extrabold shadow-xs transition">
          Записаться на экскурсию
        </button>
      </div>
    `;

    const marker = L.marker([branch.lat, branch.lng], { icon: bunnyIcon }).addTo(branchMap);
    marker.bindPopup(popupContent, { maxWidth: 320 });
    branchMarkers[branch.id] = marker;
  });

  setTimeout(() => {
    if (branchMap) branchMap.invalidateSize();
    if (window.lucide) lucide.createIcons();
  }, 400);
}

function focusBranchMap(branchId) {
  // Обновляем активную кнопку-фильтр
  document.querySelectorAll('.map-branch-pill').forEach(btn => {
    if (btn.dataset.branchPill === branchId) {
      btn.className = 'map-branch-pill px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#002855] text-white shadow-xs transition';
    } else {
      btn.className = 'map-branch-pill px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-pink-50 hover:text-[#F24469] border border-slate-200 transition';
    }
  });

  // Плавный скролл к блоку карты при клике из списка контактов
  const mapSec = document.getElementById('branch-map-section');
  if (mapSec) {
    const rect = mapSec.getBoundingClientRect();
    if (rect.top < 80 || rect.bottom > window.innerHeight) {
      mapSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Если открыт режим Яндекс.Карт
  if (currentMapMode === 'yandex') {
    const iframe = document.getElementById('yandex-map-iframe');
    if (branchId === 'all') {
      iframe.src = 'https://yandex.kz/map-widget/v1/?ll=76.885000,43.235000&z=12&pt=76.9452,43.2285,pm2rdm1~76.8432,43.2162,pm2rdm2~76.9192,43.2505,pm2rdm3~76.8295,43.2468,pm2rdm4~76.9242,43.2188,pm2rdm5';
    } else {
      const branch = BRANCHES.find(b => b.id === branchId);
      if (branch && branch.lat && branch.lng) {
        iframe.src = `https://yandex.kz/map-widget/v1/?ll=${branch.lng},${branch.lat}&z=16&pt=${branch.lng},${branch.lat},pm2rdm${branch.num}`;
      }
    }
    return;
  }

  if (!branchMap) return;

  if (branchId === 'all') {
    const markers = Object.values(branchMarkers);
    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      branchMap.fitBounds(group.getBounds().pad(0.15), { duration: 1.2 });
    } else {
      branchMap.flyTo([43.235, 76.885], 12, { duration: 1.2 });
    }
    branchMap.closePopup();
  } else {
    const branch = BRANCHES.find(b => b.id === branchId);
    if (branch && branch.lat && branch.lng) {
      branchMap.flyTo([branch.lat, branch.lng], 15, { duration: 1.2 });
      setTimeout(() => {
        if (branchMarkers[branchId]) {
          branchMarkers[branchId].openPopup();
        }
      }, 750);
    }
  }
}

function switchMapMode(mode) {
  currentMapMode = mode;
  const btnInteractive = document.getElementById('btn-map-interactive');
  const btnYandex = document.getElementById('btn-map-yandex');
  const interactiveMap = document.getElementById('interactive-map');
  const yandexContainer = document.getElementById('yandex-map-container');
  const yandexIframe = document.getElementById('yandex-map-iframe');

  if (mode === 'yandex') {
    btnInteractive.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition text-slate-500 hover:text-[#002855]';
    btnYandex.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm bg-white text-[#002855]';
    interactiveMap.classList.add('hidden');
    yandexContainer.classList.remove('hidden');

    if (!yandexIframe.src || yandexIframe.src === '' || yandexIframe.src === window.location.href) {
      yandexIframe.src = 'https://yandex.kz/map-widget/v1/?ll=76.885000,43.235000&z=12&pt=76.9452,43.2285,pm2rdm1~76.8432,43.2162,pm2rdm2~76.9192,43.2505,pm2rdm3~76.8295,43.2468,pm2rdm4~76.9242,43.2188,pm2rdm5';
    }
  } else {
    btnInteractive.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm bg-white text-[#002855]';
    btnYandex.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition text-slate-500 hover:text-[#002855]';
    yandexContainer.classList.add('hidden');
    interactiveMap.classList.remove('hidden');

    if (branchMap) {
      setTimeout(() => branchMap.invalidateSize(), 150);
    }
  }
}

// =========================================================================
// 2GIS REVIEWS CAROUSEL (AUTO-PLAY + MANUAL DRAG & BUTTONS)
// =========================================================================
let reviewsAutoScrollTimer = null;
let isReviewsAutoScrollActive = true;

function scrollReviews(direction) {
  const track = document.getElementById('reviews-track');
  if (!track) return;
  const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 400;
  track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function startReviewsAutoScroll() {
  isReviewsAutoScrollActive = true;
  const indicator = document.getElementById('reviews-status-indicator');
  const text = document.getElementById('reviews-status-text');
  if (indicator) indicator.className = 'inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
  if (text) text.textContent = 'Автопрокрутка активна (наведите курсор, чтобы приостановить)';

  clearInterval(reviewsAutoScrollTimer);
  reviewsAutoScrollTimer = setInterval(() => {
    const track = document.getElementById('reviews-track');
    if (!track) return;
    // Проверка видимости: не скроллим, если отзывов нет в видимой области экрана
    if (document.hidden) return;
    const rect = track.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 400;
    
    // Проверка достижения конца списка
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 3500);
}

function pauseReviewsAutoScroll() {
  isReviewsAutoScrollActive = false;
  clearInterval(reviewsAutoScrollTimer);
  const indicator = document.getElementById('reviews-status-indicator');
  const text = document.getElementById('reviews-status-text');
  if (indicator) indicator.className = 'inline-block w-2 h-2 rounded-full bg-amber-400';
  if (text) text.textContent = 'Пауза (уберите курсор для возобновления)';
}

// Enable drag-to-scroll on reviews track с requestAnimationFrame
function initReviewsDraggable() {
  const track = document.getElementById('reviews-track');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let rafId = null;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    pauseReviewsAutoScroll();
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    startReviewsAutoScroll();
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  });

  // Touch events for mobile
  track.addEventListener('touchstart', () => {
    pauseReviewsAutoScroll();
  }, { passive: true });

  track.addEventListener('touchend', () => {
    setTimeout(startReviewsAutoScroll, 3000);
  }, { passive: true });

  // Start auto scroll initially
  startReviewsAutoScroll();
}

// Автоматическая пауза видео в Hero при скролле вниз для 100% плавности 60-120 FPS
function initHeroVideoPerformance() {
  const heroVideo = document.querySelector('section video');
  if (!heroVideo || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (heroVideo.paused) heroVideo.play().catch(() => {});
      } else {
        if (!heroVideo.paused) heroVideo.pause();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(heroVideo);
}

// Call on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsDraggable);
} else {
  initReviewsDraggable();
}

