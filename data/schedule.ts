export type ScheduledRace = {
  date: string;
  event: string;
  href: string;
  address?: string;
  city: string;
  state: string;
};

export const SCHEDULE: ScheduledRace[] = [
  {
    date: "10/17/26",
    event: "Chemin-A-Haut Trail Run",
    href: "https://runsignup.com/Race/LA/Bastrop/CheminAHaut4MileRunand1MileWalk",
    city: "Bastrop",
    state: "LA",
  },
];
