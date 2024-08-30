import { AxiosError } from "axios";

export type TMetaError = AxiosError<{
  message: string;
}>;
