import { string } from "yup";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface CategoryValue {
  value: string;
  text: string;
}

export interface IHookInputProps {
  label?: string;
  placeholder?: string;
  info?: boolean;
  value?: string;
  className?: string;
  required?: boolean;
  register?: any;
  errors?: any;
  name?: string;
  type?: string;
  show?: boolean;
  select?: boolean;
  message?: string;
  textArea?: boolean;
  textAreaClass?: any;
  selectArray?: any;
  disabled?: boolean;
  ref?: React.MutableRefObject<HTMLInputElement>;
  onClick?: any;
  password?: string;
  validate?: any;
  maxLength?: number;
  minLength?: number;
  pattern?: any;
  handleChange?: any;
  onChange?: any;
  rest?: any;
  setState?: any;
  optional?: boolean;
}

export interface IRegistrationResponse {
  first_name: string;
  last_name: string;
  email: string;
  profile: Profile;
  deleted_at: null;
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  email_verified: boolean;
}

export interface IReview {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  avatarId: string;
  reviewer: string;
  review: string;
}

export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  avatarId: string;
  phone_number: string;
  state: string;
  lga: string;
  description: string;
  twitter: string;
  instagram: string;
}

export interface IRegistration {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password?: string;
  history?: any;
}

export interface IEditProfile {
  first_name: string;
  last_name: string;
  phone_number: string;
  twitter: string;
  instagram: string;
  state: string;
  lga: string;
  description: string;
  photo?: string;
}

export interface ILogin {
  email: string;
  password: string;
  history?: any;
}

export interface UserResponse {
  statusCode: number;
  message: any;
}

export interface IUser {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  email_verified: boolean;
}

export interface getUserResponse {
  statusCode: number;
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  email_verified: boolean;
  profile: IProfile;
  gadgets: IGadget[];
}

// interface IData {
//   id: string;
//   created_at: string;
//   updated_at: string;
//   deleted_at: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   status: string;
//   email_verified: boolean;
//   profile: IProfile;
//   gadgets: IGadgets[];
// }

interface IProfile {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  avatarId: string;
  phone_number: string;
  state: string;
  lga: string;
  description: string;
  twitter: string;
  instagram: string;
  reviews: IReview[]
}

interface IGadget {
  photos: any;
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  name: string;
  description: string;
  price: string;
  condition: string;
  state: string;
  lga: string;
  contact_info: string;
}

export const categories = [
  { value: "", text: "-Select-" },
  { value: "camera", text: "Camera" },
  { value: "soundEquipment", text: "Sound Equipment" },
  { value: "laptops/pc", text: "Laptops/PCs" },
  { value: "gaming", text: "Gaming" },
  { value: "projectors", text: "Projectors" },
  { value: "drones", text: "Drones" },
  { value: "screenMonitors", text: "Screen Monitors" },
  { value: "phones", text: "Phones" },
  { value: "others", text: "Others" },
];

export interface IProductInputs {
  category: string;
  state: string;
  lga: string;
  name: string;
  condition: string;
  description: string;
  price: string;
  contact_info: string;
  photos?: [];
}

export const gadgetConditions = [
  { value: "", text: "-Select-" },
  { value: "new", text: "Brand New" },
  { value: "used", text: "Fairly Used" },
];

export interface ITokenDecode {
  user_id: string;
  iat: number;
  exp: number;
  avatar_id: string;
}

export interface IGadgets {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  name: string;
  description: string;
  price: string;
  condition: string;
  state: string;
  lga: string;
  contact_info: string;
  photos: IPhoto[];
}

export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: string;
  cover: boolean;
  bucketname: string;
  key: string;
}
