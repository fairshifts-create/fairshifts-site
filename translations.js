/* FairShifts i18n dictionary — English / Arabic (Modern Standard Arabic).
   Flat key -> string. Keys ending in "Html" contain trusted, developer-authored
   markup (e.g. <b>, <a>) and are applied via innerHTML; all other keys are
   applied via textContent. Prices/numbers stay in Western digits, matching
   standard Gulf business usage. */
window.FAIRSHIFTS_I18N = {
  en: {
    /* nav */
    'nav.painPoints': 'Pain Points',
    'nav.howItWorks': 'How It Works',
    'nav.examples': 'Examples',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.getFreeRoster': 'Get your first roster free',
    'nav.toggleDark': 'Toggle dark mode',
    'nav.menu': 'Menu',
    'nav.backHome': '← Back to home',

    /* hero */
    'hero.eyebrow': 'Done-for-you staff rostering',
    'hero.h1': 'Stop losing a full day every month to the rota — and still getting complaints about it.',
    'hero.lead': 'Fair rosters, built for you — delivered in 48 hours, usually much faster. Send your staff list and shift rules; we handle the rest.',
    'hero.seePlans': 'See plans',
    'hero.scroll': 'Scroll',

    /* pain points */
    'pain.eyebrow': 'The problem',
    'pain.h2': "Rostering shouldn't feel like this",
    'pain.lead': "If any of this sounds familiar, you're not doing anything wrong — the spreadsheet is.",
    'pain.gaps.title': 'Coverage gaps',
    'pain.gaps.body': "Shifts slip through the cracks and you find out when someone doesn't show up — not before.",
    'pain.unfair.title': 'Unfair shift counts',
    'pain.unfair.body': "Staff keep score even when you don't. Uneven nights, weekends, and overtime quietly drive people out the door.",
    'pain.excel.title': 'Hours wasted in Excel',
    'pain.excel.body': 'The same spreadsheet, rebuilt by hand every month — then patched again when the mistakes show up.',

    /* how it works */
    'how.eyebrow': 'How it works',
    'how.h2': 'From staff list to finished roster in three steps',
    'how.lead': "No software to learn, no account to set up — just send us what you've got.",
    'how.step1.title': 'Send your staff list & rules',
    'how.step1.body': 'A short form: your team, their availability, and the shift rules that actually matter to you.',
    'how.step2.title': 'We build & validate it',
    'how.step2.body': 'Our scheduling engine builds your roster and checks it against every rule you gave us — automatically.',
    'how.step3.title': 'You get a ready roster in 48 hours',
    'how.step3.body': 'A polished, color-coded Excel file lands in your inbox — usually well before the 48-hour mark. One free revision included.',

    /* showcase */
    'showcase.eyebrow': 'See it in action',
    'showcase.h2': 'See the difference for yourself',
    'showcase.lead': 'A real roster, before and after FairShifts rebuilt it. Click any image to zoom in.',
    'showcase.before': 'Before',
    'showcase.after': 'After',
    'showcase.validationLabel': 'Validation report',
    'showcase.captionHtml': '<b>115 violations found</b> → <b>0</b> after rebuild',
    'showcase.altBefore': 'A messy, unvalidated staff roster spreadsheet full of scheduling conflicts',
    'showcase.altAfter': 'The same roster after FairShifts rebuilt it, clean and color-coded',
    'showcase.altValidation': 'Rule validation report showing zero remaining violations after rebuild',
    'showcase.ariaBefore': 'View the before roster full-size',
    'showcase.ariaAfter': 'View the after roster full-size',
    'showcase.ariaValidation': 'View the validation report full-size',

    /* download */
    'download.eyebrow': 'Try it yourself',
    'download.h2': 'Download the full example roster',
    'download.lead': "See exactly what you'll receive — a complete example roster, fully validated.",
    'download.button': 'Download the full example roster (Excel)',
    'download.note': 'All names and data in this file are fictional — created for demonstration only.',

    /* pricing */
    'pricing.eyebrow': 'Pricing',
    'pricing.h2': 'Simple pricing, built to grow with you',
    'pricing.lead': 'Start with our done-for-you service today. Self-serve tools are on the way.',
    'pricing.badgeSoon': 'Coming soon',
    'pricing.badgePopular': 'Most popular',
    'pricing.badgeLive': 'Available now',
    'pricing.perMonth': '/ month',
    'pricing.currencyUSD': 'USD',
    'pricing.pro.title': 'Pro',
    'pricing.pro.sub': 'For a single location, up to 30 staff',
    'pricing.pro.amount': '75 AED',
    'pricing.pro.f1': 'Unlimited roster generations and edits',
    'pricing.pro.f2': 'Color-coded Excel export',
    'pricing.pro.f3': 'Full rule validation',
    'pricing.business.title': 'Business',
    'pricing.business.sub': 'Unlimited staff, multiple locations/teams',
    'pricing.business.amount': '165 AED',
    'pricing.business.f1': 'AI intake — upload your spreadsheet or describe rules in plain English',
    'pricing.business.f2': 'Priority support',
    'pricing.business.f3': 'Everything in Pro',
    'pricing.dfy.title': 'Done-for-You',
    'pricing.dfy.sub': 'We build, validate, and deliver your roster every month',
    'pricing.dfy.amount': 'From 275 AED',
    'pricing.dfy.f1': 'Delivered within 48 hours',
    'pricing.dfy.f2': 'One revision round included',
    'pricing.dfy.f3': 'No software to learn',
    'pricing.dfy.f4': 'First roster FREE (limited spots)',
    'pricing.joinWaitlist': 'Join the waitlist',
    'pricing.noteHtml': 'All plans: your staff data stays minimal — first names or anonymized IDs only. <a href="#faq-privacy">Learn more in our FAQ →</a>',

    /* testimonials */
    'testi.eyebrow': 'What managers say',
    'testi.h2': 'Trusted by teams who used to dread the rota',
    'testi.quote1': '"Placeholder — replace with a real quote about the time saved each month."',
    'testi.quote2': '"Placeholder — replace with a real quote about coverage gaps disappearing."',
    'testi.quote3': '"Placeholder — replace with a real quote about staff complaints going down."',
    'testi.name': 'Full Name',
    'testi.role': 'Role, Care Home Name',

    /* founder note (shown instead of testimonials until SHOW_TESTIMONIALS is true) */
    'founder.eyebrow': 'Why FairShifts',
    'founder.h2': "Built by someone who's done the rota",
    'founder.body': "For years I managed rosters for a large frontline team — the spreadsheets, the fairness complaints, the hours lost every month just getting the schedule out. FairShifts exists because I got tired of that scramble and decided to build the tool I wished I'd had. Every roster we deliver is built the way I'd want mine built — fair, fast, and right the first time.",
    'founder.signoff': '— Sam',

    /* FAQ */
    'faq.eyebrow': 'FAQ',
    'faq.h2': 'Quick answers',
    'faq.q1': 'Is our staff data safe?',
    'faq.a1Html': "We only ever need first names or anonymized IDs — never anything sensitive like addresses, ID numbers, or phone numbers. Your staff's privacy is protected by design, not just policy. Read our <a href=\"privacy.html\">Privacy Policy</a> for details.",
    'faq.q2': 'How fast is turnaround?',
    'faq.a2': '48 hours from when we receive your staff list and shift rules — most rosters come back well before that.',
    'faq.q3': "What happens if something's wrong?",
    'faq.a3': "One revision round is included with every roster, free. If we got something wrong, we'll fix it — no extra charge.",
    'faq.q4': 'What do you need from me?',
    'faq.a4': "Just your staff list and your shift rules — coverage needs, availability, and any fairness rules that matter to you. It's a short form, no spreadsheets required.",
    'faq.q5': 'How does payment work?',
    'faq.a5': "Your first roster is completely free, no card required. After that, our Done-for-You service is billed monthly from 275 AED depending on your team size. Our self-serve Pro and Business plans are launching soon — join the waitlist for early access and pricing.",

    /* final CTA */
    'finalCta.h2': 'Ready for a roster that just works?',
    'finalCta.lead': "Your first roster is free — see what FairShifts can do before you commit to anything.",
    'finalCta.emailInstead': 'Email us instead',
    'finalCta.orEmail': 'Or reach us directly:',

    /* footer */
    'footer.tagline': 'Done-for-you staff rostering for care homes and shift-based teams.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2026 FairShifts. All rights reserved.',

    /* modals (shared) */
    'modal.close': 'Close',
    'modal.labelEmail': 'Email',
    'modal.errorHtml': 'Something went wrong — please email us directly at <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* modal: free roster */
    'modalFree.title': 'Get your first roster free',
    'modalFree.sub': "Tell us about your team — we'll build your first roster free of charge, no card required.",
    'modalFree.labelName': 'Full name',
    'modalFree.labelBusiness': 'Business / care home name',
    'modalFree.labelStaffCount': 'Approx. number of staff (optional)',
    'modalFree.labelNotes': 'Anything else we should know? (optional)',
    'modalFree.submit': 'Request my free roster',
    'modalFree.note': "We'll reply within one business day.",
    'modalFree.success': "Thanks! We've got your request — we'll be in touch within one business day.",

    /* modal: waitlist */
    'modalWaitlist.title': 'Join the waitlist',
    'modalWaitlist.sub': 'Be first to know when FairShifts Pro and Business launch — plus early-access pricing.',
    'modalWaitlist.submit': 'Join the waitlist',
    'modalWaitlist.note': "No spam — just a heads-up when it's ready.",
    'modalWaitlist.success': "You're on the list! We'll email you as soon as it's ready.",

    /* lightbox */
    'lightbox.ariaLabel': 'Image preview',

    /* email popover */
    'emailPopover.ariaLabel': 'Email options',
    'emailPopover.gmail': 'Open in Gmail',
    'emailPopover.mailApp': 'Open in your mail app',
    'emailPopover.copy': 'Copy email address',
    'emailPopover.copied': 'Copied!',

    /* legal pages (shared) */
    'legal.updated': 'Last updated: [add date]',
    'legal.contactH2': 'Contact',
    'legal.tocLabel': 'On this page',

    /* privacy.html */
    'privacy.h1': 'Privacy Policy',
    'privacy.updated': 'Last updated: July 19, 2026',
    'privacy.introH2': 'Introduction',
    'privacy.introBody': 'FairShifts ("we", "us") provides done-for-you staff rostering services for care homes and security firms. This policy explains what we collect, why, and your rights.',
    'privacy.collectH2': 'What we collect',
    'privacy.collectIntro': 'Your contact details (name, email, organisation) when you subscribe or message us.',
    'privacy.collectYesTitle': 'What we collect',
    'privacy.collectYes1': 'Staff first names or anonymised IDs',
    'privacy.collectYes2': 'Roles',
    'privacy.collectYes3': 'Teams',
    'privacy.collectYes4': 'Contracted hours',
    'privacy.collectYes5': 'Availability and leave dates',
    'privacy.collectYes6': 'Your scheduling rules',
    'privacy.collectNoTitle': 'What we never ask for',
    'privacy.collectNo1': 'Staff surnames',
    'privacy.collectNo2': 'Addresses',
    'privacy.collectNo3': 'Dates of birth',
    'privacy.collectNo4': 'ID numbers',
    'privacy.collectNo5': 'Phone numbers',
    'privacy.collectNo6': 'Health information',
    'privacy.collectNo7': 'Bank details',
    'privacy.collectPayments': "We don't yet collect payments directly through this website — when online billing launches for our Pro and Business plans, it will go through Stripe's secure checkout, and card numbers will never touch our systems.",
    'privacy.useH2': 'How we use it',
    'privacy.useBody': 'Solely to build, check, and deliver your rosters, manage your subscription, and reply to you. We never sell data or use it for advertising.',
    'privacy.shareH2': 'Who we share it with',
    'privacy.shareBodyHtml': 'Only the services that run FairShifts: Formspree (intake forms), Google Drive (file storage), and Vercel (website hosting).',
    'privacy.shareBody2Html': 'Once online billing launches, <a href="https://stripe.com/privacy" target="_blank" rel="noopener">Stripe</a> (payments) will be added to this list. No one else.',
    'privacy.retentionH2': 'Data retention',
    'privacy.retentionBody': "We keep your roster files and intake data while you're a customer. If you cancel, everything is deleted within 90 days. Invoices are kept as long as tax law requires.",
    'privacy.rightsH2': 'Your rights',
    'privacy.rightsBody': 'Email us anytime for a copy of your data or to have it deleted; we respond within one month. You can also complain to the data protection authority in the United Arab Emirates.',
    'privacy.securityH2': 'Security',
    'privacy.securityBody': "Two-factor authentication on our accounts and minimal data collection by design. Once online payments launch, they'll be handled by PCI-DSS certified Stripe.",
    'privacy.cookiesH2': 'Cookies & analytics',
    'privacy.cookiesBody': 'This website uses no tracking cookies and no advertising trackers.',
    'privacy.contactBodyHtml': 'Questions about this policy can be sent to <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* terms.html */
    'terms.placeholderNotice': 'This is placeholder text. Replace everything below with your finalized Terms of Service — see the "how to edit" notes for exactly which file this is.',
    'terms.h1': 'Terms of Service',
    'terms.overviewH2': 'Overview',
    'terms.overviewBody': '[Placeholder] These terms govern your use of the FairShifts done-for-you rostering service and, once launched, the FairShifts Pro and Business software plans.',
    'terms.serviceH2': 'The service',
    'terms.serviceBody': '[Placeholder] Describe exactly what\'s included: roster turnaround time (48 hours), the one included revision round, and what counts as a "revision" versus a new order.',
    'terms.paymentH2': 'Payment',
    'terms.paymentBody': '[Placeholder] Describe billing terms for the Done-for-You monthly service, what happens with the free first roster, refund policy, and cancellation terms.',
    'terms.responsibilitiesH2': 'Your responsibilities',
    'terms.responsibilitiesBody': '[Placeholder] Describe what the customer needs to provide (staff list, shift rules) and their responsibility for the accuracy of that information.',
    'terms.liabilityH2': 'Limitation of liability',
    'terms.liabilityBody': '[Placeholder] Standard liability limitation language — consider having a lawyer review this section specifically.',
    'terms.contactBodyHtml': 'Questions about these terms can be sent to <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* page titles */
    'meta.titleIndex': 'FairShifts — Done-for-You Staff Rosters, Delivered in 48 Hours',
    'meta.titlePrivacy': 'Privacy Policy — FairShifts',
    'meta.titleTerms': 'Terms of Service — FairShifts'
  },

  ar: {
    /* nav */
    'nav.painPoints': 'نقاط الألم',
    'nav.howItWorks': 'آلية العمل',
    'nav.examples': 'نماذج',
    'nav.pricing': 'الأسعار',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.getFreeRoster': 'احصل على أول جدول مجانًا',
    'nav.toggleDark': 'تبديل الوضع الليلي',
    'nav.menu': 'القائمة',
    'nav.backHome': '→ العودة إلى الرئيسية',

    /* hero */
    'hero.eyebrow': 'خدمة جدولة الموظفين بالكامل نيابةً عنك',
    'hero.h1': 'توقف عن إضاعة يوم كامل كل شهر في إعداد الجدول — وسط شكاوى لا تنتهي.',
    'hero.lead': 'جداول عمل عادلة، نُعدّها لك بالكامل، وتصل خلال 48 ساعة، وغالبًا أسرع من ذلك. أرسل لنا قائمة موظفيك وقواعد المناوبات، ونتولى الباقي.',
    'hero.seePlans': 'اطّلع على الباقات',
    'hero.scroll': 'مرر للأسفل',

    /* pain points */
    'pain.eyebrow': 'المشكلة',
    'pain.h2': 'إعداد الجدول لا يجب أن يكون بهذا الشكل',
    'pain.lead': 'إن بدا لك أي من هذا مألوفًا، فالخطأ ليس منك — بل من جدول البيانات.',
    'pain.gaps.title': 'فجوات في التغطية',
    'pain.gaps.body': 'تضيع بعض المناوبات دون تغطية، ولا تكتشف ذلك إلا عندما يتغيب أحد الموظفين — وليس قبل ذلك.',
    'pain.unfair.title': 'توزيع غير عادل للمناوبات',
    'pain.unfair.body': 'يحسب الموظفون العدد حتى لو لم تفعل أنت. التفاوت في الليالي وعطلات نهاية الأسبوع والوقت الإضافي يدفع الموظفين للاستقالة بصمت.',
    'pain.excel.title': 'ساعات ضائعة في إكسل',
    'pain.excel.body': 'نفس جدول البيانات، يُعاد بناؤه يدويًا كل شهر — ثم يُصحَّح مجددًا كلما ظهرت الأخطاء.',

    /* how it works */
    'how.eyebrow': 'آلية العمل',
    'how.h2': 'من قائمة الموظفين إلى جدول جاهز في ثلاث خطوات',
    'how.lead': 'لا برامج لتتعلمها، ولا حساب لإنشائه — فقط أرسل لنا ما لديك.',
    'how.step1.title': 'أرسل قائمة موظفيك وقواعدك',
    'how.step1.body': 'نموذج قصير: فريقك، أوقات تفرغهم، وقواعد المناوبات التي تهمك فعلًا.',
    'how.step2.title': 'نُعدّه ونتحقق منه',
    'how.step2.body': 'يقوم محرك الجدولة لدينا ببناء جدولك والتحقق منه مقابل كل قاعدة أخبرتنا بها — تلقائيًا.',
    'how.step3.title': 'تستلم جدولًا جاهزًا خلال 48 ساعة',
    'how.step3.body': 'يصلك ملف إكسل منظم وملوّن إلى بريدك — وغالبًا قبل انتهاء مهلة الـ48 ساعة بوقت طويل. مع جولة تعديل مجانية واحدة.',

    /* showcase */
    'showcase.eyebrow': 'شاهدها في الواقع',
    'showcase.h2': 'شاهد الفرق بنفسك',
    'showcase.lead': 'جدول حقيقي، قبل وبعد إعادة بنائه بواسطة FairShifts. اضغط على أي صورة لتكبيرها.',
    'showcase.before': 'قبل',
    'showcase.after': 'بعد',
    'showcase.validationLabel': 'تقرير التحقق',
    'showcase.captionHtml': 'من <b>115 مخالفة</b> إلى <b>0</b> بعد إعادة البناء',
    'showcase.altBefore': 'جدول مناوبات فوضوي وغير مُتحقق منه، مليء بتعارضات الجدولة',
    'showcase.altAfter': 'نفس الجدول بعد إعادة بنائه بواسطة FairShifts، منظم وملوّن',
    'showcase.altValidation': 'تقرير التحقق من القواعد يُظهر عدم وجود أي مخالفات متبقية بعد إعادة البناء',
    'showcase.ariaBefore': 'عرض جدول ما قبل بالحجم الكامل',
    'showcase.ariaAfter': 'عرض جدول ما بعد بالحجم الكامل',
    'showcase.ariaValidation': 'عرض تقرير التحقق بالحجم الكامل',

    /* download */
    'download.eyebrow': 'جربها بنفسك',
    'download.h2': 'حمّل نموذج الجدول الكامل',
    'download.lead': 'شاهد بالضبط ما ستحصل عليه — نموذج جدول كامل ومتحقق منه بالكامل.',
    'download.button': 'تحميل نموذج الجدول الكامل (إكسل)',
    'download.note': 'جميع الأسماء والبيانات في هذا الملف وهمية — أُعدّت لأغراض العرض فقط.',

    /* pricing */
    'pricing.eyebrow': 'الأسعار',
    'pricing.h2': 'أسعار بسيطة، مصممة لتنمو معك',
    'pricing.lead': 'ابدأ اليوم بخدمتنا الكاملة. أدوات الخدمة الذاتية قادمة قريبًا.',
    'pricing.badgeSoon': 'قريبًا',
    'pricing.badgePopular': 'الأكثر طلبًا',
    'pricing.badgeLive': 'متاح الآن',
    'pricing.perMonth': '/ شهريًا',
    'pricing.currencyUSD': 'دولار',
    'pricing.pro.title': 'برو',
    'pricing.pro.sub': 'لموقع واحد، حتى 30 موظفًا',
    'pricing.pro.amount': '75 درهم',
    'pricing.pro.f1': 'عدد غير محدود من عمليات إنشاء وتعديل الجداول',
    'pricing.pro.f2': 'تصدير إكسل مع تلوين واضح',
    'pricing.pro.f3': 'تحقق كامل من القواعد',
    'pricing.business.title': 'بزنس',
    'pricing.business.sub': 'عدد غير محدود من الموظفين، مواقع وفرق متعددة',
    'pricing.business.amount': '165 درهم',
    'pricing.business.f1': 'إدخال بالذكاء الاصطناعي — ارفع جدول بياناتك أو صف القواعد بلغتك الخاصة',
    'pricing.business.f2': 'دعم ذو أولوية',
    'pricing.business.f3': 'كل ما تشمله باقة برو',
    'pricing.dfy.title': 'الخدمة الكاملة',
    'pricing.dfy.sub': 'نُعدّ جدولك ونتحقق منه ونسلّمه لك كل شهر',
    'pricing.dfy.amount': 'من 275 درهم',
    'pricing.dfy.f1': 'يصلك خلال 48 ساعة',
    'pricing.dfy.f2': 'جولة تعديل واحدة مجانية',
    'pricing.dfy.f3': 'بلا برامج لتتعلمها',
    'pricing.dfy.f4': 'أول جدول مجانًا (عدد محدود من المقاعد)',
    'pricing.joinWaitlist': 'انضم إلى قائمة الانتظار',
    'pricing.noteHtml': 'جميع الباقات: بيانات موظفيك تبقى في حدها الأدنى — الاسم الأول أو رقم تعريف مجهول فقط. <a href="#faq-privacy">اعرف المزيد في الأسئلة الشائعة</a>',

    /* testimonials */
    'testi.eyebrow': 'ماذا يقول المديرون',
    'testi.h2': 'موثوق من قِبل فرق كانت تخشى الجدولة',
    'testi.quote1': '"نص مؤقت — استبدله بتقييم حقيقي عن الوقت الذي يتم توفيره شهريًا."',
    'testi.quote2': '"نص مؤقت — استبدله بتقييم حقيقي عن اختفاء فجوات التغطية."',
    'testi.quote3': '"نص مؤقت — استبدله بتقييم حقيقي عن انخفاض شكاوى الموظفين."',
    'testi.name': 'الاسم الكامل',
    'testi.role': 'المسمى الوظيفي، اسم دار الرعاية',

    /* founder note (shown instead of testimonials until SHOW_TESTIMONIALS is true) */
    'founder.eyebrow': 'لماذا FairShifts',
    'founder.h2': 'بُني بواسطة شخص عاش تجربة الجدولة بنفسه',
    'founder.body': 'لسنوات عديدة كنت أدير جداول عمل لفريق ميداني كبير — جداول البيانات، شكاوى عدم العدالة، والساعات الضائعة كل شهر لمجرد إخراج الجدول. أنشأت FairShifts لأنني سئمت من هذا الجهد المتكرر وقررت بناء الأداة التي كنت أتمنى لو كانت لدي. كل جدول نسلمه يُبنى بالطريقة التي كنت أتمنى أن يُبنى بها جدولي — عادل، سريع، وصحيح من أول مرة.',
    'founder.signoff': '— سام',

    /* FAQ */
    'faq.eyebrow': 'الأسئلة الشائعة',
    'faq.h2': 'إجابات سريعة',
    'faq.q1': 'هل بيانات موظفينا آمنة؟',
    'faq.a1Html': 'لا نحتاج سوى الاسم الأول أو رقم تعريف مجهول — ولا نطلب أبدًا بيانات حساسة كالعناوين أو أرقام الهوية أو الهواتف. خصوصية موظفيك محمية بالتصميم، لا بالسياسة فقط. اقرأ <a href="privacy.html">سياسة الخصوصية</a> لمزيد من التفاصيل.',
    'faq.q2': 'ما مدى سرعة التسليم؟',
    'faq.a2': 'خلال 48 ساعة من استلامنا قائمة موظفيك وقواعد المناوبات — وتصل معظم الجداول قبل ذلك بوقت طويل.',
    'faq.q3': 'ماذا يحدث إن كان هناك خطأ؟',
    'faq.a3': 'تشمل كل جدول جولة تعديل واحدة مجانية. إن أخطأنا في شيء، سنصححه دون أي رسوم إضافية.',
    'faq.q4': 'ماذا تحتاجون مني؟',
    'faq.a4': 'فقط قائمة موظفيك وقواعد مناوباتك — احتياجات التغطية، أوقات التفرغ، وأي قواعد عدالة تهمك. إنه نموذج قصير، ولا حاجة لجداول بيانات.',
    'faq.q5': 'كيف تتم عملية الدفع؟',
    'faq.a5': 'أول جدول لك مجاني تمامًا، دون الحاجة لبطاقة دفع. بعد ذلك، تُفوَّتر خدمتنا الكاملة شهريًا بدءًا من 275 درهم حسب حجم فريقك. باقتا برو وبزنس للخدمة الذاتية ستُطلقان قريبًا — انضم إلى قائمة الانتظار للحصول على وصول مبكر وأسعار تمهيدية.',

    /* final CTA */
    'finalCta.h2': 'هل أنت مستعد لجدول يعمل دون أي متاعب؟',
    'finalCta.lead': 'أول جدول لك مجاني — جرّب ما يمكن لـ FairShifts تقديمه قبل أن تلتزم بأي شيء.',
    'finalCta.emailInstead': 'راسلنا عبر البريد الإلكتروني',
    'finalCta.orEmail': 'أو راسلنا مباشرة:',

    /* footer */
    'footer.tagline': 'خدمة جدولة موظفين متكاملة لدور الرعاية والفرق ذات المناوبات.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط',
    'footer.copyright': '© 2026 FairShifts. جميع الحقوق محفوظة.',

    /* modals (shared) */
    'modal.close': 'إغلاق',
    'modal.labelEmail': 'البريد الإلكتروني',
    'modal.errorHtml': 'حدث خطأ ما — يرجى مراسلتنا مباشرة عبر <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* modal: free roster */
    'modalFree.title': 'احصل على أول جدول مجانًا',
    'modalFree.sub': 'أخبرنا عن فريقك — سنُعدّ أول جدول لك مجانًا، دون الحاجة لبطاقة دفع.',
    'modalFree.labelName': 'الاسم الكامل',
    'modalFree.labelBusiness': 'اسم النشاط التجاري / دار الرعاية',
    'modalFree.labelStaffCount': 'العدد التقريبي للموظفين (اختياري)',
    'modalFree.labelNotes': 'هل هناك شيء آخر تود إخبارنا به؟ (اختياري)',
    'modalFree.submit': 'اطلب جدولي المجاني',
    'modalFree.note': 'سنرد عليك خلال يوم عمل واحد.',
    'modalFree.success': 'شكرًا لك! استلمنا طلبك — سنتواصل معك خلال يوم عمل واحد.',

    /* modal: waitlist */
    'modalWaitlist.title': 'انضم إلى قائمة الانتظار',
    'modalWaitlist.sub': 'كن أول من يعلم عند إطلاق باقتي برو وبزنس — مع أسعار تمهيدية للوصول المبكر.',
    'modalWaitlist.submit': 'انضم إلى قائمة الانتظار',
    'modalWaitlist.note': 'بلا رسائل مزعجة — فقط إشعار عندما تكون الخدمة جاهزة.',
    'modalWaitlist.success': 'أنت الآن ضمن القائمة! سنراسلك بمجرد أن تصبح الخدمة جاهزة.',

    /* lightbox */
    'lightbox.ariaLabel': 'معاينة الصورة',

    /* email popover */
    'emailPopover.ariaLabel': 'خيارات البريد الإلكتروني',
    'emailPopover.gmail': 'افتح في Gmail',
    'emailPopover.mailApp': 'افتح في تطبيق البريد لديك',
    'emailPopover.copy': 'نسخ البريد الإلكتروني',
    'emailPopover.copied': 'تم النسخ!',

    /* legal pages (shared) */
    'legal.updated': 'آخر تحديث: [أضف التاريخ]',
    'legal.contactH2': 'تواصل معنا',
    'legal.tocLabel': 'في هذه الصفحة',

    /* privacy.html */
    'privacy.h1': 'سياسة الخصوصية',
    'privacy.updated': 'آخر تحديث: 19 يوليو 2026',
    'privacy.introH2': 'مقدمة',
    'privacy.introBody': 'توفر FairShifts ("نحن") خدمات جدولة الموظفين المتكاملة لدور الرعاية وشركات الأمن. توضح هذه السياسة ما نجمعه، ولماذا، وحقوقك.',
    'privacy.collectH2': 'ما الذي نجمعه',
    'privacy.collectIntro': 'بيانات التواصل الخاصة بك (الاسم، البريد الإلكتروني، اسم المنشأة) عند الاشتراك أو مراسلتنا.',
    'privacy.collectYesTitle': 'ما الذي نجمعه',
    'privacy.collectYes1': 'الأسماء الأولى للموظفين أو معرّفات مجهولة',
    'privacy.collectYes2': 'الأدوار',
    'privacy.collectYes3': 'الفرق',
    'privacy.collectYes4': 'ساعات العمل التعاقدية',
    'privacy.collectYes5': 'أوقات التفرغ وتواريخ الإجازات',
    'privacy.collectYes6': 'قواعد الجدولة الخاصة بك',
    'privacy.collectNoTitle': 'ما لا نطلبه أبدًا',
    'privacy.collectNo1': 'أسماء العائلة',
    'privacy.collectNo2': 'العناوين',
    'privacy.collectNo3': 'تاريخ الميلاد',
    'privacy.collectNo4': 'أرقام الهوية',
    'privacy.collectNo5': 'أرقام الهواتف',
    'privacy.collectNo6': 'المعلومات الصحية',
    'privacy.collectNo7': 'البيانات المصرفية',
    'privacy.collectPayments': 'لا نجمع المدفوعات مباشرة عبر هذا الموقع حتى الآن — عند إطلاق الفوترة الإلكترونية لباقتي برو وبزنس، ستتم عبر صفحة الدفع الآمنة من Stripe، ولن تصل أرقام البطاقات إلى أنظمتنا أبدًا.',
    'privacy.useH2': 'كيف نستخدمها',
    'privacy.useBody': 'فقط لإعداد جداولك والتحقق منها وتسليمها، وإدارة اشتراكك، والرد عليك. لا نبيع البيانات أبدًا ولا نستخدمها لأغراض إعلانية.',
    'privacy.shareH2': 'مع من نشارك بياناتك',
    'privacy.shareBodyHtml': 'فقط الخدمات التي تُشغّل FairShifts: Formspree (نماذج الطلبات)، Google Drive (تخزين الملفات)، وVercel (استضافة الموقع).',
    'privacy.shareBody2Html': 'عند إطلاق الفوترة الإلكترونية، ستُضاف <a href="https://stripe.com/privacy" target="_blank" rel="noopener">Stripe</a> (المدفوعات) إلى هذه القائمة. لا أحد غيرهم.',
    'privacy.retentionH2': 'الاحتفاظ بالبيانات',
    'privacy.retentionBody': 'نحتفظ بملفات جداولك وبيانات الطلب طوال فترة تعاملك معنا. إذا ألغيت اشتراكك، يُحذف كل شيء خلال 90 يومًا. تُحفظ الفواتير للمدة التي يقتضيها القانون الضريبي.',
    'privacy.rightsH2': 'حقوقك',
    'privacy.rightsBody': 'راسلنا في أي وقت للحصول على نسخة من بياناتك أو لطلب حذفها؛ نرد خلال شهر واحد. يمكنك أيضًا تقديم شكوى إلى هيئة حماية البيانات في دولة الإمارات العربية المتحدة.',
    'privacy.securityH2': 'الأمان',
    'privacy.securityBody': 'مصادقة ثنائية العوامل على حساباتنا، وجمع أدنى قدر من البيانات بحكم التصميم. عند إطلاق المدفوعات الإلكترونية، ستتم معالجتها عبر Stripe المعتمدة بشهادة PCI-DSS.',
    'privacy.cookiesH2': 'ملفات تعريف الارتباط والتحليلات',
    'privacy.cookiesBody': 'لا يستخدم هذا الموقع أي ملفات تعريف ارتباط للتتبع ولا أي أدوات تتبع إعلانية.',
    'privacy.contactBodyHtml': 'يمكن إرسال الأسئلة حول هذه السياسة إلى <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* terms.html */
    'terms.placeholderNotice': 'هذا نص مؤقت. استبدل كل ما يلي بشروط الخدمة النهائية الخاصة بك — راجع ملاحظات "كيفية التعديل" لمعرفة الملف بالضبط.',
    'terms.h1': 'شروط الخدمة',
    'terms.overviewH2': 'نظرة عامة',
    'terms.overviewBody': '[نص مؤقت] تحكم هذه الشروط استخدامك لخدمة FairShifts الكاملة لجدولة الموظفين، وكذلك باقتي برو وبزنس البرمجيتين بعد إطلاقهما.',
    'terms.serviceH2': 'الخدمة',
    'terms.serviceBody': '[نص مؤقت] وضّح بالتحديد ما تشمله الخدمة: مدة تسليم الجدول (48 ساعة)، جولة التعديل الواحدة المشمولة، وما الذي يُعد "تعديلاً" مقابل طلب جديد.',
    'terms.paymentH2': 'الدفع',
    'terms.paymentBody': '[نص مؤقت] وضّح شروط الفوترة الشهرية للخدمة الكاملة، وما يحدث مع الجدول الأول المجاني، وسياسة الاسترداد وشروط الإلغاء.',
    'terms.responsibilitiesH2': 'مسؤولياتك',
    'terms.responsibilitiesBody': '[نص مؤقت] وضّح ما يجب على العميل تقديمه (قائمة الموظفين، قواعد المناوبات) ومسؤوليته عن دقة تلك المعلومات.',
    'terms.liabilityH2': 'تحديد المسؤولية',
    'terms.liabilityBody': '[نص مؤقت] صياغة قياسية لتحديد المسؤولية — يُنصح بمراجعة هذا القسم تحديدًا من قِبل محامٍ مختص.',
    'terms.contactBodyHtml': 'يمكن إرسال الأسئلة حول هذه الشروط إلى <a href="mailto:fairshifts@gmail.com" class="email-trigger">fairshifts@gmail.com</a>.',

    /* page titles */
    'meta.titleIndex': 'FairShifts — جداول موظفين جاهزة خلال 48 ساعة',
    'meta.titlePrivacy': 'سياسة الخصوصية — FairShifts',
    'meta.titleTerms': 'شروط الخدمة — FairShifts'
  }
};
