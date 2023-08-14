"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/shared/api";
import { BaseLayout } from "@/widgets/layout/ui";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <BaseLayout>{children}</BaseLayout>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
