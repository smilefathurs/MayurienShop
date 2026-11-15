export interface ProductVariant {
  id: string;
  label: string;
  colorHex?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  avatarInitials: string;
  rating: number;
  date: string;
  variantPurchased: string;
  comment: string;
  helpfulCount: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  categorySlug: string;
  categoryLabel: string;
  badgeText?: string;
  badgeStyle?: 'discount' | 'trending' | 'bestseller' | 'promo' | 'new' | 'limited';
  secondBadgeText?: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  stock: number;
  stockNote?: string;
  shortSubtitle: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  gallery: {
    url: string;
    alt: string;
  }[];
  colorVariants: ProductVariant[];
  layoutVariants?: string[];
  specs: {
    label: string;
    value: string;
  }[];
  isTrending?: boolean;
  isNewArrival?: boolean;
  isPreOrder?: boolean;
}

export interface CategoryInfo {
  slug: string;
  title: string;
  catalogLabel: string;
  subtitle: string;
  countLabel: string;
  count: number;
  imageUrl: string;
  accentBg: string;
  hoverText: string;
}

export const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrBhE-TB90t7loSGvOLIcp0MpPoUvFM18g6FNDe8swQUBJYpc7AvcuGLECJcSf_K5lULReyFwItV7PhpYvolSGi-jQ05p8EB11Ao0YntVhUWgNMlJreJ1qyiVwvL5xNYrQfbvkkcnj9yyDEMyx5-NO93fWdWTq3HArJgeXn95HHN9NlPHfsNB02xOX8LIe-9FD_VNoBfNyc7JxZHZBJLXnRdhsrl8Q6vnETFkK5VLw';

export const HERO_WORKSPACE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA-_6SYYgyx7t9zsS6F8TOiThbQSk_guWXqmJcZavYDNSg1ZseIVmIi1Ba-2bIQvsbTQBP1ihGMWYic45-9cNORhfQiqFoaeWvLGMyxIJSDvVW1VRhdSndtds7XQuot9UnhlhR7_rQ00kpvY2eGWRMf-n25FzPUXGrHX4g9PZT6SYDg_O_OMbfJEoGYdx_vj6reDuK6cboDDDSLBGAY1w8kPnrjMGtzD3aL0YV3aw';

export const PROMO_GIFT_BOX_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB6NWW8EiMPRdp-WX_vcLyCiR4TVR4gxeuuIC_HuAeLryH0kXfrxjw8SCyEgN7-qmvrOE1SeGu4rXwZuF1fFgnjgzX0i7dxve1UaR8fUziBLWa0K6G2vVht1DSwgta4UeBFEh_8M9BUdH27vXtkY9CrUfP39xoKAFV4VM9qwqBhtsF5veNC1B2ebt6hVmj_YvJJhblwFEndpHRluqaZhYoDh0UQ1sjGdWSdZvRojA';

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'notebooks-journal',
    title: 'Notebooks & Journal',
    catalogLabel: 'Notebook & Binder',
    subtitle: 'Buku diary, grid binder & refill',
    countLabel: '42+ Item',
    count: 14,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0UEA7KwXMvAYEpBx31OebwfxUDnir2_9LH-GNuSrqCNy8FzSc5IY6-OTULKmaczpNgpvXO5GoapHBP3T6jSD_bbZTeDKnzJkOoaX4zELPYLGKE72x9JYwZLEmdL8f8glSldGnu1AyZwKig94f7bQuxmteB8lW2bwtJ5qXyHunomW9ZrzpnbyaNiDtrYcCacodmQZkO4Oub32dpS-2kXc5GCuSXVqSoB_lwRRY2A',
    accentBg: 'bg-[#eaddff] dark:bg-[#4f348d]',
    hoverText: 'group-hover:bg-[#674ba7] group-hover:text-white',
  },
  {
    slug: 'pens-highlighters',
    title: 'Pens & Highlighters',
    catalogLabel: 'Pens, Pencils & Markers',
    subtitle: 'Gel pen pastel, brush pen warna',
    countLabel: '28+ Item',
    count: 12,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBc0xpXpy_PFcjIVxjwA6KSs5EAZYd_DVAXxoH2whzHCwQH8l0euvVPGxOVwIU2mZ_W71GXo3DuzvQf6BM3BLILYIFMk_XEz9vosS919bWiCN4sF3MoI_3uVuVHsL4-p1gxwOch6GqI1zGScyKNRFnBh__1tDxQ9iMzMMTBtd0oEZkM7imi63CiQ3zsz8l6SWTPtcRXkaRF5gC-9jG0VMjlI9j_hqEHs0w-TF0LCQ',
    accentBg: 'bg-[#ffd9e3] dark:bg-[#7d244b]',
    hoverText: 'group-hover:bg-[#9b3e64] group-hover:text-white',
  },
  {
    slug: 'desk-decor',
    title: 'Desk Decor Organizers',
    catalogLabel: 'Desk Organizers & Cups',
    subtitle: 'Rak mini, vas keramik, organizer',
    countLabel: '35+ Item',
    count: 8,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIwlLrX3K5XgnBcvi0r2f_aPcJi7Bq7h2HFKqeEjqqGFGRx8hLF-h2h9ocZlQD6bCsIkqVE6R-47R3mV5D9rJZ1OGQiHQBXtjyGw4nzBuiYY-lXNIwhM991OT23OjTAngk_d6j76z4-vkZyjPJf7Nb7IQxhrsaY_0q-ZWCu5FqDgfNGUc38CCOYXWAIOIpPHrjgMF8_Hfc72YxFQkRFyMaebkzM3SEgi1IDOKnhQ',
    accentBg: 'bg-[#ffe081] dark:bg-[#564500]',
    hoverText: 'group-hover:bg-[#725c00] group-hover:text-white',
  },
  {
    slug: 'gift-sets-pouches',
    title: 'Gift Sets & Pouches',
    catalogLabel: 'Pouch & Gift Hampers',
    subtitle: 'Pouch fluffy, pin enamel, hampers',
    countLabel: '19+ Item',
    count: 5,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjCil433Dy2-CYl8lASCxeaAgQEX-TUtKP3pl2VRJb0fbaRH616tHPgLCTO_WOpF4jA-ogs1Og6eEHwyQoS8YuS62tpmjje0BjZBwj9OVnFg-TC6iviQTJuglUo-ZRzH8lduZdIzGnjyhd-wSEQbxS38yss-cXV65C5VgQBSvhMiQ30bi-sWP5aIkRqwbeYvcG2w9VkV24512gdTsKgtCfAp84fyaNKXenwII-Q',
    accentBg: 'bg-[#d1fae5] dark:bg-[#065f46]',
    hoverText: 'group-hover:bg-emerald-600 group-hover:text-white',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    slug: 'pastel-cloud-daily-planner-2025',
    title: 'Pastel Cloud Daily Planner 2025 (Hardcover Undated Edition)',
    shortTitle: 'Pastel Cloud Daily Planner 2025',
    categorySlug: 'notebooks-journal',
    categoryLabel: 'NOTEBOOK & PLANNER',
    badgeText: 'Diskon 20%',
    badgeStyle: 'discount',
    secondBadgeText: 'Ready Stock',
    price: 68000,
    compareAtPrice: 85000,
    rating: 4.9,
    reviewCount: 128,
    soldCount: 480,
    stock: 24,
    shortSubtitle: 'Hardcover, 192 hal, 100 gsm',
    description:
      'Bikin rutinitas harianmu makin terorganisir dan estetik dengan Pastel Cloud Daily Planner! Menggunakan kertas premium 100gsm ramah fountain pen & brush pen (anti tembus), jilid benang lay-flat 180°, serta bonus 2 lembar stiker die-cut eksklusif Mayurien.',
    highlights: [
      'Kertas Bookpaper Ivory 100 GSM (Tidak Tembus Tinta / Ghosting)',
      'Jilid Jahit Benang Lay-Flat 180° (Nyaman Ditulis di Semua Halaman)',
      'Undated Format — Bisa Mulai Kapan Saja Tanpa Halaman Terbuang',
      'Bonus 2 Lembar Sticker Pack Vinyl Glossy + Pembatas Buku Pita Ganda',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCt7yISYcartzmRL4obBVyImoF4WmLilxHIJoZt1YQbJbKaqIam4P7_mrG0Xfy0WS4CaVoiel588nl7wzcxZJcRZVEURZNTjSf5WpRrN3iZxG3p_KPZ3NuYxLGXjXcvP37Q57rhdvZNgP6BK36m-6MDVUl-FzaMjwVTs_drPAMCL1pJya05jVRJMY7xT7CSixFZnS_8E3kasIiMRDnO8GoZfiiEmfZFi-jsUyceHw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9D8U12O7ik8MhUCmhAVDIs8L8f8tYmzNtgYG3_j2OC2yFE0IKjuwmONSukXTVxjwiLdyS6D8cFWNJKLXYkPScvbIqe0G5o8lUKt2-6oCXF4E5CqP2SNfeRjWYaRu1H7YOm5Cb49YYWSBx_zr5RggdUWi0lpFzSLzaWfXe0DDJiBkBkLjCQ_5Obsyut8uZ4BdYOn_EbpKD8xOaLmGXApJeY52avV738YTQKkNUnS_Q'.replace('BkBk', 'Bk'),
        alt: 'Aesthetic pastel lilac and cream daily planner with subtle gold foil embossed stars',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVvn3PPIAGJKTyXrK3dvaCV3wWG0MKuuRPARni4xfPz26OueI-uFT5c-52FB3tZq5WY7UEbnY4vWeke_6ftF_gMsseHUT-I7QnrE1hs7Y5mgXkhhK2vs3K8wj9kkAK2dV9Uw1mc71I17M6oR43Qg9WQlxjAORXuGE8FcLFtwf_nQKuX3V3PGuhmK4OZTVeM_Zd0LqCNtSMj1lARDJH4o3pY6-GkdpLOX5nVhVSZQ',
        alt: 'Close-up of pastel lilac daily planner hardcover with shimmering gold celestial details',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTlRevoVfMobRE0TKKKwuBc4POgF9pSlKL-C30EsZigrDkEVX7jt3-YdodBbJOBiFaRMNMalXDDMxQpV6gJVGsFI1-Ghp0awNV7LwY7-128bRezz-BLnBDb4GoMu8JvB-gezXa90kNlDyuJZq-mMSL3ZB0KUFp85RT_jRTrP7Ic2BTwjSVGNJ4cM6lAUrD-GcKEfH1TO1iSjzKsgabToU4pogbrqxjk8o9_RPhHw',
        alt: 'Open flat lay view of daily planner showing cream grid pages with pastel highlighters',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-m2K4vcwzxqx8BVd-1pfetp5gJ6AtasD9yf9Kexg6vBT1IXNCYaCSgh6l7LBu3yQYiqNC-QvdOHBj9FoJacFsT_QsbC02t_b0U2UJFCpHAZXlqUy8n3isQsb5OpyQFb9bPQUNTz2PqrhEe2TZEb61KEmXrkHJBZBO6W7aitw46PVBoBtxKNo9jKL60Ee6tWTYN4holUC3ea5McrcqsJlfzgj8LFsPR_B_r73TZQ',
        alt: 'Included free gifts: two adorable glossy sticker sheets with cute cat and cloud stationery illustrations',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQEJFZwpEeZnjBIFzCAc4-UbEibw3196hfD21SBrUGlISqiTuhF-DISfRN3y9aSuVZXSw09aiDdvLg-p45-fKjTMO0IB1z1kJEeUmJIuRipg1pQ8R4AXP3XHVV_tsiZc1RZE7SR4a_TIVxktRm24K5XJH0rAVFDd1ZvVZpYMUOxfUznhzRMRwn5mfLQExG2mbrbrECUyZH3P7LxsEVnFlUavAZXRRF6Kej5GP6iQ',
        alt: 'Charming pastel gift box unboxing packaging with pink crinkle paper',
      },
    ],
    colorVariants: [
      { id: 'lilac-cloud', label: 'Lilac Cloud', colorHex: '#d8b4fe' },
      { id: 'butter-yellow', label: 'Butter Yellow', colorHex: '#fde047' },
      { id: 'baby-blue', label: 'Baby Blue', colorHex: '#93c5fd' },
      { id: 'strawberry-milk', label: 'Strawberry Milk', colorHex: '#f9a8d4' },
    ],
    layoutVariants: [
      'Grid / Kotak-kotak (Favorit)',
      'Dotted / Titik-titik',
      'Lined / Garis Klasik',
    ],
    specs: [
      { label: 'Ukuran Dimensi', value: 'A5 (14.8 cm x 21 cm)' },
      { label: 'Ketebalan Kertas', value: '100 GSM Ivory Smooth Paper' },
      { label: 'Jumlah Halaman', value: '192 Halaman Berwarna Pastel' },
      { label: 'Material Sampul', value: 'Hardcover Faux Leather + Gold Foil' },
      { label: 'Fitur Tambahan', value: 'Kantong Belakang, Pita Ganda, Karet Penutup' },
      { label: 'Berat Produk', value: '380 gram' },
    ],
    isTrending: true,
  },
  {
    id: 'prod-2',
    slug: 'retro-click-gel-pen-set-05mm',
    title: 'Vintage Morandi Gel Pen Set 0.5mm (Pack of 5)',
    shortTitle: 'Retro Click Gel Pen Set 0.5mm',
    categorySlug: 'pens-highlighters',
    categoryLabel: 'PENS & INK',
    badgeText: 'Trending 🔥',
    badgeStyle: 'trending',
    price: 38500,
    rating: 4.8,
    reviewCount: 94,
    soldCount: 320,
    stock: 45,
    stockNote: 'Stok Ready',
    shortSubtitle: 'Isi 5 pcs, quick dry black ink',
    description:
      'Set 5 pulpen gel mekanik bergaya retro Morandi dengan tinta hitam quick-dry 0.5mm yang super mulus dan tidak meluber saat ditimpa highlighter. Grip silikon empuk bikin tangan nggak pegal saat nulis catatan panjang!',
    highlights: [
      'Tinta Quick-Dry 0.5mm — Kering dalam 1 Detik, Aman Ditimpa Highlighter',
      'Bantalan Grip Silikon Ergonomis Anti Pegal',
      '5 Warna Barrel Pastel Morandi dalam 1 Box Mika Estetik',
      'Klip Pegas Lebar — Mudah Dijepit di Sampul Binder atau Notebook Tebal',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAb9oIHVhG6Ku9ihpg7KE3gLFAdXsE0FjUUfhDbok-ndLFMFdw9QxkiGkii3BWD96dG-5TUMfjvbeqeRB-Bih0izDykmoH4QP2-BNvM3wVwy9A91FFiew0vtuj7fOzSCI3Lqd1QI7FuftzSw9xUWu63Qbj0JQ2QpDvoKjKQQkvMD3CniOyT4rdmZhPCkhOV0QpePpiaMvI-C_i-J685gnrcjnmci4GbFBQDwV5SJw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb9oIHVhG6Ku9ihpg7KE3gLFAdXsE0FjUUfhDbok-ndLFMFdw9QxkiGkii3BWD96dG-5TUMfjvbeqeRB-Bih0izDykmoH4QP2-BNvM3wVwy9A91FFiew0vtuj7fOzSCI3Lqd1QI7FuftzSw9xUWu63Qbj0JQ2QpDvoKjKQQkvMD3CniOyT4rdmZhPCkhOV0QpePpiaMvI-C_i-J685gnrcjnmci4GbFBQDwV5SJw',
        alt: 'Retro click gel pen set 0.5mm 5 pieces packaged in cute pastel box',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiCMW5MCFYMldun9FJeJbl9t-y0zZ5ohpvB4bGjCxL2yiJRBZaNyvKvs_ZAed_WUDH862XPUi_vvc0y8DfJDTf6Ak9YTvh2Ga9ZJAh2RXU-GooMymgqEEznfYUNDbey45wVJ70t1njbOE2bOFjg1K5S73d-B9iTdxoFcPFBWvMeCymgH0cQtIJAWJPHhd2GjO_4bu-wOr-3YDeHmqQub6vu7hwCDziEFvy5CTUCQ',
        alt: 'Vintage Morandi color aesthetic gel pens in a neat pack of 5',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI-FdUAo8fSLvZnrb9oksGlr9I6TcURFNDpzD8HRTaLYwHPxpOxyswEztv31HRx33WfhhS3ROaLdurJCwM_zBPopTnONw7l10oDZH4sjkULN9C3vv46SzJgpODuqL71QSojk2qwJuupgFKl1QC6D10sj6jlIjn9MDHI4B5A4kF24kEzLXzKf0crKELaUuVLa5baQKCYgY8qybTeqqTYmu3PPrHR8yKhwrW3MtArw',
        alt: 'Quick-dry 0.5mm pastel barrel gel pens set with soft silicone grip',
      },
    ],
    colorVariants: [
      { id: 'sweet-macaron', label: 'Sweet Macaron (Tinta Hitam)', colorHex: '#f9a8d4' },
      { id: 'vintage-morandi', label: 'Vintage Morandi (Tinta Hitam)', colorHex: '#c4b5fd' },
      { id: 'color-ink', label: 'Pastel Color Ink (Tinta Warna)', colorHex: '#93c5fd' },
    ],
    layoutVariants: ['0.5mm Bullet Tip (Favorit)', '0.38mm Needle Tip'],
    specs: [
      { label: 'Isi Paket', value: '5 Pcs Gel Pen + Box Penyimpanan' },
      { label: 'Ukuran Mata Pena', value: '0.5 mm Fine Point' },
      { label: 'Jenis Tinta', value: 'Quick-Dry Gel Ink (Hitam Pekat)' },
      { label: 'Material Barrel', value: 'ABS Matte + Soft Silicone Grip' },
    ],
    isTrending: true,
  },
  {
    id: 'prod-3',
    slug: 'mini-tulip-ceramic-pen-holder',
    title: 'Mini Tulip Ceramic Pen Holder & Makeup Brush Cup',
    shortTitle: 'Mini Tulip Ceramic Pen Holder',
    categorySlug: 'desk-decor',
    categoryLabel: 'DESK DECOR',
    badgeText: 'Terlaris ⭐',
    badgeStyle: 'bestseller',
    price: 52000,
    rating: 5.0,
    reviewCount: 215,
    soldCount: 510,
    stock: 6,
    stockNote: 'Sisa 6 pcs!',
    shortSubtitle: 'Keramik tebal, warna butter pastel',
    description:
      'Tempat pulpen dan brush makeup berbentuk kuncup bunga tulip dari keramik glasir tebal berkualitas tinggi. Memberikan sentuhan hangat ala studio Korea di sudut meja belajar atau meja riasmu.',
    highlights: [
      'Keramik Porselen Tebal dengan Finishing Glossy Halus',
      'Muat 15-20 Pulpen, Spidol, atau Kuas Makeup',
      'Bagian Bawah Anti-Slip & Mudah Dibersihkan',
      'Termasuk Packaging Kardus + Bubble Wrap Tebal Berlapis (Garansi Utuh)',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCc61fp3tc7Ck50X1xFIIyc5vDm86GUyuM_K32HYN8KEurMFtKWyf6kGFeqdwR-sHRa74r8835IzygDfHXEHWjjdgsmxT1PrZngJKsL8bq8NzHaKzbNLQkhirxy-o7TW92iQD4DLdW6-kb8CodCpCaHQOr0iOQhZD1s7M0kNiQqG4w3608qdrVLiBNFJXy0QFMuNpmt-cvla6m9plwP_EeDiIHX4D4wcvQfd3PtBA',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc61fp3tc7Ck50X1xFIIyc5vDm86GUyuM_K32HYN8KEurMFtKWyf6kGFeqdwR-sHRa74r8835IzygDfHXEHWjjdgsmxT1PrZngJKsL8bq8NzHaKzbNLQkhirxy-o7TW92iQD4DLdW6-kb8CodCpCaHQOr0iOQhZD1s7M0kNiQqG4w3608qdrVLiBNFJXy0QFMuNpmt-cvla6m9plwP_EeDiIHX4D4wcvQfd3PtBA',
        alt: 'Mini tulip ceramic pen holder in pastel butter yellow gloss',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwVh5siNjUX1zIsajwHuv-jH1jC-XYu6qfC1rAKp_ODUkjbwM1Mk0RK26EMY6uKFccaeM4r6f6wJ9J_USF8q2z9BZh1BEg6j5_DJiJCprYWWTo3ECi1ZnpKybE0ylaiXfMtxWIyciEHeQYIhTebfs9IHDm29mGSnQQLRzBt6Bs7kQWTi_C41FV8pFSDqjCi7fNypKgeO5T9ZOSZbpGzIWeI4q1cKvKysyncre-Q',
        alt: 'Handcrafted ceramic tulip flower shaped pastel yellow pen holder cup',
      },
    ],
    colorVariants: [
      { id: 'butter-yellow', label: 'Butter Cream Yellow', colorHex: '#fde047' },
      { id: 'blush-pink', label: 'Blush Petal Pink', colorHex: '#f9a8d4' },
      { id: 'lavender-mist', label: 'Lavender Mist', colorHex: '#d8b4fe' },
    ],
    specs: [
      { label: 'Dimensi', value: 'Diameter 9.5 cm x Tinggi 11 cm' },
      { label: 'Material', value: 'High-Fired Glazed Ceramic' },
      { label: 'Berat', value: '420 gram (Termasuk Box Pengaman)' },
    ],
    isTrending: true,
  },
  {
    id: 'prod-4',
    slug: 'gradient-sticky-notes-tabs',
    title: 'Gradient Sticky Notes & Translucent Index Tabs Set',
    shortTitle: 'Gradient Sticky Notes & Tabs',
    categorySlug: 'notebooks-journal',
    categoryLabel: 'STICKY NOTES & WASHI',
    badgeText: 'Hemat',
    badgeStyle: 'promo',
    price: 22000,
    compareAtPrice: 28000,
    rating: 4.9,
    reviewCount: 310,
    soldCount: 640,
    stock: 80,
    shortSubtitle: 'Transparan waterproof memo',
    description:
      'Memo tempel gradasi pastel dan index tab PET transparan tahan air! Sangat cocok untuk menandai halaman buku teks atau membuat catatan pengingat tanpa menutupi tulisan di bawahnya.',
    highlights: [
      'Material PET Transparan Tahan Air & Tidak Mudah Robek',
      'Perekat Kuat namun Bisa Dilepas-Pasang Tanpa Merusak Kertas',
      'Kombinasi Warna Gradasi Senja & Awan Pastel',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYjRJ9_DUdeaR-URL5hO8id-jxOVpF4RcIIR0oCP9sUQHS4q1_Me0jnTMfIaahxo1HHZlIw89ziKg5rElJXZNQ4lQ5hQP0jXMJl-LiD9xE6ZT5gWg5xHmcAqB8fyQ0XSqDF7hoFNwwWtRT4xLXcf5VvYKAcQNYoNPmgQ2a48zwI_UCIofCGQvdIGA2sN-hehhgRmtmgAZpIATrwiRPIcgaN13EWulGmOqptpQCg',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYjRJ9_DUdeaR-URL5hO8id-jxOVpF4RcIIR0oCP9sUQHS4q1_Me0jnTMfIaahxo1HHZlIw89ziKg5rElJXZNQ4lQ5hQP0jXMJl-LiD9xE6ZT5gWg5xHmcAqB8fyQ0XSqDF7hoFNwwWtRT4xLXcf5VvYKAcQNYoNPmgQ2a48zwI_UCIofCGQvdIGA2sN-hehhgRmtmgAZpIATrwiRPIcgaN13EWulGmOqptpQCg',
        alt: 'Set of aesthetic gradient sticky notes with translucent pastel colors',
      },
    ],
    colorVariants: [
      { id: 'cotton-candy', label: 'Cotton Candy Sky', colorHex: '#f9a8d4' },
      { id: 'matcha-breeze', label: 'Matcha Breeze', colorHex: '#86efac' },
    ],
    specs: [
      { label: 'Isi per Set', value: '200 Lembar (Memo Pad + Index Tabs)' },
      { label: 'Bahan', value: 'Translucent Waterproof PET + Smooth Paper' },
    ],
    isTrending: true,
  },
  {
    id: 'prod-5',
    slug: 'botanical-washi-tape-box-set',
    title: 'Botanical Washi Tape Box (Set of 5 Rolls)',
    shortTitle: 'Botanical Washi Tape Box (Set)',
    categorySlug: 'notebooks-journal',
    categoryLabel: 'STICKY NOTES & WASHI',
    badgeText: 'Baru!',
    badgeStyle: 'new',
    price: 32000,
    rating: 5.0,
    reviewCount: 18,
    soldCount: 85,
    stock: 32,
    shortSubtitle: 'Lebar 15mm x 5m roll',
    description:
      'Set 5 roll washi tape motif bunga botanikal dan grid pastel dengan aksen gold foil lembut. Mudah disobek dengan tangan dan tidak meninggalkan bekas lem.',
    highlights: [
      'Isi 5 Roll Motif Berbeda dalam 1 Box Koleksi',
      'Kertas Washi Jepang Asli — Mudah Disobek Tanpa Gunting',
      'Aksen Gold Foil di Beberapa Roll Pilihan',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCf4KQ872h0kE41ZsLdt_67AjyNgZbthWkmKigC6kM4TE3UA2x960yQhbq1elgx3jCEFwF5hrGTUVFohL6sRvXpQWDg99HYWAEazFFuBPDIaPX0KDb4gMRWEQ0CHo1ISymx2UbrQKPh77-kw-DEb6AOpISl9jSwVsowpEa4qnYBX3qCiALVWxi8kEzjEp_Gg6_DzQoTEchI1rx7FVp3ZfIZG20ZStx3s6xvu7M0yw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf4KQ872h0kE41ZsLdt_67AjyNgZbthWkmKigC6kM4TE3UA2x960yQhbq1elgx3jCEFwF5hrGTUVFohL6sRvXpQWDg99HYWAEazFFuBPDIaPX0KDb4gMRWEQ0CHo1ISymx2UbrQKPh77-kw-DEb6AOpISl9jSwVsowpEa4qnYBX3qCiALVWxi8kEzjEp_Gg6_DzQoTEchI1rx7FVp3ZfIZG20ZStx3s6xvu7M0yw',
        alt: 'Set of 5 pastel washi tapes with botanical flower patterns',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA21QzdzHbcLrqMDhSyFaLKg6N19PRnbpwHj1ugEILRqYN2IwRYtGGPDKsDFLJqfazhjzCJtvrU6yqgeZ7N47KhAio_is_UpdPhyl1cEtquWPrFURhAQWjbENBctTIQjmghe_d8PEIDpssXRrkxAgAPXQP22n184lvXOEyqwTA2qqIqfFrj1umMBxxDy0pWnIWdNS7hedpyDXzOFK7K68ob5_hNHqnrDGgVsBXFlA',
        alt: 'Charming roll of grid aesthetic washi tape and cute stamp stickers',
      },
    ],
    colorVariants: [
      { id: 'spring-garden', label: 'Spring Garden', colorHex: '#86efac' },
      { id: 'sakura-foil', label: 'Sakura Blossom (Foil)', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Ukuran Roll', value: 'Lebar 15 mm x Panjang 5 meter (x 5 Roll)' },
      { label: 'Material', value: 'Japanese Washi Paper' },
    ],
    isNewArrival: true,
  },
  {
    id: 'prod-6',
    slug: 'cloud-mini-safety-scissors',
    title: 'Cloud Mini Safety Scissors (Portable Aesthetic Cutter)',
    shortTitle: 'Cloud Mini Safety Scissors',
    categorySlug: 'desk-decor',
    categoryLabel: 'STATIONERY',
    badgeText: 'Baru!',
    badgeStyle: 'new',
    price: 26500,
    rating: 4.8,
    reviewCount: 25,
    soldCount: 112,
    stock: 28,
    shortSubtitle: 'Gunting mini portable aesthetic',
    description:
      'Gunting mini berbentuk awan gemas dengan tutup pelindung aman! Ukurannya mungil sehingga muat dimasukkan ke dalam pencil pouch untuk memotong stiker dan washi tape.',
    highlights: [
      'Pisau Stainless Steel Anti-Lengket (Tidak Lengket Saat Gunting Stiker)',
      'Dilengkapi Tutup Pelindung Awan yang Aman Dibawa di Pouch',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5IlBby9Z3uLY7Ch542t1v8T3_XmpDMeOvOlmS4IaKYqxc2EAFEwbOMrye5JGvKPFxMdZM-UDx7JRgM_ypJeGUdaIQbN6IxewL6QgtAVsJht2XYJl9sHQto2zeMJU_Rf7wzu2YfFqULgiqQ-jMVZ_BEhunPMFytD0PtFoMveBGrn-UdGuQ12VtxUBOO2wfN4Vr9m2SmA0GUV5Tf6ARSJWT9cvfabHV5r6dkKSV2A',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5IlBby9Z3uLY7Ch542t1v8T3_XmpDMeOvOlmS4IaKYqxc2EAFEwbOMrye5JGvKPFxMdZM-UDx7JRgM_ypJeGUdaIQbN6IxewL6QgtAVsJht2XYJl9sHQto2zeMJU_Rf7wzu2YfFqULgiqQ-jMVZ_BEhunPMFytD0PtFoMveBGrn-UdGuQ12VtxUBOO2wfN4Vr9m2SmA0GUV5Tf6ARSJWT9cvfabHV5r6dkKSV2A',
        alt: 'Chubby pastel cloud shaped scissors with safe ceramic rounded tip',
      },
    ],
    colorVariants: [
      { id: 'sky-blue', label: 'Sky Blue', colorHex: '#93c5fd' },
      { id: 'cotton-pink', label: 'Cotton Pink', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Panjang', value: '11.5 cm x 5.5 cm' },
      { label: 'Material', value: 'ABS Matte + Teflon-Coated Stainless Blade' },
    ],
    isNewArrival: true,
  },
  {
    id: 'prod-7',
    slug: 'matcha-corduroy-pencil-pouch',
    title: 'Matcha Corduroy Pencil Pouch (Large Capacity)',
    shortTitle: 'Matcha Corduroy Pencil Pouch',
    categorySlug: 'gift-sets-pouches',
    categoryLabel: 'POUCH & BAG',
    badgeText: 'Limited',
    badgeStyle: 'limited',
    price: 48000,
    rating: 4.9,
    reviewCount: 42,
    soldCount: 150,
    stock: 14,
    shortSubtitle: 'Kapasitas besar muat 30+ pen',
    description:
      'Tempat pensil berbahan korduroi lembut dengan warna matcha pastel & cream. Dilengkapi sekat jaring bagian dalam yang muat hingga 35 pulpen, penggaris 15cm, dan penghapus.',
    highlights: [
      'Bahan Corduroy Premium Lembut & Bisa Dicuci',
      'Kapasitas Ekstra Luas (Muat 30-35 Pulpen + Kalkulator Mini)',
      'Resleting Metal Halus dengan Gantungan Daisy',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwLT1c1-LbVe8OwDkmF7v28yOUnavBV9Ue8uH2XDGcwo_ORvyIq26yf0MVP4DXy3_3U0Wc_tCuHd6a8IT0kcGAou_i1iLfMumeY4zmXWyNLiO8myOaIc_GUbEOI6yv5-62SmLe3ku6ZrMY-DiJ6CXKdZoEJ7-35MhaiX-AZ87BkIc-JqgLwpKmATpIKIetpotz2TOjp1dVcwku1zmtS85srEDLaVkQ6EnPvbz6tw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwLT1c1-LbVe8OwDkmF7v28yOUnavBV9Ue8uH2XDGcwo_ORvyIq26yf0MVP4DXy3_3U0Wc_tCuHd6a8IT0kcGAou_i1iLfMumeY4zmXWyNLiO8myOaIc_GUbEOI6yv5-62SmLe3ku6ZrMY-DiJ6CXKdZoEJ7-35MhaiX-AZ87BkIc-JqgLwpKmATpIKIetpotz2TOjp1dVcwku1zmtS85srEDLaVkQ6EnPvbz6tw',
        alt: 'Plush corduroy aesthetic pencil pouch case in soft matcha and cream',
      },
    ],
    colorVariants: [
      { id: 'matcha-cream', label: 'Matcha Cream', colorHex: '#86efac' },
      { id: 'taro-milk', label: 'Taro Milk', colorHex: '#d8b4fe' },
    ],
    specs: [
      { label: 'Ukuran', value: '20 cm x 8.5 cm x 7.5 cm' },
      { label: 'Bahan', value: 'Soft Corduroy + Inner Polyester Lining' },
    ],
    isNewArrival: true,
  },
  {
    id: 'prod-8',
    slug: 'aesthetic-clear-stamp-ink-set',
    title: 'Aesthetic Clear Stamp & Mini Pastel Ink Pad Set',
    shortTitle: 'Aesthetic Clear Stamp & Ink Set',
    categorySlug: 'notebooks-journal',
    categoryLabel: 'NOTEBOOK & BINDER',
    badgeText: 'Baru!',
    badgeStyle: 'new',
    price: 36000,
    rating: 5.0,
    reviewCount: 11,
    soldCount: 64,
    stock: 19,
    shortSubtitle: 'Stempel silikon journal unik',
    description:
      'Set stempel silikon transparan lengkap dengan blok akrilik dan 3 mini ink pad warna pastel untuk menghias header tanggal dan tracker di bullet journal-mu!',
    highlights: [
      'Transparan 100% — Posisi Stempel Sangat Presisi di Kertas',
      'Sudah Termasuk Acrylic Block + 3 Warna Mini Ink Pad',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChGacA_Fbh4dTBY3hmgAC7GJZ0gn3ZrlrqiP58HmqS-uLbIzP0_PRwADtv2wLeJ6nQCsAZT_gDW0wU4tw8fTkmf5pNfuYAsM98BSwPJ54B8pVZq9-jwQJ4-ob5EV9IpS7qg7CQAiOQk90kAhpQvJABqq1xp2R0caLhEDOxW1S9RsRhqxZrSLdjxba_fv1MNzhL3HeKxcdtSFxvb85rKDrPd9Dv3MJn_cjyr2QzXg',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChGacA_Fbh4dTBY3hmgAC7GJZ0gn3ZrlrqiP58HmqS-uLbIzP0_PRwADtv2wLeJ6nQCsAZT_gDW0wU4tw8fTkmf5pNfuYAsM98BSwPJ54B8pVZq9-jwQJ4-ob5EV9IpS7qg7CQAiOQk90kAhpQvJABqq1xp2R0caLhEDOxW1S9RsRhqxZrSLdjxba_fv1MNzhL3HeKxcdtSFxvb85rKDrPd9Dv3MJn_cjyr2QzXg',
        alt: 'Acrylic transparent stamp block set with mini pastel ink pads',
      },
    ],
    colorVariants: [
      { id: 'daily-tracker', label: 'Daily Tracker Set', colorHex: '#fde047' },
      { id: 'floral-frames', label: 'Botanical Frames', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Isi Paket', value: '1 Sheet Clear Stamp + 1 Acrylic Block + 3 Ink Pads' },
      { label: 'Material', value: 'Food-Grade Silicone + Clear Acrylic' },
    ],
    isNewArrival: true,
  },
  // Additional Catalog Products matching code__8__fb0be591.html
  {
    id: 'prod-9',
    slug: 'aesthetic-acrylic-desk-organizer',
    title: 'Aesthetic 3-Tier Clear Acrylic Desk Stationery Organizer',
    shortTitle: 'Aesthetic Acrylic Desk Organizer',
    categorySlug: 'desk-decor',
    categoryLabel: 'DESK DECOR',
    badgeText: 'Populer',
    badgeStyle: 'promo',
    price: 89000,
    rating: 4.9,
    reviewCount: 89,
    soldCount: 89,
    stock: 15,
    shortSubtitle: '3 laci akrilik bening serbaguna',
    description:
      'Rak organizer meja 3 tingkat dari akrilik bening kristal untuk menata koleksi washi tape, stiker, pulpen, dan memo pad agar selalu rapi dan estetik.',
    highlights: [
      'Akrilik Kristal Tebal 4mm Anti Menguning',
      'Laci Tarik Halus dengan Gagang Bulat Transparan',
      'Bagian Atas Terbuka untuk Washi Tape & Pen Holder',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8kqHgXCu6qG4f7Vh0z4fKWrBtQCYfd1x6uAhqF-Tcnp6za2A00NDM4r6XfzqQJMA9V3DNdsH9VB6HEfupbripWT7eqyCRnoXwkCNQ1O8iC1emIMYm-7Fz2Wb2--v40k7Ui7fR2_oPlHi-NudwsE6G3Y6y8AXaaFl_GuBQyViP4118SuiuS0MohQoWee8D_rt4ZTxCS_V3bN4gqFUFRtwBdyTlGPWO8fNu9Y6kiQ',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8kqHgXCu6qG4f7Vh0z4fKWrBtQCYfd1x6uAhqF-Tcnp6za2A00NDM4r6XfzqQJMA9V3DNdsH9VB6HEfupbripWT7eqyCRnoXwkCNQ1O8iC1emIMYm-7Fz2Wb2--v40k7Ui7fR2_oPlHi-NudwsE6G3Y6y8AXaaFl_GuBQyViP4118SuiuS0MohQoWee8D_rt4ZTxCS_V3bN4gqFUFRtwBdyTlGPWO8fNu9Y6kiQ',
        alt: 'Clear modern 3 tier acrylic desk stationery organizer',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZBzu-wR8qCZwVaQUCOL2_0UPISqHkUXycOISutw5pwdCEk4BPyXwN2svFumqWo9-GqOgPTiWFRAdKSVAUF1-RWEHAsfpX_SfC8TJcPfSCovtpgSNvQmkb3Vl0AdMjrldhooOB1pQxXqHdMEa2NtkYLoocxUdF5_-GYhlvRCmfwM4Kzl0jgu6-M3RoHMu5jkkZJtcgZbNRYKDzf5r4tUdNvxSOwQ9x-TTDxMlbvA',
        alt: 'Minimalist soft pink desk organizer with sliding mini drawers',
      },
    ],
    colorVariants: [
      { id: 'crystal-clear', label: 'Crystal Clear', colorHex: '#e2e8f0' },
      { id: 'rose-quartz', label: 'Rose Pink Drawer', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Ukuran', value: '18 cm x 13 cm x 15 cm' },
      { label: 'Material', value: 'Premium Cast Acrylic 4mm' },
    ],
  },
  {
    id: 'prod-10',
    slug: 'cute-bear-silicone-cable-clip',
    title: 'Cute Bear Silicone Cable Winder & Desk Cord Holder (Set of 4)',
    shortTitle: 'Cute Bear Silicone Cable Clip',
    categorySlug: 'desk-decor',
    categoryLabel: 'ACCESSORIES',
    price: 18000,
    rating: 4.7,
    reviewCount: 112,
    soldCount: 214,
    stock: 50,
    shortSubtitle: 'Pengikat kabel silikon beruang isi 4',
    description:
      'Klip silikon beruang gemas untuk merapikan kabel charger HP, laptop, dan earphone di pinggir meja belajar supaya tidak berantakan.',
    highlights: [
      'Isi 4 Pcs Warna Pastel dalam 1 Kemasan',
      'Silikon Lentur + Perekat 3M Kuat Tanpa Bekas',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuC95yFEmtdDqRNUSOLToynv0gVcmbwrwO8DARJ95b_FTwsmB8fdcyXPdvV-CROv1RqxhZr5_mnlmexbiuC-bopNjQKK7JQUErF8kM3THI56afE98BV702G1uPOSLv6S-tgh6aQ0gipngnD79ZTCwWsll30A7F6B5pEdxl0eAo9JnM_doKvs4WXugtZhiWFqinj-FssDz3qGsNXnVu_JQqoGP0VA0cYALJ1KOOog',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuC95yFEmtdDqRNUSOLToynv0gVcmbwrwO8DARJ95b_FTwsmB8fdcyXPdvV-CROv1RqxhZr5_mnlmexbiuC-bopNjQKK7JQUErF8kM3THI56afE98BV702G1uPOSLv6S-tgh6aQ0gipngnD79ZTCwWsll30A7F6B5pEdxl0eAo9JnM_doKvs4WXugtZhiWFqinj-FssDz3qGsNXnVu_JQqoGP0VA0cYALJ1KOOog',
        alt: 'Cute teddy bear shaped soft silicone cable winder clip',
      },
    ],
    colorVariants: [
      { id: 'pink-mint-mix', label: 'Pink & Mint Mix (4 pcs)', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Isi Paket', value: '4 Pcs Bear Clips' },
      { label: 'Bahan', value: 'Soft Silicone + 3M Adhesive' },
    ],
  },
  {
    id: 'prod-11',
    slug: 'macaron-pastel-correction-tape',
    title: 'Macaron Pastel Silent Correction Tape 12m',
    shortTitle: 'Macaron Pastel Correction Tape',
    categorySlug: 'pens-highlighters',
    categoryLabel: 'STATIONERY',
    price: 15500,
    rating: 4.8,
    reviewCount: 95,
    soldCount: 95,
    stock: 60,
    shortSubtitle: 'Tip-ex pita silent 12 meter',
    description:
      'Correction tape warna pastel macaron dengan mekanisme roda senyap (silent gear) dan pita warna ivory cream yang menyatu sempurna dengan kertas bookpaper/journal.',
    highlights: [
      'Pita Panjang 12 Meter x Lebar 5 mm',
      'Warna Pita Natural Cream / White yang Langsung Kering',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqaoAHPCrIW1gs4JhgGYnl6Dpu5-BkPTEO_ika_85vJ61dTd15nh-ZDJrJ3bUEy7gR-z4S22qB9p8tCHKi60R4V_l29xDj5oiox4csC_ttiOGvglIrn40QUHfHnR0jriCx9FmA9VeOGXI5tqtu6wZA4uxvtHUbJ9gFHQ1iF4VBMhoLAOv2UqkiwxSmGG1qZOu1DgDCBt_FpMcIoAEZnERkKQjKZ1k_8t5w3NDJSw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqaoAHPCrIW1gs4JhgGYnl6Dpu5-BkPTEO_ika_85vJ61dTd15nh-ZDJrJ3bUEy7gR-z4S22qB9p8tCHKi60R4V_l29xDj5oiox4csC_ttiOGvglIrn40QUHfHnR0jriCx9FmA9VeOGXI5tqtu6wZA4uxvtHUbJ9gFHQ1iF4VBMhoLAOv2UqkiwxSmGG1qZOu1DgDCBt_FpMcIoAEZnERkKQjKZ1k_8t5w3NDJSw',
        alt: 'Macaron colored compact correction tape applicator',
      },
    ],
    colorVariants: [
      { id: 'sky-macaron', label: 'Sky Blue Macaron', colorHex: '#93c5fd' },
      { id: 'lilac-macaron', label: 'Lilac Macaron', colorHex: '#d8b4fe' },
    ],
    specs: [
      { label: 'Panjang Pita', value: '12 Meter x 5 mm' },
      { label: 'Fitur', value: 'Silent Roller + Tutup Pelindung Flip' },
    ],
  },
  {
    id: 'prod-12',
    slug: 'illustrated-hardcover-botanical-journal',
    title: 'Illustrated Hardcover Botanical Diary & Bullet Journal',
    shortTitle: 'Illustrated Hardcover Journal',
    categorySlug: 'notebooks-journal',
    categoryLabel: 'NOTEBOOK & BINDER',
    badgeText: 'Promo Spesial',
    badgeStyle: 'promo',
    price: 75000,
    compareAtPrice: 90000,
    rating: 5.0,
    reviewCount: 67,
    soldCount: 67,
    stock: 18,
    shortSubtitle: 'Full color illustrated pages 120gsm',
    description:
      'Buku jurnal hardcover dengan ilustrasi bunga dan kafe manis di setiap sudut halaman. Kertas 120gsm tebal sangat cocok untuk watercolor tipis, brush lettering, dan scrapbooking.',
    highlights: [
      'Ilustrasi Full-Color Berbeda di Setiap Spread Halaman',
      'Kertas Tebal 120 GSM Aman untuk Cat Air Ringan & Brush Pen',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAegdFwu-KsQjfLHxSjZk8yiWvK-qAJh4rpe5jrDhj0iTi9kpgxcMrE64ukrv8gXYv9Z0wSond8yiYrEb54JaUwFnIjEyuphJsFXCEKbmBmjBNcwavKQRGtU503etAlpCiws9TpqmAu_U0N6wGu69n1XPOoLu3eLSaX7I8gOreWSmY5cBGw79eyzv1mKDmFfnDKm_oWVjDJ323ueHSKSJch3IOEABjOcm7kfn3-yw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAegdFwu-KsQjfLHxSjZk8yiWvK-qAJh4rpe5jrDhj0iTi9kpgxcMrE64ukrv8gXYv9Z0wSond8yiYrEb54JaUwFnIjEyuphJsFXCEKbmBmjBNcwavKQRGtU503etAlpCiws9TpqmAu_U0N6wGu69n1XPOoLu3eLSaX7I8gOreWSmY5cBGw79eyzv1mKDmFfnDKm_oWVjDJ323ueHSKSJch3IOEABjOcm7kfn3-yw',
        alt: 'Illustrated dreamy starry hardcover diary notebook',
      },
    ],
    colorVariants: [
      { id: 'sweet-blooms', label: 'Sweet Blooms & Brews', colorHex: '#fde047' },
    ],
    specs: [
      { label: 'Ukuran', value: 'A5 (14.5 cm x 21 cm)' },
      { label: 'Kertas', value: '120 GSM Watercolor-Friendly Smooth Paper' },
    ],
  },
  {
    id: 'prod-13',
    slug: 'retro-aesthetic-canvas-daisy-pouch',
    title: 'Retro Aesthetic Multi-Zipper Canvas Daisy Pencil Pouch',
    shortTitle: 'Retro Aesthetic Canvas Pouch',
    categorySlug: 'gift-sets-pouches',
    categoryLabel: 'POUCH & BAG',
    price: 42000,
    rating: 4.9,
    reviewCount: 180,
    soldCount: 180,
    stock: 22,
    shortSubtitle: 'Pouch kanvas sulam bunga daisy',
    description:
      'Pencil case kanvas tebal warna broken white dengan bordir bunga daisy timbul 3D. Memiliki kompartemen depan bukaan lebar sehingga mudah mengambil alat tulis favoritmu.',
    highlights: [
      'Bordir Bunga Daisy 3D Timbul yang Rapi & Estetik',
      'Kanvas Cotton 12oz Kuat & Tahan Lama',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM59PoujRhidYx76XRbZ12Ah3un4LIaTvd075LFeNZy1DfO35TbnIHGniAgZ6_FISKvjJVWvZlglBkxua33m_VLhtJrt4QIUMsX00fsIqPIFcrOocr9DZqzNwZuXjcAHV66CVNvitBQHuVXTZiw8tCdwtJ1MJfi7Ueip-t9iYvFLthCNRzqjUiD87Ab1zkgvKjqV-O4JFJa_EIdL2msGERcNYKfwkwSe4PUmQcbA',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM59PoujRhidYx76XRbZ12Ah3un4LIaTvd075LFeNZy1DfO35TbnIHGniAgZ6_FISKvjJVWvZlglBkxua33m_VLhtJrt4QIUMsX00fsIqPIFcrOocr9DZqzNwZuXjcAHV66CVNvitBQHuVXTZiw8tCdwtJ1MJfi7Ueip-t9iYvFLthCNRzqjUiD87Ab1zkgvKjqV-O4JFJa_EIdL2msGERcNYKfwkwSe4PUmQcbA',
        alt: 'Retro aesthetic multi-zipper canvas pencil case pouch',
      },
    ],
    colorVariants: [
      { id: 'cream-daisy', label: 'Cream Embroidery Daisy', colorHex: '#fef3c7' },
    ],
    specs: [
      { label: 'Ukuran', value: '21 cm x 9 cm x 6 cm' },
      { label: 'Bahan', value: '12oz Heavy Cotton Canvas' },
    ],
  },
  {
    id: 'prod-14',
    slug: 'pastel-highlighter-set-6-colors',
    title: 'Pastel Soft Chisel Dual-Tip Highlighter Set (6 Colors)',
    shortTitle: 'Pastel Highlighter Set (6 Colors)',
    categorySlug: 'pens-highlighters',
    categoryLabel: 'MARKERS & PENS',
    price: 34000,
    rating: 4.8,
    reviewCount: 312,
    soldCount: 312,
    stock: 40,
    shortSubtitle: '6 warna pastel lembut ramah mata',
    description:
      'Set 6 stabilo warna pastel lembut yang ramah di mata saat membaca rangkuman pelajaran. Memiliki ujung chisel fleksibel untuk menggarisbawahi maupun mewarnai judul catatan.',
    highlights: [
      '6 Warna Soft Pastel (Lemon, Peach, Mint, Lilac, Sky Blue, Rose)',
      'Tinta Water-Based Cepat Kering & Tidak Tembus Kertas',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtxa7-mQ66HenHHdArm7wOviKNczHVQrSaIZihK3MJp4h-1PjfvWF8xnT3Ov7CXK1_Ph4TMgNnq0G39jLxqBmfga66eARuoREk15AtZxWPunEzJHu6HaEGTsSGELrueWqDleRBGBY-3vYc8LuZLeVBF23bCBL0TW-eflycyRi-dTFW7PmfNJJfhT9ruYTTgmu-WKfxMe8EHtLpPWZUUK7WdNsSzeeLUb8q_yyxlw',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtxa7-mQ66HenHHdArm7wOviKNczHVQrSaIZihK3MJp4h-1PjfvWF8xnT3Ov7CXK1_Ph4TMgNnq0G39jLxqBmfga66eARuoREk15AtZxWPunEzJHu6HaEGTsSGELrueWqDleRBGBY-3vYc8LuZLeVBF23bCBL0TW-eflycyRi-dTFW7PmfNJJfhT9ruYTTgmu-WKfxMe8EHtLpPWZUUK7WdNsSzeeLUb8q_yyxlw',
        alt: 'Pack of 6 aesthetic pastel chisel tip highlighters',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiCWa-DeGMli4CiDct9hROFWv3nYMK1g-gi_wQf0ja7z8KauBZnDQ4BGMPInWnvM3PB7u_-WBSlzv8eZg3_24sIBhq-V6li-M0maURpxaeMdfx4-U-uWvNuB4T7PYzAE0nHh66h9zG5kKEkZKR-IIONvIi7XqxE5HsvgCBsmN3WGB8Do9k0YPa188W5xOLR7flXAs_hiH1CH0kjIJ_MD36dRk4kYOyGVDHNsUOrw',
        alt: 'Set of 6 pastel aesthetic dual-tip highlighters in transparent case',
      },
    ],
    colorVariants: [
      { id: 'macaron-6', label: 'Macaron 6 Colors', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Isi Paket', value: '6 Pcs Pastel Highlighters' },
      { label: 'Ujung Tip', value: '4mm Soft Chisel + 1mm Fine Bullet' },
    ],
  },
  // Special items referenced in Hero, Checkout & Order Confirmation
  {
    id: 'prod-15',
    slug: 'pastel-journal-kit-curated-box',
    title: 'Pastel Journal Kit — Curated Stationery Gift Box',
    shortTitle: 'Pastel Journal Kit',
    categorySlug: 'gift-sets-pouches',
    categoryLabel: 'POUCH & BAG',
    badgeText: 'Best Seller!',
    badgeStyle: 'bestseller',
    price: 125000,
    compareAtPrice: 147000,
    rating: 5.0,
    reviewCount: 164,
    soldCount: 410,
    stock: 12,
    shortSubtitle: 'Paket lengkap jurnal + washi + stiker + pen',
    description:
      'Hampers spesial siap kirim berisi 1 Hardcover Journal A5, 5 roll Washi Tape Pastel, 1 set Gel Pen, Sticky Notes, dan kartu ucapan tulisan tangan gratis!',
    highlights: [
      'Sudah Termasuk Gift Box Pita Satin & Kartu Ucapan Custom',
      'Hemat Rp 22.000 Dibanding Beli Satuan',
    ],
    imageUrl: PROMO_GIFT_BOX_IMG,
    gallery: [
      {
        url: PROMO_GIFT_BOX_IMG,
        alt: 'Charming pastel curated stationery gift box',
      },
      {
        url: HERO_WORKSPACE_IMG,
        alt: 'Playful pastel workspace scene with hardcover pastel lilac bullet journal',
      },
    ],
    colorVariants: [
      { id: 'lilac-edition', label: 'Lilac Dream Edition', colorHex: '#d8b4fe' },
      { id: 'peach-blossom', label: 'Peach Blossom Edition', colorHex: '#f9a8d4' },
    ],
    specs: [
      { label: 'Isi Hampers', value: 'Journal A5 + 5 Washi + 3 Gel Pen + 4 Sticker Sheets + Memo' },
      { label: 'Kemasan', value: 'Hardbox Eksklusif + Pita + Double Bubble Wrap' },
    ],
  },
  {
    id: 'prod-16',
    slug: 'retro-tv-sticky-note-dispenser',
    title: 'Retro TV Sticky Note Dispenser & Desk Frame',
    shortTitle: 'Retro TV Sticky Note Dispenser',
    categorySlug: 'desk-decor',
    categoryLabel: 'DESK DECOR',
    badgeText: 'Unik ✨',
    badgeStyle: 'new',
    price: 32000,
    rating: 4.9,
    reviewCount: 54,
    soldCount: 140,
    stock: 20,
    shortSubtitle: 'Tempat sticky notes bentuk TV retro',
    description:
      'Dispenser sticky notes berbentuk televisi retro mini yang bikin meja belajarmu makin estetik! Sudah termasuk 1 pad memo 80 lembar di dalamnya.',
    highlights: [
      'Muat Semua Ukuran Sticky Notes Standar 7.6 x 7.6 cm',
      'Bisa Dipakai Sebagai Bingkai Foto Polaroid Mini di Meja',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBi3TuYfKp0F96qGM310kShnhSahKQfn7bAJ2IlfsI76CdXop8ycLIv00rX_bDoUSgoEYw9dmPnLsaTYhWPxuQtS-DkjXbl9UiMbs0evba32IwaqvLBxYq5G69ac1G2k2Z2Hh_cWDAF_mALcmLlVovKTPCcTM6DPekCfs8s734sJnEAC2wfEPaBCV_eZy0TvdG2j3uX9rEoUFx5pWJL9An9lSsjQEFN9vymYy1F0Q',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi3TuYfKp0F96qGM310kShnhSahKQfn7bAJ2IlfsI76CdXop8ycLIv00rX_bDoUSgoEYw9dmPnLsaTYhWPxuQtS-DkjXbl9UiMbs0evba32IwaqvLBxYq5G69ac1G2k2Z2Hh_cWDAF_mALcmLlVovKTPCcTM6DPekCfs8s734sJnEAC2wfEPaBCV_eZy0TvdG2j3uX9rEoUFx5pWJL9An9lSsjQEFN9vymYy1F0Q',
        alt: 'Retro TV Sticky Dispenser',
      },
    ],
    colorVariants: [
      { id: 'lilac-tv', label: 'Lilac Retro TV', colorHex: '#d8b4fe' },
      { id: 'cream-tv', label: 'Cream Vanilla TV', colorHex: '#fef3c7' },
    ],
    specs: [
      { label: 'Ukuran', value: '9.5 cm x 9 cm x 4.5 cm' },
      { label: 'Bonus', value: 'Termasuk 1 Pad Sticky Notes Pastel' },
    ],
  },
];

export const PRODUCT_REVIEWS: ProductReview[] = [
  {
    id: 'rev-1',
    author: 'Nadia Putri',
    avatarInitials: 'NP',
    rating: 5,
    date: '2 hari lalu',
    variantPurchased: 'Lilac Cloud • Grid / Kotak-kotak',
    comment:
      'Sumpah gemes banget aslinya!! 😭💜 Kertasnya beneran tebel 100gsm, aku pake brush pen Tombow sama sekali nggak tembus ke halaman belakang. Dapat freebies stiker kucing awan juga dari Min-Mayu!',
    helpfulCount: 24,
  },
  {
    id: 'rev-2',
    author: 'Clarissa Aurelia',
    avatarInitials: 'CA',
    rating: 5,
    date: '1 minggu lalu',
    variantPurchased: 'Butter Yellow • Dotted / Titik-titik',
    comment:
      'Packaging-nya super niat pakai kertas tisu pink dan bubble wrap berlapis, jadi ujung hardcover-nya mulus 100% sampai di Bandung. Jilidnya bisa dibuka rata 180 derajat, enak banget buat journaling.',
    helpfulCount: 19,
  },
  {
    id: 'rev-3',
    author: 'Salsabila Zahra',
    avatarInitials: 'SZ',
    rating: 5,
    date: '2 minggu lalu',
    variantPurchased: 'Strawberry Milk • Grid / Kotak-kotak',
    comment:
      'Udah repeat order ke-3 kalinya di MayurienShop! Warna pink-nya soft pastel, foil bintang emasnya kelihatan mewah banget. Bakal beli lagi buat kado ulang tahun sahabat.',
    helpfulCount: 15,
  },
];

export interface ShippingOption {
  id: string;
  name: string;
  badgeText: string;
  badgeColor: string;
  eta: string;
  price: number;
  icon: string;
}

export const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: 'jnt-regular',
    name: 'J&T Express Regular',
    badgeText: 'Termurah',
    badgeColor: 'bg-[#ffd9e3] text-[#7c274c] dark:bg-[#7d244b] dark:text-[#ffd9e3]',
    eta: 'Estimasi tiba 1–2 hari kerja',
    price: 12000,
    icon: 'local_shipping',
  },
  {
    id: 'sicepat-best',
    name: 'SiCepat BEST Next Day',
    badgeText: 'Besok Tiba',
    badgeColor: 'bg-[#eaddff] text-[#4f348d] dark:bg-[#4f348d] dark:text-[#eaddff]',
    eta: 'Garansi 24 jam sampai di tujuan',
    price: 18000,
    icon: 'bolt',
  },
  {
    id: 'gosend-instant',
    name: 'GoSend / Grab Instant',
    badgeText: 'Same Day',
    badgeColor: 'bg-[#ffe081] text-[#564500] dark:bg-[#564500] dark:text-[#ffe081]',
    eta: 'Tiba 3–4 jam setelah diproses',
    price: 25000,
    icon: 'two_wheeler',
  },
];

export interface PaymentOption {
  id: string;
  name: string;
  badgeText?: string;
  subtitle: string;
  rightLabel?: string;
  icon: string;
}

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'qris',
    name: 'QRIS Instant',
    badgeText: 'Bebas Biaya Admin',
    subtitle: 'GoPay, OVO, ShopeePay, DANA, BCA Mobile',
    icon: 'qr_code_scanner',
  },
  {
    id: 'va',
    name: 'Virtual Account Otomatis',
    subtitle: 'BCA, Mandiri, BNI, BRI, Permata',
    rightLabel: 'Instan 24 Jam',
    icon: 'account_balance',
  },
  {
    id: 'card',
    name: 'Kartu Kredit / Debit Online',
    subtitle: 'Visa, Mastercard, JCB (3D Secure)',
    rightLabel: 'Cicilan 0%',
    icon: 'credit_card',
  },
];

export function formatIDR(amount: number): string {
  const absAmount = Math.abs(Math.round(amount));
  const formatted = absAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return amount < 0 ? `-Rp ${formatted}` : `Rp ${formatted}`;
}
