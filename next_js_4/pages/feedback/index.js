import { useState } from "react";
import { buildFeedBackPath, extractFeedBack } from "../api/feedback";

function FeedBackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedBackHandler(id) {
    fetch(`api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedBackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedBackHandler(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedBackPath();
  const data = extractFeedBack(filePath);

  return {
    props: {
      feedBackItems: data,
    },
  };
}

export default FeedBackPage;
