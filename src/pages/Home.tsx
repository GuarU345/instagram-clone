import Layout from "../components/Layout";
import { FeedProvider } from "../contexts/FeedContext";
import useFeed from "../hooks/useFeed";

function HomeBody() {
  const { error, loading, posts } = useFeed();

  return <div className="w-1/3 border mx-auto my-12"></div>;
}

export default function Home() {
  return (
    <FeedProvider>
      <Layout>
        <HomeBody />
      </Layout>
    </FeedProvider>
  );
}
