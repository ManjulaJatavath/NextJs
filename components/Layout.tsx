import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
  };
  
const Layout = ({children}:LayoutProps) => {
  return (
    <div className="min-h-screen">
      <main>{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-4">
        &copy; 2024 My first Nextjs Website
      </footer>
    </div>
  )
}

export default Layout
