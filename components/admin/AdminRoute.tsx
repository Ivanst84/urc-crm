"use client"
import Link from 'next/link';

type AdminLinkProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoute({ link }: AdminLinkProps) {
  return (
    <Link href={link.url} target={link.blank ? "_blank" : "_self"} className="block p-2 text-sm text-blue-900 hover:bg-gray-100  font-bold rounded-md">
      {link.text}
    </Link>
  );
}