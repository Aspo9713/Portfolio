// app/layout.tsx

import localFont from 'next/font/local';
import './globals.css';

const kelsonSans = localFont({
  src: [
    {
      path: '../public/fonts/kelson/KelsonSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/kelson/KelsonSansBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kelson',
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio grafika – Adam Špiroch | Grafický design, Fotografie, Video',
  description:
    'Profesionální portfolio grafického designu, typografie, sazby, fotografování oslav a svateb, webových stránek, střihu videa a kinematografie. Působím v Libereckém kraji, Hradci Králové, Jičíně, Praze a Brně.',
  keywords: [
    'portfolio',
    'grafik',
    'grafika',
    'grafický design',
    'designér',
    'typografie',
    'sazba',
    'fotografie',
    'svatby',
    'oslavy',
    'webovky',
    'střih videa',
    'kinematografie',
    'Liberec',
    'Hradec Králové',
    'Jičín',
    'Praha',
    'Brno',
    'branding',
    'logo design',
    'corporate identity',
    'UX/UI design',
    'responsivní design',
    'ilustrace',
    'editorial design',
    'packaging design',
    'reklama',
    'marketingové materiály',
    'motion graphics',
    'video animace',
    'vizuální identita',
    'barevná teorie',
    '3D vizualizace',
    'art direction',
  ],
  icons: {
    icon: "/imgs/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`
          ${kelsonSans.variable}
          font-sans
          bg-[url('/imgs/hero.jpg')]
          bg-fixed
          bg-center
          bg-cover
        `}
      >
        {children}
      </body>
    </html>
  );
}


