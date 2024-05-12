import axios from "axios";

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      `https://dev.to/api/articles?username=dipankarpaul`
    );
    return response.data.map(
      ({
        description,
        id,
        published_at,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
        tags,
        title,
        url,
      }) => ({
        description,
        id,
        published_at,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
        tags,
        title,
        url,
      })
    );
  } catch (error) {
    throw error;
  }
};

export default fetchBlogs;
