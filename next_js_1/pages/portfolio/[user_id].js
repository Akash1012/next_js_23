import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.query);

  const { user_id } = router.query;
  return (
    <div>
      <h1>The Portfolio Project Page {user_id}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
