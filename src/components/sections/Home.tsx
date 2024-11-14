import TextRotator, { EffectType } from "../custom/TextRotator";

interface HomeProps {
  }
  
  const Home: React.FC<HomeProps> = () => {
    return (
      <section id="home">
        <div className="container text-center">
          <h1>Francesco<br/>Canale</h1>
          <TextRotator effect={EffectType.SpinScale} texts={["Artista", "Pittore", "Scrittore", "Influencer"]} />
        </div>
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Home;