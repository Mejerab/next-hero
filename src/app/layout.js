import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s | Next Hero'
  },
  description: "Next Hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Navbar />
        {children}
        <footer>
          This is footer
        </footer>
      </body>
    </html>
  );
}
