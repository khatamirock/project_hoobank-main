import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";
import { Websvg, Phonesvg } from "../components/svg";
export const navLinks = [
  {
    __id: 1,
    id: "/",
    title: "ABOUT",
  },
  {
    __id: 2,
    id: "/resume",
    title: "RESUME",
  },
  {
    __id: 3,
    id: "/portfolio",
    title: "PORTFOLIO",
  },
  {
    __id: 4,
    id: "/contact",
    title: "CONTACT",
  },
];

export const card_aboutme = [
  {
    id: "card-1",
    icon: "<Websvg />",
    title: "Full-Stack Web Development",
    content: "I have been working in web development for almost 5 years.I am experienced in both frontend and backend web development. Usually, I prefer to use regular bootstrap and Js for frontend and Django for the backend. I also have some skills in typescript, ES6, vanilla js, jQuery, etc. In the terms of server-side language, I also worked with MySQL, PostgreSQL, MongoDB, and SQLite.    I am proficient in PHP and WordPress sites also. Recently, I have been working on the MERN stack to gather more experiences"
  },
  {
    id: "card-2",
    icon: "<Phonesvg />",
    title: "App Development",
    content: "	App Development I have worked with flutter for both Android and iOS app development. I can make customized UI/Design with provided XD/Figma UI and prefer to use firebase as a database for my app."
  },
  {
    id: "card-3",
    icon: Websvg,
    title: "Apprentice Researcher",
    content: "Recently I have been trying to start research on a few topics. This is a completely new journey without any previous experience of mine. Hope to do well on this challenging journey."
  }, {
    id: "card-4",
    icon: Websvg,
    title: "Apprentice Researcher",
    content: "Recently I have been trying to start research on a few topics. This is a completely new journey without any previous experience of mine. Hope to do well on this challenging journey."
  }, {
    id: "card-5",
    icon: Websvg,
    title: "Apprentice Researcher",
    content: "Recently I have been trying to start research on a few topics. This is a completely new journey without any previous experience of mine. Hope to do well on this challenging journey."
  },


];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800",
    total: "5000"
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230",
    total: "350"
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "230",
    total: "290"
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/khatamireturns/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/roninreturns",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/khatami-onik-2b1175191/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];