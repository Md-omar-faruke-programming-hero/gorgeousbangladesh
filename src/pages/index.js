import React, { useEffect, useState } from "react";
import RootLayout from "../../Component/Layouts/RootLayout";
import { apiSlice, useGetNewsQuery } from "@/redux/api/api";
import { useDispatch } from "react-redux";

const Index = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiSlice.endpoints.getNews.initiate())
      .unwrap()
      .then((res) => {
        console.log(res, res.data);

        setData(res);
      })
      .catch((err) => setData([]));
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(apiSlice.endpoints.deleteNews.initiate(id))
      .unwrap()
      .then((res) => {
        setData((prev) => {
          return prev?.length > 0 ? prev.filter((itm) => itm.id !== id) : [];
        });
      })
      .catch((err) => {});
  }
  return (
    <div className=" ">
      <div className="">
        <table className={`w-[100%] border-[#caece8]`}>
          <thead className="md:text-[16px] text-[15px] text-[#424E79] font-semibold  shadow-sm dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid ">
                SI
              </th>
              <th
                scope="col"
                className="px-6 py-5 font-normal border-[1px] border-solid overflow-hidden"
              >
                Name
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Username
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Email
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Address
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Phone
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Website
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Company
              </th>
              <th scope="col" className="px-6 py-5 font-normal border-[1px] border-solid">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((item, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 == 0 ? "bg-[#b6ebe4]" : ""
                  } border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer `}
                >
                  <td className="px-6 py-4 Dm border-[1px] border-solid">{i + 1}</td>
                  <td className="px-6 py-4 border-[1px] border-solid">{item?.name}</td>

                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.username}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.email}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.address?.street}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.phone}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.website}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    {item?.company?.name}
                  </td>
                  <td className="px-6 py-4 Dm text-[14px] border-[1px] border-solid">
                    <button
                      className="bg-[red] text-[white] p-[5px] rounded-[20px]"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
