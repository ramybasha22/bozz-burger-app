/* ============================================================
   BOZZ — SINGLE SOURCE OF TRUTH
   كل بيانات المطعم هنا. عدّل من هنا فقط.
   Edit everything about BOZZ here.
   ============================================================ */

const CONFIG = {

  /* ---------------- واتساب / WhatsApp ---------------- */
  /* ضع رقمك الحقيقي هنا فقط — مع كود الدولة بدون + */
  /* Put your real number here (country code, no +) */
  whatsappNumber: '201012801337',

  /* ---------------- رسالة الواتساب ---------------- */
  /* الجملة الافتتاحية + صورة صغيرة بتظهر كـ preview في واتساب */
  whatsapp: {
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&h=500&q=80&fm=jpg',
    greeting: {
      ar: 'أهلًا بيك في BOZZ 👋🍔\nجوعان؟ القرار الصح هنا 🔥',
      en: "Welcome to BOZZ 👋🍔\nHungry? You're in the right place 🔥"
    },
    imageLabel: { ar: '📸 شوف منيو BOZZ:', en: '📸 See the BOZZ menu:' },
    location: { ar: '[اكتب موقعك هنا]', en: '[Type your location here]' },
    dealLine: { ar: 'عايز أطلب:', en: "I'd like to order:" },
    orderLine: { ar: 'عايز أطلب:', en: "I'd like to order:" },
    total: { ar: 'الإجمالي', en: 'Total' },
    cur: { ar: 'ج.م', en: 'EGP' },
    sizeLabel: { ar: 'الحجم', en: 'Size' }
  },

  /* ---------------- اللوجو / Logo ---------------- */
  /* حط مسار صورة اللوجو هنا (مثال: 'assets/logo.png') — سيظهر بدل النص */
  /* Path to your logo image — shown instead of the text wordmark */
  logoImage: '',

  /* ---------------- المطور / Developer ---------------- */
  developer: {
    name: 'Ramy Basha',
    logo: '', // ضع مسار صورة شعار Free Fire هنا، مثال: 'assets/ff.png'
    social: '' // لينك البروفايل (اختياري)، مثال: 'https://www.facebook.com/ramy'
  },

  brand: {
    name: 'BOZZ',
    type: 'Burger Restaurant',
    tagline: { ar: 'طعم كبير. شخصية مختلفة.', en: 'BIG FLAVOR. BOLD ATTITUDE.' },
    location: {
      ar: 'التجمع الأول — المجاورة التاسعة — القاهرة — مصر',
      en: 'First Settlement — Al Mogawra 9 — Cairo, Egypt',
      mapsQuery: 'First Settlement, Al Mogawra 9, Cairo, Egypt'
    },
    hours: '24/7',
    hoursFull: { ar: '24 ساعة / 7 أيام في الأسبوع', en: '24 hours / 7 days a week' },

    heroImage: {
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90',
      alt: { ar: 'برجر BOZZ', en: 'BOZZ burger' }
    },
    section247Image: {
      src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=90',
      alt: { ar: 'برجر مشوي', en: 'Grilled burger' }
    },
    colors: {
      red: '#E1251B',
      black: '#0C0C0C',
      white: '#FFFFFF',
      yellow: '#FFC700',
      orange: '#FF6B00',
      blue: '#1E5AA8'
    }
  },

  /* ---------------- السوشيال ميديا / Social ---------------- */
  /* عدّل الروابط هنا */
  socialLinks: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
    x: '#'
  },

  /* ---------------- المنيو / Menu ---------------- */
  /* أسعار ثابتة من صورة المنيو — لا تُخترع أسعار جديدة */
  menu: {
    burgers: [
      {
        id: 'bozz',
        name: { ar: 'BOZZ', en: 'BOZZ' },
        desc: {
          ar: 'البرجر الأصلي — لحم بقري مشوي، جبنة شيدر ذايبة، خس، طماطم، وصلصة BOZZ السرّية.',
          en: 'The original — flame-grilled beef, melted cheddar, lettuce, tomato & the secret BOZZ sauce.'
        },
        sizes: { S: 135, D: 175, T: 200 },
        extraPatty: 35,
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
      },
      {
        id: 'creamy-mushroom',
        name: { ar: 'Creamy Mushroom', en: 'Creamy Mushroom' },
        desc: {
          ar: 'لحم مشوي على صوص ماشروم كريمي مع جبنة ذايبة... طعم ثقيل ومريح.',
          en: 'Grilled beef on a creamy mushroom sauce with melted cheese. Rich, smooth, heavy.'
        },
        sizes: { S: 140, D: 185, T: 220 },
        extraPatty: 35,
        img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80'
      },
      {
        id: 'old-school',
        name: { ar: 'OLD SCHOOL', en: 'OLD SCHOOL' },
        desc: {
          ar: 'برجر قديم الطراز — لحم، جبنة، مخلل، وصلصة كلاسيك. زمان كان أحسن.',
          en: "Old-school beef, cheese, pickles & classic sauce. They don't make 'em like this anymore."
        },
        sizes: { S: 135, D: 170, T: 200 },
        extraPatty: 35,
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80'
      }
    ],

    /* إضافات / Extras */
    extras: [
      { id: 'extra-patty', name: { ar: 'باتي إضافي', en: 'Extra Patty' }, price: 35 }
    ],

    /* أصناف بتتجهز — اتركها فاضية ولا تخترع */
    sides: [],
    drinks: []
  },

  /* ---------------- العروض / Offers ---------------- */
  /* ⚠️ بيانات تجريبية قابلة للتعديل — الأسعار اختيارية (null = تُخفى) */
  offers: [
    {
      id: 'deal-1',
      name: { ar: 'عرض BOZZ المزدوج', en: 'BOZZ Double Deal' },
      desc: {
        ar: 'برجرين + سايدز + مشروب. للأوردر الكبير.',
        en: 'Two burgers + side + drink. For the big hunger.'
      },
      oldPrice: null,
      newPrice: null,
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'deal-2',
      name: { ar: 'عرض الشغالين بالليل', en: 'Night Shift Deal' },
      desc: {
        ar: 'من 12 بالليل لـ 6 الصبح — برجر + مشروب.',
        en: 'From 12 AM to 6 AM — one burger + drink.'
      },
      oldPrice: null,
      newPrice: null,
      img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'deal-3',
      name: { ar: 'عرض العيلة', en: 'Family BOZZ Box' },
      desc: {
        ar: '4 برجر + سايدز + مشروبات — كفاية العيلة كلها.',
        en: '4 burgers + sides + drinks — feeds the whole fam.'
      },
      oldPrice: null,
      newPrice: null,
      img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80'
    }
  ],

  /* ---------------- آراء / Reviews ---------------- */
  /* ⚠️ DEMO — استبدلها بآراء حقيقية من عملائك */
  reviews: [
    { name: 'Ahmed M.', role: { ar: 'عميل تجريبي', en: 'Demo customer' }, text: { ar: 'تجربة أولى مع BOZZ... البرجر كبير والتوست محمص صح.', en: 'First time trying BOZZ... big burger, properly toasted.' }, stars: 5, demo: true },
    { name: 'Sara K.', role: { ar: 'عميلة تجريبية', en: 'Demo customer' }, text: { ar: 'الصلصة السرّية فرقت معايا فعلًا. هرجع تاني.', en: 'The secret sauce is something else. Coming back.' }, stars: 5, demo: true },
    { name: 'Omar T.', role: { ar: 'عميل تجريبي', en: 'Demo customer' }, text: { ar: 'الساعة 3 بالليل وBOZZ مفتوح... ده شيء تاني.', en: '3 AM and BOZZ is still open... that\'s next level.' }, stars: 5, demo: true }
  ],

  /* ---------------- جاليري السوشيال / Social gallery ---------------- */
  gallery: [
    { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ burger with fries' },
    { src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80', alt: 'Crispy fries' },
    { src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ burger dark' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ restaurant atmosphere' },
    { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ burger close up' },
    { src: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80', alt: 'Golden fries' },
    { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ burger night' },
    { src: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=80', alt: 'Cheesy BOZZ burger' },
    { src: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=700&q=80', alt: 'BOZZ burger stack' }
  ]
};
