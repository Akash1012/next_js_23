import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // load data ...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: router.query.id,
        clientprojectid: "projectA",
      },
    });
  };
  return (
    <div>
      <h1>The Projects of a Give Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
