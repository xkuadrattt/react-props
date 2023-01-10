import Header from "./components/Header";
import SectionCurhat from "./components/SectionCurhat";
import dbstatus from "./data/dbstatus";

function App() {
  console.log(dbstatus);
  const posts = dbstatus.map(function (post) {
    return (
      <SectionCurhat
        user={post.user}
        verified={post.verified}
        datePost={post.datePost}
        caption={post.caption}
      />
    );
  });
  return (
    <>
      <Header />
      <section className="mt-[6rem]">
        <div className="container mx-auto px-4 sm:px-0">{posts}</div>
      </section>
    </>
  );
}

export default App;
