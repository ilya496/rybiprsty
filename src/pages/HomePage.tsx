import Section from "../components/Section";

function HomePage() {
  return (
    <div className="container">
      <h1 className="section__title">Rybi Prsty</h1>
      <Section
        id="band-members"
        title="Band members"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis velit molestiae saepe facilis molestias, aliquid omnis accusantium dolor quia cumque."
      />
    </div>
  );
}

export default HomePage;
