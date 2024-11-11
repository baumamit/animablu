interface PresentazioneProps {
    hrefSection: string;
  }
  
  const Presentazione: React.FC<PresentazioneProps> = ({hrefSection}) => {
  
    return (
      <section id="presentazione" className="">
        <div className="container">
          <a href={hrefSection}></a>
          <h2>Presentazione</h2>
          <hr />
          Presentazione contenuti
        </div>
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Presentazione;