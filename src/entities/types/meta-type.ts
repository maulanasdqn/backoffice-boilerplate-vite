import type { AxiosError } from "axios";

export type TMetaError = AxiosError<{
  message: string;
}>;

export type TMetaResponse<T> = {
  data: T;
};
