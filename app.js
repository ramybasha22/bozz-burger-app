/* ============================================================
   BOZZ — APP LOGIC
   ============================================================ */

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const AR = 'ar';
const EN = 'en';

let lang = localStorage.getItem('bozz-lang') || AR;

/* ---------------- I18N ---------------- */
const I18N = {
  [AR]: {
    'nav.home': 'الرئيسية',
    'nav.menu': 'المنيو',
    'nav.deals': 'العروض',
    'nav.why': 'ليه BOZZ؟',
    'nav.location': 'الموقع',
    'nav.contact': 'تواصل معنا',
    'nav.order': 'اطلب الآن',
    'nav.openMenu': 'فتح المنيو',
    'nav.closeMenu': 'قفل المنيو',
    'hero.badge': 'مفتوح 24/7 — كل أيام الأسبوع',
    'hero.title': 'الجوع ملوش مواعيد.',
    'hero.sub': 'برجر معمول بمزاج مختلف... وطعم هيفضل في دماغك.',
    'hero.cta1': 'اطلب الآن',
    'hero.cta2': 'شاهد المنيو',
    'hero.cta3': 'اطلب عبر واتساب',
    'hero.stat1': 'برجر بريميوم',
    'hero.stat2': 'لحم طازة كل يوم',
    'hero.stat3': 'التجمع الأول — القاهرة',
    'carousel.title': 'توقيعات BOZZ',
    'carousel.sub': 'البرجر اللي مش هتخلص منه بسهولة.',
    'carousel.from': 'ابتداءً من',
    'carousel.order': 'اطلب',
    'menu.title': 'المنيو',
    'menu.sub': 'اختار برجرك، حجمك، وإضافاتك.',
    'tab.burgers': 'برجر',
    'tab.sides': 'سايدز',
    'tab.extras': 'إضافات',
    'tab.drinks': 'مشروبات',
    'menu.from': 'ابتداءً من',
    'menu.add': 'أضف للطلب',
    'menu.soon': 'قريبًا',
    'menu.soonSub': 'الأصناف دي بتجهز حاليًا... ترقب BOZZ',
    'modal.size': 'اختار الحجم',
    'modal.extra': 'إضافات',
    'modal.extraPatty': 'باتي إضافي',
    'modal.qty': 'الكمية',
    'modal.total': 'الإجمالي',
    'modal.add': 'أضف للطلب',
    'cart.title': 'أوردرك',
    'cart.empty': 'الأوردر لسه فاضي... أضف برجر وابدأ الحكاية.',
    'cart.subtotal': 'المجموع',
    'cart.checkout': 'اطلب عبر واتساب',
    'cart.clear': 'تفريغ',
    'cart.remove': 'إزالة',
    'deals.title': 'عروض تضرب في الدماغ',
    'deals.sub': 'قيم تستاهل الجوع.',
    'deal.order': 'اطلب العرض',
    's247.title': 'الجوع ملوش مواعيد.',
    's247.sub': 'BOZZ مفتوح 24 ساعة.',
    's247.cta': 'اطلب الآن',
    'why.title': 'ليه BOZZ؟',
    'why.sub': 'مش مجرد برجر... ده أسلوب حياة.',
    'why.1.t': 'طعم كبير',
    'why.1.d': 'لحم مشوي على الفحم، جبنة تذوب، وصصة سرّية... كل لدغة BOZZ.',
    'why.2.t': 'مكونات طازة',
    'why.2.d': 'خضار ولحمة طازة كل يوم، من غير مثبّتات و من غير مجاملات.',
    'why.3.t': 'الجوع ملوش مواعيد',
    'why.3.d': '24/7 — نص الليل ولا الفجر، BOZZ مستنيك دايمًا.',
    'reviews.title': 'الناس بتقول إيه؟',
    'reviews.sub': 'البراند بيتكلم عن نفسه.',
    'reviews.demo': 'DEMO',
    'location.title': 'مستنيينك في BOZZ.',
    'location.sub': 'التجمع الأول — المجاورة التاسعة — القاهرة — مصر',
    'location.hours': 'مواعيد العمل',
    'location.directions': 'اعرف الطريق',
    'location.whatsapp': 'اطلب عبر واتساب',
    'social.title': 'خليك مع BOZZ.',
    'social.sub': 'تابع آخر الأصناف والعروض.',
    'social.follow': 'تابعنا',
    'contact.title': 'جاهز للبوظة؟',
    'contact.sub': 'ابعتلنا أوردر على واتساب وخلاص... الباقي علينا.',
    'contact.cta': 'اطلب عبر واتساب',
    'footer.tag': 'طعم كبير. شخصية مختلفة.',
    'footer.open': 'مفتوح 24 ساعة',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.follow': 'السوشيال ميديا',
    'footer.rights': '© 2026 BOZZ — كل الحقوق محفوظة.',
    'footer.dev': 'تصميم وتطوير',
    'toast.added': 'اتضاف للأوردر ✓',
    'toast.addedItem': 'اتضاف للسلة',
    'a11y.langSwitch': 'تغيير اللغة',
    'a11y.cart': 'الأوردر',
    'a11y.close': 'إغلاق',
    'a11y.whatsapp': 'تواصل عبر واتساب'
  },
  [EN]: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.deals': 'Deals',
    'nav.why': 'Why BOZZ?',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.order': 'ORDER NOW',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'hero.badge': 'OPEN 24/7 — ALL WEEK',
    'hero.title': 'BOZZ YOUR HUNGER.',
    'hero.sub': 'Big Flavor. Bold Burgers. 24/7.',
    'hero.cta1': 'ORDER NOW',
    'hero.cta2': 'VIEW MENU',
    'hero.cta3': 'ORDER ON WHATSAPP',
    'hero.stat1': 'Premium Burgers',
    'hero.stat2': 'Fresh Beef Daily',
    'hero.stat3': 'First Settlement — Cairo',
    'carousel.title': 'BOZZ SIGNATURES',
    'carousel.sub': 'The ones you will not stop eating.',
    'carousel.from': 'Starting at',
    'carousel.order': 'ORDER',
    'menu.title': 'THE MENU',
    'menu.sub': 'Pick your burger, your size, your extras.',
    'tab.burgers': 'BURGERS',
    'tab.sides': 'SIDES',
    'tab.extras': 'EXTRAS',
    'tab.drinks': 'DRINKS',
    'menu.from': 'From',
    'menu.add': 'ADD TO ORDER',
    'menu.soon': 'COMING SOON',
    'menu.soonSub': 'These drops are being prepped... stay tuned to BOZZ',
    'modal.size': 'SELECT SIZE',
    'modal.extra': 'EXTRAS',
    'modal.extraPatty': 'Extra Patty',
    'modal.qty': 'QTY',
    'modal.total': 'TOTAL',
    'modal.add': 'ADD TO ORDER',
    'cart.title': 'YOUR ORDER',
    'cart.empty': 'Your order is empty... add a burger and start the story.',
    'cart.subtotal': 'SUBTOTAL',
    'cart.checkout': 'ORDER ON WHATSAPP',
    'cart.clear': 'CLEAR',
    'cart.remove': 'REMOVE',
    'deals.title': 'DEALS THAT HIT DIFFERENT',
    'deals.sub': 'Worth the hunger.',
    'deal.order': 'ORDER DEAL',
    's247.title': 'CRAVINGS DON\'T SLEEP.',
    's247.sub': 'BOZZ IS OPEN 24/7.',
    's247.cta': 'ORDER NOW',
    'why.title': 'WHY BOZZ?',
    'why.sub': 'Not just a burger... it\'s a lifestyle.',
    'why.1.t': 'BIG FLAVOR',
    'why.1.d': 'Charcoal-grilled beef, melting cheese, secret sauce... every bite of BOZZ.',
    'why.2.t': 'FRESH INGREDIENTS',
    'why.2.d': 'Veggies and beef fresh daily, no preservatives, no shortcuts.',
    'why.3.t': '24/7 CRAVINGS',
    'why.3.d': 'Midnight or sunrise, BOZZ is always waiting.',
    'reviews.title': 'THE BOZZ FAM SAYS...',
    'reviews.sub': 'The brand speaks for itself.',
    'reviews.demo': 'DEMO',
    'location.title': 'COME GET YOUR BOZZ.',
    'location.sub': 'First Settlement — Al Mogawra 9 — Cairo, Egypt',
    'location.hours': 'OPENING HOURS',
    'location.directions': 'GET DIRECTIONS',
    'location.whatsapp': 'ORDER ON WHATSAPP',
    'social.title': 'FOLLOW THE BOZZ.',
    'social.sub': 'Track the latest drops and deals.',
    'social.follow': 'FOLLOW US',
    'contact.title': 'READY FOR YOUR NEXT BOZZ?',
    'contact.sub': 'Send your order on WhatsApp and relax... the rest is on us.',
    'contact.cta': 'ORDER ON WHATSAPP',
    'footer.tag': 'BIG FLAVOR. BOLD ATTITUDE.',
    'footer.open': 'OPEN 24/7',
    'footer.links': 'QUICK LINKS',
    'footer.contact': 'CONTACT',
    'footer.follow': 'SOCIAL MEDIA',
    'footer.rights': '© 2026 BOZZ — All rights reserved.',
    'footer.dev': 'Designed & developed by',
    'toast.added': 'Added to order ✓',
    'toast.addedItem': 'Added to cart',
    'a11y.langSwitch': 'Change language',
    'a11y.cart': 'Your order',
    'a11y.close': 'Close',
    'a11y.whatsapp': 'Chat on WhatsApp'
  }
};

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || key;
}

/* ---------------- Currency ---------------- */
function money(v) {
  return lang === AR ? v + ' جنيه' : v + ' EGP';
}

/* ---------------- Helpers ---------------- */
const WA_BASE = () => 'https://wa.me/' + CONFIG.whatsappNumber;
const isAR = () => lang === AR;
const n = (v) => Number(v).toLocaleString('en-US');

const IMG_Q = 88;
const IMG_STEPS = [500, 800, 1200, 1800];

function imgUrl(src, w) {
  if (!src) return '';
  return src.replace(/([?&])w=\d+/, '$1w=' + w).replace(/([?&])q=\d+/, '$1q=' + IMG_Q);
}

/** Responsive <img> with real srcset so phones never download the huge file. */
function imgEl(src, alt, cls = '', sizes = '(max-width:700px) 92vw, (max-width:1000px) 46vw, 360px', eager = false) {
  const steps = sizes.includes('px') ? [120, 240] : IMG_STEPS;
  const set = steps.map((w) => `${imgUrl(src, w)} ${w}w`).join(', ');
  return `<img class="${cls}" src="${imgUrl(src, steps[1] || steps[0])}" srcset="${set}" sizes="${sizes}" alt="${esc(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------------- Set language ---------------- */
function setLang(l) {
  lang = l;
  localStorage.setItem('bozz-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isAR() ? 'rtl' : 'ltr';
  applyStaticI18n();
  renderChrome();
  renderCarousel();
  renderMenu();
  renderDeals();
  renderReviews();
  renderGallery();
  renderCart();
  updateMeta();
}

/* ---------------- Chrome: hero, address, social, footer ---------------- */
const SOCIAL_ICONS = {
  instagram:
    '<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.07 4.7c.05 1.1.24 1.7.4 2.1.2.5.44.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.83-1.3 3.5 3.5 0 0 0-1.3-.83c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.2-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"/>',
  facebook:
    '<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>',
  tiktok:
    '<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.79-2.46V9.74a5.9 5.9 0 1 0 4.87 5.8V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.23-1.48z"/>',
  x: '<path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.9-6.4L6.5 22H3.33l7.25-8.29L2.4 2h6.4l4.42 5.84L18.9 2zm-1.1 18.1h1.72L7.86 3.8H6l11.8 16.3z"/>'
};

function renderChrome() {
  const h = CONFIG.brand.heroImage;
  const hero = $('#hero-img');
  if (hero) {
    hero.src = imgUrl(h.src, 1200);
    hero.srcset = [800, 1200, 1800].map((w) => `${imgUrl(h.src, w)} ${w}w`).join(', ');
    hero.sizes = '(max-width:1000px) 100vw, 46vw';
    hero.alt = h.alt[lang];
    hero.loading = 'eager';
    hero.fetchPriority = 'high';
  }

  const s247 = $('#s247-img');
  if (s247 && CONFIG.brand.section247Image) {
    s247.src = imgUrl(CONFIG.brand.section247Image.src, 800);
    s247.srcset = [500, 800, 1200].map((w) => `${imgUrl(CONFIG.brand.section247Image.src, w)} ${w}w`).join(', ');
    s247.sizes = '(max-width:1000px) 86vw, 440px';
    s247.alt = CONFIG.brand.section247Image.alt[lang];
  }

  const addr = CONFIG.brand.location[lang];
  const addrHtml = esc(addr).replace(/\n/g, '<br>');
  if ($('#loc-address')) $('#loc-address').innerHTML = addrHtml;
  if ($('#loc-hours-full')) $('#loc-hours-full').textContent = CONFIG.brand.hoursFull[lang];
  if ($('#footer-address')) $('#footer-address').innerHTML = addrHtml;

  const dir = $('#btn-directions');
  if (dir) dir.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.brand.location.mapsQuery);

  const follow = $('#social-follow');
  if (follow) follow.href = CONFIG.socialLinks.instagram || '#';

  const fs = $('#footer-social');
  if (fs) {
    fs.innerHTML = Object.entries(CONFIG.socialLinks)
      .filter(([k]) => SOCIAL_ICONS[k])
      .map(
        ([k, url]) =>
          `<a class="fs-btn" href="${url}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${SOCIAL_ICONS[k]}</svg></a>`
      )
      .join('');
  }

  const cl = $('#contact-links');
  if (cl) {
    cl.innerHTML = `
      <span class="cl-chip">📍 ${esc(CONFIG.brand.location[lang].replace(/\n/g, ', '))}</span>
      <span class="cl-chip">🕓 24/7</span>
      <a class="cl-chip" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONFIG.brand.location.mapsQuery
      )}">🗺️ ${esc(t('location.directions'))}</a>`;
  }

  $$('#lang-switch .lang-opt').forEach((el) => el.classList.toggle('active', el.dataset.lang === lang));
  syncWaLinks();
  renderDevCredit();
}

function applyStaticI18n() {
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  $$('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', t(key));
  });
}

/* ---------------- Meta / SEO per language ---------------- */
function updateMeta() {
  const ar = isAR();
  const title = ar
    ? 'BOZZ | مطعم برجر — التجمع الأول، القاهرة | مفتوح 24/7'
    : 'BOZZ | Burger Restaurant — First Settlement, Cairo | Open 24/7';
  const desc = ar
    ? 'BOZZ — برجر بريميوم في التجمع الأول، المجاورة التاسعة، القاهرة. طعم كبير، شخصية مختلفة، مفتوح 24/7. اطلب على واتساب.'
    : 'BOZZ — premium burgers in First Settlement, Al Mogawra 9, Cairo. Big flavor, bold attitude, open 24/7. Order on WhatsApp.';
  document.title = title;
  $('meta[name="description"]')?.setAttribute('content', desc);
  $('meta[property="og:title"]')?.setAttribute('content', title);
  $('meta[property="og:description"]')?.setAttribute('content', desc);
  $('meta[property="og:locale"]')?.setAttribute('content', ar ? 'ar_EG' : 'en_US');
  $('meta[name="twitter:title"]')?.setAttribute('content', title);
  $('meta[name="twitter:description"]')?.setAttribute('content', desc);
}

/* ---------------- Developer credit ---------------- */
const FF_SVG = `<svg class="ff-mark" viewBox="0 0 48 48" role="img" aria-label="Free Fire">
  <defs>
    <linearGradient id="ffg1" x1="6" y1="4" x2="42" y2="46" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffc400"/><stop offset=".45" stop-color="#ff8a00"/><stop offset="1" stop-color="#f03a12"/>
    </linearGradient>
    <linearGradient id="ffg2" x1="10" y1="10" x2="40" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff3c4"/><stop offset="1" stop-color="#ffb300"/>
    </linearGradient>
  </defs>
  <path fill="url(#ffg1)" d="M25.6 1.5c.6 5.4-1.4 8.9-4.8 12.1-4.2 4-8.3 8-8.3 14.9 0 9 6.2 15.6 13.5 18.9 7.3-3.3 13.5-9.9 13.5-18.9 0-4.4-1.7-8-4.3-11-.9 1.8-2.1 3.2-3.9 4.3 1.1-5.9-.9-11.1-4-15.3-1.4-1.9-1.9-3.7-1.7-5z"/>
  <path fill="url(#ffg2)" d="M23.4 17.2c-4 3.1-6.1 7-6.1 11.4 0 3.8 1.8 6.9 4.6 8.6-.7-3.2-.1-6.1 1.8-8.8.5 3.9 2.2 6.3 5 7.7-1.1-3.8-3-6.3-5.8-8.6.9-3.4.7-6.9.5-10.3z"/>
  <path fill="#0b0b0b" d="M33.9 24.6c-1.9 2.2-4.4 3.5-7.2 4-2.5.4-4.6 1.6-6 3.4 1.4 3.1 4.2 5.2 7.7 5.2 5.5 0 9.4-4.2 9.4-9.9 0-1.6-.3-3.2-1-4.6-.7 1.2-1.6 1.9-2.9 1.9z" opacity=".92"/>
</svg>`;

function renderDevCredit() {
  const el = $('#dev-credit');
  if (!el) return;
  const d = CONFIG.developer;
  const label = isAR() ? 'تصميم وتطوير' : 'Designed & developed by';
  const mark = d.logo
    ? `<img class="ff-mark" src="${d.logo}" alt="Free Fire" loading="lazy" decoding="async">`
    : FF_SVG;
  const name = `<span class="dc-name">${esc(d.name)}</span>`;
  el.innerHTML = `
    <span class="dc-label">${label}</span>
    <span class="dc-badge">${mark}${name}</span>`;
  if (d.social) {
    el.querySelector('.dc-badge').outerHTML = `<a class="dc-badge" href="${d.social}" target="_blank" rel="noopener">${mark}${name}</a>`;
  }
}

/* ---------------- Logo ---------------- */
function renderLogo() {
  const targets = $$('[data-logo]');
  targets.forEach((el) => {
    if (CONFIG.logoImage) {
      el.innerHTML = `<img src="${CONFIG.logoImage}" alt="${CONFIG.brand.name}" class="logo-img">`;
    } else {
      el.innerHTML = `<span class="logo-word">BOZZ<span class="logo-dot">.</span></span>`;
    }
  });
}

/* ---------------- Carousel ---------------- */
function burgerCardHTML(b, opts = {}) {
  const sizes = Object.entries(b.sizes);
  const minPrice = Math.min(...sizes.map(([, p]) => p));
  const fromLabel = t('carousel.from');
  const orderLabel = t('carousel.order');
  const img = `<div class="cb-media">${imgEl(b.img, `${b.name[lang]} — ${CONFIG.brand.name}`, 'cb-img', '(max-width:700px) 78vw, 300px')}<span class="cb-tag">${esc(b.sizes ? Object.keys(b.sizes).join(' · ') : 'BOZZ')}</span></div>`;
  return `
    <article class="burger-card ${opts.cls || ''}" data-id="${b.id}" style="--d:${opts.delay || '0s'}">
      <div class="bc-inner">
        ${img}
        <div class="cb-body">
          <h3 class="cb-name">${esc(b.name[lang])}</h3>
          <p class="cb-desc">${esc(b.desc[lang])}</p>
          <div class="cb-foot">
            <span class="cb-price"><small>${fromLabel}</small> ${n(minPrice)} <small>${isAR() ? 'ج.م' : 'EGP'}</small></span>
            <button class="btn btn-sm btn-primary js-open-product" data-id="${b.id}" aria-label="${orderLabel} ${esc(b.name[lang])}">${orderLabel}</button>
          </div>
        </div>
      </div>
    </article>`;
}

const CAROUSEL_CYCLE = 40; // seconds — must match --cycle in styles.css

function renderCarousel() {
  const track = $('#carousel-track');
  if (!track) return;
  const list = CONFIG.menu.burgers;
  const step = (CAROUSEL_CYCLE / Math.max(list.length, 1)).toFixed(3);
  const cards = list.map((b, i) => burgerCardHTML(b, { delay: `-${i * step}s` })).join('');
  track.innerHTML = [0, 1, 2, 3].map(() => `<div class="marquee-group">${cards}</div>`).join('');
  $$('.js-open-product', track).forEach(bindOpenProduct);
}

/* ---------------- Menu tabs + grid ---------------- */
let activeTab = 'burgers';
const TAB_KEYS = { burgers: 'tab.burgers', sides: 'tab.sides', extras: 'tab.extras', drinks: 'tab.drinks' };

function tabLabel(k) {
  return t(TAB_KEYS[k]);
}

function setTab(k) {
  activeTab = k;
  renderMenu();
}

function soonHTML() {
  return `
    <div class="soon-card">
      <div class="soon-icon">🍔</div>
      <h3>${t('menu.soon')}</h3>
      <p>${t('menu.soonSub')}</p>
    </div>`;
}

function menuBurgerCard(b) {
  const sizes = Object.entries(b.sizes);
  const minPrice = Math.min(...sizes.map(([, p]) => p));
  const cur = isAR() ? 'ج.م' : 'EGP';
  const chips = sizes
    .map(
      ([s, p]) =>
        `<button class="size-chip js-open-product" data-id="${b.id}" data-size="${s}" aria-label="${s} — ${n(p)} ${cur}"><b>${s}</b><span>${n(p)}</span></button>`
    )
    .join('');
  const mark = CONFIG.brand.name.toUpperCase();
  return `
    <article class="menu-card">
      <div class="mc-media">
        ${imgEl(b.img, `${b.name[lang]} — ${CONFIG.brand.name}`, 'mc-img', '(max-width:700px) 92vw, (max-width:1000px) 46vw, 380px')}
        <span class="mc-badge"><small>${t('menu.from')}</small><b>${n(minPrice)}</b> <i>${cur}</i></span>
        <span class="mc-mark" aria-hidden="true">${mark}</span>
      </div>
      <div class="mc-body">
        <div class="mc-head">
          <h3 class="mc-name">${esc(b.name[lang])}</h3>
          <span class="mc-sizes-label">${isAR() ? 'مقاسات' : 'Sizes'}</span>
        </div>
        <p class="mc-desc">${esc(b.desc[lang])}</p>
        <div class="mc-sizes">${chips}</div>
        <div class="mc-foot">
          <button class="btn btn-primary btn-block js-open-product" data-id="${b.id}">
            <span>${t('menu.add')}</span>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

function menuExtraCard(ex) {
  return `
    <article class="menu-card extra-card">
      <div class="mc-body">
        <h3 class="mc-name">${esc(ex.name[lang])}</h3>
        <p class="mc-desc">${isAR() ? 'إضافة اختيارية لأي برجر' : 'Optional add-on for any burger'}</p>
        <div class="mc-foot">
          <span class="mc-price">+${n(ex.price)} <small>${isAR() ? 'ج.م' : 'EGP'}</small></span>
          <button class="btn btn-outline js-add-extra" data-id="${ex.id}">${t('menu.add')}</button>
        </div>
      </div>
    </article>`;
}

function renderMenu() {
  const grid = $('#menu-grid');
  const tabs = $$('#menu-tabs .tab');
  if (!grid) return;

  tabs.forEach((btn) => {
    btn.textContent = tabLabel(btn.dataset.tab);
    btn.classList.toggle('active', btn.dataset.tab === activeTab);
    btn.setAttribute('aria-selected', btn.dataset.tab === activeTab);
  });

  let html = '';
  if (activeTab === 'burgers') {
    html = CONFIG.menu.burgers.map(menuBurgerCard).join('') || soonHTML();
  } else if (activeTab === 'extras') {
    html = CONFIG.menu.extras.map(menuExtraCard).join('') || soonHTML();
  } else {
    const arr = activeTab === 'sides' ? CONFIG.menu.sides : CONFIG.menu.drinks;
    html = arr.length ? arr.map((x) => menuExtraCard({ ...x, name: x.name, price: x.price })).join('') : soonHTML();
  }
  grid.innerHTML = html;
  bindGridEvents(grid);
}

function bindGridEvents(scope) {
  $$('.js-open-product', scope).forEach(bindOpenProduct);
  $$('.js-add-extra', scope).forEach((b) =>
    b.addEventListener('click', () => {
      const ex = CONFIG.menu.extras.find((x) => x.id === b.dataset.id);
      if (ex) addToCart({ id: ex.id, name: ex.name, size: null, sizePrice: 0, extras: [{ name: ex.name, price: ex.price }], qty: 1, unit: ex.price });
      toast(t('toast.added'));
    })
  );
}

function bindOpenProduct(btn) {
  btn.addEventListener('click', () => openProduct(btn.dataset.id, btn.dataset.size || null));
}

/* ---------------- Deals ---------------- */
function renderDeals() {
  const grid = $('#deals-grid');
  if (!grid) return;
  const cur = isAR() ? 'ج.م' : 'EGP';
  grid.innerHTML = CONFIG.offers
    .map(
      (o) => `
      <article class="deal-card">
        <div class="dc-media">${imgEl(o.img, o.name[lang], 'dc-img', '(max-width:700px) 92vw, 380px')}</div>
        <div class="dc-body">
          <h3 class="dc-name">${esc(o.name[lang])}</h3>
          <p class="dc-desc">${esc(o.desc[lang])}</p>
          <div class="dc-prices">
            ${
              o.oldPrice != null || o.newPrice != null
                ? `${o.oldPrice != null ? `<span class="dc-old">${n(o.oldPrice)} ${cur}</span>` : ''}${
                    o.newPrice != null ? `<span class="dc-new">${n(o.newPrice)} ${cur}</span>` : ''
                  }`
                : `<span class="dc-ask">${isAR() ? 'السعر عند الطلب' : 'PRICE ON ASK'}</span>`
            }
          </div>
          <button class="btn btn-yellow js-deal-order" data-name="${esc(o.name[lang])}">${t('deal.order')}</button>
        </div>
      </article>`
    )
    .join('');
  $$('.js-deal-order').forEach((b) => b.addEventListener('click', () => orderDeal(b.dataset.name)));
}

/* ---------------- Reviews ---------------- */
function renderReviews() {
  const grid = $('#reviews-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.reviews
    .map(
      (r) => `
      <article class="review-card">
        <div class="rv-stars" aria-label="${r.stars} / 5">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
        <p class="rv-text">"${esc(r.text[lang])}"</p>
        <div class="rv-meta">
          <span class="rv-name">${esc(r.name)}</span>
          <span class="rv-role">${esc(r.role[lang])}</span>
          ${r.demo ? `<span class="rv-demo">${t('reviews.demo')}</span>` : ''}
        </div>
      </article>`
    )
    .join('');
}

/* ---------------- Social gallery ---------------- */
function renderGallery() {
  const grid = $('#social-grid');
  if (!grid) return;
  const link = CONFIG.socialLinks.instagram || '#';
  grid.innerHTML = CONFIG.gallery
    .map(
      (g, i) => `
      <a class="sg-item" href="${link}" target="_blank" rel="noopener" aria-label="${esc(g.alt)}">
        ${imgEl(g.src, g.alt, 'sg-img', '(max-width:700px) 50vw, 260px')}
        <span class="sg-overlay"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.07 4.7c.05 1.1.24 1.7.4 2.1.2.5.44.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.83-1.3 3.5 3.5 0 0 0-1.3-.83c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.2-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"/></svg></span>
      </a>`
    )
    .join('');
}

/* ============================================================
   CART
   ============================================================ */
let cart = [];

function addToCart(item) {
  const key = itemKey(item);
  const found = cart.find((x) => keyOf(x) === key);
  if (found) found.qty += item.qty;
  else cart.push({ ...item });
  renderCart();
  updateCartBadge();
  openCart();
}

function itemKey(i) {
  return [i.id, i.size || '', (i.extras || []).map((e) => e.name.en).sort().join('+')].join('|');
}
function keyOf(i) {
  return itemKey(i);
}

function changeQty(i, d) {
  const it = cart.find((x) => keyOf(x) === itemKey(i));
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) cart = cart.filter((x) => keyOf(x) !== itemKey(i));
  renderCart();
  updateCartBadge();
}

function removeItem(i) {
  cart = cart.filter((x) => keyOf(x) !== itemKey(i));
  renderCart();
  updateCartBadge();
}

function subtotal() {
  return cart.reduce((s, i) => s + i.unit * i.qty, 0);
}

function updateCartBadge() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $$('.cart-count').forEach((b) => {
    b.textContent = count;
    b.style.display = count ? 'inline-flex' : 'none';
  });
}

function renderCart() {
  const list = $('#cart-items');
  const sub = $('#cart-subtotal');
  if (!list) return;

  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><div class="ce-icon">🛒</div><p>${t('cart.empty')}</p></div>`;
  } else {
    list.innerHTML = cart
      .map((i, idx) => {
        const meta = [];
        if (i.size) meta.push(`${isAR() ? 'الحجم' : 'Size'}: ${i.size}`);
        if (i.extras && i.extras.length) meta.push(i.extras.map((e) => e.name[lang]).join(' + '));
        return `
        <div class="cart-item">
          <div class="ci-thumb">${i.img ? imgEl(i.img, i.name[lang], 'ci-img', '58px') : '<span>🍔</span>'}</div>
          <div class="ci-info">
            <strong>${esc(i.name[lang])}</strong>
            <span class="ci-meta">${esc(meta.join(' • '))}</span>
            <span class="ci-price">${n(i.unit * i.qty)} <small>${isAR() ? 'ج.م' : 'EGP'}</small></span>
          </div>
          <div class="ci-actions">
            <div class="qty">
              <button class="qty-btn" data-idx="${idx}" data-d="-1" aria-label="−">−</button>
              <span>${i.qty}</span>
              <button class="qty-btn" data-idx="${idx}" data-d="1" aria-label="+">+</button>
            </div>
            <button class="ci-remove" data-idx="${idx}" aria-label="${t('cart.remove')}">✕</button>
          </div>
        </div>`;
      })
      .join('');

    $$('.qty-btn', list).forEach((b) =>
      b.addEventListener('click', () => changeQty(cart[+b.dataset.idx], +b.dataset.d))
    );
    $$('.ci-remove', list).forEach((b) => b.addEventListener('click', () => removeItem(cart[+b.dataset.idx])));
  }

  if (sub) sub.textContent = n(subtotal()) + ' ' + (isAR() ? 'ج.م' : 'EGP');
}

/* ---------------- WhatsApp ordering ---------------- */
const WA = () => CONFIG.whatsapp;

function waLink(msg) {
  return `${WA_BASE()}?text=${encodeURIComponent(msg)}`;
}

/** Appends the burger photo as a WhatsApp link-preview + the location placeholder. */
function waFooter() {
  return `\n\n📍 ${WA().location[lang]}\n\n${WA().imageLabel[lang]}\n${WA().image}`;
}

function waHeader() {
  return WA().greeting[lang];
}

function genericWa() {
  return waLink(`${waHeader()}${waFooter()}`);
}

function orderDeal(name) {
  const msg = `${waHeader()}\n\n${WA().dealLine[lang]}\n\n1 × ${name}${waFooter()}`;
  window.open(waLink(msg), '_blank');
}

function checkout() {
  if (!cart.length) return;
  let msg = `${waHeader()}\n\n${WA().orderLine[lang]}\n\n`;
  cart.forEach((i) => {
    msg += `${i.qty} × ${i.name[lang]}\n`;
    if (i.size) msg += `${WA().sizeLabel[lang]}: ${i.size}\n`;
    if (i.extras && i.extras.length) i.extras.forEach((e) => (msg += `${i.qty} × ${e.name[lang]}\n`));
  });
  msg += `\n${WA().total[lang]}: ${n(subtotal())} ${WA().cur[lang]}${waFooter()}`;
  window.open(waLink(msg), '_blank');
}

/* ---------------- Product modal ---------------- */
let pmState = null;

function openProduct(id, preselectSize) {
  const b = CONFIG.menu.burgers.find((x) => x.id === id);
  if (!b) return;
  const sizes = Object.entries(b.sizes);
  pmState = { product: b, size: preselectSize || sizes[0][0], extra: false, qty: 1 };

  const pmImg = $('#pm-img');
  pmImg.src = imgUrl(b.img, 900);
  pmImg.srcset = [500, 800, 1200].map((w) => `${imgUrl(b.img, w)} ${w}w`).join(', ');
  pmImg.sizes = '(max-width:600px) 92vw, 420px';
  pmImg.alt = b.name[lang];
  $('#pm-name').textContent = b.name[lang];
  $('#pm-desc').textContent = b.desc[lang];

  $('#pm-sizes').innerHTML = sizes
    .map(
      ([s, p]) =>
        `<button class="size-option ${s === pmState.size ? 'active' : ''}" data-size="${s}"><b>${s}</b><span>${n(p)} ${isAR() ? 'ج.م' : 'EGP'}</span></button>`
    )
    .join('');
  $$('#pm-sizes .size-option').forEach((b2) =>
    b2.addEventListener('click', () => {
      pmState.size = b2.dataset.size;
      $$('#pm-sizes .size-option').forEach((x) => x.classList.toggle('active', x === b2));
      updatePmTotal();
    })
  );

  const hasExtra = typeof b.extraPatty === 'number';
  $('#pm-extra-wrap').style.display = hasExtra ? '' : 'none';
  $('#pm-extra-label').textContent = t('modal.extraPatty') + (hasExtra ? ` (+${n(b.extraPatty)} ${isAR() ? 'ج.م' : 'EGP'})` : '');
  $('#pm-extra').checked = false;
  $('#pm-extra').onchange = (e) => {
    pmState.extra = e.target.checked;
    updatePmTotal();
  };

  $('#pm-qty-val').textContent = 1;
  $$('#pm-qty .qty-btn').forEach((b3) =>
    b3.addEventListener('click', () => {
      pmState.qty = Math.max(1, pmState.qty + (+b3.dataset.d));
      $('#pm-qty-val').textContent = pmState.qty;
      updatePmTotal();
    })
  );

  updatePmTotal();
  $('#product-modal').classList.add('open');
  document.body.classList.add('no-scroll');
  $('#pm-add').focus();
}

function pmUnit() {
  const b = pmState.product;
  const base = b.sizes[pmState.size] || 0;
  const extra = pmState.extra ? b.extraPatty || 0 : 0;
  return base + extra;
}

function updatePmTotal() {
  $('#pm-total-val').textContent = n(pmUnit() * pmState.qty) + ' ' + (isAR() ? 'ج.م' : 'EGP');
}

function closeProduct() {
  $('#product-modal').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ---------------- Cart / drawer open-close ---------------- */
function openCart() {
  $('#cart-drawer').classList.add('open');
  $('#cart-backdrop').classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeCart() {
  $('#cart-drawer').classList.remove('open');
  $('#cart-backdrop').classList.remove('open');
  document.body.classList.remove('no-scroll');
}
function toggleMobileNav() {
  const open = $('#mobile-nav').classList.toggle('open');
  $('#hamburger').setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('no-scroll', open);
}
function closeMobileNav() {
  $('#mobile-nav').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ---------------- Toast ---------------- */
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('revealed');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal').forEach((el) => io.observe(el));
}

/* ---------------- Navbar scroll ---------------- */
function initNavbar() {
  const nav = $('#navbar');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------------- Custom cursor (desktop) ---------------- */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  let x = 0, y = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px,${y}px)`;
    document.body.classList.add('cursor-on');
  });
  (function loop() {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  $$('a,button,.burger-card,.menu-card,.deal-card,.review-card').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('grow'));
    el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
  });
}

/* ---------------- Smooth anchor scroll ---------------- */
function initAnchors() {
  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1 && $(id)) {
        e.preventDefault();
        $(id).scrollIntoView({ behavior: 'smooth' });
      }
    })
  );
}

/* ---------------- Bind global buttons ---------------- */
function syncWaLinks() {
  $$('.js-wa').forEach((b) => (b.href = genericWa()));
}

function initGlobal() {
  $$('.js-wa').forEach((b) => {
    syncWaLinks();
    b.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(genericWa(), '_blank');
    });
  });
  $('#lang-switch').addEventListener('click', () => setLang(isAR() ? EN : AR));
  $('#cart-open').addEventListener('click', openCart);
  $('#cart-close').addEventListener('click', closeCart);
  $('#cart-backdrop').addEventListener('click', closeCart);
  $('#cart-checkout').addEventListener('click', checkout);
  $('#cart-clear').addEventListener('click', () => {
    cart = [];
    renderCart();
    updateCartBadge();
  });
  $('#hamburger').addEventListener('click', toggleMobileNav);
  $('#mn-close').addEventListener('click', closeMobileNav);
  $$('#mobile-nav a').forEach((a) => a.addEventListener('click', closeMobileNav));
  $('#pm-add').addEventListener('click', () => {
    const b = pmState.product;
    const extras = pmState.extra ? [{ name: { ar: 'باتي إضافي', en: 'Extra Patty' }, price: b.extraPatty }] : [];
    addToCart({
      id: b.id,
      name: b.name,
      size: pmState.size,
      extras,
      qty: pmState.qty,
      unit: pmUnit(),
      img: b.img
    });
    closeProduct();
    toast(t('toast.added'));
  });
  $('#pm-close').addEventListener('click', closeProduct);
  $('#product-modal').addEventListener('click', (e) => {
    if (e.target === $('#product-modal')) closeProduct();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProduct();
      closeCart();
      closeMobileNav();
    }
  });
  $$('#menu-tabs .tab').forEach((b) => b.addEventListener('click', () => setTab(b.dataset.tab)));
}

/* ---------------- Loading screen ---------------- */
function hideLoader() {
  const l = $('#loader');
  l.classList.add('done');
  setTimeout(() => l.remove(), 600);
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderLogo();
  setLang(lang);
  initGlobal();
  initReveal();
  initNavbar();
  initCursor();
  initAnchors();
  updateCartBadge();

  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', () => setTimeout(hideLoader, 350));
  setTimeout(hideLoader, 1800);
});
