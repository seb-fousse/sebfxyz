import { ReactNode } from "react";
import Footer from "../Footer/Footer.component";

interface LayoutProps {
  children: ReactNode;
  showHomeLink?: boolean;
  maxWidth?: string;
}

export default function Layout({ 
  children, 
  showHomeLink = false, 
  maxWidth = "max-w-7xl" 
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className={`flex-1 ${maxWidth} m-auto w-full`}>
        {children}
      </main>
      <Footer showHomeLink={showHomeLink} />
    </div>
  );
}
