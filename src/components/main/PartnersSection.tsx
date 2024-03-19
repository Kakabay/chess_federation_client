import { useEffect, useState } from "react";
import SectionTitle from "../global/SectionTitle";
import { getPartnerSliderData } from "../../helpers/apiRequests";
import { partnersType } from "../../types/partnersType";
import { hosting } from "../../links";

const PartnersSection = () => {
  const [partners, setPartners] = useState<partnersType[]>();

  useEffect(() => {
    getPartnerSliderData(setPartners);
  }, []);

  console.log(partners);
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-inner">
          <SectionTitle icon="bishop" title="Партнёры" />
          <div className="partners-block">
            {partners?.map((partner) => (
              <div className="partner-img">
                <img src={hosting + partner.partner} alt={partner.note} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
