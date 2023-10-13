import { getPage } from "@/utils/base";
import { BlockRenderer } from "@/components/BlockRenderer";
import { MainMenu } from "@/components/MainMenu";
export default async function Home() {
  const data = await getPage("/");
  return (
    <main>
      <MainMenu items={data?.mainMenuItems} />
      <BlockRenderer blocks={data?.blocks} />
    </main>
  );
}
