// lib/videos-data.ts
export type VideoCategory =
    | "About Us"
    | "Caregiving"
    | "Testimonials"
    | "Training"
    | "Community";

export type Video = {
    id: string;             // YouTube / Vimeo ID — or full URL for MP4
    type: "youtube" | "vimeo" | "mp4";
    title: string;
    description: string;
    category: VideoCategory;
    duration: string;       // e.g. "2:35"
    thumbnail: string;      // path to preview image
    featured?: boolean;
};

export const videos: Video[] = [
    {
        id: "dQw4w9WgXcQ",              // replace with your real video ID
        type: "youtube",
        title: "Welcome to Golden Age Home Care",
        description:
            "A short introduction to our agency, our mission, and the families we serve across New York.",
        category: "About Us",
        duration: "2:35",
        thumbnail: "/images/timeline.jpg",
        featured: true,
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "A Day in the Life of a Caregiver",
        description:
            "Follow one of our HHAs through a typical shift — from morning wellness checks to evening companionship.",
        category: "Caregiving",
        duration: "4:12",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "Family Testimonial — The Rodriguez Family",
        description:
            "A daughter shares how home care changed her mother's life — and her own.",
        category: "Testimonials",
        duration: "3:48",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "How to Become a Certified HHA",
        description:
            "Our training director walks through the free HHA certification program step by step.",
        category: "Training",
        duration: "5:20",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "CDPAP Explained in 3 Minutes",
        description:
            "The Consumer Directed Personal Assistance Program — in plain language, with real examples.",
        category: "Caregiving",
        duration: "3:05",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "Fall Prevention at Home",
        description:
            "A caregiver's room-by-room walkthrough of the changes that reduce fall risk most.",
        category: "Caregiving",
        duration: "4:45",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "Caregiver Testimonial — Fatima's Story",
        description:
            "One of our HHAs shares why she chose this work — and why she's stayed for years.",
        category: "Testimonials",
        duration: "2:58",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "Community Health Fair 2024",
        description:
            "Highlights from our annual free health screening event in Jackson Heights.",
        category: "Community",
        duration: "3:30",
        thumbnail: "/images/timeline.jpg",
    },
    {
        id: "dQw4w9WgXcQ",
        type: "youtube",
        title: "Medicaid Eligibility Walkthrough",
        description:
            "Who qualifies, what documents you need, and how our team handles the application for you.",
        category: "Training",
        duration: "6:10",
        thumbnail: "/images/timeline.jpg",
    },
];

export const videoCategories: { key: VideoCategory; label: string }[] = [
    { key: "About Us", label: "About Us" },
    { key: "Caregiving", label: "Caregiving" },
    { key: "Testimonials", label: "Testimonials" },
    { key: "Training", label: "Training" },
    { key: "Community", label: "Community" },
];

export function getVideoEmbedUrl(video: Video) {
    if (video.type === "youtube") {
        return `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
    }
    if (video.type === "vimeo") {
        return `https://player.vimeo.com/video/${video.id}?autoplay=1`;
    }
    return video.id; // mp4 — full URL is the id
}

export function getVideoThumbnail(video: Video) {
    // If a custom thumbnail is provided, use it. Otherwise, derive from YouTube.
    if (video.thumbnail) return video.thumbnail;
    if (video.type === "youtube") {
        return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    }
    return "/images/video-placeholder.jpg";
}