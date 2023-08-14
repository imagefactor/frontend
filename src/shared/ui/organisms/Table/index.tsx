// @ts-nocheck
import { useRowSelect, useTable } from "react-table";
import { Tbody, Td, Th, Thead, Tr, Table as TableView } from "@chakra-ui/react";
import React, { Dispatch, Ref, useEffect, useImperativeHandle } from "react";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, onChangeDelete, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    const onClick = (e) => {
      e.stopPropagation();
    };

    return (
      <input type="checkbox" ref={resolvedRef} {...rest} onClick={onClick} />
    );
  },
);

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";

interface TableProps {
  methodsRef: Ref<{ getIds: () => any }>;
  columns: any[];
  data: any[];
  setIsDelete?: Dispatch<boolean>;
  onRowClick?: (id: number) => void;
}

export const Table = ({
  data,
  columns,
  methodsRef,
  setIsDelete,
  onRowClick,
}: TableProps) => {
  const getRowId = (row) => {
    return row.id;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      getRowId,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => {
            return (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            );
          },
        },
        ...columns,
      ]);
    },
  );

  useImperativeHandle(methodsRef, () => ({
    getIds: () => selectedRowIds,
  }));

  useEffect(() => {
    if (setIsDelete) {
      setIsDelete(Object.keys(selectedRowIds).length > 0);
    }
  }, [selectedRowIds]);

  return (
    <TableView variant="striped" colorScheme="twitter" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps({
                  style: {
                    minWidth: column.minWidth,
                    maxWidth: column.maxWidth,
                    width: column.width,
                  },
                })}
                key={column.id}
              >
                {column.render("Header")}{" "}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr
              {...row.getRowProps()}
              key={row.id}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row.id);
                }
              }}
              cursor="pointer"
            >
              {row.cells.map((cell, index) => {
                return (
                  <Td
                    {...cell.getCellProps({
                      style: {
                        minWidth: cell.column.minWidth,
                        maxWidth: cell.column.maxWidth,
                        width: cell.column.width,
                      },
                    })}
                    key={index}
                  >
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </TableView>
  );
};
