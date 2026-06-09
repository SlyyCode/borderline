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
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305102894-92jrsbb.gif",
    duration: "8:14",
    title: "Il la suce dans les toilettes d'un bar - Vidéo amateur exclusive",
    views: 142500,
    likes: 8934,
    publishedAt: "2026-06-02T08:30:00",
    username: "Lucas_92",
    verified: true,
    avatarColor: "#f97316",
  },
  {
    id: "2",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305347842-h0m2zwn.gif",
    duration: "3:47",
    title: "Je la baise dans la cabine d'essayage",
    views: 98200,
    likes: 6721,
    publishedAt: "2026-06-02T11:15:00",
    username: "Marco_x",
    verified: true,
    avatarColor: "#3b82f6",
  },
  {
    id: "3",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305423669-jtjy43r.gif",
    duration: "12:02",
    title: "Amataeur - Elle me suce",
    views: 215000,
    likes: 15200,
    publishedAt: "2026-06-02T06:00:00",
    username: "Theo_dier",
    verified: true,
    avatarColor: "#10b981",
  },
  {
    id: "4",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080894203-bmoq8a0.gif",
    duration: "5:30",
    title: "Windows 12 - Build interne avec de nouvelles fonctionnalités",
    views: 87300,
    likes: 4120,
    publishedAt: "2026-06-01T20:00:00",
    username: "Anonyme",
    verified: false,
    avatarColor: "#5c5248",
  },
  {
    id: "5",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305223989-2mowxa0.gif",
    duration: "2:18",
    title: "PSG - Les transferts secrets de l'été dévoilés",
    views: 63400,
    likes: 3890,
    publishedAt: "2026-06-01T15:00:00",
    username: "Sarah_b",
    verified: true,
    avatarColor: "#fb923c",
  },
  {
    id: "6",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080872559-m65wv6e.gif",
    duration: "4:55",
    title: "Adobe Photoshop 2026 - Version complète disponible",
    views: 54100,
    likes: 2980,
    publishedAt: "2026-06-01T10:00:00",
    username: "Julien.k",
    verified: false,
    avatarColor: "#f59e0b",
  },
  {
    id: "7",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305102894-92jrsbb.gif",
    duration: "8:00",
    title: "Call of Duty BO7 - Vidéo gameplay gunplay inédite",
    views: 178000,
    likes: 11200,
    publishedAt: "2026-05-31T18:00:00",
    username: "Nico_77",
    verified: true,
    avatarColor: "#ef4444",
  },
  {
    id: "8",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305347842-h0m2zwn.gif",
    duration: "1:45",
    title: "iPhone 18 Pro - Premiers rendus du design officiel",
    views: 203000,
    likes: 9870,
    publishedAt: "2026-05-31T09:00:00",
    username: "Manon_v",
    verified: true,
    avatarColor: "#f97316",
  },
  {
    id: "9",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305423669-jtjy43r.gif",
    duration: "6:22",
    title: "The Weeknd - Détails complets du prochain album",
    views: 76500,
    likes: 5430,
    publishedAt: "2026-05-30T14:00:00",
    username: "Anonyme",
    verified: false,
    avatarColor: "#5c5248",
  },
  {
    id: "10",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080894203-bmoq8a0.gif",
    duration: "3:10",
    title: "Spider-Man 4 - Documents de casting et synopsis",
    views: 189000,
    likes: 13500,
    publishedAt: "2026-05-30T08:00:00",
    username: "Camille_r",
    verified: true,
    avatarColor: "#3b82f6",
  },
  {
    id: "11",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780305223989-2mowxa0.gif",
    duration: "9:38",
    title: "Ballon d'Or 2026 - Liste officielle des nominés révélée",
    views: 91200,
    likes: 6780,
    publishedAt: "2026-05-29T12:00:00",
    username: "Yanis_44",
    verified: false,
    avatarColor: "#10b981",
  },
  {
    id: "12",
    imageUrl: "https://cdn.jet-lead.com/gallery/1780080872559-m65wv6e.gif",
    duration: "7:03",
    title: "NVIDIA RTX 5090 - Benchmarks internes exclusifs",
    views: 145000,
    likes: 8920,
    publishedAt: "2026-05-29T07:00:00",
    username: "Hugo_ds",
    verified: true,
    avatarColor: "#fb923c",
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
