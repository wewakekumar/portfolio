import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface ContactLink {
  type: "WHATSAPP" | "EMAIL" | "PHONE" | "TWITTER" | "LINKEDIN" | "OTHER";
  typeTile?: string;
  url: string;
  icon?: string;
}

const icons = {
  WHATSAPP: faWhatsapp,
  LINKEDIN: faLinkedinIn,
  PHONE: faPhone,
  TWITTER: faTwitter,
  EMAIL: faEnvelope,
  OTHER: faPhone,
};

interface ContactLinksProps {
  links: Array<ContactLink>;
}

const ContactLinks: React.FC<ContactLinksProps> = (props) => {
  const { links } = props;

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="w-0.5 h-10 bg-primary"></div>
      <ul className="flex flex-col gap-y-4">
        {links.map((link, index) => {
          const { type, url, icon } = link;
          return (
            <li key={index}>
              <Link href={url} target="_blank">
                <div className="h-4 w-4">
                  <FontAwesomeIcon size="lg" icon={icons[type]} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactLinks;
