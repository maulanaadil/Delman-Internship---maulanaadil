export type TUser = User[];

type User = {
  gender: string;
  name: Username;
  location: UserLocation;
  email: string;
  dob: UserDob;
  picture: UserPicture;
  nat: string;
};

type Username = {
  title?: string;
  first: string;
  last: string;
};

type UserLocation = {
  country: string;
  city?: string;
  state?: string;
};

type UserDob = {
  age: number;
};

type UserPicture = {
  large?: string;
  medium?: string;
  thumbnail?: string;
};
