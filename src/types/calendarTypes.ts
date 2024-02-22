import { SetStateAction } from "react";

export interface dayType {
  day: number;
  month: number;
}

export type monthType = [number, React.Dispatch<SetStateAction<number>>];
export type monthSelectType = [
  boolean,
  React.Dispatch<SetStateAction<boolean>>
];
export type dayStateType = [dayType, React.Dispatch<SetStateAction<dayType>>];
