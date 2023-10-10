import { getPage } from "@/utils/base";
import { BlockRenderer } from "@/components/BlockRenderer";
export default async function Home() {
  const data = await getPage("/");
  console.log(data);
  return (
    <main>
      <BlockRenderer blocks={data.blocks} />
    </main>
  );
}
