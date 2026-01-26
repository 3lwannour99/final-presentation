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
    team: {
      title: "Project Team",
      subtitle: "The team behind the design and execution of this ecosystem",
      members: {
        ali: {
          name: "Ali Al-Neame",
          role: "Project Manager / Technical Lead",
        },
        nour: { name: "Nour Al-Alwan", role: "Full-Stack Developer" },
        raed: { name: "Raed Abzakh", role: "Integration Engineer" },
        mahmoud: { name: "Mahmoud Al-Sayed", role: "AI Developer" },
        shehab: { name: "Shehab Mohammad", role: "Front-End Developer" },
      },
    },

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
    team: {
      title: "فريق العمل",
      subtitle: "الفريق المسؤول عن تصميم وتنفيذ هذه المنظومة المتكاملة",
      members: {
        ali: { name: "علي النعيمي", role: "مدير المشروع / القائد التقني" },
        nour: { name: "نور العلوان", role: "مطور برمجيات شامل (Full-Stack)" },
        raed: { name: "رعد ابزاخ", role: "مهندس تكامل أنظمة" },
        mahmoud: { name: "محمود السيد", role: "مطور ذكاء اصطناعي" },
        shehab: { name: "شهاب محمد", role: "مطور واجهات أمامية" },
      },
    },

    nav: {
      overview: "نظرة عامة",
      ecosystem: "المنظومة المتكاملة",
      impact: "الأثر الاستراتيجي",
    },
    hero: {
      badge: "التحول الرقمي لشركة ليث العبيدي",
      title1: "التحول الرقمي عبر",
      title2: "كافة القنوات البيعية",
      subtitle:
        "منظومة متكاملة تهدف إلى تعزيز المبيعات، إحكام الرقابة، وضمان عدم ضياع أي فرصة بيعية عبر جميع العلامات التجارية.",
      cta: "استكشف الرحلة",
    },
    shift: {
      title: "نقطة التحول",
      subtitle:
        "استخدم زر التبديل للمقارنة بين بيئة العمل قبل وبعد التكامل العميق.",
      challenge: "التحديات السابقة",
      solution: "الحل المتكامل",
    },
    ecosystem: {
      title: "المنظومة التقنية المتكاملة",
      subtitle:
        "اختر نظاماً للاطلاع على: (1) خريطة التكامل، (2) آلية العمل، (3) الأثر على المبيعات والرقابة.",
    },
    impact: {
      title: "النتائج الاستراتيجية",
      subtitle: "الأثر الملموس لتكامل الأنظمة على كفاءة الأعمال.",
      cards: {
        salesTitle: "نمو المبيعات",
        salesDesc:
          "رفع معدلات التحويل من خلال سرعة الاستجابة وبروتوكولات المتابعة الإلزامية.",
        controlTitle: "رقابة شاملة",
        controlDesc: "شفافية مطلقة ورؤية لحظية عبر نظام SAP وحوكمة نظام CRM.",
        zeroTitle: "انعدام ضياع الفرص",
        zeroDesc: "كل قناة تواصل تُنشئ تلقائياً فرصة بيعية ومهمة عمل للموظف.",
        smartTitle: "قرارات ذكية",
        smartDesc: "إدارة الميزانيات والعمليات بناءً على بيانات دقيقة ولحظية.",
      },
      quote: `"التكامل ليس مجرد ميزة تقنية، بل هو الميزة التنافسية الجوهرية."`,
    },
    footer: { copy: "© 2026 مجموعة ليث العبيدي. تقرير التحول الرقمي الداخلي." },

    ui: {
      integration: "التكامل",
      process: "آلية العمل",
      whySales: "كيف ارتفعت المبيعات؟",
      whyControl: "كيف تعززت الرقابة؟",
      keyCapabilities: "القدرات الجوهرية",
      businessImpact: "الأثر على قطاع الأعمال",
      moduleView: "عرض النظام",
      overview: "نظرة عامة",
      screenshots: "معرض الصور",
      clickZoom: "انقر على الصورة للتكبير",
      noShots: "لا توجد صور متاحة لهذا النظام حالياً.",
      mapTitle: "خريطة تكامل الأنظمة",
      processTitle: "دورة العمل (من البداية إلى النهاية)",
      salesTitle: "منهجية رفع المبيعات",
      controlTitle: "آلية إحكام الرقابة",
      steps: "الخطوات التنفيذية",
    },

    app: {
      challenge: {
        title: "ما قبل التكامل",
        items: [
          {
            icon: "fa-search-minus",
            text: "فقدان العديد من العملاء المحتملين نتيجة غياب التتبع المركزي.",
          },
          {
            icon: "fa-sync-alt",
            text: "عدم انتظام المتابعة وتشتت دورة المبيعات.",
          },
          {
            icon: "fa-unlink",
            text: "أنظمة منعزلة تؤدي إلى حدوث فجوات في البيانات.",
          },
          {
            icon: "fa-dice",
            text: "اتخاذ القرارات بناءً على التخمين بدلاً من البيانات الواقعية.",
          },
        ],
      },
      solution: {
        title: "ما بعد التكامل",
        items: [
          {
            icon: "fa-check-circle",
            text: "تتبع مركزي دقيق يضمن عدم ضياع أي عميل محتمل.",
          },
          {
            icon: "fa-robot",
            text: "أتمتة المتابعة وإلزامية التنفيذ وفق اتفاقيات مستوى الخدمة (SLA).",
          },
          {
            icon: "fa-link",
            text: "مصدر موحد للحقيقة يربط بين SAP و CRM وكافة قنوات التواصل.",
          },
          {
            icon: "fa-chart-pie",
            text: "لوحات بيانات وتقارير تلقائية لتعزيز الرقابة الإدارية.",
          },
        ],
      },

      systems: [
        {
          id: "whatsapp",
          name: "واتساب للأعمال والذكاء الاصطناعي",
          description:
            "إطلاق حملات رسائل جماعية مرتبطة بنظام CRM، مع توظيف الذكاء الاصطناعي لتصنيف اهتمامات العملاء وتحليل مشاعرهم لضمان أقصى استفادة.",
          capabilities: [
            "إرسال حملات رسائل جماعية في دقائق معدودة.",
            "تصنيف آلي للاهتمام: (مهتم / غير مهتم / غير محدد).",
            "تحليل المشاعر: (راضي / مستاء / محايد).",
            "إنشاء مهام تلقائية مع تحديد زمن الاستجابة (SLA).",
          ],
          integration: [
            "واجهة برمجة تطبيقات واتساب للأعمال (API)",
            "نظام الربط البرمجي (Webhook)",
            "نظام إدارة علاقات العملاء (CRM)",
            "طبقة الذكاء الاصطناعي",
            "لوحات التقارير والبيانات",
          ],
          process: [
            "يقوم قسم المبيعات أو التسويق بإطلاق حملة رسائل جماعية.",
            "تتم مزامنة الردود تلقائياً في CRM كنشاط محادثة وتحديث لبيانات العميل.",
            "يقوم الذكاء الاصطناعي بتصنيف نية العميل ومشاعره آلياً.",
            "يُنشئ النظام مهمة فورية لمندوب المبيعات مع تحديد سقف زمني للرد.",
            "في حال رصد مشاعر سلبية، يتم فتح تذكرة تصعيد لحماية الصفقة.",
          ],
          salesHow: [
            "الاستجابة السريعة تمنع توجه العميل إلى المنافسين.",
            "منح الأولوية للعملاء المهتمين يرفع معدلات إغلاق الصفقات.",
            "المعالجة المبكرة لشكاوى العملاء تقلل من فرص خسارة الصفقات.",
            "تحويل كل محادثة إلى فرصة بيعية موثقة يمنع تسرب العملاء.",
          ],
          controlHow: [
            "سجل تدقيق كامل: تحديد هوية المستجيب، وقت الرد، والنتيجة النهائية.",
            "قياس مؤشرات الالتزام بجدول الاستجابة (SLA) لكل موظف.",
            "تقارير فورية حول جودة التفاعل ومعدلات التحويل.",
          ],
          impact: [
            "سرعة استجابة فائقة",
            "رفع كفاءة التحويل البيعي",
            "انعدام ضياع الفرص",
          ],
          chartTitle: "تصنيف الاهتمام عبر الذكاء الاصطناعي (نموذج بيانات)",
        },

        {
          id: "incentive",
          name: "نظام الحوافز والإحالات (QR)",
          description:
            "محرك منضبط لإدارة الإحالات؛ يحصل العميل على رمز QR فريد، وتتحول الإحالات إلى فرص بيعية في CRM مع نظام مكافآت مباشر (غير هرمي) لتجنب الثغرات المالية.",
          capabilities: [
            "تسجيل العملاء عبر مناديب المبيعات.",
            "توليد رمز QR فريد لكل عميل.",
            "التقاط بيانات الإحالة فوراً في الأنظمة.",
            "نظام مكافآت مباشر وشفاف (غير هرمي).",
          ],
          integration: [
            "نظام الحوافز المركزي",
            "محرك توليد رموز QR",
            "صفحات التسجيل",
            "نظام إنشاء الفرص في CRM",
          ],
          process: [
            "يقوم المندوب بتسجيل العميل وربطه بهويته في نظام CRM.",
            "يصدر النظام رمز QR مخصصاً لهذا العميل.",
            "يقوم العميل بمشاركة الرمز مع أشخاص آخرين.",
            "عند تسجيل الطرف الجديد لبياناته، يتم إنشاء فرصة بيعية في CRM ونسبها للمُحيل.",
            "تُصرف المكافآت وفق سياسة محددة لمنع الهدر المالي.",
          ],
          salesHow: [
            "الفرص البيعية القادمة من التوصيات الشخصية تُغلق بشكل أسرع.",
            "تحويل العميل إلى قناة تسويقية يقلل من تكاليف الاستحواذ.",
            "تحفيز المناديب يزيد من انضباط المتابعة وتدفق البيانات.",
          ],
          controlHow: [
            "تتبع دقيق لمصدر الإحالة والنتائج المحققة.",
            "سقف محدد للمكافآت يمنع أي تسرب مالي غير مبرر.",
            "تقييم أداء المناديب بناءً على نتائج الإحالات الفعلية.",
          ],
          impact: [
            "نمو عضوي للأعمال",
            "خفض تكاليف التسويق",
            "تحفيز العملاء والموظفين",
          ],
        },

        {
          id: "sap",
          name: "لوحة بيانات SAP (لحظية)",
          description:
            "نظام SAP هو المصدر النهائي لبيانات العمليات. تعمل لوحة البيانات كطبقة تحليلية لعرض الأداء وتوليد تقارير تلقائية للإدارة العليا.",
          capabilities: [
            "لوحات مراقبة مرئية ولحظية.",
            "تقارير دورية مؤتمتة (يومية/أسبوعية).",
            "شفافية كاملة للأداء حسب العلامة، الفرع، أو الموظف.",
            "تتبع مؤشرات الأداء واكتشاف اتجاهات السوق.",
          ],
          integration: [
            "نظام SAP الأساسي",
            "طبقة تحليل البيانات (BI)",
            "مزامنة مع CRM (اختياري)",
          ],
          process: [
            "تسجيل كافة العمليات والبيانات المالية في SAP.",
            "استرجاع البيانات وتحليلها عبر لوحات التحكم بشكل دوري أو لحظي.",
            "عرض الرسوم البيانية لتوضيح الأداء حسب النطاقات الزمنية والجغرافية.",
            "إرسال التقارير التلقائية إلى أصحاب القرار.",
          ],
          salesHow: [
            "رصد مواطن الضعف مبكراً لاتخاذ الإجراءات التصحيحية.",
            "تحديد القنوات الأكثر ربحية لتعزيز الاستثمار فيها.",
          ],
          controlHow: [
            "المصدر الموحد يمنع التلاعب بالتقارير اليدوية.",
            "الأتمتة تقلل من الأخطاء البشرية وتأخير البيانات.",
            "تمكين الإدارة من اتخاذ قرارات مبنية على حقائق لا تخمينات.",
          ],
          impact: [
            "سرعة اتخاذ القرار",
            "إحكام الرقابة التشغيلية",
            "رؤية تحليلية واضحة",
          ],
          chartTitle: "اتجاهات سرعة المبيعات (نموذج بيانات)",
        },

        {
          id: "tasks",
          name: "حوكمة المهام والمتابعة",
          description:
            "نظام متكامل داخل CRM لإدارة المهام: توزيع تلقائي، فترات متابعة إلزامية، تدقيق مستمر، وتقارير تصعيد لضمان الاهتمام بكل عميل.",
          capabilities: [
            "توزيع آلي للفرص حسب العلامة التجارية أو المنطقة.",
            "نوافذ زمنية إلزامية للمتابعة (SLA).",
            "تقارير تدقيق ومؤشرات انضباط.",
            "نظام تصعيد آلي في حال التأخير أو الإهمال.",
          ],
          integration: [
            "نظام الفرص في CRM",
            "محرك إدارة المهام",
            "قواعد اتفاقية مستوى الخدمة (SLA)",
            "تقارير التصعيد الإداري",
          ],
          process: [
            "وصول الفرصة البيعية من أي قناة وتوثيقها في نظام CRM.",
            "يقوم النظام بإسناد الفرصة آلياً للموظف أو الفريق المختص.",
            "تبدأ دورة المتابعة ضمن الإطار الزمني المحدد قانونياً.",
            "في حال تجاوز الوقت المحدد، يتم تفعيل التصعيد وظهوره في تقارير الرقابة.",
          ],
          salesHow: [
            "ضمان عدم إهمال أي عميل، مما يرفع من فرص البيع.",
            "المتابعة المنهجية تزيد من ثقة العميل واحتمالية إتمام الصفقة.",
          ],
          controlHow: [
            "تعزيز مسؤولية الموظف عبر قياس الامتثال للمعايير الزمنية.",
            "تمكين الإدارة من التدخل الفوري لمعالجة أي تقصير في المتابعة.",
          ],
          impact: [
            "انعدام الإهمال",
            "رفع مستوى الانضباط الميداني",
            "تحسين معدلات الإغلاق",
          ],
        },

        {
          id: "crm",
          name: "نظام CRM المركزي (المصدر الموحد)",
          description:
            "العقل المدبر الذي يربط المخزون، SAP، المهام، وكافة قنوات التواصل في منصة واحدة للتحكم في دورة حياة العميل بالكامل.",
          capabilities: [
            "دورات متابعة ذكية تعتمد على ردود فعل العملاء.",
            "ربط لحظي مع المخزون وتوفر المركبات.",
            "نظام إدارة تذاكر الشكاوى مع معايير استجابة محددة.",
            "تتبع شامل لمسار العميل من المرحلة الأولى وحتى البيع.",
          ],
          integration: [
            "نظام المخزون",
            "نظام SAP",
            "محرك المهام",
            "واتساب",
            "منصات ميتا (Meta)",
            "المواقع الإلكترونية",
            "خدمة العملاء والشكاوى",
          ],
          process: [
            "تجميع كافة الفرص البيعية من مختلف القنوات في CRM.",
            "إثراء بيانات الفرصة بمعلومات المخزون المتوفرة في SAP.",
            "تكييف دورات المتابعة بناءً على مرحلة العميل وملاحظاته.",
            "تحويل الشكاوى إلى تذاكر عمل ذات مسار واضح للحل والمساءلة.",
            "توثيق كافة الإجراءات والنتائج لضمان الشفافية.",
          ],
          salesHow: [
            "تقليل خسارة الفرص عبر التنسيق الدقيق مع المخزون والمتابعة المنتظمة.",
            "تعزيز ثقة العميل عبر الحل السريع والمهني للمشكلات.",
          ],
          controlHow: [
            "حوكمة موحدة تشمل العمليات، المبيعات، وخدمة ما بعد البيع.",
            "رؤية واضحة لسلامة التدفقات البيعية وأداء الموظفين.",
            "منع تشتت العميل بين الأقسام المختلفة عبر نظام التذاكر المركزي.",
          ],
          impact: [
            "تحسين تجربة العميل",
            "زيادة معدلات الولاء",
            "تعزيز الثقة بالعلامة التجارية",
          ],
        },

        {
          id: "ads",
          name: "رقابة الإعلانات (تحليل العائد على الاستثمار)",
          description:
            "مراقبة حملات التواصل الاجتماعي وربط أدائها بالنتائج الفعلية، لتوجيه الميزانيات بناءً على البيانات الواقعية لا الافتراضات.",
          capabilities: [
            "تتبع لحظي للإنفاق الإعلاني.",
            "تحديد العلامات التجارية التي تتطلب دعماً تسويقياً.",
            "تحليل دقيق لجودة الفرص البيعية والعائد على الإنفاق.",
            "توزيع ذكي للميزانيات بناءً على الأداء.",
          ],
          integration: [
            "منصات الإعلانات العالمية",
            "لوحات المراقبة والتحليل",
            "نتائج التحويل في نظام CRM",
          ],
          process: [
            "رصد الإنفاق والنتائج لكل حملة ولكل علامة تجارية على حدة.",
            "مقارنة البيانات الإعلانية بنتائج المبيعات الفعلية في CRM.",
            "اكتشاف الحملات ضعيفة الأداء وتحسين المحتوى أو الاستهداف أو الميزانية.",
          ],
          salesHow: [
            "توجيه الإنفاق نحو الحملات التي تولد فرصاً بيعية قابلة للتحويل.",
            "إيقاف الهدر المالي في القنوات غير المجدية وتوجيهه للأفضل.",
          ],
          controlHow: [
            "شفافية كاملة حول أوجه صرف الميزانيات والعوائد المحققة.",
            "تفعيل مبدأ المساءلة والتحسين المستمر على مستوى كل علامة تجارية.",
          ],
          impact: [
            "تحسين كفاءة الإنفاق",
            "رفع العائد على الاستثمار (ROI)",
            "استراتيجية تسويق ذكية",
          ],
          chartTitle: "الإنفاق مقابل العوائد (نموذج بيانات)",
        },

        {
          id: "meta",
          name: "صندوق الوارد الموحد (Meta API)",
          description:
            "دمج كافة الرسائل والتعليقات من فيسبوك وإنستغرام في منصة واحدة لضمان سرعة الاستجابة وتحويل كل استفسار إلى فرصة بيعية موثقة.",
          capabilities: [
            "منصة موحدة لإدارة الرسائل المباشرة والتعليقات.",
            "دمج حسابات فيسبوك وإنستغرام في واجهة واحدة.",
            "تقليل زمن الاستجابة عبر إلغاء الحاجة للتنقل بين التطبيقات.",
            "إدارة طوابير الانتظار لضمان عدم إغفال أي طلب.",
          ],
          integration: [
            "واجهة برمجة تطبيقات ميتا (API)",
            "صندوق الوارد الموحد",
            "نظام CRM",
            "محرك المهام",
          ],
          process: [
            "تدفق كافة الرسائل والتعليقات إلى منصة إدارة واحدة.",
            "يقوم الموظفون بالرد المباشر من واجهة العمل المركزية.",
            "يتم تسجيل الاستفسارات كفرص بيعية في CRM أو تحديث البيانات الحالية.",
            "يبدأ نظام CRM تلقائياً في تفعيل مهام المتابعة اللاحقة.",
          ],
          salesHow: [
            "التفاعل الفوري يرفع من احتمالية تحويل الاستفسار إلى عملية بيع.",
            "ضمان رصد كافة التعليقات والرسائل يمنع ضياع الفرص المتاحة.",
          ],
          controlHow: [
            "التحكم في حالة الطلبات وتفعيل نظام المساءلة لكل موظف.",
            "الاحتفاظ بسجل تاريخي كامل للمحادثات مرتبط بملف العميل.",
          ],
          impact: [
            "رفع معدلات التفاعل",
            "زيادة رضا العملاء",
            "تغطية شاملة لكافة الاستفسارات",
          ],
        },

        {
          id: "web",
          name: "تكامل المواقع الإلكترونية",
          description:
            "إدارة 4 مواقع إلكترونية رسمية تعرض المركبات وتوفر نماذج الحجز؛ حيث يتم توثيق البيانات في CRM وExcel بشكل متزامن لضمان أمن البيانات وسرعة الاتصال.",
          capabilities: [
            "عرض ديناميكي لقوائم المركبات والمواصفات.",
            "نماذج طلب تجربة القيادة وحجز المركبات.",
            "تدفق فوري للبيانات إلى CRM ومركز الاتصال.",
            "نظام نسخ احتياطي تلقائي للبيانات (Excel).",
          ],
          integration: [
            "المواقع الإلكترونية الأربعة",
            "نماذج جمع البيانات",
            "نظام النسخ الاحتياطي",
            "نظام CRM",
            "مركز الاتصال (Call Center)",
          ],
          process: [
            "يقوم العميل بتقديم طلب عبر الموقع الإلكتروني.",
            "يتم تسجيل الطلب فوراً في سجل احتياطي لضمان عدم فقدانه.",
            "في الوقت ذاته، تُنشأ فرصة بيعية في نظام CRM.",
            "يتلقى مركز الاتصال تنبيهاً فورياً لإجراء الاتصال بالعميل.",
            "يتم توثيق نتائج المكالمة واستكمال دورة المتابعة في CRM.",
          ],
          salesHow: [
            "الاتصال السريع بالعملاء يزيد من فرص إغلاق المبيعات.",
            "تعدد قنوات حفظ البيانات يضمن استمرارية العمل وعدم ضياع أي طلب.",
          ],
          controlHow: [
            "تتبع دقيق لمصادر الفرص البيعية حسب كل علامة تجارية.",
            "إحكام الرقابة على أداء مركز الاتصال من خلال النتائج الموثقة.",
          ],
          impact: [
            "تجربة مستخدم سلسة",
            "استجابة فورية للطلبات",
            "تعظيم معدلات التحويل",
          ],
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
