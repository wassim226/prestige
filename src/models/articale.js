export default function ArticaleModel(
  id,
  title,
  extPresentation,
  presentationImg,
  content,
  createdAt,
  comments
) {
  return {
    id,
    title,
    extPresentation,
    presentationImg,
    content,
    createdAt,
    comments,
  };
}
