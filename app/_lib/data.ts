export type Category = {
  id: string;
  label: string;
  color: string;
  count: number;
};

export type LeakPost = {
  id: string;
  imageUrl: string;
  duration: string;
  title: string;
  views: number;
  likes: number;
  publishedAt: string;
  username: string;
  verified: boolean;
  avatarColor: string;
};

export const CATEGORIES: Category[] = [
  { id: "all", label: "Tout", color: "#f97316", count: 2847 },
  { id: "populaire", label: "Populaire", color: "#10b981", count: 742 },
  { id: "amateur", label: "Amateur", color: "#f59e0b", count: 531 },
  { id: "snapnude", label: "Snaps & Nudes", color: "#ef4444", count: 489 },
  { id: "commu", label: "Partage communautaire", color: "#3b82f6", count: 364 },
  { id: "celebrite", label: "Celebrité", color: "#fb923c", count: 291 },
];

export const LEAKS: LeakPost[] = [
  {
    id: "1",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087935483-55bay85.gif",
    duration: "8:14",
    title: "Je la baises en levrette pendant que ses parents dorment",
    views: 156800,
    likes: 9420,
    publishedAt: "2026-06-10T14:20:00",
    username: "Maxime",
    verified: true,
    avatarColor: "#8b5cf6",
  },
  {
    id: "2",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087908905-uvkt5pd.gif",
    duration: "3:47",
    title: "Il me baise comme une chienne",
    views: 124300,
    likes: 7650,
    publishedAt: "2026-06-10T09:45:00",
    username: "Elise",
    verified: true,
    avatarColor: "#06b6d4",
  },
  {
    id: "3",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087438354-vngsue5.gif",
    duration: "12:02",
    title: "Voilée qui suce dans la rue pendant le ramadan",
    views: 267000,
    likes: 18900,
    publishedAt: "2026-06-09T19:30:00",
    username: "Adam",
    verified: true,
    avatarColor: "#eab308",
  },
  {
    id: "4",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087865393-iy8afsi.gif",
    duration: "5:30",
    title: "Tana pro max",
    views: 95400,
    likes: 5230,
    publishedAt: "2026-06-09T11:00:00",
    username: "Anonyme",
    verified: false,
    avatarColor: "#71717a",
  },
  {
    id: "5",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087790257-3njenax.gif",
    duration: "2:18",
    title: "Je remplis sa chatte de mon sperme pendant qu'elle est à quatre pattes",
    views: 312000,
    likes: 24500,
    publishedAt: "2026-06-08T16:45:00",
    username: "Kevin",
    verified: true,
    avatarColor: "#22c55e",
  },
  {
    id: "6",
    imageUrl: "https://cdn.jet-lead.com/gallery/1781087751634-xof9h80.gif",
    duration: "4:55",
    title: "Elle me chauvauche comme une folle et je lui crache dans la bouche",
    views: 68900,
    likes: 3340,
    publishedAt: "2026-06-08T08:15:00",
    username: "Alex",
    verified: false,
    avatarColor: "#ec4899",
  },
  {
    id: "7",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305102894-92jrsbb.gif",
    duration: "8:00",
    title: "Chienne de 92i",
    views: 198500,
    likes: 12300,
    publishedAt: "2026-06-07T20:30:00",
    username: "Romain",
    verified: true,
    avatarColor: "#0ea5e9",
  },
  {
    id: "8",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305347842-h0m2zwn.gif",
    duration: "1:45",
    title: "Beurette qui se touche",
    views: 224000,
    likes: 16700,
    publishedAt: "2026-06-07T13:00:00",
    username: "Ines",
    verified: true,
    avatarColor: "#a855f7",
  },
  {
    id: "9",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305423669-jtjy43r.gif",
    duration: "6:22",
    title: "Elle danse dans sa douche et finit par se masturber",
    views: 87600,
    likes: 6120,
    publishedAt: "2026-06-06T18:00:00",
    username: "Anonyme",
    verified: false,
    avatarColor: "#64748b",
  },
  {
    id: "10",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080894203-bmoq8a0.gif",
    duration: "3:10",
    title: "Branlette espagnole avec sa brosse à cheveux",
    views: 176000,
    likes: 11800,
    publishedAt: "2026-06-06T10:30:00",
    username: "Sofia",
    verified: true,
    avatarColor: "#14b8a6",
  },
  {
    id: "11",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305223989-2mowxa0.gif",
    duration: "9:38",
    title: "92i",
    views: 134500,
    likes: 9870,
    publishedAt: "2026-06-05T15:20:00",
    username: "Baptiste",
    verified: false,
    avatarColor: "#f43f5e",
  },
  {
    id: "12",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080872559-m65wv6e.gif",
    duration: "7:03",
    title: "Plans a 3 avec sa copine je crache sur leurs visages d'anges",
    views: 159000,
    likes: 10450,
    publishedAt: "2026-06-05T07:30:00",
    username: "Damien",
    verified: true,
    avatarColor: "#84cc16",
  },
];

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export function getCategoryLabel(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function getCategoryColor(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.color ?? "#f97316";
}
