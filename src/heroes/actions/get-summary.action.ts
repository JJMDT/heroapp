import { heroApi } from "../api/api";
import type { SummaryResponse } from "../types/get-summary.response";

export const getSummaryAction = async () => {
  const { data } = await heroApi.get<SummaryResponse>("/summary");
  console.log(data);
  return data;
};
