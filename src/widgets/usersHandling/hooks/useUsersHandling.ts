import {useQuery} from "react-query";
import {request} from "@/shared/api";
import {useState} from "react";

export const useUsersHandling = () => {


  const [searchString, setSearchString] = useState("")
  const [onlyInGroups, setOnlyInGroups] = useState(false)
  const [groupId, setGroupId] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const getUsers = () => {
    // return request.get("/UsersHandling/users", {
    //   data: {
    //     SearchString: searchString,
    //     OnlyInGroups: onlyInGroups,
    //     GroupId: groupId,
    //     Page: page,
    //     Limit: limit,
    //   }
    // })
  }

  const response = useQuery({
    queryKey: ["usersHandling", page, limit],
    queryFn: getUsers,
  })

  return {...response, searchString, setSearchString, onlyInGroups, setOnlyInGroups, groupId, setGroupId, page, setPage, limit, setLimit}
}
