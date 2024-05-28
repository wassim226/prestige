export default function UserModel({
  id,
  email,
  password,
  firstName,
  lastName,
  role,
  phone,
  createdAt,
}) {
  return {
    id,
    email,
    password,
    firstName,
    lastName,
    role,
    phone,
    createdAt,
  };
}
