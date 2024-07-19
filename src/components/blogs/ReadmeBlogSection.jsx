import { useGetBlogListQuery } from "../../api/blogsApi";
import ReadmeSection from "../ReadmeSection";

const ReadmeBlogSection = () => {
  // Fetch blogs list
  const {
    data: blogs,
    error,
    // isLoading,
  } = useGetBlogListQuery({
    limit: 4,
  });
  // console.log(blogs);

  return (
    <>
      {error ? (
        <ReadmeSection
          titleText={"Letest Blogs"}
          bodyContent="Fail to fetch blogs 😔."
          linkText="All Blogs"
          linkTo="/blogs"
        />
      ) : blogs?.length > 0 ? (
        <ReadmeSection
          titleText={"Letest Blogs"}
          blogList={blogs}
          linkText="All Blogs"
          linkTo="/blogs"
        />
      ) : (
        <ReadmeSection
          titleText={"Letest Blogs"}
          bodyContent={"Blogs Not Found 😔."}
        />
      )}
    </>
  );
};

export default ReadmeBlogSection;
