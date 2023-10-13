import { getPage } from "@/utils/base";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";
export default async function Page({ params }: any) {
  const data = await getPage(params.slugs.join("/"));
  if (!data) {
    notFound();
  }
  console.log(data);
  return (
    <main>
      <BlockRenderer blocks={data?.blocks} />
    </main>
  );
}
