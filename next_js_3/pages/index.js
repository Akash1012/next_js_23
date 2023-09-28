import { useEffect } from "react";
import { useRouter } from "next/router";
import AllUsers from "./user/index";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (router) {
      router.push("/user");
    }
  }, []);

  return (
    <div>
      <h2>Loading .....</h2>
    </div>
  );
}

export default HomePage;
