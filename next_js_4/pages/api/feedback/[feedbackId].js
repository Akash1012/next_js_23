import { buildFeedBackPath, extractFeedBack } from "./index";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedBackPath();
  const feedbackData = extractFeedBack(filePath);
  const selectedFeedBack = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({
    feedback: selectedFeedBack,
  });
}

export default handler;
