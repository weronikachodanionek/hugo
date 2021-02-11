export interface ISelectOptions {
  value: string;
  label: string;
}

export const roomsOptions: ISelectOptions[] = [
  {
    value: "sea",
    label: "Pokój z widokiem na morze",
  },
  {
    value: "penguins",
    label: "Pokój z tapetą w pingwiny",
  },
  {
    value: "terrace",
    label: "Pokój z tarasem",
  },
  {
    value: "kitchen",
    label: "Pokój z kuchnią",
  },
];

export const desksOptions: ISelectOptions[] = [
  {
    value: "window",
    label: "Biurko przy oknie",
  },
  {
    value: "center",
    label: "Biurko środkowe",
  },
  {
    value: "door",
    label: "Biurko przy drzwiach",
  },
  {
    value: "corner",
    label: "Biurko w rogu",
  },
];
