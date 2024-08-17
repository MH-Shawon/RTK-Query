import { useForm } from "react-hook-form";
import PostCard from "../Components/Postcard/PostCard";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../redux/feature/api/baseApi";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    const [setPost, { data: post, isLoading, isError, error }] = useUpdatePostMutation();
  console.log(post)
  
  const onSubmit = (data) => {
    setPost(data);
    reset();
    
  };

  const { data: posts } = useGetPostsQuery();
//   const { data: post, isLoading, isError, error } = useGetPostByIdQuery(8);

  if (isLoading) {
    return <p>this is loading</p>;
  }
  if (!isLoading && isError) {
    return <p>this is Error</p>;
  }
  return (
    <div>
      <div className="max-w-md p-5 mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-lg">
        <form className="flex justify-around" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={`border-2 p-2 rounded-lg ${
                errors.inputField ? "border-red-500" : "border-gray-300"
              }`}
              id="inputField"
              type="text"
              {...register("inputField", { required: true })}
            />
            {errors.inputField && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </form>
      </div>
      {
                posts?.map(post=>(<PostCard key={post.id} post={post}></PostCard>))
            }
      
    </div>
  );
};

export default Home;
