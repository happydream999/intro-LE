import logoDark from "../../assets/images/shared/desktop/logo-dark.png";
import logoLight from "../../assets/images/shared/desktop/logo-light.png";
import facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import youtube from "../../assets/images/shared/desktop/icon-youtube.svg";
import twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import pinterest from "../../assets/images/shared/desktop/icon-pinterest.svg";
import instagram from "../../assets/images/shared/desktop/icon-instagram.svg";

export const menuData = {
  header: {
    headerLogo: logoDark,
    headerLogoAlt: "Lim Eric web agency",
    label: "visit homepage",
  },
  footer: {
    footerLogo: logoLight,
    footerLogoAlt: "Lim Eric",
    label: "go back to homepage",
  },
  homeLink: "/",
  address: {
    office: "Central Office",
    street: "2728 POINT REYES WAY",
    city: "SACRAMENTO",
  },
  contact: {
    title: "Contact Me (Central Office)",
    phone: "+1 540-881-2949",
    phoneLink: "tel:+1 540-881-2949",
    phoneLabel: "call us via our official number",
    email: "GREGORYNEELEYLLC@outlook.com",
    emailLink: "mailto:GREGORYNEELEYLLC@outlook.com",
    emailLabel: "send us an email",
  },
  social: [
    {
      label: "follow us on facebook",
      icon: facebook,
      link: "https://facebook.com",
    },
    {
      label: "subscribe to our youtube channel",
      icon: youtube,
      link: "https://youtube.com",
    },
    {
      label: "follow us on twitter",
      icon: twitter,
      link: "https://twitter.com",
    },
    {
      label: "join us on pinterest",
      icon: pinterest,
      link: "https://pinterest.com",
    },
    {
      label: "follow us on instagram",
      icon: instagram,
      link: "https://instagram.com",
    },
  ],
  menu: [
    {
      title: "About me",
      link: "/about",
      label: "visit about page",
    },
    {
      title: "location",
      link: "/locations",
      label: "visit locations page",
    },
    {
      title: "contact",
      link: "/contact",
      label: "visit contact page",
    },
  ],
};
