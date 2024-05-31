export default function MessageModel(
  id,
  sender,
  message,
  senderStName,
  senderLstName,
  createdAt
) {
  return {
    id,
    sender,
    message,
    senderStName,
    senderLstName,
    createdAt: createdAt.split("T")[0],
  };
}
