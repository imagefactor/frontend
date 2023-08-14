import { useQuery } from "react-query";

export const useUsersGroups = () => {
  const response = useQuery({
    queryKey: ["UserGroups"],
  });

  return { ...response };
};
