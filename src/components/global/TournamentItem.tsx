const TournamentItem = () => {
  return (
    <div className="tournament-item">
      <div className="tournament-item-date">
        <h4 className="tournament-item-date-item">
          <span>4</span>
          марта
        </h4>
        <div className="tournament-item-date-divider"></div>
        <h4 className="tournament-item-date-item">
          <span>4</span>
          марта
        </h4>
      </div>
      <div className="tournament-item-content">
        <h3 className="tournament-item-title">
          Высшая лига Чемпионата Туркменистана среди мужчин и женщин.
        </h3>
        <h4 className="tournament-item-subtitle">Шахматно-шашечная школа, г. Ашхабад</h4>
      </div>
    </div>
  );
};

export default TournamentItem;
