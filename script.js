/* ==========================================
   Portfolio — Main JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     TRANSLATIONS
     ========================================================== */
  const translations = {
    en: {
      // Navbar
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'nav.lang': '日本語',

      // Hero
      'hero.greeting': 'こんにちは！ Hello, I\'m',
      'hero.cta1': 'View My Work',
      'hero.cta2': 'Get in Touch',

      // About
      'about.subtitle': 'Get to know me',
      'about.title': 'About <span class="text-gradient">Me</span>',
      'about.heading': 'IT Undergraduate & Japanese Language Student',
      'about.p1': 'I\'m a 2nd year undergraduate at <strong>Lanka Nippon BizTech Institute</strong>, pursuing a dual focus in <em>Information Technology</em> and <em>Japanese Language</em>. I\'m passionate about building real-world applications that solve meaningful problems and bridge the gap between technology and language.',
      'about.p2': 'With hands-on experience in Python, Java, and modern web technologies, I strive to write clean, efficient code while continuously expanding my skill set. My unique combination of IT expertise and Japanese fluency positions me at the intersection of Sri Lankan and Japanese tech industries.',
      'about.stat1': 'Projects Built',
      'about.stat2': 'Year Undergrad',
      'about.stat3': 'Languages',

      // Skills
      'skills.subtitle': 'What I work with',
      'skills.title': 'My <span class="text-gradient">Skills</span>',
      'skills.japanese': 'Japanese',
      'skills.databases': 'Databases',

      // Projects
      'projects.subtitle': 'Things I\'ve built',
      'projects.title': 'My <span class="text-gradient">Projects</span>',
      'projects.filterAll': 'All',
      'projects.filterWeb': 'Web',
      'projects.car.title': 'Car Rental System',
      'projects.car.desc': 'A comprehensive car rental management system built with Python. Features include vehicle inventory management, booking and reservation handling, customer records, and rental history tracking.',
      'projects.airline.title': 'Airline Reservation System',
      'projects.airline.desc': 'An airline reservation platform developed in Java. Supports flight search, seat selection, passenger management, booking confirmations, and ticket generation with a clean UI.',
      'projects.gido.desc': 'A web application designed to help learners improve their Business Japanese skills. Features interactive lessons, vocabulary drills, conversation practice, and progress tracking for professional fluency.',
      'projects.tag.desktop': 'Desktop App',
      'projects.tag.webapp': 'Web App',
      'projects.tag.japanese': 'Japanese',

      // Education
      'edu.subtitle': 'My learning journey',
      'edu.title': 'Education & <span class="text-gradient">Experience</span>',
      'edu.date1': '2024 — Present',
      'edu.heading1': 'BSc in Information Technology',
      'edu.desc1': 'Currently in 2nd year, studying Information Technology alongside the Japanese language. Developing strong foundations in programming, databases, networking, and software engineering.',
      'edu.date2': '2024 — Present',
      'edu.heading2': 'Japanese Language Studies',
      'edu.desc2': 'Studying Japanese language with a focus on both conversational and business proficiency. Combining language skills with IT knowledge for cross-cultural tech opportunities.',
      'edu.heading3': 'Self-Learning & Projects',
      'edu.place3': 'Independent Study',
      'edu.desc3': 'Built foundational programming skills through self-directed learning and personal projects in Python, Java, and web development.',

      // Contact
      'contact.subtitle': 'Let\'s connect',
      'contact.title': 'Get in <span class="text-gradient">Touch</span>',
      'contact.infoTitle': 'Contact Info',
      'contact.location': 'Location',
      'contact.locationVal': 'Sri Lanka',
      'contact.email': 'Email',
      'contact.university': 'University',
      'contact.form.name': 'Your Name',
      'contact.form.namePh': 'John Doe',
      'contact.form.email': 'Your Email',
      'contact.form.emailPh': 'john@example.com',
      'contact.form.subject': 'Subject',
      'contact.form.subjectPh': 'Project Inquiry',
      'contact.form.message': 'Message',
      'contact.form.messagePh': 'Tell me about your idea...',
      'contact.form.send': '<i class="bi bi-send-fill me-2"></i>Send Message',

      // Footer
      'footer.text': '&copy; 2026 Nuvin Amarasinghe. Crafted with <i class="bi bi-heart-fill text-gradient"></i> in Sri Lanka.'
    },

    ja: {
      // ナビバー
      'nav.home': 'ホーム',
      'nav.about': '自己紹介',
      'nav.skills': 'スキル',
      'nav.projects': 'プロジェクト',
      'nav.education': '学歴',
      'nav.contact': 'お問い合わせ',
      'nav.lang': 'English',

      // ヒーロー
      'hero.greeting': 'こんにちは！ はじめまして',
      'hero.cta1': '作品を見る',
      'hero.cta2': '連絡する',

      // 自己紹介
      'about.subtitle': '自己紹介',
      'about.title': '<span class="text-gradient">私</span>について',
      'about.heading': 'IT学部生 & 日本語学習者',
      'about.p1': '<strong>Lanka Nippon BizTech Institute</strong>の2年生として、<em>情報技術</em>と<em>日本語</em>の両方を専攻しています。テクノロジーと言語の架け橋となる、実用的なアプリケーション開発に情熱を持っています。',
      'about.p2': 'Python、Java、モダンなWeb技術の実践経験を活かし、クリーンで効率的なコードを書くことを目指しています。IT専門知識と日本語能力のユニークな組み合わせにより、スリランカと日本のテック業界の交差点に位置しています。',
      'about.stat1': 'プロジェクト数',
      'about.stat2': '年生',
      'about.stat3': '言語',

      // スキル
      'skills.subtitle': '使用技術',
      'skills.title': '私の<span class="text-gradient">スキル</span>',
      'skills.japanese': '日本語',
      'skills.databases': 'データベース',

      // プロジェクト
      'projects.subtitle': '制作物',
      'projects.title': '私の<span class="text-gradient">プロジェクト</span>',
      'projects.filterAll': 'すべて',
      'projects.filterWeb': 'ウェブ',
      'projects.car.title': 'カーレンタルシステム',
      'projects.car.desc': 'Pythonで構築した包括的なカーレンタル管理システム。車両在庫管理、予約処理、顧客記録、レンタル履歴追跡などの機能を搭載しています。',
      'projects.airline.title': '航空券予約システム',
      'projects.airline.desc': 'Javaで開発した航空券予約プラットフォーム。フライト検索、座席選択、乗客管理、予約確認、チケット発行に対応したクリーンなUIを備えています。',
      'projects.gido.desc': 'ビジネス日本語スキルを向上させるためのWebアプリケーション。インタラクティブなレッスン、語彙ドリル、会話練習、進捗追跡機能を搭載しています。',
      'projects.tag.desktop': 'デスクトップアプリ',
      'projects.tag.webapp': 'Webアプリ',
      'projects.tag.japanese': '日本語',

      // 学歴
      'edu.subtitle': '学びの歩み',
      'edu.title': '学歴 & <span class="text-gradient">経験</span>',
      'edu.date1': '2024年 — 現在',
      'edu.heading1': '情報技術学士号',
      'edu.desc1': '現在2年生として、日本語と並行して情報技術を学んでいます。プログラミング、データベース、ネットワーキング、ソフトウェアエンジニアリングの基礎を構築中です。',
      'edu.date2': '2024年 — 現在',
      'edu.heading2': '日本語学習',
      'edu.desc2': '会話力とビジネス日本語の両方に重点を置いて日本語を学習中。IT知識と語学力を組み合わせ、異文化間テクノロジーの機会を追求しています。',
      'edu.heading3': '独学 & プロジェクト',
      'edu.place3': '独学',
      'edu.desc3': 'Python、Java、Web開発における個人プロジェクトと自主学習を通じて、基礎的なプログラミングスキルを構築しました。',

      // お問い合わせ
      'contact.subtitle': 'ご連絡ください',
      'contact.title': '<span class="text-gradient">お問い合わせ</span>',
      'contact.infoTitle': '連絡先情報',
      'contact.location': '場所',
      'contact.locationVal': 'スリランカ',
      'contact.email': 'メール',
      'contact.university': '大学',
      'contact.form.name': 'お名前',
      'contact.form.namePh': '山田太郎',
      'contact.form.email': 'メールアドレス',
      'contact.form.emailPh': 'taro@example.com',
      'contact.form.subject': '件名',
      'contact.form.subjectPh': 'プロジェクトのお問い合わせ',
      'contact.form.message': 'メッセージ',
      'contact.form.messagePh': 'ご要望をお聞かせください...',
      'contact.form.send': '<i class="bi bi-send-fill me-2"></i>メッセージを送信',

      // フッター
      'footer.text': '&copy; 2026 Nuvin Amarasinghe。スリランカで<i class="bi bi-heart-fill text-gradient"></i>を込めて制作。'
    }
  };

  // Typed phrases per language
  const typedPhrases = {
    en: ['IT Undergraduate', 'Python & Java Developer', 'Web Developer', 'Japanese Language Learner', 'Tech Enthusiast'],
    ja: ['IT学部生', 'Python & Java 開発者', 'ウェブ開発者', '日本語学習者', 'テックエンスージアスト']
  };

  let currentLang = 'en';

  /* ---------- Apply language ---------- */
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Text content / innerHTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = translations[lang][key];
      if (!val) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = translations[lang][key];
      if (val) el.placeholder = val;
    });

    // Update toggle button
    const flagEl = document.querySelector('#langToggle .lang-flag');
    if (flagEl) flagEl.textContent = lang === 'en' ? '🇯🇵' : '🇬🇧';

    // Restart typing with new phrases
    resetTyping();
  }

  /* ---------- Language Toggle ---------- */
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'ja' : 'en');
    });
  }

  /* ---------- Typing Effect ---------- */
  const typedEl = document.getElementById('typed-text');
  let phraseIdx = 0, charIdx = 0, deleting = false, typingTimeout;

  function resetTyping() {
    clearTimeout(typingTimeout);
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
    if (typedEl) typedEl.textContent = '';
    type();
  }

  function type() {
    const phrases = typedPhrases[currentLang];
    const current = phrases[phraseIdx];
    if (!deleting) {
      typedEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        typingTimeout = setTimeout(type, 1800);
        return;
      }
      typingTimeout = setTimeout(type, 80);
    } else {
      typedEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typingTimeout = setTimeout(type, 400);
        return;
      }
      typingTimeout = setTimeout(type, 40);
    }
  }
  type();

  /* ---------- Navbar Scroll ---------- */
  const navbar = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ---------- Active Nav Link on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function activateNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', activateNav);
  activateNav();

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Skill Bar Animation ---------- */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(bar => skillObserver.observe(bar));

  /* ---------- Project Filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ---------- Contact Form Handling ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = btn.innerHTML;
      const successMsg = currentLang === 'ja'
        ? '<i class="bi bi-check-circle-fill me-2"></i>送信完了！'
        : '<i class="bi bi-check-circle-fill me-2"></i>Message Sent!';
      btn.innerHTML = successMsg;
      btn.disabled = true;
      btn.style.opacity = '.8';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        btn.style.opacity = '1';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Collapse mobile nav
        const navCollapse = document.getElementById('navLinks');
        if (navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      }
    });
  });

});
