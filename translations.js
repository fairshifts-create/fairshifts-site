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
    'hero.seeExample': 'See a real example',

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

    /* footer */
    'footer.tagline': 'Done-for-you staff rostering for care homes and shift-based teams.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2026 FairShifts. All rights reserved.',

    /* modals (shared) */
    'modal.close': 'Close',
    'modal.labelEmail': 'Email',
    'modal.errorHtml': 'Something went wrong — please email us directly at <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

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

    /* legal pages (shared) */
    'legal.updated': 'Last updated: [add date]',
    'legal.contactH2': 'Contact',

    /* privacy.html */
    'privacy.placeholderNotice': 'This is placeholder text. Replace everything below with your finalized Privacy Policy — see the "how to edit" notes for exactly which file this is.',
    'privacy.h1': 'Privacy Policy',
    'privacy.introH2': 'Introduction',
    'privacy.introBody': '[Placeholder] FairShifts ("we", "us") provides done-for-you staff rostering services. This policy explains what information we collect from you and the staff data you send us, and how we use it.',
    'privacy.collectH2': 'What we collect',
    'privacy.collectBody': '[Placeholder] To build your roster, we typically only need first names or anonymized staff IDs, along with shift availability and scheduling rules. We do not require or request sensitive personal data such as addresses, ID numbers, or phone numbers.',
    'privacy.useH2': 'How we use it',
    'privacy.useBody': '[Placeholder] Information you send us is used solely to build, validate, and deliver your staff roster, and to communicate with you about your order.',
    'privacy.retentionH2': 'Data retention',
    'privacy.retentionBody': '[Placeholder] Describe how long you keep uploaded staff lists and roster files, and how customers can request deletion.',
    'privacy.contactBodyHtml': 'Questions about this policy can be sent to <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

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
    'terms.contactBodyHtml': 'Questions about these terms can be sent to <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

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
    'hero.seeExample': 'شاهد نموذجًا حقيقيًا',

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

    /* footer */
    'footer.tagline': 'خدمة جدولة موظفين متكاملة لدور الرعاية والفرق ذات المناوبات.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط',
    'footer.copyright': '© 2026 FairShifts. جميع الحقوق محفوظة.',

    /* modals (shared) */
    'modal.close': 'إغلاق',
    'modal.labelEmail': 'البريد الإلكتروني',
    'modal.errorHtml': 'حدث خطأ ما — يرجى مراسلتنا مباشرة عبر <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

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

    /* legal pages (shared) */
    'legal.updated': 'آخر تحديث: [أضف التاريخ]',
    'legal.contactH2': 'تواصل معنا',

    /* privacy.html */
    'privacy.placeholderNotice': 'هذا نص مؤقت. استبدل كل ما يلي بسياسة الخصوصية النهائية الخاصة بك — راجع ملاحظات "كيفية التعديل" لمعرفة الملف بالضبط.',
    'privacy.h1': 'سياسة الخصوصية',
    'privacy.introH2': 'مقدمة',
    'privacy.introBody': '[نص مؤقت] تقدم FairShifts ("نحن") خدمات جدولة الموظفين المتكاملة. توضح هذه السياسة المعلومات التي نجمعها منك ومن بيانات الموظفين التي ترسلها لنا، وكيفية استخدامنا لها.',
    'privacy.collectH2': 'ما الذي نجمعه',
    'privacy.collectBody': '[نص مؤقت] لإعداد جدولك، نحتاج عادة فقط إلى الاسم الأول أو رقم تعريف مجهول للموظفين، إلى جانب أوقات التفرغ وقواعد الجدولة. لا نطلب أو نحتاج إلى بيانات شخصية حساسة كالعناوين أو أرقام الهوية أو أرقام الهواتف.',
    'privacy.useH2': 'كيف نستخدمها',
    'privacy.useBody': '[نص مؤقت] تُستخدم المعلومات التي ترسلها لنا حصريًا لإعداد جدول موظفيك والتحقق منه وتسليمه، وللتواصل معك بخصوص طلبك.',
    'privacy.retentionH2': 'الاحتفاظ بالبيانات',
    'privacy.retentionBody': '[نص مؤقت] وضّح المدة التي تحتفظ فيها بقوائم الموظفين وملفات الجداول المرفوعة، وكيف يمكن للعملاء طلب حذفها.',
    'privacy.contactBodyHtml': 'يمكن إرسال الأسئلة حول هذه السياسة إلى <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

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
    'terms.contactBodyHtml': 'يمكن إرسال الأسئلة حول هذه الشروط إلى <a href="mailto:fairshifts@gmail.com">fairshifts@gmail.com</a>.',

    /* page titles */
    'meta.titleIndex': 'FairShifts — جداول موظفين جاهزة خلال 48 ساعة',
    'meta.titlePrivacy': 'سياسة الخصوصية — FairShifts',
    'meta.titleTerms': 'شروط الخدمة — FairShifts'
  }
};
