import { getPage } from "@/utils/base";
export default async function Home() {
  const data = await getPage();
  console.log(data.data.pages.nodes);

  return (
    <main>
      {data.data.pages.nodes.map((title: any) => {
        <div>{title}</div>;
      })}
    </main>
  );
}
