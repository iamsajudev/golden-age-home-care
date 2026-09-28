// lib/blog-data.ts
export type BlogCategory =
    | "Medicaid"
    | "Caregiving"
    | "Careers"
    | "Health"
    | "Family";

export type BlogPost = {
    slug: string;
    category: BlogCategory;
    title: string;
    excerpt: string;
    content: string;        // ← NEW — the article HTML
    image: string;
    date: string;
    readTime: string;
    author: string;
    authorRole?: string;    // ← NEW — optional
    featured?: boolean;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "understanding-medicaid-new-york",
        category: "Medicaid",
        title: "Understanding Medicaid & NY State Home Care Benefits",
        excerpt:
            "A plain-language guide to eligibility, income limits, asset rules, and what home care services are covered in New York.",
        image: "/images/homecare_min.webp",
        date: "Jan 12, 2025",
        readTime: "6 min read",
        author: "Shah Nawaz",
        authorRole: "Founder & CEO",
        featured: true,
        content: `
      <p>
        If you're trying to figure out how to pay for home care in New York, you've probably hit a wall of paperwork, acronyms, and confusing eligibility rules. This guide breaks it down in plain language.
      </p>

      <h2>What is Medicaid?</h2>
      <p>
        Medicaid is a joint federal-state program that pays for health care for people with limited income and assets. In New York, it's the <strong>primary funding source</strong> for long-term home care.
      </p>
      <p>
        Unlike Medicare (which is federal and limited), Medicaid covers ongoing personal care services for eligible seniors — often at no out-of-pocket cost to the family.
      </p>

      <h2>Who qualifies in New York?</h2>
      <p>You generally need to meet three categories of requirements:</p>
      <ul>
        <li><strong>Residency:</strong> You must live in New York State</li>
        <li><strong>Income:</strong> Below the annual limit (which changes yearly — check with us for current numbers)</li>
        <li><strong>Assets:</strong> Limited countable assets (home, one car, and personal items are usually exempt)</li>
        <li><strong>Medical need:</strong> A doctor confirms you need help with daily activities</li>
      </ul>

      <h2>What home care services are covered?</h2>
      <p>Once eligible, Medicaid typically covers:</p>
      <ul>
        <li>Personal care (bathing, dressing, mobility)</li>
        <li>Light housekeeping and meal preparation</li>
        <li>Medication reminders</li>
        <li>Companionship and supervision</li>
        <li>Coordination with physicians</li>
      </ul>

      <h2>The application process</h2>
      <p>
        Most families apply through their local Department of Social Services or a Managed Long Term Care (MLTC) plan. It's a lengthy process — and mistakes delay coverage.
      </p>
      <p>
        That's where we come in. Our <a href="/services/medicaid-coordination">Medicaid coordination service</a> handles the entire application for you — free of charge.
      </p>

      <h2>Ready to check eligibility?</h2>
      <p>
        Call us at <strong>(718) 775-7852</strong> for a free screening. It takes about 15 minutes, and we'll tell you exactly where you stand.
      </p>
    `,
    },

    {
        slug: "signs-your-parent-needs-care",
        category: "Caregiving",
        title: "5 Signs Your Parent May Need In-Home Care",
        excerpt:
            "The subtle indicators families often miss — and how to respond with compassion instead of panic.",
        image: "/images/homecare_min.webp",
        date: "Jan 06, 2025",
        readTime: "4 min read",
        author: "Shah Nawaz",
        authorRole: "Founder & CEO",
        featured: true,
        content: `
      <p>
        Most families don't realize their parent needs help until something goes wrong — a fall, a missed medication, a hospital visit. But there are earlier signs. Here are five to watch for.
      </p>

      <h2>1. Unexplained weight loss</h2>
      <p>
        A parent who's lost interest in cooking or eating may be struggling with more than just appetite. Depression, dental problems, and memory issues all show up at the dinner table first.
      </p>

      <h2>2. A noticeably messier home</h2>
      <p>
        If the house was always tidy and now isn't, that's not laziness — it's often a sign of fatigue, mobility problems, or cognitive decline.
      </p>

      <h2>3. Missed medications or duplicate doses</h2>
      <p>
        Look at the pill organizer. If it doesn't match the calendar, your parent may be forgetting or double-dosing. Both are serious.
      </p>

      <h2>4. Withdrawal from favorite activities</h2>
      <p>
        A parent who stops going to church, book club, or family dinners may be dealing with more than just shyness. Mobility, hearing, or depression could be the cause.
      </p>

      <h2>5. Repeated minor injuries</h2>
      <p>
        Bruises, small cuts, or a "sprained ankle" that shows up more than once are signs of balance problems — the leading cause of falls in seniors.
      </p>

      <h2>What to do</h2>
      <p>
        Don't panic. Have an honest conversation. Then get a professional assessment — ours is <a href="/contact">free</a>. We'll help you figure out what's going on and what kind of support makes sense.
      </p>
    `,
    },

    {
        slug: "become-hha-new-york",
        category: "Careers",
        title: "How to Become a Certified HHA in New York",
        excerpt:
            "Step-by-step: training requirements, cost, timeline, and how to get placed with an agency.",
        image: "/images/homecare_min.webp",
        date: "Dec 28, 2024",
        readTime: "5 min read",
        author: "Shah Nawaz",
        authorRole: "Founder & CEO",
        featured: true,
        content: `
      <p>
        Becoming a Home Health Aide (HHA) in New York is one of the fastest paths to a stable, meaningful career. No college degree required. No prior experience. Just a willingness to care for others.
      </p>

      <h2>What is an HHA?</h2>
      <p>
        An HHA is a trained professional who helps seniors and people with disabilities with daily activities — bathing, dressing, meal prep, mobility, and companionship.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>Must be 18 or older</li>
        <li>Authorized to work in the US</li>
        <li>Able to pass a background check</li>
        <li>Pass a basic health screening</li>
      </ul>

      <h2>Training: what it involves</h2>
      <p>
        New York requires a state-approved training program — usually 3–4 weeks, including classroom and hands-on hours. You'll learn:
      </p>
      <ul>
        <li>Personal care techniques</li>
        <li>Safe transfers and mobility assistance</li>
        <li>Vital signs and health observation</li>
        <li>Infection control and emergency response</li>
        <li>Documentation and communication</li>
      </ul>

      <h2>Cost</h2>
      <p>
        Programs usually cost $500–$1,500. But here's the thing — <strong>we cover it for free</strong>. <a href="/services/caregiver-training">Learn about our free HHA training</a>.
      </p>

      <h2>Job placement</h2>
      <p>
        After certification, you're eligible to work with any home care agency in New York. Most of our graduates are working within two weeks.
      </p>

      <h2>Ready to enroll?</h2>
      <p>
        Call <strong>(718) 775-7852</strong> to start the process.
      </p>
    `,
    },

    {
        slug: "cdpap-explained",
        category: "Family",
        title: "CDPAP Explained: Get Paid to Care for Family",
        excerpt:
            "Who qualifies, how much you can earn, and the enrollment steps — all in one place.",
        image: "/images/homecare_min.webp",
        date: "Dec 18, 2024",
        readTime: "7 min read",
        author: "Shah Nawaz",
        authorRole: "Founder & CEO",
        content: `
      <p>
        CDPAP — the Consumer Directed Personal Assistance Program — lets Medicaid recipients hire their own caregiver. If that caregiver is a family member, the state pays them.
      </p>

      <h2>Who can be a CDPAP caregiver?</h2>
      <ul>
        <li>Adult children (sons, daughters)</li>
        <li>Sons-in-law, daughters-in-law</li>
        <li>Siblings and grandchildren</li>
        <li>Nieces, nephews, cousins</li>
        <li>Close friends</li>
      </ul>

      <h2>Who cannot?</h2>
      <p>Spouses are usually excluded from CDPAP in New York. Parents of minor children are also typically excluded.</p>

      <h2>How much do you earn?</h2>
      <p>
        CDPAP pay rates vary but are typically $15–$20 per hour in NYC. Hours depend on the recipient's assessment — often 20–40 per week.
      </p>

      <h2>Enrollment steps</h2>
      <ol>
        <li>Recipient must have active Medicaid</li>
        <li>Get a medical assessment confirming need</li>
        <li>Choose CDPAP as your care model</li>
        <li>Complete caregiver enrollment + training</li>
        <li>Start work, get paid weekly</li>
      </ol>

      <h2>How we help</h2>
      <p>
        We handle every step. <a href="/services/family-caregiver">Learn about our Family as Caregiver service</a> — free training, direct deposit, and ongoing case management.
      </p>
    `,
    },

    {
        slug: "fall-prevention-home",
        category: "Health",
        title: "Preventing Falls at Home: A Room-by-Room Checklist",
        excerpt:
            "Simple, low-cost changes that dramatically reduce fall risk for seniors living alone.",
        image: "/images/homecare_min.webp",
        date: "Dec 10, 2024",
        readTime: "5 min read",
        author: "Shah Nawaz",
        authorRole: "Founder & CEO",
        content: `
      <p>
        Falls are the leading cause of injury for adults over 65. Most happen at home — and most are preventable.
      </p>

      <h2>Living room</h2>
      <ul>
        <li>Remove or tape down area rugs</li>
        <li>Keep cords tucked behind furniture</li>
        <li>Ensure clear paths between furniture</li>
        <li>Add a firm chair with armrests for getting up</li>
      </ul>

      <h2>Bathroom</h2>
      <ul>
        <li>Install grab bars near the toilet and tub</li>
        <li>Use a non-slip bath mat</li>
        <li>Add a shower chair if balance is an issue</li>
        <li>Keep night lights on</li>
      </ul>

      <h2>Bedroom</h2>
      <ul>
        <li>Keep a lamp within reach of the bed</li>
        <li>Raise the bed if it's too low</li>
        <li>Ensure a clear path to the bathroom</li>
      </ul>

      <h2>Kitchen</h2>
      <ul>
        <li>Move frequently-used items to waist height</li>
        <li>Never use a chair as a step stool</li>
        <li>Clean up spills immediately</li>
      </ul>

      <h2>Stairs</h2>
      <ul>
        <li>Install handrails on both sides</li>
        <li>Ensure adequate lighting</li>
        <li>Fix any loose carpet or treads</li>
      </ul>

      <h2>Need help?</h2>
      <p>
        Our caregivers can do a <a href="/services/personal-care">home safety assessment</a> and make recommendations tailored to your loved one.
      </p>
    `,
    },
];

export const blogCategories: { key: BlogCategory; label: string }[] = [
    { key: "Medicaid", label: "Medicaid" },
    { key: "Caregiving", label: "Caregiving" },
    { key: "Careers", label: "Careers" },
    { key: "Health", label: "Health" },
    { key: "Family", label: "Family" },
];

export function getPostBySlug(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs() {
    return blogPosts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, count = 3) {
    const current = getPostBySlug(slug);
    if (!current) return blogPosts.slice(0, count);

    /* Prefer same-category posts, then fill with any others */
    const sameCategory = blogPosts.filter(
        (p) => p.slug !== slug && p.category === current.category
    );
    const others = blogPosts.filter(
        (p) => p.slug !== slug && p.category !== current.category
    );
    return [...sameCategory, ...others].slice(0, count);
}