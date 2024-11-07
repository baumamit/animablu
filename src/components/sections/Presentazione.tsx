interface PresentazioneProps {
    
  }
  
  const Presentazione: React.FC<PresentazioneProps> = () => {
  
    return (
      <section id="presentazione" className="container px-2 py-12">
        <a href="#Presentazione"></a>
        <h2>Presentazione</h2>
        <hr />
        Presentazione contenuti
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Presentazione;