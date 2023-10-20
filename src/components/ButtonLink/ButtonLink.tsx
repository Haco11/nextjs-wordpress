import Link from "next/link";

export const ButtonLink = ({ destination, label }: any) => {
  return (
    <Link
      href={destination}
      className="bg-pink-500 hover:bg-pink-700 inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer font-bold text-white">
      {label}
    </Link>
  );
};
