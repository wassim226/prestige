export default function CommentModel(
  id,
  comment,
  replyOf,
  userId,
  articleId,
  createdAt
) {
  return {
    id,
    comment,
    replyOf,
    userId,
    articleId,
    createdAt,
  };
}
