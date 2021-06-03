import axios from "axios";

export const submitSurvey = async (formData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/v1/surveys", formData, config);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
