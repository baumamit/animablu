import TextRotator from "../custom/TextRotator";

interface HomeProps {
  }
  
  const Home: React.FC<HomeProps> = () => {


    return (
      <section id="home">
        <div className="container">
          <h1>Francesco Canale</h1>
          {/* <div className="site-subtitle">Artista</div> */}
          <TextRotator effect="text-transition-fade" texts={["Artista", "Pittore", "Scrittore", "Influencer"]} />
        </div>
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Home;