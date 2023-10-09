import { getPage } from "@/utils/base";
import { BlockRenderer } from "@/components/BlockRenderer";
export default async function Home() {
  const data = await getPage();

  return (
    <main>
      <BlockRenderer blocks={data} />
    </main>
  );
}
