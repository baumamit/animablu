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
          { title: 'Section 1', content: 'Content for section 1' },
          { title: 'Section 2', content: 'Content for section 2' },
          { title: 'Section 3', content: 'Content for section 3' },
        ]}
      />
    </section>
  );
};

export {};  // Add this line to make it a module
export default ScritturaETeatro;