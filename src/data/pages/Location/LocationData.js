import CanadaImage from "../../../assets/images/shared/desktop/illustration-canada.svg";

export const locationListData = [
  {
    country: "United States",
    image: CanadaImage,
    label: "see our United States contact information",
    anchorLink: "locations#us",
  },
];

export const locationData = {
  us: {
    id: "us",
    country: "United States",
    image: CanadaImage,
    anchorLink: "",
    address: {
      office: "Lim Eric Central Office",
      street: "2728 POINT REYES WAY",
      state: "SACRAMENTO, California, 95826",
    },
    contact: {
      header: "Contact",
      phone: "+1 540-881-2949",
      mail: "GREGORYNEELEYLLC@outlook.com",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434812661!2d-121.36107348507592!3d38.56299997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adb5c7af3c1a7%3A0x390f5974692ceefd!2s2728+Point+Reyes+Way%2C+Sacramento%2C+CA!5e0!3m2!1sen!2sus!4v1672443982009",
    },
  },
};
