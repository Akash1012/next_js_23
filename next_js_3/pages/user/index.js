import { useState } from "react";
import UserList from "../../components/UserList";
const AllUsers = (props) => {
  const { users } = props;
  const [allList, setAllList] = useState(users);

  const updateUserList = (id) => {
    const update = allList.filter((item) => item.id !== id);
    setAllList(update);
  };

  return (
    <div>
      <UserList items={allList} updateUserList={updateUserList} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await featuredEvents.json();

  return {
    props: {
      users: data,
    },
  };
}

export default AllUsers;
