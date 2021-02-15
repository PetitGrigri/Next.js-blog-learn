import Comment from "./Comment.jsx";
import { articleConsummerHook } from "../../store/provider/ArticleProvider.js";

export default function Comments () {
  const [{comments}] = articleConsummerHook();

  return (
    <div>
      {comments.loading ? "Loading..." : null}
      {comments.data.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  )
};