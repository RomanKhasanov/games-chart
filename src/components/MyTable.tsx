import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import { FC } from "react";
import { ListResponse } from "../../pages/api/models/ListResponse";

type MyTableProps = {
  list: ListResponse[]
}

export const MyTable: FC<MyTableProps> = ({ list }) => {
  const collator = useCollator({ numeric: true });
  async function sort({ items, sortDescriptor }) {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }
  const listForTable = useAsyncList({ load: async () => ({ items: list }), sort });
  return (
    <Table
      aria-label="Example static collection table"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      sortDescriptor={listForTable.sortDescriptor}
      onSortChange={listForTable.sort}
    >
      <Table.Header>
        <Table.Column key="title_name" allowsSorting>
          Name
        </Table.Column>
        <Table.Column key="title_type" allowsSorting>
          Category
        </Table.Column>
        <Table.Column key="avg_rating" allowsSorting>
          Rating
        </Table.Column>
      </Table.Header>
      <Table.Body items={listForTable.items} loadingState={listForTable.loadingState}>
        {(item) => (
          <Table.Row key={item.title_name} css={{ maxHeight: "100px "}}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
