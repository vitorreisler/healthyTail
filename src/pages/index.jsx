import Layout from "@/components/layout";
import HomePage from "./rotas/homepage";

export default function Home() {
  return (
    <Layout pageName={"דף הבית"}>
      <HomePage/>
    </Layout>
  );
}
