import { ReactNode } from "react";
import MultilingualHeader from "./MultilingualHeader";
import MultilingualFooter from "./MultilingualFooter";

interface MultilingualLayoutProps {
  children: ReactNode;
}

const MultilingualLayout = ({ children }: MultilingualLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MultilingualHeader />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <MultilingualFooter />
    </div>
  );
};

export default MultilingualLayout;
