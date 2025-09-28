// data/moc.ts
export interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const cardData: CardData[] = [
  {
    imageSrc: "/images/wedding.jpg",
    title: "Luxury Wedding Planners",
    description:
      "V3Events & Wedding stands as a leading name in Delhi NCR for curating bespoke luxury weddings that leave lasting impressions.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/reality-show.jpg",
    title: "Reality Show Performers",
    description:
      "V3Events & Entertainments offers elite performance acts, bringing glamour and excitement to every occasion.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/celebrity.jpg",
    title: "Celebrity Management",
    description:
      "The Entertainment Industry is thriving, and we at V3 specialize in managing top-tier talent with excellence.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/conference.jpg",
    title: "Corporate Conferences",
    description:
      "From boardroom meetings to large-scale summits, we provide end-to-end event solutions for corporate gatherings.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/concert.jpg",
    title: "Live Concerts",
    description:
      "Bringing together world-class performers and unforgettable experiences, we manage live concerts with precision.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/festival.jpg",
    title: "Festivals & Cultural Events",
    description:
      "Our expertise in cultural festivals ensures seamless execution of large gatherings with vibrant experiences.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/product-launch.jpg",
    title: "Product Launches",
    description:
      "We create innovative launch experiences that captivate audiences and boost brand visibility instantly.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/exhibition.jpg",
    title: "Exhibitions & Trade Shows",
    description:
      "Our creative exhibition setups help brands connect with audiences and leave a lasting impression.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/award-show.jpg",
    title: "Award Ceremonies",
    description:
      "From stage design to talent management, our award ceremonies are nothing short of grand spectacles.",
    buttonText: "More Info",
  },
  {
    imageSrc: "/images/private-party.jpg",
    title: "Private Parties",
    description:
      "Be it birthdays, anniversaries, or milestone celebrations, we curate private parties with personal flair.",
    buttonText: "More Info",
  },
];

export default cardData;
