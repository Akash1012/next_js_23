import { useState } from "react";
import UserDetails from "../../components/UserDetails";
import { useRouter } from "next/router";

const SingleUserDetailsPage = (props) => {
  const { selectedUser } = props;
  const router = useRouter();
  const [selectUserDetails, setSelectUserDetails] = useState([selectedUser]);
  const updateDetails = (editData) => {
    setSelectUserDetails([editData]);
  };

  const updateUserList = (id) => {
    router.push("/user");
  };

  const my_user = selectedUser;

  if (!my_user) {
    return (
      <div className="center">
        <p>Loading .....</p>
      </div>
    );
  }

  return (
    <div>
      <UserDetails
        details={selectUserDetails}
        updateDetails={updateDetails}
        updateUserList={updateUserList}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { user_id },
  } = context;

  const featuredEvents = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const data = await featuredEvents.json();

  return {
    props: {
      selectedUser: data,
    },
  };
}

export default SingleUserDetailsPage;
