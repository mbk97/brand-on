import { All, Brand, Social, Website } from "@/components/works/Index";
import fitness from "../public/fitness.png";
import prime from "../public/prime.png";
import consult from "../public/consult.png";
import alyn from "../public/alyn.png";
import boss from "../public/boss.png";
import glrd from "../public/glrd.png";
import CABANA from "../public/cabana.png";
import robots from "../public/robots.png";
import PricingBrand from "@/components/pricing/tabs/PricingBrand";
import PricingSocial from "@/components/pricing/tabs/PricingSocial";
import PricingWeb from "@/components/pricing/tabs/PricingWeb";

export const aboutUsData = [
  {
    id: 1,
    title: "ALL",
    Component: All,
  },
  {
    id: 2,
    title: "BRAND IDENTITY",
    Component: Brand,
  },
];

export const worksTabData = [
  {
    id: 1,
    title: "ALL",
    Component: All,
    animate: "",
  },
  {
    id: 2,
    title: "BRAND IDENTITY",
    Component: Brand,
    animate: "",
  },
  {
    id: 3,
    title: "WEBSITE DEVELOPMENT",
    Component: Website,
    animate: "",
  },
  {
    id: 4,
    title: "SOCIAL MEDIA MANAGEMENT",
    Component: Social,
    animate: "",
  },
];

export const pricingTabData = [
  {
    id: 1,
    title: "BRAND IDENTITY",
    Component: PricingBrand,
  },
  {
    id: 2,
    title: "WEBSITE DEVELOPMENT",
    Component: PricingWeb,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MANAGEMENT",
    Component: PricingSocial,
  },
];

export const allContentData = [
  {
    id: 1,
    title: "FITNESS GURU",
    tagOne: "BRAND IDENTITY",
    tagTwo: "FITNESS",
    description:
      "Fitness Guru is modern, sophisticated, and exclusive fitness brand. ",
    image: fitness,
    link: "",
  },
  {
    id: 6,
    title: "THE BOSS LEGS",
    tagOne: "BRAND IDENTITY",
    tagTwo: "FASHION & STYLE",
    description: "A luxury shoe brand making brand.",
    image: boss,
    link: "",
  },
  {
    id: 2,
    title: "TSO CONSULT",
    tagOne: "BRAND IDENTITY",
    tagTwo: "ARCHITECTURAL AND CONSTRUCTION ",
    description:
      "TSO consult is a professional architecture company dedicated to delivering exceptional design solutions for their clients. ",
    image: consult,
    link: "",
  },
  {
    id: 3,
    title: "ROBOTS",
    tagOne: "WEB DESIGN / WEB DEVELOPMENT",
    tagTwo: "TECHNOLOGY",
    description:
      "Facilitating development of technology talents with the right skills solve problems effectively and build sustainable solutions. ",
    image: robots,
    link: "",
  },
  {
    id: 4,
    title: "OH PRIME ",
    tagOne: "SOCIAL MEDIA MANAGEMENT, SOCIAL MEDIA DESIGN",
    tagTwo: "HEALTH",
    description:
      "Healthcare Administrator:  Specialist Consultation, Surgery, Internal Medicine, Mental Health, O & G Orthopedic. ",
    image: prime,
    link: "",
  },
  {
    id: 5,
    title: "ALYN HAIRS",
    tagOne: "BRAND IDENTITY",
    tagTwo: "STYLING",
    description:
      "Alyn Hairs is a modern, luxury & sophisticated, and exclusive Hair Styling Brand.",
    image: alyn,
    link: "",
  },

  {
    id: 7,
    title: "GLRD",
    tagOne: "WEB DESIGN / WEB DEVELOPMENT",
    tagTwo: "EDUCATION",
    description:
      "An Online Learning Platform that helps students solve their problems and provide guidelines for achieving their goals. ",
    image: glrd,
    link: "",
  },
  {
    id: 8,
    title: "CABANA CAPITALS",
    tagOne: "SOCIAL MEDIA MANAGEMENT, SOCIAL MEDIA DESIGN",
    tagTwo: "FINTECH",
    description:
      "A Fintech Company passionate about providing Forex literacy to citizens nationwide.",
    image: CABANA,
    link: "",
  },
];

export const socialMediaData = [
  {
    id: 1,
    title: "OH PRIME ",
    tagOne: "SOCIAL MEDIA MANAGEMENT, SOCIAL MEDIA DESIGN",
    tagTwo: "HEALTH",
    description:
      "Healthcare Administrator:  Specialist Consultation, Surgery, Internal Medicine, Mental Health, O & G Orthopedic. ",
    image: prime,
    link: "",
  },
  {
    id: 2,
    title: "CABANA CAPITALS",
    tagOne: "SOCIAL MEDIA MANAGEMENT, SOCIAL MEDIA DESIGN",
    tagTwo: "FINTECH",
    description:
      "A Fintech Company passionate about providing Forex literacy to citizens nationwide.",
    image: CABANA,
    link: "",
  },
];
export const websiteData = [
  {
    id: 1,
    title: "ROBOTS",
    tagOne: "WEB DESIGN / WEB DEVELOPMENT",
    tagTwo: "TECHNOLOGY",
    description:
      "Facilitating development of technology talents with the right skills solve problems effectively and build sustainable solutions. ",
    image: robots,
    link: "",
  },
  {
    id: 2,
    title: "GLRD",
    tagOne: "WEB DESIGN / WEB DEVELOPMENT",
    tagTwo: "EDUCATION",
    description:
      "An Online Learning Platform that helps students solve their problems and provide guidelines for achieving their goals. ",
    image: glrd,
    link: "",
  },
];
export const brandIdentityData = [
  {
    id: 1,
    title: "FITNESS GURU",
    tagOne: "BRAND IDENTITY",
    tagTwo: "FITNESS",
    description:
      "Fitness Guru is modern, sophisticated, and exclusive fitness brand. ",
    image: fitness,
  },
  {
    id: 2,
    title: "TSO CONSULT",
    tagOne: "BRAND IDENTITY",
    tagTwo: "ARCHITECTURAL AND CONSTRUCTION ",
    description:
      "TSO consult is a professional architecture company dedicated to delivering exceptional design solutions for their clients. ",
    image: consult,
  },
  {
    id: 3,
    title: "ALYN HAIRS",
    tagOne: "BRAND IDENTITY",
    tagTwo: "STYLING",
    description:
      "Alyn Hairs is a modern, luxury & sophisticated, and exclusive Hair Styling Brand.",
    image: alyn,
    link: "",
  },
  {
    id: 4,
    title: "THE BOSS LEGS",
    tagOne: "BRAND IDENTITY",
    tagTwo: "FASHION & STYLE",
    description: "A luxury shoe brand making brand.",
    image: boss,
    link: "",
  },
];

export const brandIdentityCardOne = {
  price: "$100",

  description:
    "Includes 2 Design Ideas, 2 rounds of Revision and a  3-day delivery time frame.",

  features: [
    {
      id: 1,
      text: "Ownership Rights",
    },
    {
      id: 2,
      text: "Source Files",
    },
    {
      id: 3,
      text: "Monotone Variation",
    },
  ],
};
export const brandIdentityCardTwo = {
  price: "$270",

  description:
    "Includes 6 Design Ideas, 10 rounds of Revision and a  7-day delivery time frame.",

  features: [
    {
      id: 1,
      text: "Ownership Rights",
    },
    {
      id: 2,
      text: "Source Files",
    },
    {
      id: 3,
      text: "Monotone Variation",
    },
    {
      id: 4,
      text: "PDF Format Guide",
    },
    {
      id: 5,
      text: "Brand Guide",
    },
    {
      id: 6,
      text: "Customized Typeface",
    },
  ],
};
export const brandIdentityCardThree = {
  price: "$190",

  description:
    "Includes 4 Design Ideas, 5 rounds of Revision and a  4-day delivery time frame.",

  features: [
    {
      id: 1,
      text: "Ownership Rights",
    },
    {
      id: 2,
      text: "Source Files",
    },
    {
      id: 3,
      text: "Monotone Variation",
    },
    {
      id: 4,
      text: "PDF Format Guide",
    },
    {
      id: 5,
      text: "Brand Guide",
    },
  ],
};

export const websiteCardOne = {
  price: "$200",

  description:
    "5 pages, with Basic SEO Optimisation, and responsive design for optimal viewing on mobile and desktop.",

  features: [
    {
      id: 1,
      text: "Brand Customized Design",
    },
    {
      id: 2,
      text: "Contact Form",
    },
    {
      id: 3,
      text: "Integration of Social Media Feeds",
    },
    {
      id: 4,
      text: "1 - Time Review permission",
    },
    {
      id: 5,
      text: "14 Days Delivery Period",
    },
  ],
};
export const websiteCardTwo = {
  price: "$540",

  description:
    "10 pages, with Advanced SEO Optimisation, and responsive design for optimal viewing on mobile and desktop.",

  features: [
    {
      id: 1,
      text: "Brand Customized Design",
    },
    {
      id: 2,
      text: "Contact Form",
    },
    {
      id: 3,
      text: "Integration of Social Media Feeds",
    },
    {
      id: 4,
      text: "Customized Interactive Elements",
    },
    {
      id: 5,
      text: "Analytics Setup",
    },
    {
      id: 6,
      text: "Content Management System",
    },
    {
      id: 7,
      text: "Integration of Additional Plug-ins",
    },
    {
      id: 8,
      text: "30 Days Delivery Period",
    },
  ],
};
export const websiteCardThree = {
  price: "$350",

  description:
    "10 pages, with Advanced SEO Optimisation, and responsive design for optimal viewing on mobile and desktop.",

  features: [
    {
      id: 1,
      text: "Brand Customized Design",
    },
    {
      id: 2,
      text: "Contact Form",
    },
    {
      id: 3,
      text: "Integration of Social Media Feeds",
    },
    {
      id: 4,
      text: "Customized Interactive Elements",
    },
    {
      id: 5,
      text: "Analytics Setup",
    },
    {
      id: 6,
      text: "2-times Review Permission",
    },
    {
      id: 7,
      text: "20 Days Delivery Period",
    },
  ],
};

export const socialCardOne = {
  price: "$60",

  description:
    "Brand Onboarding consultation, Introduction & Executive summary, Market research & Analysis.",

  features: [
    {
      id: 1,
      text: "Products & Services",
    },
    {
      id: 2,
      text: "7-Days delivery Time",
    },
    {
      id: 3,
      text: "Supporting Document",
    },
    {
      id: 4,
      text: "Ownership Right",
    },
  ],
};
export const socialCardTwo = {
  price: "$350",

  description:
    "Brand Onboarding consultation, Introduction & Executive summary, Market research & Analysis.",

  features: [
    {
      id: 1,
      text: "Products & Services",
    },
    {
      id: 2,
      text: "17-days delivery Time",
    },
    {
      id: 3,
      text: "Supporting Document ",
    },
    {
      id: 4,
      text: "Brand Identity Design & Development",
    },
    {
      id: 5,
      text: "Brand Stock Images",
    },
    {
      id: 6,
      text: "Ownership Rights",
    },
    {
      id: 7,
      text: "4 Rounds of Revision",
    },
  ],
};
export const socialCardThree = {
  price: "$180",

  description:
    "Brand Onboarding consultation, Introduction & Executive summary, Market research & Analysis.",

  features: [
    {
      id: 1,
      text: "Products & Services",
    },
    {
      id: 2,
      text: "14-days delivery Time",
    },
    {
      id: 3,
      text: "Supporting Document ",
    },
    {
      id: 31,
      text: "Market & Research Analysis ",
    },

    {
      id: 4,
      text: "Brand Identity Design & Development",
    },
    {
      id: 5,
      text: "Brand Stock Images",
    },
    {
      id: 6,
      text: "Ownership Rights",
    },
  ],
};
