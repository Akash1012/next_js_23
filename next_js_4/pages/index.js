import { useRef, useState } from "react";

function HomePage() {
  const [feedBackItems, setFeedBackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function loadFeedBackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedBackItems(data.feedback));
  }

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your FeedBack</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send FeedBack</button>
      </form>
      <hr />
      <button onClick={loadFeedBackHandler}>Load FeedBack</button>
      <ul>
        {feedBackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
