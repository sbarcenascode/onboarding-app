export type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type FormGuardianType = {
  values: Partial<CreateUserData>;
};
