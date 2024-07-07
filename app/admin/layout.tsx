// /app/member/layout.tsx
import AdminSideBar from "@/components/admin/AdminSideBar";
import { ReactNode } from "react";

export default async function AdminLayout({children,}:Readonly<{children:ReactNode}>
  

) {
    return (
      <>
      
      <div className=" md:flex">
     <aside className="md:w-72 md:h-screen bg-white">
        <AdminSideBar />
      </aside>
      <main className="md:flex-1 bg-gray-100 p-3">
        {children}
      </main>
        </div>
      </>
    )
}