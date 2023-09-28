import { useRouter } from "next/router";
import classes from "./user-list.module.css";

const UserList = (props) => {
  const { items, updateUserList } = props;
  const router = useRouter();
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        LIST OF USERS
      </h1>
      <div className={classes.list}>
        {items.map((item) => {
          const { name, username, email, id } = item;
          return (
            <>
              <div
                key={id}
                className={classes.main}
                onClick={() => router.push(`/user/${id}`)}
              >
                <div className={classes.child}>
                  <p>
                    <b>Name :</b>
                    {name}
                  </p>
                  <p>
                    <b>User Name :</b>
                    {username}
                  </p>
                  <p>
                    <b>Email Id :</b>
                    {email}
                  </p>
                </div>
              </div>
              <p
                style={{
                  marginLeft: "15px",
                }}
                onClick={() => updateUserList(id)}
              >
                <b>DELETE</b>
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
