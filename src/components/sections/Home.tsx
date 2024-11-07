interface HomeProps {
    
  }
  
  const Home: React.FC<HomeProps> = () => {
  
    return (
      <section id="home" className="container px-2 py-12">
        <img id="featured-image" src="../../assets/images/logo.png" alt="Francesco Canale da bambino in bianco e nero" />
        <h1>Francesco Canale</h1>
        Home content
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Home;