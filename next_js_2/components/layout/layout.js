import MainHeader from "./main-header";

function Layout(props) {
  console.log("props", props.children);
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
