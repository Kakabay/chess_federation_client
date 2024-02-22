import React from "react";
import { dropdown } from "./dropdown";

export interface burger {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<boolean | ((initial: boolean) => boolean)>;
}

export interface dropdownBurger {
  dropdownBurger: boolean;
  setDropdownBurger: React.Dispatch<boolean | ((initial: boolean) => boolean)>;
}
export interface refDropdown {
  refTrig_1: React.MutableRefObject<any>;
}

export type navProps = burger & dropdown & refDropdown;
export type burgerProps = burger & dropdownBurger;
export type footerProps = dropdownBurger & dropdown & burger & refDropdown;
