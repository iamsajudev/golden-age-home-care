// lib/resources-data.ts
import {
    FileText,
    BookOpen,
    Download,
    ExternalLink,
    Users,
    ShieldCheck,
    Stethoscope,
    Heart,
    GraduationCap,
    ScrollText,
    HelpCircle,
    MapPin,
} from "lucide-react";

export type ResourceCategory =
    | "Medicaid"
    | "CDPAP"
    | "Caregiving"
    | "Training"
    | "Forms"
    | "External";

export type Resource = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    category: ResourceCategory;
    title: string;
    description: string;
    href: string;
    tag: "Guide" | "PDF" | "Link" | "Form" | "Video";
    featured?: boolean;
};

export const resources: Resource[] = [
    {
        icon: FileText,
        category: "Medicaid",
        title: "Medicaid Eligibility Guide",
        description:
            "A plain-language guide to New York Medicaid eligibility — income limits, asset rules, and how to apply.",
        href: "/resources/medicaid-eligibility.pdf",
        tag: "Guide",
        featured: true,
    },
    {
        icon: Users,
        category: "CDPAP",
        title: "CDPAP Enrollment Steps",
        description:
            "Step-by-step instructions for enrolling a family member as a paid caregiver under CDPAP.",
        href: "/resources/cdpap-enrollment.pdf",
        tag: "Guide",
        featured: true,
    },
    {
        icon: Download,
        category: "Forms",
        title: "New Client Intake Form",
        description:
            "Download and complete before your first visit to speed up enrollment by several days.",
        href: "/resources/intake-form.pdf",
        tag: "PDF",
        featured: true,
    },
    {
        icon: BookOpen,
        category: "Training",
        title: "HHA Training Handbook",
        description:
            "Everything you need to know about becoming a certified Home Health Aide in New York.",
        href: "/resources/hha-handbook.pdf",
        tag: "Guide",
    },
    {
        icon: ShieldCheck,
        category: "Medicaid",
        title: "MLTC Plan Comparison",
        description:
            "A side-by-side breakdown of the major Managed Long Term Care plans operating in NYC.",
        href: "/resources/mltc-comparison.pdf",
        tag: "Guide",
    },
    {
        icon: Heart,
        category: "Caregiving",
        title: "Signs Your Parent Needs Care",
        description:
            "Ten subtle indicators families often miss — and how to respond with compassion.",
        href: "/blog/signs-your-parent-needs-care",
        tag: "Guide",
    },
    {
        icon: Stethoscope,
        category: "Caregiving",
        title: "Fall Prevention Checklist",
        description:
            "A room-by-room checklist to reduce fall risks in your loved one's home.",
        href: "/resources/fall-prevention.pdf",
        tag: "PDF",
    },
    {
        icon: GraduationCap,
        category: "Training",
        title: "HHA Certification Requirements",
        description:
            "Documents, background checks, and health screenings required before you can enroll.",
        href: "/resources/hha-requirements.pdf",
        tag: "Guide",
    },
    {
        icon: ScrollText,
        category: "Forms",
        title: "Caregiver Application",
        description:
            "Apply to become a caregiver with Golden Age Home Care — fill out online or download.",
        href: "/careers/apply",
        tag: "Form",
    },
    {
        icon: MapPin,
        category: "External",
        title: "NY State Department of Health",
        description:
            "Official state resource for home care regulations, licensing, and consumer protections.",
        href: "https://www.health.ny.gov",
        tag: "Link",
    },
    {
        icon: HelpCircle,
        category: "External",
        title: "NYC Elderly Services Locator",
        description:
            "Find local senior centers, meal programs, and additional support near you.",
        href: "https://www.nyc.gov/site/dfta/index.page",
        tag: "Link",
    },
    {
        icon: ShieldCheck,
        category: "External",
        title: "Medicare.gov Home Health Compare",
        description:
            "Compare home health agencies across New York by quality and patient outcomes.",
        href: "https://www.medicare.gov/care-compare",
        tag: "Link",
    },
];

export const resourceCategories: {
    key: ResourceCategory;
    label: string;
}[] = [
        { key: "Medicaid", label: "Medicaid" },
        { key: "CDPAP", label: "CDPAP" },
        { key: "Caregiving", label: "Caregiving" },
        { key: "Training", label: "Training" },
        { key: "Forms", label: "Forms" },
        { key: "External", label: "External Links" },
    ];