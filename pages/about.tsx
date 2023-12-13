import { Table, Input } from "antd";
import { useQuery } from "react-query";
import { useVT } from "virtualizedtableforantd4";

const About = () => {
  const { isLoading, error, data } = useQuery(
    "listUser",
    () => fetch("https://reqres.in/api/users").then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
    }
  );
  const y = 500;
  // const [vt] = useVT(() => {
  //   return {
  //     scroll: { y },
  //     debug: true,
  //   };
  // });
  // const columns = [
  //   {
  //     title: "id",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "avatar",
  //     dataIndex: "avatar",
  //     key: "avatar",
  //     render: (value) => {
  //       return <Input value={value} />;
  //     },
  //   },
  //   {
  //     title: "email",
  //     dataIndex: "email",
  //     key: "email",
  //     render: (value) => {
  //       return <Input value={value} />;
  //     },
  //   },
  //   {
  //     title: "first_name",
  //     dataIndex: "first_name",
  //     key: "first_name",
  //     render: (value) => {
  //       return <Input value={value} />;
  //     },
  //   },
  // ];
  return (
    <>
      {/* <Table
        columns={columns}
        pagination={false}
        scroll={{ y: 400 }}
        dataSource={data?.data}
        key="id"
        components={typeof window !== "undefined" ? vt : undefined}
        loading={isLoading}
        bordered
      /> */}
    </>
  );
};
export default About;
