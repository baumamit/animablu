import ImageCarousel from "../custom/ImageCarousel";

//import img1 from '../../assets/artworks/anima-grande-anima-bella.jpg';


interface ScritturaETeatroProps {
}

const ScritturaETeatro: React.FC<ScritturaETeatroProps> = () => {

  const images = [
    '/images/artworks/anima-grande-anima-bella.jpg',
    '/images/artworks/Autoritratto-della-mia-Anima-Francesco-Canale.jpg',
    '/images/artworks/bacio-di-madre.jpg',
  ];

  return (
    <section id="scrittura-e-teatro" className="container">
      <h2>ScritturaETeatro</h2>
      <hr />
      ScritturaETeatro contenuti
      <ImageCarousel images={images} />
    </section>
  );
};

export {};  // Add this line to make it a module
export default ScritturaETeatro;