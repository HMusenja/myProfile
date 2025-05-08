import axios from "../utils/axiosConfig";

export const fetchTestimonials = async () => {
  const res = await axios.get("/testimonials");
  return res.data;
};
