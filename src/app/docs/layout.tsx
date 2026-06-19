import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DocsSidebar from "@/components/docs/DocsSidebar";
import { getSidebar } from "@/lib/docs";

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const sidebarData = await getSidebar();

  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-0 px-6 py-12">
        <DocsSidebar sidebarData={sidebarData} />
        <main className="min-w-0 flex-1 pl-0 lg:pl-12">{children}</main>
      </div>
      <Footer />
    </>
  );
}
