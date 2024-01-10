import {
  APIDeleteDictionary,
  APIGetDictionaryList,
  APISeachDictionary,
  APISingleDictionary,
} from "@/apis/dashboard/dictionary";
import CommonTable from "@/components/common/CommonTable";
import CommonTextField from "@/components/common/form/CommonTextField";
import showNotify from "@/utils/notify";
import { Button, Modal, Pagination } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown, ArrowUp, Eye, Pen, Search, Trash } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DictionaryList = ({ get }: any) => {
  const [elements, setElements] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [list, setList] = useState<any>([]);
  const [data, setData] = useState<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const [elementId, setElementId] = useState<any>();
  const [search, setSearch] = useState<any>("");
  const router = useRouter();

  useEffect(() => {
    setList(elements?.data);
  }, [elements]);
  const [sortOrder, setSortOrder] = useState<{
    column: null | string;
    order: string;
  }>({
    column: null,
    order: "asc",
  });

  const getdata = async () => {
    try {
      const res = await APISeachDictionary(search);
      setList(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getdata();
  }, [search]);

  const Titles = [
    "#",
    <div className="flex items-center gap-2 cursor-pointer" key={"lang"}>
      <div>German</div>

      <div onClick={() => sortData("lang")}>
        {sortOrder.column === "lang" && sortOrder?.order == "asc" ? (
          <ArrowUp size={14} />
        ) : (
          <ArrowDown size={14} />
        )}
      </div>
    </div>,
    "Nepali Pronunciation",

    "Nepali",
    <div className="flex items-center gap-2 cursor-pointer" key={"english"}>
      <div>English</div>

      <div onClick={() => sortData("english")}>
        {sortOrder.column === "english" && sortOrder?.order == "asc" ? (
          <ArrowUp size={14} />
        ) : (
          <ArrowDown size={14} />
        )}
      </div>
    </div>,
    <div className="flex items-center gap-2 cursor-pointer" key={"level"}>
      <div>Level</div>

      <div onClick={() => sortData("level")}>
        {sortOrder.column === "level" && sortOrder?.order == "asc" ? (
          <ArrowUp size={14} />
        ) : (
          <ArrowDown size={14} />
        )}
      </div>
    </div>,
    "Action",
  ];
  const getDictionaryList = async () => {
    try {
      const res = await APIGetDictionaryList(page);
      setElements(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDictionaryList();
  }, [page]);

  const handleDelete = async () => {
    try {
      const res = await APIDeleteDictionary(elementId);
      showNotify("success", res?.message);
      router.reload();
    } catch (error) {}
  };
  const getSingleData = async (id: any) => {
    const res = await APISingleDictionary(id);
    setData(res?.data);
  };
  useEffect(() => {
    if (data) {
      get(data);
    }
  }, [data]);

  const rows = list?.map((element: any, idx: number) => (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{element?.lang}</td>
      <td>{element?.np_pronunciation}</td>
      <td>{element?.nepali}</td>
      <td>{element?.english}</td>
      <td>{element?.level}</td>
      <td>
        <div className="flex">
          <div className="px-1 cursor-pointer">
            <Eye size={20} strokeWidth={2.25} />
          </div>
          <div className="px-1 cursor-pointer">
            <Pen
              size={20}
              strokeWidth={2.25}
              onClick={() => getSingleData(element?.id)}
            />
          </div>
          <div
            className="px-1 cursor-pointer"
            onClick={() => {
              setElementId(element?.id);
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
      <section className="pt-5 flex justify-center">
        <Pagination total={elements?.meta?.pages} onChange={setPage} />
      </section>
    </main>
  );
};

export default DictionaryList;
