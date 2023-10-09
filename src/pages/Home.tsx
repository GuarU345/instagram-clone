import Layout from "../components/Layout";
import { FeedProvider } from "../contexts/FeedContext";
import useFeed from "../hooks/useFeed";
import FeedCard from "../components/FeedCard";

function HomeBody() {
  const { error, loading, posts } = useFeed();

  return (
    <div className="w-1/3 mx-auto my-12">
      {loading ? "loading..." : null}
      {!loading && error ? "error" : null}
      {!loading && !error ? (
        <>
          {posts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </>
      ) : null}
    </div>
  );
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
