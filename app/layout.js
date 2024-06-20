import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "🤖 AceMock AI",
  description: "Your Personal AI Interview Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
            <Toaster />
            {children}
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
