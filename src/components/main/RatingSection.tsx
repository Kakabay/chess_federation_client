import SectionTitle from "../global/SectionTitle";

import king from "../../images/king-ing.png";
import queen from "../../images/queen-img.png";
import globe from "../../images/globe-img.png";
import { Link } from "react-router-dom";

const cardsData = [
  {
    cardTitle: "Рейтинг Туркменистана среди мужчин",
    img: king,
    link: "/",
  },
  {
    cardTitle: "Рейтинг Туркменистана среди мужчин",
    img: queen,
    link: "/",
  },
  {
    cardTitle: "Рейтинг Туркменистана среди мужчин",
    img: globe,
    link: "/",
  },
];

const RatingSection = () => {
  return (
    <section className="rating-section">
      <div className="container">
        <div className="rating-inner">
          <SectionTitle title="Рейтинг игроков" icon="king" />

          <div className="rating-cards-block">
            {cardsData.map((card) => (
              <Link to={card.link} className="rating-card">
                <div className="rating-card-img">
                  <img src={card.img} alt={card.cardTitle} />
                </div>
                <h3>{card.cardTitle}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
