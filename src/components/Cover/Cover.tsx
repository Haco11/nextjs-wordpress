import Image from "next/image";

export const Cover = ({ children, background }: any) => {
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {children}
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        className="mix-blend-soft-light"
      />
    </div>
  );
};
