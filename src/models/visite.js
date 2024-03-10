export default function VisiteModel(
  id,
  userId,
  ipAddress,
  device,
  spendedTime,
  activities,
  createdAt
) {
  return {
    id,
    userId,
    ipAddress,
    device,
    spendedTime,
    activities,
    createdAt,
  };
}
