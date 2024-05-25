import { baseQuery } from "./api";

export const authApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "auth/agent/sign-in",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
    sendEmailForgotPassword: builder.mutation({
      query: ({ Email }) => ({
        url: `auth/agent/send-email-forgot-password?email=${encodeURIComponent(Email)}`,
        method: "POST",
        providesTags: ["User"],
      }),
    }),
    validateResetPassword: builder.mutation({
      query: ({ Email, Code }) => ({
        url: `auth/agent/validate-reset-password?email=${encodeURIComponent(
          Email
        )}&code=${encodeURIComponent(Code)}`,
        method: "POST",
        providesTags: ["User"],
      }),
    }),
    changeForgotPassword: builder.mutation({
      query: (changePasswordDto) => ({
        url: "auth/agent/change-forgot-password",
        method: "POST",
        body: changePasswordDto,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignInMutation,
  useSendEmailForgotPasswordMutation,
  useValidateResetPasswordMutation,
  useChangeForgotPasswordMutation,
} = authApi;
