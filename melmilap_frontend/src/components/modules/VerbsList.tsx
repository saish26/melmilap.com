import {
  APIDeleteDictionary,
  APIDeleteVerbs,
  APIGetDictionaryList,
  APIGetVerbsList,
  APISeachDictionary,
  APISingleDictionary,
} from "@/apis/dashboard/dictionary";
import CommonTable from "@/components/common/CommonTable";
import CommonTextField from "@/components/common/form/CommonTextField";
import { verbsDTO } from "@/utils/formatters/dictionaryDTO";
import { Button, Modal, Pagination } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown, ArrowUp, Eye, Pen, Search, Trash } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const VerbsList = ({ get }: any) => {
  const [elements, setElements] = useState<any>([]);
  const [list, setList] = useState<any>([]);
  const [data, setData] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [elementId, setElementId] = useState<any>();

  const [singleElement, setSingleElement] = useState<any>();
  const [search, setSearch] = useState<any>("");
  const router = useRouter();

  useEffect(() => {
    setList(elements);
  }, [elements]);
  const [sortOrder, setSortOrder] = useState<{
    column: null | string;
    order: string;
  }>({
    column: null,
    order: "asc",
  });

  // const getdata = async () => {
  //   try {
  //     const res = await APISeachDictionary(search);
  //     setList(res?.data);
  //   } catch (error) {}
  // };

  const Titles = [
    "#",
    <div className="flex items-center gap-2 cursor-pointer" key={"infinitive"}>
      <div>Infinitives</div>

      <div onClick={() => sortData("infinitive")}>
        {sortOrder.column === "infinitive" && sortOrder?.order == "asc" ? (
          <ArrowUp size={14} />
        ) : (
          <ArrowDown size={14} />
        )}
      </div>
    </div>,
    "Present participle",

    "Present participle",

    "Action",
  ];
  const getDictionaryList = async () => {
    try {
      const res = await APIGetVerbsList();
      // const formatted = verbsDTO.send(res?.data);
      setElements(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDictionaryList();
  }, []);

  const handleDelete = async () => {
    const res = await APIDeleteVerbs(elementId);
    router.reload();
  };

  useEffect(() => {
    if (data) {
      get(data);
    }
  }, [data]);

  const rows = list?.map((element: any, idx: number) => (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{element?.infinitive}</td>
      <td>{element?.partizipPerfekt}</td>
      <td>{element?.partizipPrasents}</td>

      <td>
        <div className="flex">
          <div className="px-1 cursor-pointer">
            <Eye size={20} strokeWidth={2.25} />
          </div>
          <div className="px-1 cursor-pointer">
            <Pen
              size={20}
              strokeWidth={2.25}
              onClick={() => {
                const formatted = verbsDTO.recieve(element);
                setData(formatted);
              }}
            />
          </div>
          <div
            className="px-1 cursor-pointer"
            onClick={() => {
              setElementId(element.id);
              open();
            }}
          >
            <Trash size={20} strokeWidth={2.25} />
          </div>
        </div>
      </td>
    </tr>
  ));
  const sortData = (colName: any) => {
    const sortedData: any = [...list];
    sortedData?.sort((a: any, b: any) => {
      const factor = sortOrder.order === "asc" ? 1 : -1;
      if (a[colName] < b[colName]) return -1 * factor;
      if (a[colName] > b[colName]) return 1 * factor;
      return 0;
    });
    setSortOrder((prev) => ({
      ...prev,
      column: colName,
      order: sortOrder.order === "asc" ? "desc" : "asc",
    }));
    setList(sortedData);
  };
  return (
    <main>
      <Modal opened={opened} onClose={close} centered>
        <div className="text-center font-bold">
          Are You Sure You Want To Delete?
        </div>
        <div className="flex p-5 justify-end">
          <div>
            <Button
              variant="outline"
              color="red"
              className="rounded-md"
              onClick={close}
            >
              Cancle
            </Button>
          </div>
          <div className="px-2">
            <Button
              className="bg-[#C30052] hover:bg-[#c30051d5]"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <section className="flex justify-between bg-white px-5 pt-1 pb-9 ">
        <div className="text-lg font-bold">Recent</div>
        <div>
          <CommonTextField
            type="text"
            placeholder="Search in German/English"
            rightSection={<Search />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
      <section className="bg-white p-5">
        <CommonTable titles={Titles} rows={rows} />
      </section>
    </main>
  );
};

export default VerbsList;
