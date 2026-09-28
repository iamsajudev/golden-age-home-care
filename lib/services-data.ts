// lib/services-data.ts
import {
    Heart,
    ShieldCheck,
    Users,
    GraduationCap,
    Stethoscope,
    Home as HomeIcon,
} from "lucide-react";

export type Service = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    slug: string;
    category: string;
    title: string;
    shortTitle: string;
    description: string;
    longDescription: string;
    image: string;
    features: string[];
    benefits: { title: string; description: string }[];
    faqs: { q: string; a: string }[];

    /* ── Optional: two-column image section ── */
    imageSection?: {
        eyebrow: string;
        title: string;
        description: string;
        paragraph?: string;
        bullets?: string[];
        image: string;
        imageAlt: string;
        imagePosition?: "left" | "right";
    };

    /* ── Optional: full-width rich-text section ── */
    richTextSection?: {
        eyebrow?: string;
        title: string;
        content: string;
    };
};

export const services: Service[] = [
    /* ═══════════════════════════════════════════
       01 — PERSONAL CARE
       ═══════════════════════════════════════════ */
    {
        icon: HomeIcon,
        slug: "personal-care",
        category: "Personal Care",
        title: "In-Home Personal Care",
        shortTitle: "Personal Care",
        description:
            "Dignified assistance with daily activities — bathing, dressing, mobility, and meal preparation in the comfort of home.",
        longDescription:
            "Our in-home personal care service supports seniors with the daily activities that keep them safe, comfortable, and independent at home. Every caregiver is trained, background-checked, and matched to your loved one's personality and needs. We work with your family to build a personalized routine — never a one-size-fits-all plan.",
        image: "/images/timeline.jpg",
        features: [
            "Bathing, grooming & dressing",
            "Mobility & fall prevention",
            "Meal planning & preparation",
            "Light housekeeping & laundry",
            "Medication reminders",
            "Toileting & incontinence care",
        ],
        benefits: [
            {
                title: "Stay at home",
                description:
                    "Your loved one keeps their routines, possessions, and independence — no move to a facility.",
            },
            {
                title: "Family peace of mind",
                description:
                    "Know that a trained professional is there when you can't be.",
            },
            {
                title: "Covered by Medicaid",
                description:
                    "Most clients qualify for full coverage through NY State benefits.",
            },
        ],
        faqs: [
            {
                q: "How many hours per week can we get?",
                a: "Coverage depends on your Medicaid assessment. Most clients receive 20–40 hours per week; some qualify for more.",
            },
            {
                q: "Can the same caregiver come every day?",
                a: "Yes — we prioritize consistency. You'll have a primary caregiver and a backup for coverage.",
            },
        ],
        imageSection: {
            eyebrow: "Dignity in Every Detail",
            title: "Personal Care That Respects Independence",
            description:
                "We help with the private, everyday tasks that become difficult with age — never rushing, never condescending. Your caregiver learns your preferences, your pace, and your routines.",
            paragraph:
                "Whether it's a morning shower, getting dressed for a doctor's visit, or a warm meal at dinner, our team is there with steady, respectful support. Family members often tell us the difference shows in their loved one's mood within the first week.",
            bullets: [
                "Consistent caregiver assignments",
                "Privacy and dignity maintained",
                "Bilingual caregivers available",
                "Flexible morning, day, or evening hours",
            ],
            image: "/images/timeline.jpg",
            imageAlt: "Caregiver helping an elderly woman get dressed at home",
            imagePosition: "right",
        },
        richTextSection: {
            eyebrow: "A Closer Look",
            title: "What Personal Care Really Means",
            content: `
        <p>
          Personal care is more than bathing and dressing. It's the <strong>foundation of dignity</strong> — the small daily rituals that make someone feel like themselves. When those rituals slip away, we often see confidence and independence disappear with them.
        </p>
        <p>
          Our caregivers are trained to support without taking over. We guide, we assist, we step in only when needed — and we always ask first.
        </p>
        <h3>What we help with every day</h3>
        <ul>
          <li>Morning and evening hygiene routines</li>
          <li>Dressing, grooming, and personal appearance</li>
          <li>Safe transfers from bed, chair, and shower</li>
          <li>Meal preparation and feeding assistance</li>
          <li>Bathroom support and incontinence care</li>
          <li>Light housekeeping to keep spaces safe and clean</li>
        </ul>
        <p>
          If you're also considering <a href="/services/health-monitoring">health monitoring</a> or <a href="/services/companionship">companionship</a>, we can bundle services into a single care plan.
        </p>
      `,
        },
    },

    /* ═══════════════════════════════════════════
       02 — HEALTH MONITORING
       ═══════════════════════════════════════════ */
    {
        icon: Stethoscope,
        slug: "health-monitoring",
        category: "Health",
        title: "Health Monitoring",
        shortTitle: "Health Monitoring",
        description:
            "Routine wellness checks, medication reminders, and coordination with physicians and family members.",
        longDescription:
            "Our caregivers act as your eyes and ears at home — tracking vital signs, watching for changes, and coordinating with physicians and family. Early detection of small issues prevents hospital visits and keeps your loved one stable and comfortable.",
        image: "/images/homecare_min.webp",
        features: [
            "Vital signs & wellness checks",
            "Medication reminders",
            "Physician coordination",
            "Family progress updates",
            "Fall-risk monitoring",
            "Nutrition & hydration tracking",
        ],
        benefits: [
            {
                title: "Earlier detection",
                description: "Small issues are caught before they become emergencies.",
            },
            {
                title: "Better doctor visits",
                description:
                    "We provide detailed daily logs your physician can review.",
            },
            {
                title: "Fewer hospital trips",
                description: "Consistent monitoring dramatically reduces ER visits.",
            },
        ],
        faqs: [
            {
                q: "Do you provide medical care?",
                a: "We provide non-medical monitoring and coordination. For skilled nursing, we can coordinate with your doctor or home health agency.",
            },
            {
                q: "How often are updates shared with family?",
                a: "Daily for concerns, weekly for general status — or as often as you prefer.",
            },
        ],
        imageSection: {
            eyebrow: "Day-to-Day Monitoring",
            title: "A Careful Eye, Every Day",
            description:
                "Your caregiver arrives on a consistent schedule, checks vitals, notes appetite and mood, and updates a daily log your family and physician can review at any time.",
            paragraph:
                "We catch the small signs — a skipped meal, a slower walk, a new bruise — long before they become emergencies. That's how we keep your loved one safe at home.",
            bullets: [
                "Morning & evening wellness checks",
                "Daily written and photo logs",
                "Weekly physician summaries",
                "Direct family communication line",
            ],
            image: "/images/homecare_min.webp",
            imageAlt: "Caregiver checking blood pressure of an elderly client at home",
            imagePosition: "right",
        },
        richTextSection: {
            eyebrow: "The Bigger Picture",
            title: "Why Consistent Monitoring Matters",
            content: `
        <p>
          For most seniors, small health changes are <strong>early signals</strong> — of dehydration, an undiagnosed infection, or a medication interaction. When those signals are ignored, they compound into hospital admissions.
        </p>
        <p>
          Our monitoring program is built around <em>pattern recognition</em>, not just emergency response. A caregiver who sees your mother every morning for months will notice subtle shifts that no ER doctor could spot in a 15-minute visit.
        </p>
        <h3>What we track every day</h3>
        <ul>
          <li>Blood pressure, heart rate & temperature</li>
          <li>Medication adherence & refill timing</li>
          <li>Appetite, hydration, and weight trends</li>
          <li>Mood, sleep quality, and mobility</li>
          <li>Skin integrity and fall-risk signals</li>
        </ul>
        <p>
          When something looks off, we escalate immediately — to you, to the physician, or to emergency services. Read more about how we coordinate with <a href="/services/medicaid-coordination">Medicaid and MLTC programs</a>.
        </p>
      `,
        },
    },

    /* ═══════════════════════════════════════════
       03 — COMPANIONSHIP
       ═══════════════════════════════════════════ */
    {
        icon: Heart,
        slug: "companionship",
        category: "Companionship",
        title: "Companionship",
        shortTitle: "Companionship",
        description:
            "Warm, consistent companionship that reduces isolation and supports emotional wellbeing.",
        longDescription:
            "Loneliness is one of the biggest health risks for seniors. Our companions provide more than supervision — they build genuine relationships, engage in shared interests, and bring warmth into the home. For many families, this is the service that changes everything.",
        image: "/images/golden-home-lady.jpg",
        features: [
            "Conversation & social engagement",
            "Games, reading & hobbies",
            "Walks & light outings",
            "Emotional support",
            "Meal companionship",
            "Errands & appointments",
        ],
        benefits: [
            {
                title: "Reduced isolation",
                description:
                    "Regular human connection improves mood, cognition, and health.",
            },
            {
                title: "Shared interests",
                description:
                    "We match caregivers by personality, language, and interests.",
            },
            {
                title: "Family relief",
                description:
                    "You don't have to be the only source of daily interaction.",
            },
        ],
        faqs: [
            {
                q: "Is companionship covered by Medicaid?",
                a: "Yes — as part of a broader personal care plan. Companionship is usually bundled with other services.",
            },
            {
                q: "Can they take my mother out?",
                a: "Yes — for walks, errands, doctor visits, and other outings, depending on her mobility and your preferences.",
            },
        ],
        imageSection: {
            eyebrow: "More Than Supervision",
            title: "Someone to Share the Day With",
            description:
                "Our companions aren't just present — they're engaged. They learn your loved one's stories, share their interests, and become a genuine friend in the home.",
            paragraph:
                "For many seniors, the biggest risk isn't physical — it's the quiet. Isolation accelerates cognitive decline and deepens depression. Companionship reverses that.",
            bullets: [
                "Caregivers matched by language & interest",
                "Regular walks, games, and hobbies",
                "Shared meals and conversation",
                "Doctor visits and errands together",
            ],
            image: "/images/golden-home-lady.jpg",
            imageAlt: "Companion sharing tea and conversation with an elderly woman",
            imagePosition: "left",
        },
        richTextSection: {
            eyebrow: "The Science of Connection",
            title: "Why Companionship Improves Health",
            content: `
        <p>
          Studies consistently show that <strong>chronic loneliness</strong> has health effects comparable to smoking 15 cigarettes a day. It raises blood pressure, weakens the immune system, and dramatically increases dementia risk.
        </p>
        <p>
          The good news: even a few hours of genuine connection per week reverses much of that damage. That's what we deliver — not just someone in the room, but someone <em>with</em> your loved one.
        </p>
        <h3>What a companionship visit looks like</h3>
        <ul>
          <li>Morning coffee and conversation</li>
          <li>Reading aloud, board games, puzzles</li>
          <li>Neighborhood walks when weather permits</li>
          <li>Grocery shopping and errands together</li>
          <li>Attending doctor appointments as an advocate</li>
          <li>Sharing a meal at the table — not alone</li>
        </ul>
        <p>
          Many families combine companionship with <a href="/services/personal-care">personal care</a> — so the same trusted caregiver helps with both the practical and the personal.
        </p>
      `,
        },
    },

    /* ═══════════════════════════════════════════
       04 — MEDICAID COORDINATION
       ═══════════════════════════════════════════ */
    {
        icon: ShieldCheck,
        slug: "medicaid-coordination",
        category: "Insurance",
        title: "Medicaid Coordination",
        shortTitle: "Medicaid",
        description:
            "We handle the paperwork. Our team works directly with NY State benefits so your family doesn't have to.",
        longDescription:
            "Applying for Medicaid and coordinating home care benefits is complicated — and most families don't know where to start. Our team handles the entire process: eligibility screening, application, MLTC coordination, and ongoing compliance. You focus on your loved one; we handle the bureaucracy.",
        image: "/images/golden-home-office.jpg",
        features: [
            "Eligibility screening",
            "Application assistance",
            "MLTC coordination",
            "Ongoing benefits support",
            "Document collection",
            "Renewal reminders",
        ],
        benefits: [
            {
                title: "No paperwork stress",
                description:
                    "We fill out the forms, follow up, and represent your case.",
            },
            {
                title: "Faster approvals",
                description:
                    "Our familiarity with NY State systems speeds up the process.",
            },
            {
                title: "Full coverage",
                description: "Most clients end up paying nothing out of pocket.",
            },
        ],
        faqs: [
            {
                q: "Do you charge for eligibility screening?",
                a: "No — the screening and initial consultation are always free.",
            },
            {
                q: "What if I'm not eligible?",
                a: "We'll walk you through other options, including private pay and long-term care insurance.",
            },
        ],
        imageSection: {
            eyebrow: "Paperwork, Handled",
            title: "We Navigate the System For You",
            description:
                "Medicaid applications are long, technical, and unforgiving. Missing one form can delay coverage by weeks. Our team knows the system inside and out — and we handle every step.",
            paragraph:
                "From the initial eligibility screening to the final approval letter, you have a dedicated case manager who answers your questions and follows up on your behalf.",
            bullets: [
                "Free eligibility screening",
                "Complete application preparation",
                "Direct follow-up with NY State",
                "Renewal reminders & re-certification",
            ],
            image: "/images/golden-home-office.jpg",
            imageAlt: "Case manager reviewing Medicaid paperwork with a family",
            imagePosition: "right",
        },
        richTextSection: {
            eyebrow: "Eligibility Basics",
            title: "Do You Qualify? Here's What to Know",
            content: `
        <p>
          Most New York seniors qualify for home care through one of three paths: <strong>Medicaid</strong>, <strong>MLTC (Managed Long Term Care)</strong>, or <strong>CDPAP</strong>. Each has different rules, and most families end up using more than one.
        </p>
        <h3>You may be eligible if you:</h3>
        <ul>
          <li>Live in New York State</li>
          <li>Have Medicaid (or qualify for it)</li>
          <li>Need help with daily activities like bathing, dressing, or eating</li>
          <li>Have a doctor who can confirm your care needs</li>
        </ul>
        <p>
          Income limits change every year. Assets, spousal income, and homeownership all factor in. <em>Don't rule yourself out before a screening.</em>
        </p>
        <p>
          Our free screening takes about 15 minutes. If you qualify, we start the paperwork the same day. If you don't, we'll walk you through <a href="/services/family-caregiver">CDPAP</a> and other alternatives.
        </p>
      `,
        },
    },

    /* ═══════════════════════════════════════════
       05 — CAREGIVER TRAINING
       ═══════════════════════════════════════════ */
    {
        icon: GraduationCap,
        slug: "caregiver-training",
        category: "Training",
        title: "Caregiver Training",
        shortTitle: "Training",
        description:
            "Become a certified Home Health Aide. We provide training and place you with families who need your care.",
        longDescription:
            "If you're called to care for others — or want to earn a stable income doing meaningful work — our HHA certification program is the path. Free training, hands-on practice, and guaranteed placement with families who need your care. Many of our best caregivers started right here.",
        image: "/images/hero-2.jpg",
        features: [
            "Free HHA certification",
            "Hands-on practical training",
            "Job placement support",
            "Ongoing mentorship",
            "Flexible class schedules",
            "Bilingual instructors",
        ],
        benefits: [
            {
                title: "Free training",
                description:
                    "No upfront cost — we invest in you because we need great caregivers.",
            },
            {
                title: "Immediate work",
                description:
                    "Most graduates are placed with families within 2 weeks.",
            },
            {
                title: "Competitive pay",
                description:
                    "Consistent hours, weekly pay, and healthcare benefits for full-time staff.",
            },
        ],
        faqs: [
            {
                q: "What are the requirements?",
                a: "You must be 18+, authorized to work in the US, and able to pass a background check and health screening.",
            },
            {
                q: "How long is the training?",
                a: "Typically 3–4 weeks of classes plus practical hours. Full-time and part-time schedules available.",
            },
        ],
        imageSection: {
            eyebrow: "Start a Career",
            title: "Free Training. Real Work. Meaningful Pay.",
            description:
                "Our HHA certification program is completely free — we cover tuition, materials, and certification fees. In exchange, you commit to working with the families we place you with.",
            paragraph:
                "Most graduates are working within two weeks of finishing. Many are still with their original family years later — because the relationships matter.",
            bullets: [
                "3–4 weeks of classroom + hands-on training",
                "Flexible morning, evening, or weekend schedules",
                "Bilingual instructors (English, Bengali, Spanish)",
                "Guaranteed job placement after certification",
            ],
            image: "/images/hero-2.jpg",
            imageAlt: "HHA training session in progress with students and instructor",
            imagePosition: "right",
        },
        richTextSection: {
            eyebrow: "How to Enroll",
            title: "Become a Certified HHA in 4 Weeks",
            content: `
        <p>
          Becoming a Home Health Aide in New York is one of the fastest paths to a stable, meaningful career. No college degree is required. No prior experience. Just a genuine willingness to care for others.
        </p>
        <h3>What you'll learn</h3>
        <ul>
          <li>Personal care techniques (bathing, dressing, toileting)</li>
          <li>Safe patient transfers and mobility assistance</li>
          <li>Vital signs, medication reminders, and health observation</li>
          <li>Infection control and emergency response</li>
          <li>Communication skills with clients and families</li>
          <li>Documentation and daily log keeping</li>
        </ul>
        <p>
          After completing the program, you'll be <strong>state-certified</strong> and eligible to work with any home care agency in New York. Many of our graduates also apply for the <a href="/services/family-caregiver">CDPAP program</a>, so they can work directly with a family member.
        </p>
        <p>
          Ready to start? Call <strong>(718) 775-7852</strong> or visit our Queens office to enroll.
        </p>
      `,
        },
    },

    /* ═══════════════════════════════════════════
       06 — FAMILY AS CAREGIVER (CDPAP)
       ═══════════════════════════════════════════ */
    {
        icon: Users,
        slug: "family-caregiver",
        category: "Family",
        title: "Family as Caregiver",
        shortTitle: "Family Care",
        description:
            "A son-in-law caring for his mother-in-law. A daughter-in-law for her father. Family can be paid to care.",
        longDescription:
            "Through the CDPAP program, a close relative or trusted friend can become the paid caregiver for your loved one. This means the person who knows them best — who already cares for them every day — can finally be compensated for that work. Same great training and support, plus the emotional continuity of family.",
        image: "/images/President-CEO-Shah-Nawaz-2.jpg",
        features: [
            "Family members as paid caregivers",
            "CDPAP program guidance",
            "Same great training & support",
            "Flexible scheduling",
            "Direct deposit pay",
            "Ongoing case management",
        ],
        benefits: [
            {
                title: "Get paid to care",
                description:
                    "Turn the work you already do into a real income.",
            },
            {
                title: "Trusted by default",
                description:
                    "Your loved one is cared for by someone they already know and trust.",
            },
            {
                title: "No experience needed",
                description:
                    "We train you — you don't need prior certifications.",
            },
        ],
        faqs: [
            {
                q: "Who qualifies as a family caregiver?",
                a: "Adult children, sons- and daughters-in-law, siblings, grandchildren, nieces and nephews, and close friends in many cases.",
            },
            {
                q: "Do I need to quit my other job?",
                a: "No — most family caregivers work part-time hours around another job, or full-time if they want.",
            },
        ],
        imageSection: {
            eyebrow: "The CDPAP Program",
            title: "Get Paid to Care for Your Own Family",
            description:
                "CDPAP (Consumer Directed Personal Assistance Program) lets Medicaid recipients choose their own caregiver — including a family member. That means you can be paid for the care you already provide.",
            paragraph:
                "It's one of the most generous home care programs in the country. And most New York families don't know it exists until someone tells them.",
            bullets: [
                "Eligible: adult children, in-laws, siblings, grandchildren",
                "Direct deposit — you get paid weekly",
                "Part-time or full-time hours available",
                "We handle all the paperwork and certification",
            ],
            image: "/images/President-CEO-Shah-Nawaz-2.jpg",
            imageAlt: "Family caregiver assisting an elderly relative at home",
            imagePosition: "left",
        },
        richTextSection: {
            eyebrow: "Who Qualifies",
            title: "The Family Caregiver Program, Explained",
            content: `
        <p>
          For decades, families quietly cared for their aging parents, grandparents, and relatives — unpaid, unrecognized, and often sacrificing their own careers. CDPAP exists to change that.
        </p>
        <p>
          Under CDPAP, the <strong>person receiving care</strong> is the employer. They choose who helps them — and if that person is a family member, the state pays them for the work.
        </p>
        <h3>Who can be a paid family caregiver</h3>
        <ul>
          <li>Adult children (sons, daughters)</li>
          <li>Sons-in-law and daughters-in-law</li>
          <li>Siblings and grandchildren</li>
          <li>Nieces, nephews, cousins</li>
          <li>Close friends in many cases</li>
          <li>Legal guardians (with restrictions)</li>
        </ul>
        <p>
          <em>Spouses are usually excluded</em> from CDPAP in New York — but can qualify for other programs. We'll help you figure out which path fits your family.
        </p>
        <p>
          Want to become a family caregiver? We provide the free <a href="/services/caregiver-training">HHA training</a> you'll need and manage every piece of paperwork along the way.
        </p>
      `,
        },
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
    return services.map((s) => s.slug);
}