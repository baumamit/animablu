import ImageCarousel from "../custom/ImageCarousel";

interface PitturaProps {
}

const Pittura: React.FC<PitturaProps> = () => {

  const images = [
    '/images/artworks/anima-grande-anima-bella.jpg',
    '/images/artworks/Autoritratto-della-mia-Anima-Francesco-Canale.jpg',
    '/images/artworks/bacio-di-madre.jpg',
    '/images/artworks/fenicotteri-e-ninfee-acquerello.jpg',
    '/images/artworks/Fiorellini-rosa.jpg',
    '/images/artworks/il-guerriero-pacifico-33x27.jpg',
    '/images/artworks/Il-lago-incantato.jpg',
    '/images/artworks/La-Divina-Commedia-secondo-Anima-Blu-58x68.jpg',
    '/images/artworks/la-mia-africa-acrilico.jpg',
    '/images/artworks/La-tigre.jpg',
    '/images/artworks/La-vergogna-e-la-speranza-dellUmanità-Francesco-Canale.jpg',
    '/images/artworks/lupo-selvatico-pastello-acquerellabile.jpg',
    '/images/artworks/m45-acquerello.jpg',
    '/images/artworks/Maternità-delle-rocce.jpg',
    '/images/artworks/sotto-il-pelo-dellacqua-acrilico.jpg',
  ];

  return (
    <section id="pittura" className="container">
      <h2>Pittura</h2>
      <hr />
      Pittura contenuti
      <ImageCarousel images={images} />
    </section>
  );

};

export {};  // Add this line to make it a module
export default Pittura;