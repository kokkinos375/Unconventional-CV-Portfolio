/**
 * Swimming performance records — Greek meets + national / international summary.
 * `podiumSlots` counts toward the Trophy Room total-medals animation.
 */

export type GreekMeetRow = {
  id: string;
  meet: string;
  dateOrYear: string;
  results: string;
  category: string;
  podiumSlots: number;
};

export const GREEK_MEET_RESULTS: GreekMeetRow[] = [
  {
    id: "gr-poseidon-2022",
    meet: "1ο Κύπελλο Ποσειδώνα Ιλισίων",
    dateOrYear: "18/05/2022",
    results: "2η θέση 50m Πεταλούδα",
    category: "Έφηβοι",
    podiumSlots: 1,
  },
  {
    id: "gr-tzelateia-2022",
    meet: "Τζελάτεια",
    dateOrYear: "08/05/2022",
    results: "1η θέση 50m Πεταλούδα · 2η θέση 50m Ύπτιο",
    category: "Έφηβοι",
    podiumSlots: 2,
  },
  {
    id: "gr-tsitia-2019",
    meet: "17α Τσίτεια",
    dateOrYear: "2019",
    results: "2η θέση 200m Ύπτιο · 3η θέση 50m Ύπτιο",
    category: "Παμπαίδες Α",
    podiumSlots: 2,
  },
  {
    id: "gr-grekas-2018",
    meet: "1ο Κύπελλο «Νίκος Γκρέκας»",
    dateOrYear: "01/12/2018",
    results: "1η θέση 50m Ύπτιο",
    category: "Παμπαίδες Α",
    podiumSlots: 1,
  },
  {
    id: "gr-kalamakeia-2018",
    meet: "Καλαμάκεια",
    dateOrYear: "14/04/2018",
    results: "3η θέση 100m Ελεύθερο",
    category: "Παμπαίδες Β",
    podiumSlots: 1,
  },
  {
    id: "gr-resteia-2017",
    meet: "Ρέστεια",
    dateOrYear: "2017",
    results: "2η θέση 100m Πεταλούδα · 3η θέση 50m Πεταλούδα",
    category: "Αγόρια 12 ετών",
    podiumSlots: 2,
  },
  {
    id: "gr-tsitia-2016",
    meet: "15α Τσίτεια",
    dateOrYear: "22/05/2016",
    results: "2η θέση 200m Ύπτιο",
    category: "Αγόρια 11 ετών",
    podiumSlots: 1,
  },
  {
    id: "gr-olympiakos-2016-17",
    meet: "Ολυμπιακός «Πρώτα αθλητές»",
    dateOrYear: "2016–2017",
    results: "Πολλαπλές θέσεις (2η & 3η) — 200m Ύπτιο · 100m Ελεύθερο",
    category: "—",
    podiumSlots: 4,
  },
  {
    id: "gr-koat-2015",
    meet: "10ο Κύπελλο ΚΟΑΤ",
    dateOrYear: "06/12/2015",
    results: "2η θέση 200m Ύπτιο",
    category: "Αγόρια 11 ετών",
    podiumSlots: 1,
  },
];

export const NATIONAL_SUMMARY = {
  title: "National (Greece)",
  lines: [
    "3η θέση 4×100m Μικτή ομάδα (2019)",
    "3η θέση 4×200m Ελεύθερο (2019)",
  ],
  podiumSlots: 2,
} as const;

export const INTERNATIONAL_SUMMARY = {
  title: "International",
  lines: ["4η θέση 50m Πεταλούδα — 20ο Sparkassen Schwimmfest, Γερμανία (2019)"],
  podiumSlots: 0,
} as const;

export const OPEN_WATER_SUMMARY = {
  title: "Open water",
  lines: ["Santorini Experience 2.4km — 29η / 198 (2017)"],
  podiumSlots: 0,
} as const;

export function totalTrackedPodiumSlots(): number {
  const greek = GREEK_MEET_RESULTS.reduce((s, r) => s + r.podiumSlots, 0);
  return greek + NATIONAL_SUMMARY.podiumSlots;
}
