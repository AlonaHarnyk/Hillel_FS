import { useState, useEffect } from "react";
// import { getPosts, type Post } from "../../services/postsApi";
import { Timer } from "../Timer/Timer";

// export const App = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const showPosts = async () => {
//     try {
//       setIsError(false);
//       setIsLoading(true);
//       const { posts } = await getPosts();
//       setPosts(posts);
//     } catch {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <>
//       <h1>App</h1>
//       <button onClick={showPosts}>Show posts</button>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//       {isLoading && <p>LOADING...</p>}
//       {isError && <p>Opps! It's error!</p>}
//     </>
//   );
// };

export const App = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [counter, setCounter] = useState(1);
  const [isTimerVisible, setIsTimerVisible] = useState(() => {
    const savedItem = localStorage.getItem("timer-state");
    if (savedItem !== null) {
      return JSON.parse(savedItem);
    }
    return false
  });

  // useEffect(() => {
  //   console.log("hello");
  //   // getPosts()
  //   //   .then(({ posts }) => setPosts(posts))
  //   //   .catch(() => setIsError(true))
  //   //   .finally(() => setIsLoading(false));
  //   const fetchdata = async () => {
  //     try {
  //       setIsError(false);
  //       setIsLoading(true);
  //       const { posts } = await getPosts();
  //       setPosts(posts);
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchdata()
  // }, []);

  // useEffect(() => {
  //   console.log("Counter updated!");

  //   return () => {
  //     console.log("updated");
  //   };
  // }, [counter]);

  useEffect(() => {
    localStorage.setItem("timer-state", JSON.stringify(isTimerVisible));
  }, [isTimerVisible]);

  return (
    <>
      <p>App!</p>
      {/* <button onClick={() => setCounter(counter + 1)}>Clicks: {counter}</button> */}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {isLoading && <p>LOADING...</p>}
      {isError && <p>Opps! It's error!</p>} */}
      <button onClick={() => setIsTimerVisible(!isTimerVisible)}>
        {isTimerVisible ? "Hide" : "Show"} timer
      </button>
      {isTimerVisible && <Timer />}
    </>
  );
};
