import AccordionWrapper from "../custom/AccordionWrapper";

interface ScritturaETeatroProps {
}

const ScritturaETeatro: React.FC<ScritturaETeatroProps> = () => {

  return (
    <section id="scrittura-e-teatro" className="container">
      <h2>Scrittura e Teatro</h2>
      <hr />
      Scrittura e Teatro contenuti

      <AccordionWrapper
        items={[
          { imageSrc:'/images/francesco-canale-profile/Francesco Canale bambino.jpg', title: 'Da bambino', content: '' },
          { imageSrc:'/images/francesco-canale-profile/Francesco Canale.jpg', title: 'Section 2', content: 'Al lavoro' },
          { imageSrc:'/images/francesco-canale-profile/francesco-canale-profile-giocando.jpg', title: 'Giocando', content: '' },
        ]}
      />
    </section>
  );
};

export {};  // Add this line to make it a module
export default ScritturaETeatro;