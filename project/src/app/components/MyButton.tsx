import Link from "next/link";

export default function MyButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      {title}
    </Link>
  );
}