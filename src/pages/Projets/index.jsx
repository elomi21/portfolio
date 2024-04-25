import Card from "../../components/card/card";
import Projetsdata from "../../projetsdata.json";
import Carousel from "../../components/carousel";
const projetsdata = Projetsdata;

function Projets() {
  return (
    <main>
      <ul>
        {projetsdata.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            cover={data.cover}
            title={data.title}
            langages={data.langages}
          />
        ))}
          </ul>
        <Carousel/>
    </main>
  );
}
export default Projets;
