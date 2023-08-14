// // @flow
// import * as React from "react";
// import { useUsersHandling } from "@/widgets/usersHandling/hooks";
// import { useMemo } from "react";
//
// type Props = {};
// export const UsersListTable = (props: Props) => {
//   const {
//     searchString,
//     setSearchString,
//     onlyInGroups,
//     setOnlyInGroups,
//     groupId,
//     setGroupId,
//     refetch,
//   } = useUsersHandling();
//   const columns = useMemo(
//     () => [
//       {
//         Header: "Логин",
//         accessor: "userName",
//       },
//       {
//         Header: "Имя",
//         accessor: "firstName",
//       },
//       {
//         Header: "Фамилия",
//         accessor: "lastName",
//       },
//     ],
//     [],
//   );
//
//   const data = useMemo(
//     () => [
//       {
//         id: "2131321321",
//         userName: "1231",
//         firstName: "333",
//         lastName: "444",
//       },
//       {
//         id: "2131321323",
//         userName: "1231",
//         firstName: "333",
//         lastName: "444",
//       },
//       {
//         id: "2131321321321312",
//         userName: "1231",
//         firstName: "333",
//         lastName: "444",
//       },
//     ],
//     [],
//   );
//
//   return <div></div>;
// };
