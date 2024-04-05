import React from 'react';
import { v4 } from 'uuid';
import TournamentItem from './TournamentItem';

const TournamentBlock = () => {
  return (
    <div className="tournament-block">
      <h2 className="tournament-block-title">Март 2024 года</h2>
      <div className="tournaments-content">
        <TournamentItem
          endTime={'2022-07-25 00:00:00'}
          place={'Шахматно-шашечная школа, г. Ашхабад'}
          tourName={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
          startTime={'2022-07-25 00:00:00'}
          key={v4()}
        />
        <TournamentItem
          endTime={'2022-07-25 00:00:00'}
          place={'Шахматно-шашечная школа, г. Ашхабад'}
          tourName={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
          startTime={'2022-07-25 00:00:00'}
          key={v4()}
        />
        <TournamentItem
          endTime={'2022-07-25 00:00:00'}
          place={'Шахматно-шашечная школа, г. Ашхабад'}
          tourName={'Высшая лига Чемпионата Туркменистана среди мужчин и женщин.'}
          startTime={'2022-07-25 00:00:00'}
          key={v4()}
        />
      </div>
    </div>
  );
};

export default TournamentBlock;
