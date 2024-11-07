interface HomeProps {
  }
  
  const Home: React.FC<HomeProps> = () => {

    const featuredImage = "/images/Francesco Canale.jpg";

    return (
      <section id="home" className="container px-2 py-12">
        <img id="featured-image" src={featuredImage} alt="Francesco Canale pittura con la bocca" className="flex object-cover w-screen h-96" />
        <h1>Francesco Canale</h1>
        Home content
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Home;