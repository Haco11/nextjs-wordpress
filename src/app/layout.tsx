import { MainMenu } from "@/components/MainMenu";
import "../styles/globals.css";
import { getPage } from "@/utils/base";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPage("/");

  return (
    <html lang="en">
      <body className="font-body">
        <MainMenu items={data?.mainMenuItems} />

        {children}
      </body>
    </html>
  );
}
