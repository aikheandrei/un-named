export type OtpVerifyAction = (
  otp: string,
  email: string | null,
) => Promise<void>;

export interface OtpReturnType {
  otpError: string | null;
  otpIsPending: boolean;
  handleOtpVerify: OtpVerifyAction;
}
