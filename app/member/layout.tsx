"use client"
import MemberSidebar from '@/components/member/MemberSidebar';
import MemberSummary from '@/components/member/MemberSummary';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="md:flex">
      <MemberSidebar />
      <main className="flex-grow bg-white flex justify-center items-center">
        {children}
      </main>
      <MemberSummary />
    </div>
  );
}