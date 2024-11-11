import './IconsList.css'; // Optional: Add styles in a CSS file.

interface IconLink {
    IconComponent: React.ComponentType;
    name: string;
    href: string;
  }
  
interface IconsListProps {
    links: IconLink[];
}

const IconsList: React.FC<IconsListProps> = ({ links }) => (
    <ul className="icons-list">
      {links.map((link, index) => (
        <li key={index} className="icons-list-item">
          <a href={link.href} target="_blank" rel="noopener noreferrer" className='icons-list-item-hyperlink'>
            <link.IconComponent />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
);

export default IconsList;