/* =========================================================
   Digital Transformation – App Logic (EN/AR)
   - Process story per system (How it works)
   - Integration map (what connects to what)
   - Business impact (why sales ↑ / control ↑)
   - Toggle Challenge/Solution
   - Module detail view with Tabs + Slider + Lightbox + Charts
========================================================= */

/* =========================
   1) STATE
========================= */
let currentLang = "en";
let currentChart = null;
const sliderState = {};

/* =========================
   2) DOM
========================= */
const toggleSwitch = document.getElementById("toggle-switch");
const stateDisplay = document.getElementById("state-display");
const systemGrid = document.getElementById("system-grid");
const detailView = document.getElementById("detail-view");

/* =========================
   3) I18N (EN / AR)
   - النصوص مركّزة على: Process + Integration + Sales/Control
========================= */
const i18n = {
  en: {
    nav: { overview: "Overview", ecosystem: "The Ecosystem", impact: "Impact" },
    hero: {
      badge: "Digital transformation of Laith Al-Obaidi Company",
      title1: "Digital Transformation Through",
      title2: "all sales channels",
      subtitle:
        "A fully integrated ecosystem that increases sales, increases control, and eliminates lead loss across all brands.",
      cta: "Explore the Journey",
    },
    shift: {
      title: "The Shift",
      subtitle: "Toggle to see how deep integration changed the business.",
      challenge: "The Challenge",
      solution: "The Solution",
    },
    ecosystem: {
      title: "The Integrated Ecosystem",
      subtitle:
        "Select a module to see (1) Integration map, (2) Process, and (3) Business impact.",
    },
    impact: {
      title: "Strategic Outcomes",
      subtitle: "The tangible results of deep system integration.",
      cards: {
        salesTitle: "Higher Sales",
        salesDesc:
          "Higher conversion through faster response & disciplined follow-ups.",
        controlTitle: "Full Control",
        controlDesc: "Real-time visibility through SAP + CRM governance.",
        zeroTitle: "Zero Lead Loss",
        zeroDesc: "Every channel creates a tracked lead & task automatically.",
        smartTitle: "Smart Decisions",
        smartDesc: "Budget & operations driven by live data, not assumptions.",
      },
      quote: `"Integration is not a feature — it is the competitive advantage."`,
    },
    footer: {
      copy: "© 2026 Laith Alobaidi Group. Internal Transformation Report.",
    },

    ui: {
      integration: "Integration",
      process: "Process",
      whySales: "Why Sales Increased",
      whyControl: "Why Control Increased",
      keyCapabilities: "Key Capabilities",
      businessImpact: "Business Impact",
      moduleView: "Module View",
      overview: "Overview",
      screenshots: "Screenshots",
      noShots: "No screenshots provided for this module.",
      mapTitle: "Integration Map",
      processTitle: "How It Works (End-to-End)",
      salesTitle: "Sales Uplift (How?)",
      controlTitle: "Control Uplift (How?)",
      steps: "Steps",
    },

    app: {
      challenge: {
        title: "Before Integration",
        items: [
          {
            icon: "fa-search-minus",
            text: "Leads lost due to weak tracking and scattered channels.",
          },
          {
            icon: "fa-sync-alt",
            text: "Inconsistent follow-up and fragmented sales cycles.",
          },
          {
            icon: "fa-unlink",
            text: "Disconnected systems creating data silos.",
          },
          {
            icon: "fa-dice",
            text: "Decisions made by assumptions, not real-time data.",
          },
        ],
      },
      solution: {
        title: "After Integration",
        items: [
          {
            icon: "fa-check-circle",
            text: "Centralized tracking = Zero Lead Loss.",
          },
          {
            icon: "fa-robot",
            text: "Automated + mandatory follow-up cycles (SLA-driven).",
          },
          {
            icon: "fa-link",
            text: "Single source of truth across SAP, CRM, Stock, Channels.",
          },
          {
            icon: "fa-chart-pie",
            text: "Real-time dashboards & automated reports for management control.",
          },
        ],
      },

      systems: [
        {
          id: "whatsapp",
          name: "WhatsApp Business + AI",
          description:
            "Bulk campaigns integrated with CRM. AI classifies lead interest and detects sentiment to prevent any lead from being missed.",
          capabilities: [
            "Bulk messaging campaigns in minutes",
            "Lead classification: Interested / Not Interested / Unsure",
            "AI sentiment: Satisfied / Upset / Neutral",
            "Auto-task creation with response SLA",
          ],
          integration: [
            "WhatsApp Business API",
            "Provider/Webhook",
            "CRM",
            "AI Layer",
            "Reports/Dashboard",
          ],
          process: [
            "Sales/Marketing launches a broadcast campaign.",
            "All replies sync into CRM as conversation activity + lead updates.",
            "AI classifies intent & sentiment automatically.",
            "CRM triggers immediate tasks for sales reps with time SLA.",
            "Negative sentiment opens a ticket/escalation to protect the deal.",
          ],
          salesHow: [
            "Faster response prevents customers switching to competitors.",
            "Interested leads are prioritized → higher conversion.",
            "Upset customers are handled early → less deal loss.",
            "Every conversation becomes a tracked lead/task → no leakage.",
          ],
          controlHow: [
            "Full audit trail: who responded, when, outcome.",
            "SLA compliance metrics per team/rep.",
            "Live reports for engagement & conversion quality.",
          ],
          impact: ["Faster responses", "Higher conversion", "Zero lead loss"],
          chartTitle: "AI Lead Classification (Sample)",
        },

        {
          id: "incentive",
          name: "Incentive & Referral System (QR)",
          description:
            "A controlled referral engine. Customers receive a unique QR code. Referrals create  leads in CRM with one-time rewards (non-hierarchical) to avoid losses.",
          capabilities: [
            "Sales reps register customers",
            "Unique QR per customer",
            "Referral lead captured instantly",
            "One-time reward (non-hierarchical)",
          ],
          integration: [
            "Incentive System",
            "QR Engine",
            "Landing/Registration",
            "CRM Lead Creation",
          ],
          process: [
            "Sales rep registers a customer (linked to CRM identity).",
            "System generates a unique QR code for that customer.",
            "Customer shares QR with a friend (new lead).",
            "Friend submits info via QR landing page → CRM lead created + attributed to referrer.",
            "Rewards issued once per policy to avoid hierarchy losses.",
          ],
          salesHow: [
            "Warm leads via recommendation close faster.",
            "Customer becomes a growth channel → more leads without heavy spend.",
            "Rep motivation increases lead intake & follow-up discipline.",
          ],
          controlHow: [
            "Attribution tracking: who referred who, when, and conversion result.",
            "Reward policy caps prevent financial leakage.",
            "Rep performance measured per referral outcomes.",
          ],
          impact: [
            "Organic growth",
            "Low acquisition cost",
            "Motivated reps & customers",
          ],
        },

        {
          id: "sap",
          name: "SAP Dashboard (Real-Time)",
          description:
            "SAP is the transactional source of truth. A dashboard layer visualizes performance live and produces automated reports for management.",
          capabilities: [
            "Real-time visual dashboards",
            "Automated reports (daily/weekly)",
            "Management visibility per brand/branch/rep",
            "Performance tracking and trend detection",
          ],
          integration: [
            "SAP Core",
            "Dashboard/BI Layer",
            "CRM (optional sync)",
          ],
          process: [
            "Sales/stock/transactions are recorded in SAP.",
            "Dashboard pulls data periodically or live (based on integration).",
            "Charts expose trends per brand/branch/rep/time window.",
            "Automated reports are generated and shared to management.",
          ],
          salesHow: [
            "Weak areas are detected early → fast corrective action.",
            "High-performing channels/brands are amplified quickly.",
          ],
          controlHow: [
            "One truth source prevents manual reporting manipulation.",
            "Automated reporting reduces errors and delays.",
            "Management sees performance instantly instead of guessing.",
          ],
          impact: ["Faster decisions", "Operational control", "Clear insights"],
          chartTitle: "Sales Velocity Trend (Sample)",
        },

        {
          id: "tasks",
          name: "Tasks & Follow-Up Governance",
          description:
            "Tasking is integrated into CRM: auto-assignment, mandatory follow-up windows, auditing, and escalation reports to ensure no lead is neglected.",
          capabilities: [
            "Auto-assignment by brand/region",
            "Mandatory follow-up SLA windows",
            "Auditing & discipline reports",
            "Escalation if delayed/neglected",
          ],
          integration: [
            "CRM Leads",
            "Task Engine",
            "SLA Rules",
            "Escalation Reports",
          ],
          process: [
            "Any lead arrives from any channel and becomes a CRM lead.",
            "System assigns the lead automatically to the correct rep/team.",
            "Follow-up cycle starts with mandatory SLA timeframes.",
            "If SLA is missed → escalation triggers + appears in reports.",
          ],
          salesHow: [
            "No lead is forgotten → higher conversion.",
            "Structured follow-up keeps customer engaged until closing.",
          ],
          controlHow: [
            "Rep accountability with measurable SLA compliance.",
            "Management can audit and intervene immediately.",
          ],
          impact: [
            "No neglected leads",
            "Higher discipline",
            "Improved closing",
          ],
        },

        {
          id: "crm",
          name: "CRM Core (Single Source of Truth)",
          description:
            "The central brain connecting Stock, SAP, Tasks, WhatsApp, Meta, Websites, and Complaints. The full customer lifecycle is controlled in one system.",
          capabilities: [
            "Smart follow-up cycles based on customer feedback",
            "Live stock/vehicle linkage",
            "Ticketing for complaints with SLA",
            "Full lifecycle tracking from lead to sale",
          ],
          integration: [
            "Stock/Inventory",
            "SAP",
            "Tasks",
            "WhatsApp",
            "Meta Inbox",
            "Web Leads",
            "Tickets/Service",
          ],
          process: [
            "All channels feed leads into CRM.",
            "CRM enriches lead with inventory availability and SAP context.",
            "Follow-up cycles adapt based on customer feedback stage.",
            "Complaints open tickets with ownership + SLA resolution workflow.",
            "Everything is logged: actions, outcomes, and accountability.",
          ],
          salesHow: [
            "Fewer drop-offs due to better inventory alignment and structured follow-up.",
            "Higher trust/retention by resolving issues fast.",
          ],
          controlHow: [
            "Unified governance across operations, sales, and service.",
            "Visibility into pipeline health and rep performance.",
            "Ticket workflow prevents customers getting lost between departments.",
          ],
          impact: ["Better CX", "Higher retention", "Brand trust"],
        },

        {
          id: "ads",
          name: "Ads Monitoring (ROI Control)",
          description:
            "Monitor social campaigns and connect performance to brand needs. Budget shifts are driven by real results, not assumptions.",
          capabilities: [
            "Real-time spend tracking",
            "Identify brands needing support",
            "Granular ROI and lead quality review",
            "Data-driven budget allocation",
          ],
          integration: [
            "Ads Platforms",
            "Monitoring Dashboard",
            "CRM Outcomes (best practice)",
          ],
          process: [
            "Track spend, leads, and engagement per brand/campaign.",
            "Compare performance to CRM outcomes (conversion where available).",
            "Detect weak brands/campaigns and optimize targeting/creative/budget.",
          ],
          salesHow: [
            "Spend goes to campaigns that bring convertible leads.",
            "Stops wasted budget early → more efficient lead generation.",
          ],
          controlHow: [
            "Clear visibility: where money goes and what it returns.",
            "Brand-by-brand accountability and optimization actions.",
          ],
          impact: ["Optimized spend", "Better ROI", "Smarter strategy"],
          chartTitle: "Spend vs Revenue (Sample)",
        },

        {
          id: "meta",
          name: "Meta API Unified Inbox (FB/IG)",
          description:
            "All messages and comments in one inbox. Replies are faster, and every inquiry can become a CRM lead with follow-up tasks.",
          capabilities: [
            "One place for DMs + comments",
            "Facebook + Instagram unified",
            "Less tab switching → faster response",
            "No missed inquiries with statuses/queue",
          ],
          integration: ["Meta API (FB/IG)", "Unified Inbox", "CRM", "Tasks"],
          process: [
            "All FB/IG DMs and comments stream into one inbox.",
            "Agents reply from one screen without switching tabs.",
            "Inquiries are logged to CRM as leads or updates to existing leads.",
            "CRM triggers tasks and follow-up cycle automatically.",
          ],
          salesHow: [
            "Faster engagement increases conversion probability.",
            "No missed comments/DMs → no lost opportunities.",
          ],
          controlHow: [
            "Queue/status control and accountability per agent.",
            "Complete history of conversations tied to leads.",
          ],
          impact: [
            "High engagement",
            "Customer satisfaction",
            "No missed inquiries",
          ],
        },

        {
          id: "web",
          name: "Websites Integration (4 Brands)",
          description:
            "4 websites with vehicle listings + forms. Submissions create CRM leads instantly, logged also to Excel as backup and visible to call center immediately.",
          capabilities: [
            "Dynamic vehicle listings",
            "Test Drive form + Order form",
            "Instant lead flow to CRM and call center",
            "Excel backup logging",
          ],
          integration: [
            "4 Brand Websites",
            "Forms",
            "Excel Backup",
            "CRM",
            "Call Center",
          ],
          process: [
            "Customer submits test drive or order form on a brand website.",
            "Submission is logged into Excel as a backup record.",
            "At the same time, a CRM lead is created instantly.",
            "Call center sees the lead immediately and calls the customer.",
            "CRM stores call outcome and continues follow-up cycle.",
          ],
          salesHow: [
            "leads are contacted fast → higher close rate.",
            "Backup prevents data loss → leads never disappear.",
          ],
          controlHow: [
            "Source tracking per website/brand.",
            "Call center accountability with logged outcomes.",
          ],
          impact: [
            "Frictionless journey",
            "Instant response",
            "Max conversion",
          ],
        },
      ],
    },
  },

  ar: {
    nav: {
      overview: "نظرة عامة",
      ecosystem: "المنظومة المتكاملة",
      impact: "الأثر",
    },
    hero: {
      badge: "التحول الرقمي لشركة ليث العبيدي",
      title1: "التحول الرقمي عبر",
      title2: "جميع القنوات البيعية",
      subtitle:
        "منظومة متكاملة ترفع المبيعات، تزيد التحكم، وتمنع ضياع أي عميل محتمل عبر جميع البراندات.",
      cta: "استكشف الرحلة",
    },
    shift: {
      title: "التحول",
      subtitle: "بدّل لرؤية الفرق قبل وبعد التكامل العميق.",
      challenge: "التحديات",
      solution: "الحل",
    },
    ecosystem: {
      title: "المنظومة المتكاملة",
      subtitle:
        "اختر نظاماً لترى: (1) خريطة التكامل، (2) البروسس، (3) كيف زادت المبيعات والتحكم.",
    },
    impact: {
      title: "النتائج الاستراتيجية",
      subtitle: "الأثر الملموس لتكامل الأنظمة بشكل عميق.",
      cards: {
        salesTitle: "مبيعات أعلى",
        salesDesc: "رفع التحويل عبر رد أسرع ومتطلبات متابعة إلزامية.",
        controlTitle: "تحكم كامل",
        controlDesc: "رؤية لحظية عبر SAP + حوكمة CRM.",
        zeroTitle: "صفر ضياع عملاء",
        zeroDesc: "كل قناة تُنشئ Lead + Task تلقائياً.",
        smartTitle: "قرارات أذكى",
        smartDesc: "ميزانيات وتشغيل مبنيين على بيانات حية.",
      },
      quote: `"التكامل ليس ميزة — بل هو التفوق التنافسي."`,
    },
    footer: { copy: "© 2026 مجموعة ليث العبيدي. تقرير التحول الداخلي." },

    ui: {
      integration: "التكامل",
      process: "البروسس",
      whySales: "كيف زادت المبيعات؟",
      whyControl: "كيف زاد التحكم؟",
      keyCapabilities: "القدرات الأساسية",
      businessImpact: "الأثر على الأعمال",
      moduleView: "عرض النظام",
      overview: "نظرة",
      screenshots: "الصور",
      clickZoom: "اضغط على الصورة للتكبير",
      noShots: "لا توجد صور لهذا النظام.",
      mapTitle: "خريطة التكامل",
      processTitle: "كيف يعمل النظام من البداية للنهاية",
      salesTitle: "رفع المبيعات (كيف؟)",
      controlTitle: "رفع التحكم (كيف؟)",
      steps: "الخطوات",
    },

    app: {
      challenge: {
        title: "قبل التكامل",
        items: [
          {
            icon: "fa-search-minus",
            text: "فقدان عملاء محتملين بسبب غياب التتبع.",
          },
          { icon: "fa-sync-alt", text: "متابعة غير ثابتة ودورة بيع متقطعة." },
          { icon: "fa-unlink", text: "أنظمة منفصلة تسبب فقد البيانات." },
          { icon: "fa-dice", text: "قرارات مبنية على التخمين بدل البيانات." },
        ],
      },
      solution: {
        title: "بعد التكامل",
        items: [
          {
            icon: "fa-check-circle",
            text: "تتبع مركزي يضمن عدم ضياع العملاء.",
          },
          { icon: "fa-robot", text: "متابعة آلية وإلزامية ضمن SLA." },
          {
            icon: "fa-link",
            text: "مصدر بيانات واحد عبر SAP و CRM وكل القنوات.",
          },
          {
            icon: "fa-chart-pie",
            text: "لوحات وتقارير تلقائية لرفع التحكم الإداري.",
          },
        ],
      },

      systems: [
        {
          id: "whatsapp",
          name: "واتساب للاعمال + ذكاء اصطناعي",
          description:
            "حملات جماعية مربوطة مع CRM، مع تصنيف اهتمام ومشاعر بالذكاء الاصطناعي لضمان عدم ضياع أي Lead.",
          capabilities: [
            "حملات رسائل جماعية خلال دقائق",
            "تصنيف (مهتم / غير مهتم / غير واضح)",
            "تحليل مشاعر (راضي / متضايق / محايد)",
            "إنشاء مهام تلقائي + زمن رد (SLA)",
          ],
          integration: [
            "WhatsApp Business API",
            "Provider/Webhook",
            "CRM",
            "طبقة AI",
            "تقارير/لوحات",
          ],
          process: [
            "إطلاق حملة Broadcast من المبيعات/التسويق.",
            "كل رد يدخل CRM كـ محادثة وتحديث لل lead.",
            "AI يصنف الاهتمام والمشاعر تلقائياً.",
            "CRM ينشئ Task فورية للمندوب مع SLA.",
            "المشاعر السلبية تفتح Ticket  لحماية الصفقة.",
          ],
          salesHow: [
            "رد أسرع يمنع العميل يروح لمنافس.",
            "الـ Leads المهتمة تُعطى أولوية → تحويل أعلى.",
            "التعامل المبكر مع العملاء المتضايقين يقلل خسارة الصفقات.",
            "كل محادثة تصبح Lead/Task → صفر تسريب.",
          ],
          controlHow: [
            "سجل كامل: مين رد ومتى وشو النتيجة.",
            "قياس الالتزام بالـ SLA لكل موظف.",
            "تقارير فورية عن التفاعل وجودة التحويل.",
          ],
          impact: ["رد أسرع", "تحويل أعلى", "صفر ضياع"],
          chartTitle: "تصنيف الاهتمام (بيانات تجريبية)",
        },

        {
          id: "incentive",
          name: "نظام الحوافز والإحالة (QR)",
          description:
            "نظام إحالات مضبوط: QR فريد للعميل، والإحالة تصير Lead داخل CRM مع مكافأة مرة واحدة (غير هرمي) لمنع الخسائر.",
          capabilities: [
            "المندوب يسجل العميل",
            "QR فريد لكل عميل",
            "التقاط Lead للإحالة فوراً",
            "مكافأة مرة واحدة (غير هرمي)",
          ],
          integration: [
            "نظام الحوافز",
            "QR Engine",
            "Landing/Registration",
            "CRM Lead Creation",
          ],
          process: [
            "المندوب يسجل العميل (مربوط بهوية CRM).",
            "النظام يولد QR فريد للعميل.",
            "العميل يشارك QR مع صديق (Lead جديد).",
            "الصديق يعبي بياناته → يتولد Lead داخل CRM ومربوط بالمُحيل.",
            "تطبيق سياسة مكافأة واحدة لمنع الهرمية والخسائر.",
          ],
          salesHow: [
            "Leads من توصية → إغلاق أسرع.",
            "العميل صار قناة جذب → Leads أكثر دون صرف كبير.",
            "تحفيز المندوب يزيد المتابعة والنتائج.",
          ],
          controlHow: [
            "تتبع الإحالة: مين جاب مين ومتى وهل تحولت لمبيعات.",
            "سقف مكافآت يمنع التسريب المالي.",
            "قياس أداء المندوب حسب نتائج الإحالات.",
          ],
          impact: ["نمو عضوي", "تقليل التكلفة", "تحفيز المندوبين والعملاء"],
        },

        {
          id: "sap",
          name: "لوحة SAP",
          description:
            "SAP هو مصدر الحقيقة للمعاملات. لوحة BI تعرض الأداء برسوم وتصدر تقارير تلقائية للإدارة.",
          capabilities: [
            "لوحات رسومية لحظية",
            "تقارير تلقائية (يومي/أسبوعي)",
            "رؤية لكل براند/فرع/مندوب",
            "متابعة الأداء ومعرفة ما يتحسّن وما يتراجع",
          ],
          integration: ["SAP Core", "Dashboard/BI", "CRM (اختياري)"],
          process: [
            "تسجيل المبيعات/الستوك/المعاملات في SAP.",
            "الداشبورد يسحب البيانات (دوري/لحظي).",
            "الرسوم تعرض الأداء حسب البراند/الفرع/المندوب.",
            "التقارير تتولد تلقائياً وتوصل للإدارة.",
          ],
          salesHow: [
            "كشف الضعف بسرعة → تصحيح أسرع.",
            "تعزيز القنوات الأقوى بسرعة.",
          ],
          controlHow: [
            "مصدر واحد يمنع تلاعب التقارير اليدوية.",
            "تقارير تلقائية تقلل الأخطاء والتأخير.",
            "الإدارة ترى الحقيقة على الشاشة بدل التخمين.",
          ],
          impact: ["قرارات أسرع", "تحكم تشغيلي", "رؤية واضحة"],
          chartTitle: "اتجاه سرعة المبيعات (تجريبي)",
        },

        {
          id: "tasks",
          name: "نظام المهام والمتابعة (حوكمة)",
          description:
            "مهام مربوطة بالـ CRM: توزيع تلقائي، نوافذ متابعة إلزامية، تدقيق وتقارير تصعيد لضمان عدم إهمال أي Lead.",
          capabilities: [
            "توزيع تلقائي حسب البراند/المنطقة",
            "SLA متابعة إلزامية",
            "تدقيق ومؤشرات انضباط",
            "تصعيد عند التأخير",
          ],
          integration: [
            "CRM Leads",
            "Task Engine",
            "SLA Rules",
            "Escalation Reports",
          ],
          process: [
            "أي Lead من أي قناة يدخل CRM.",
            "توزيع تلقائي للمندوب المناسب.",
            "بدء دورة متابعة مع SLA إلزامية.",
            "عند كسر SLA → تصعيد وتقارير واضحة.",
          ],
          salesHow: [
            "لا يوجد Lead منسي → تحويل أعلى.",
            "دورة متابعة منظمة ترفع احتمالية الإغلاق.",
          ],
          controlHow: [
            "محاسبة المندوبين عبر SLA وتقارير أداء.",
            "الإدارة تقدر تتدخل فوراً عند أي تقصير.",
          ],
          impact: ["لا إهمال", "انضباط أعلى", "إغلاق أفضل"],
        },

        {
          id: "crm",
          name: "نظام CRM الأساسي (مصدر واحد)",
          description:
            "العقل المركزي الذي يربط الستوك وSAP والمهام والقنوات والشكاوي في مكان واحد. إدارة دورة العميل كاملة من Lead إلى بيع.",
          capabilities: [
            "دورات متابعة ذكية حسب فيدباك العميل",
            "ربط مباشر بالمخزون",
            "نظام شكاوي/تذاكر مع SLA",
            "تتبع كامل لدورة العميل",
          ],
          integration: [
            "Stock/Inventory",
            "SAP",
            "Tasks",
            "WhatsApp",
            "Meta",
            "Web Leads",
            "Tickets/Service",
          ],
          process: [
            "كل القنوات تولد Leads داخل CRM.",
            "ربط Lead بالمخزون  SAP.",
            "دورة متابعة تتغير حسب مرحلة العميل وفيدباكه.",
            "الشكاوي تتحول Tickets مع مسؤول وسقف زمني للحل.",
            "توثيق كامل لكل خطوة ونتيجة.",
          ],
          salesHow: [
            "تقليل التسرب بسبب تضارب معلومات الستوك والمتابعة.",
            "حل الشكاوي بسرعة يحافظ على البيع والسمعة.",
          ],
          controlHow: [
            "حوكمة موحدة للمبيعات والخدمة.",
            "رؤية كاملة لمسار المبيعات وأداء الموظفين.",
            "منع ضياع العميل بين الأقسام عبر Tickets.",
          ],
          impact: ["تجربة أفضل", "ولاء أعلى", "ثقة بالعلامة"],
        },

        {
          id: "ads",
          name: "مراقبة الإعلانات (ROI)",
          description:
            "مراقبة حملات السوشال وربط النتائج بالأداء. توجيه الميزانية بناء على أرقام حقيقية.",
          capabilities: [
            "تتبع صرف لحظي",
            "كشف البراندات الضعيفة",
            "قياس العائد وجودة الل leads",
            "تحسين وتوجيه الميزانية",
          ],
          integration: [
            "Ads Platforms",
            "Monitoring Dashboard",
            "CRM Outcomes (أفضل ممارسة)",
          ],
          process: [
            "تتبع الصرف والنتائج لكل حملة/براند.",
            "مقارنة بالأداء داخل CRM عندما يتوفر الربط.",
            "تحسين الاستهداف/المحتوى/الميزانية حسب البيانات.",
          ],
          salesHow: [
            "الصرف يروح للحملات التي تجيب Leads قابلة للتحويل.",
            "إيقاف الهدر بشكل مبكر→ Leads أفضل.",
          ],
          controlHow: [
            "وضوح كامل: أين صرفنا وما الذي رجع.",
            "مساءلة وتحسين على مستوى البراند.",
          ],
          impact: ["صرف أذكى", "عائد أفضل", "استراتيجية أدق"],
          chartTitle: "الصرف مقابل الإيراد (تجريبي)",
        },

        {
          id: "meta",
          name: "صندوق موحّد للسوشال (Meta API)",
          description:
            "دمج رسائل وتعليقات فيسبوك/إنستغرام في مكان واحد. كل استفسار يتحول Lead داخل CRM مع مهام متابعة.",
          capabilities: [
            "كل الرسائل والتعليقات بمكان واحد",
            "دمج FB + IG",
            "رد أسرع بدون تنقل",
            "لا طلبات فائتة مع Queue/Status",
          ],
          integration: ["Meta API (FB/IG)", "Unified Inbox", "CRM", "Tasks"],
          process: [
            "كل DM وتعليق يدخل الصندوق الموحد.",
            "الموظف يرد من نفس الشاشة.",
            "الاستفسار يتحول Lead داخل CRM أو تحديث لل lead موجود.",
            "CRM يبدأ دورة متابعة تلقائياً.",
          ],
          salesHow: [
            "سرعة الرد تزيد احتمالية التحويل.",
            "لا تعليق أو DM يضيع → فرص أكثر.",
          ],
          controlHow: [
            "Queue/Status ومساءلة للموظف.",
            "سجل محادثات مرتبط بالل lead.",
          ],
          impact: ["تفاعل أعلى", "رضا العملاء", "لا طلبات فائتة"],
        },

        {
          id: "web",
          name: "تكامل المواقع (4 براندات)",
          description:
            "4 مواقع فيها عرض سيارات + فورم تجربة قيادة وفورم حجز. الإرسال يسجل Excel (Backup) وبنفس الوقت ينشئ Lead في CRM ويظهر للكول سنتر فوراً.",
          capabilities: [
            "عرض سيارات ومواصفات",
            "فورم تجربة قيادة + فورم حجز",
            "تدفق فوري إلى CRM والكول سنتر",
            "Excel Backup Logging",
          ],
          integration: [
            "4 Websites",
            "Forms",
            "Excel Backup",
            "CRM",
            "Call Center",
          ],
          process: [
            "العميل يعبّي فورم (تجربة قيادة أو حجز).",
            "الطلب يُسجل في Excel كنسخة احتياط.",
            "بنفس اللحظة ينشأ Lead داخل CRM.",
            "الكول سنتر يشوفه فوراً ويتصل.",
            "نتيجة الاتصال تتسجل وتستمر المتابعة داخل CRM.",
          ],
          salesHow: [
            "Leads  تتواصل معها بسرعة → إغلاق أعلى.",
            "Backup يمنع أي فقد تقني → صفر ضياع.",
          ],
          controlHow: [
            "تتبع المصدر حسب الموقع/البراند.",
            "مساءلة الكول سنتر عبر نتائج مسجلة.",
          ],
          impact: ["رد فوري", "تحويل أعلى", "منع ضياع"],
        },
      ],
    },
  },
};

/* =========================
   4) VISUAL BASE (icons, charts, screenshots)
   - ملاحظة: الشارت بيانات تجريبية للعرض فقط
========================= */
const systemsBase = [
  {
    id: "whatsapp",
    icon: "fa-whatsapp",
    chartType: "doughnut",
    screenshots: [
      "./whatsapp/whatsapp.png",
      "./whatsapp/wjatsapp1.png",
      "./whatsapp/whatsapp2.png",
    ],
    chartData: {
      labels: ["Interested", "Not Interested", "Unsure"],
      datasets: [
        {
          data: [65, 25, 10],
          backgroundColor: ["#0f766e", "#d6d3d1", "#fcd34d"],
        },
      ],
    },
  },
  {
    id: "incentive",
    icon: "fa-hand-holding-usd",
    screenshots: [
      "./reward/rewards.jpeg",
      "./reward/reward1.png",
      "./reward/reward2.png",
    ],
    visualType: "flow",
  },
  {
    id: "sap",
    icon: "fa-chart-bar",
    screenshots: [
      "./sap/sap.jpeg",
      "./sap/sap1.png",
      "./sap/sap2.png",
      "./sap/sap3.png",
    ],
    chartType: "line",
    chartData: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Sales Velocity (Post-Integration)",
          data: [12, 19, 25, 32],
          borderColor: "#0f766e",
          tension: 0.4,
          fill: true,
          backgroundColor: "rgba(15,118,110,0.10)",
        },
      ],
    },
  },
  {
    id: "tasks",
    icon: "fa-clipboard-check",
    screenshots: [
      "./tasks/tasks.jpeg",
      "./tasks/task1.png",
      "./tasks/task2.png",
      "./tasks/task3.png",
    ],
    visualType: "list-highlight",
  },
  {
    id: "crm",
    icon: "fa-database",
    screenshots: ["./crm/crm1.png", "./crm/crm2.png", "./crm/crm3.png"],
    visualType: "icon-grid",
  },
  {
    id: "ads",
    icon: "fa-bullhorn",
    screenshots: [],
    chartType: "bar",
    chartData: {
      labels: ["Brand A", "Brand B", "Brand C"],
      datasets: [
        {
          label: "Ad Spend",
          data: [5000, 3000, 4000],
          backgroundColor: "#a8a29e",
        },
        {
          label: "Revenue Generated",
          data: [15000, 12000, 9000],
          backgroundColor: "#0f766e",
        },
      ],
    },
  },
  {
    id: "meta",
    icon: "fa-comments",
    screenshots: [],
    visualType: "comparison",
  },
  {
    id: "web",
    icon: "fa-laptop-code",
    screenshots: [
      "./websites/baic.png",
      "./websites/forthing.png",
      "./websites/jac.png",
      "./websites/rox.png",
    ],
    visualType: "flow-web",
  },
];

/* =========================
   5) Build appData per language
========================= */
function buildAppData(lang) {
  const t = i18n[lang].app;
  const systems = t.systems.map((s) => {
    const base = systemsBase.find((b) => b.id === s.id) || {};
    return { ...base, ...s };
  });

  return {
    challenge: { ...t.challenge, style: "border-l-8 border-red-400" },
    solution: { ...t.solution, style: "border-l-8 border-teal-500 text-start" },
    systems,
  };
}
let appData = buildAppData(currentLang);

/* =========================
   6) INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  renderChallengeSection(false);
  renderSystemGrid();
  if (appData.systems?.length) loadSystemDetail(appData.systems[0].id);
});

/* =========================
   7) LANGUAGE TOGGLE (EN/AR)
========================= */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  appData = buildAppData(currentLang);
  applyTranslations();

  const isSolution = toggleSwitch.checked;
  renderChallengeSection(isSolution);
  renderSystemGrid();
  if (appData.systems?.length) loadSystemDetail(appData.systems[0].id);
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations() {
  const t = i18n[currentLang];

  const heroTitle = document.getElementById("hero-title");
  heroTitle.innerHTML = `
    ${t.hero.title1} <br class="hidden md:block" />
    <span class="text-teal-700">${t.hero.title2}</span>
  `;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getByPath(t, key);
    if (typeof val === "string") el.textContent = val;
  });
}

/* =========================
   8) TOGGLE Challenge/Solution
========================= */
toggleSwitch.addEventListener("change", (e) => {
  renderChallengeSection(e.target.checked);
});

function renderChallengeSection(isSolution) {
  const data = isSolution ? appData.solution : appData.challenge;

  stateDisplay.style.opacity = "0";

  setTimeout(() => {
    stateDisplay.className = `bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 ${data.style}`;
    stateDisplay.innerHTML = `
      <h3 class="text-2xl font-bold mb-6 text-stone-800">${data.title}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${data.items
          .map(
            (item) => `
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-stone-100 p-3 rounded-full ${currentLang === "ar" ? "ml-4" : "mr-4"}">
              <i class="fas ${item.icon} ${isSolution ? "text-teal-600" : "text-red-500"} text-xl"></i>
            </div>
            <p class="text-stone-600 font-medium pt-2">${item.text}</p>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    stateDisplay.style.opacity = "1";
  }, 250);
}

/* =========================
   9) GRID
========================= */
function faPrefix(icon) {
  const brands = ["fa-whatsapp"];
  return brands.includes(icon) ? "fab" : "fas";
}

function renderSystemGrid() {
  systemGrid.innerHTML = appData.systems
    .map(
      (sys) => `
    <div onclick="loadSystemDetail('${sys.id}')"
         id="card-${sys.id}"
         class="bg-white p-6 rounded-xl shadow-sm border border-stone-100 cursor-pointer transition-all duration-200 card-hover group text-center">
      <div class="w-12 h-12 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-50 transition">
        <i class="${faPrefix(sys.icon)} ${sys.icon} text-stone-400 group-hover:text-teal-600 text-xl transition"></i>
      </div>
      <h3 class="font-bold text-stone-700 group-hover:text-teal-800">${sys.name}</h3>
    </div>
  `,
    )
    .join("");
}

/* =========================
   10) DETAIL VIEW
   - Shows: Integration Map + Process + Sales/Control explanation
   - Right panel tabs: Overview (visual/chart/flow) + Screenshots (slider)
========================= */
function loadSystemDetail(id) {
  const sys = appData.systems.find((s) => s.id === id);
  if (!sys) return;

  // active card
  document
    .querySelectorAll("#system-grid > div")
    .forEach((el) => el.classList.remove("active-card"));
  const activeCard = document.getElementById(`card-${id}`);
  if (activeCard) activeCard.classList.add("active-card");

  detailView.classList.add("hidden");

  const ui = i18n[currentLang].ui;

  // Overview Visual
  let overviewVisual = "";

  if (sys.chartType) {
    overviewVisual = `
      <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col justify-center">
        <h4 class="text-center text-sm font-semibold text-stone-500 mb-4">${sys.chartTitle || ""}</h4>
        <div class="chart-container">
          <canvas id="dynamicChart"></canvas>
        </div>
      </div>
    `;
  } else if (sys.visualType === "flow") {
    overviewVisual = `
      <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col justify-center items-center space-y-4">
        <h4 class="text-sm font-semibold text-stone-500 mb-2">${currentLang === "ar" ? "مسار الإحالة" : "Referral Workflow"}</h4>
        <div class="flex flex-col items-center w-full">
          <div class="bg-teal-50 px-4 py-2 rounded-lg text-teal-800 font-bold w-full text-center border border-teal-100">
            <i class="fas fa-user-tie ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "مندوب المبيعات" : "Sales Rep"}
          </div>
          <i class="fas fa-arrow-down text-stone-300 my-2"></i>
          <div class="bg-stone-50 px-4 py-2 rounded-lg text-stone-700 w-full text-center border border-stone-200">
            <i class="fas fa-qrcode ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "QR فريد" : "Unique QR"}
          </div>
          <i class="fas fa-arrow-down text-stone-300 my-2"></i>
          <div class="bg-stone-50 px-4 py-2 rounded-lg text-stone-700 w-full text-center border border-stone-200">
            <i class="fas fa-user ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "إحالة عميل جديد" : "Referral Lead"}
          </div>
          <div class="flex w-full justify-between mt-2 text-2xl text-stone-300">
            <i class="fas fa-arrow-down-left"></i>
            <i class="fas fa-arrow-down-right"></i>
          </div>
          <div class="flex w-full justify-between gap-2 mt-2">
            <div class="bg-green-50 p-2 rounded text-xs text-green-800 text-center flex-1 border border-green-100">
              ${currentLang === "ar" ? "🎁 مكافأة للمندوب (مرة واحدة)" : "🎁 Rep reward (one-time)"}
            </div>
            <div class="bg-blue-50 p-2 rounded text-xs text-blue-800 text-center flex-1 border border-blue-100">
              ${currentLang === "ar" ? "🏷️ خصم للعميل (مرة واحدة)" : "🏷️ Customer discount (one-time)"}
            </div>
          </div>
          <div class="mt-3 text-xs text-stone-500">
            ${currentLang === "ar" ? "نظام غير هرمي لمنع الخسائر" : "Non-hierarchical policy prevents losses"}
          </div>
        </div>
      </div>
    `;
  } else if (sys.visualType === "flow-web") {
    overviewVisual = `
      <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col justify-center">
        <h4 class="text-sm font-semibold text-stone-500 mb-4 text-center">${currentLang === "ar" ? "تدفق ليد الموقع" : "Website Lead Flow"}</h4>
        <div class="space-y-3">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded bg-stone-200 flex items-center justify-center"><i class="fas fa-globe text-stone-600"></i></div>
            <div class="flex-1 h-1 bg-stone-200 mx-2"></div>
            <span class="text-xs text-stone-500 uppercase font-bold">${currentLang === "ar" ? "إرسال فورم" : "Form Submit"}</span>
          </div>

          <div class="${currentLang === "ar" ? "pr-12" : "pl-12"} space-y-2">
            <div class="p-2 bg-teal-50 border border-teal-100 rounded text-sm text-teal-800">
              <i class="fas fa-bolt ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "CRM (فوري)" : "CRM (Instant)"}
            </div>
            <div class="p-2 bg-stone-50 border border-stone-200 rounded text-sm text-stone-600">
              <i class="fas fa-headset ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "الكول سنتر (تنبيه)" : "Call Center (Notify)"}
            </div>
            <div class="p-2 bg-stone-50 border border-stone-200 rounded text-sm text-stone-600">
              <i class="fas fa-file-excel ${currentLang === "ar" ? "ml-2" : "mr-2"}"></i>${currentLang === "ar" ? "Excel (Backup)" : "Excel (Backup)"}
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    overviewVisual = `
      <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col justify-center items-center text-center">
        <i class="fas ${sys.icon} text-6xl text-stone-200 mb-4"></i>
        <p class="text-stone-500 italic">${i18n[currentLang].impact.quote}</p>
      </div>
    `;
  }

  // Screenshots slider
  const hasShots = sys.screenshots && sys.screenshots.length;
  const sliderId = `slider-${sys.id}`;

  // right panel (tabs)
  const rightPanel = `
    <div class="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
      <div class="flex items-center justify-between mb-4" id="rightTabs-${sys.id}">
        <h4 class="text-sm font-semibold text-stone-500">${ui.moduleView}</h4>

        <div class="flex gap-2">
          <button class="tab-btn active" data-tab="overview" onclick="setRightTab('${sys.id}','overview')">
            ${ui.overview}
          </button>

          <button
            class="tab-btn ${hasShots ? "" : "opacity-40 cursor-not-allowed"}"
            ${hasShots ? "" : "disabled"}
            data-tab="shots"
            onclick="setRightTab('${sys.id}','shots')"
          >
            ${ui.screenshots}
          </button>
        </div>
      </div>

      <div id="tab-overview-${sys.id}">
        ${overviewVisual}
      </div>

      <div id="tab-shots-${sys.id}" class="hidden">
        ${
          hasShots
            ? `
          <div class="slider-shell" id="${sliderId}">
            <div class="slider-track">
              ${sys.screenshots
                .map(
                  (src) => `
                <div class="slider-slide">
                  <img src="${src}" alt="screenshot" onclick="openLightbox('${src}')" />
                </div>
              `,
                )
                .join("")}
            </div>

            
          </div>

          <div class="slider-meta">
          </div>
        `
            : `
          <div class="text-center text-stone-500 py-10">
            <i class="fas fa-image text-4xl text-stone-200 mb-3"></i>
            <p>${ui.noShots}</p>
          </div>
        `
        }
      </div>
    </div>
  `;

  // left panel (story)
  const integrationChips = (sys.integration || [])
    .map(
      (x) =>
        `<span class="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold border border-teal-100">${x}</span>`,
    )
    .join("");

  const capabilitiesList = (sys.capabilities || [])
    .map(
      (d) => `
      <li class="flex items-start">
        <i class="fas fa-check text-teal-500 mt-1 ${currentLang === "ar" ? "ml-2" : "mr-2"} text-xs"></i>
        <span class="text-stone-700">${d}</span>
      </li>
    `,
    )
    .join("");

  const processSteps = (sys.process || [])
    .map(
      (p) => `
      <div class="acc-item">
        <button class="acc-btn" onclick="toggleAcc(this)">
          <span class="acc-title">${p}</span>
        </button>
        
      </div>
    `,
    )
    .join("");

  const salesHowList = (sys.salesHow || [])
    .map(
      (x) =>
        `<li class="flex items-start"><i class="fas fa-arrow-right text-teal-500 mt-1 ${currentLang === "ar" ? "ml-2 rotate-180" : "mr-2"} text-xs"></i><span>${x}</span></li>`,
    )
    .join("");

  const controlHowList = (sys.controlHow || [])
    .map(
      (x) =>
        `<li class="flex items-start"><i class="fas fa-shield-halved text-teal-500 mt-1 ${currentLang === "ar" ? "ml-2" : "mr-2"} text-xs"></i><span>${x}</span></li>`,
    )
    .join("");

  const impactBadges = (sys.impact || [])
    .map(
      (i) =>
        `<span class="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">${i}</span>`,
    )
    .join("");

  // Render
  detailView.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start fade-in">
      <!-- LEFT -->
      <div>
        <div class="flex items-center mb-4">
          <div class="bg-teal-100 p-2 rounded-lg ${currentLang === "ar" ? "ml-3" : "mr-3"}">
            <i class="${faPrefix(sys.icon)} ${sys.icon} text-teal-700 text-xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-stone-800">${sys.name}</h3>
        </div>

        <p class="text-stone-600 text-lg mb-6 leading-relaxed border-l-4 border-teal-200 pl-4 ${
          currentLang === "ar" ? "border-l-0 border-r-4 pr-4 pl-0" : ""
        }">
          ${sys.description || ""}
        </p>

        <!-- Integration -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.mapTitle}</h4>
          <div class="flex flex-wrap gap-2">
            ${integrationChips}
          </div>
        </div>

        <!-- Key Capabilities -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.keyCapabilities}</h4>
          <ul class="space-y-2">${capabilitiesList}</ul>
        </div>

        <!-- Process -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.processTitle}</h4>
          <div class="space-y-3">
            ${processSteps}
          </div>
        </div>

        <!-- Sales How -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.salesTitle}</h4>
          <ul class="space-y-2 text-stone-700">${salesHowList}</ul>
        </div>

        <!-- Control How -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.controlTitle}</h4>
          <ul class="space-y-2 text-stone-700">${controlHowList}</ul>
        </div>

        <!-- Impact badges -->
        <div>
          <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">${ui.businessImpact}</h4>
          <div class="flex flex-wrap gap-2">${impactBadges}</div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="h-full">
        ${rightPanel}
      </div>
    </div>
  `;

  detailView.classList.remove("hidden");
  // ✅ Scroll smoothly to detail view
  setTimeout(() => {
    const yOffset = -100; // 👈 عدّل الرقم حسب ما بدك
    const y =
      detailView.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, 100);

  // Init chart (if overview is chart)
  if (sys.chartType) initChart(sys.chartType, sys.chartData);

  // Init slider
  if (hasShots) sliderInit(sliderId);
}

/* =========================
   11) Accordion (Process UI)
========================= */
function toggleAcc(btn) {
  const item = btn.closest(".acc-item");
  if (!item) return;
  item.classList.toggle("open");
}

/* =========================
   12) Charts
========================= */
function initChart(type, data) {
  const canvas = document.getElementById("dynamicChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (currentChart) currentChart.destroy();

  currentChart = new Chart(ctx, {
    type,
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { usePointStyle: true, padding: 20 },
        },
      },
      scales:
        type === "doughnut"
          ? {}
          : {
              y: {
                beginAtZero: true,
                grid: { display: true, color: "#f5f5f4" },
              },
              x: { grid: { display: false } },
            },
    },
  });
}

/* =========================
   13) Tabs
========================= */
function setRightTab(sysId, tab) {
  const ov = document.getElementById(`tab-overview-${sysId}`);
  const sh = document.getElementById(`tab-shots-${sysId}`);
  const tabsBar = document.getElementById(`rightTabs-${sysId}`);
  if (!ov || !sh || !tabsBar) return;

  tabsBar
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  const btn = tabsBar.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (btn) btn.classList.add("active");

  if (tab === "overview") {
    ov.classList.remove("hidden");
    sh.classList.add("hidden");
  } else {
    ov.classList.add("hidden");
    sh.classList.remove("hidden");
  }
}

/* =========================
   14) Slider
========================= */
function sliderInit(sliderId) {
  sliderState[sliderId] = sliderState[sliderId] || { index: 0 };
  sliderGo(sliderId, 0);
}

function sliderGo(sliderId, index) {
  const root = document.getElementById(sliderId);
  if (!root) return;

  const track = root.querySelector(".slider-track");
  const slides = root.querySelectorAll(".slider-slide");
  if (!track || !slides.length) return;

  const max = slides.length - 1;
  const i = Math.max(0, Math.min(index, max));
  sliderState[sliderId].index = i;

  const isRTL = document.documentElement.dir === "rtl";
  const offset = i * 100;

  track.style.transform = isRTL
    ? `translateX(${offset}%)`
    : `translateX(-${offset}%)`;

  const count = document.getElementById(`${sliderId}-count`);
  if (count) count.textContent = `${i + 1} / ${slides.length}`;
}

function sliderNext(sliderId) {
  const st = sliderState[sliderId] || { index: 0 };
  sliderGo(sliderId, st.index + 1);
}
function sliderPrev(sliderId) {
  const st = sliderState[sliderId] || { index: 0 };
  sliderGo(sliderId, st.index - 1);
}

/* =========================
   15) Scroll
========================= */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   16) Lightbox
========================= */
function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add("open");
}

function closeLightbox(e) {
  if (e.target && e.target.id === "lightbox") forceCloseLightbox();
}

function forceCloseLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (!lb || !img) return;
  lb.classList.remove("open");
  img.src = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") forceCloseLightbox();
});

/* =========================
   17) Expose functions for inline onclick
========================= */
window.toggleLanguage = toggleLanguage;
window.scrollToSection = scrollToSection;
window.loadSystemDetail = loadSystemDetail;
window.setRightTab = setRightTab;
window.sliderNext = sliderNext;
window.sliderPrev = sliderPrev;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.forceCloseLightbox = forceCloseLightbox;
window.toggleAcc = toggleAcc;
