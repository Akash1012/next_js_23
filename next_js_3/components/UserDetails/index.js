import { useState, useEffect } from "react";
import classes from "../UserList/user-list.module.css";

const UserDetails = (props) => {
  const { details } = props;
  const [singleDetails, setSingleDetails] = useState(...details);
  const [input, setIInput] = useState([
    "name",
    "username",
    "email",
    "website",
    "phone",
  ]);
  const [toogleEdit, setToogleEdit] = useState(false);

  const handleValueChange = (event) => {
    const { value, name } = event.target;

    setSingleDetails({
      ...singleDetails,
      [name]: value,
    });
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Details Page
      </h1>
      <div className={classes.list}>
        {!toogleEdit ? (
          details?.map((item = {}) => {
            const { name, username, email, id, website, phone } = item;
            return (
              <div key={id} className={classes.main}>
                <div className={classes.child}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "2px solid",
                    }}
                  >
                    <p>
                      <b>Name :</b>
                      {name}
                    </p>

                    <p
                      style={{ marginRight: "10px" }}
                      onClick={() => setToogleEdit(!toogleEdit)}
                    >
                      {" "}
                      <b>Edit</b>
                    </p>
                  </div>
                  <p>
                    <b>User Name :</b>
                    {username}
                  </p>
                  <p>
                    <b>Email Id :</b>
                    {email}
                  </p>
                  <p>
                    <b>Phone:</b>
                    {phone}
                  </p>
                  <p>
                    <b>Website :</b>
                    {website}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className={classes.main}
            style={{
              padding: "10px",
            }}
          >
            {input.map((myInput) => {
              return (
                <div key={myInput}>
                  <input
                    style={{
                      padding: "4px",
                      borderRadius: "6px",
                      marginTop: "9px",
                    }}
                    type="text"
                    value={singleDetails[myInput]}
                    name={myInput}
                    onChange={handleValueChange}
                  />
                </div>
              );
            })}
            <p
              onClick={() => {
                props.updateDetails(singleDetails);
                setToogleEdit(!toogleEdit);
              }}
            >
              <b>SAVE</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
