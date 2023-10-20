import Link from "next/link";

export const ButtonLink = ({ destination, label }: any) => {
  return (
    <Link href={destination} className="btn">
      {label}
    </Link>
  );
};
