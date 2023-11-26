export type UserRequestBody = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export type CreateUserPostBody = UserRequestBody;
export type CreateUserPostResponse = UserRequestBody;
export type CreateUserPostFailResponse = { error: { message: string } };

export type UpdateUserPutBody = UserRequestBody & { id: string };
export type UpdateUserPutResponse = CreateUserPostResponse;
export type UpdateUserPutFailResponse = CreateUserPostFailResponse;

export type FetchUserGetParams = { id: string };
export type FetchUserGetResponse = CreateUserPostResponse & { id: string };
export type FetchUserGetFailResponse = CreateUserPostFailResponse;
