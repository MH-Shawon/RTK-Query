/* eslint-disable react/prop-types */
const PostCard=({post})=>{
    return(
        <div className="max-w-md mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="mt-2 text-gray-600 whitespace-pre-line">{post.body}</p>
            </div>
        </div>
    )}
export default PostCard;