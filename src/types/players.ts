export interface PlayersData {
  id: number;
  national: number;
  img: string;
  title: string;
  name: string;
  birthday: number;
  classic: number;
  rapid: number;
  blitz: number;
}

// Used in SearchTable.tsx

export type playerType = [string, React.Dispatch<string>];
