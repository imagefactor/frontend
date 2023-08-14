import {useQuery} from "react-query";
import {request} from "@/shared/api";

export const useProfile = () => {

  const getProfile = () => {
    return request.get("/Account/me")
  }

  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
}