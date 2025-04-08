import type { ReactNode } from "react";
import { StoreProvider } from "../providers/StoreProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./tailwind.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <SidebarProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
      </SidebarProvider>
    </StoreProvider>
  );
}
