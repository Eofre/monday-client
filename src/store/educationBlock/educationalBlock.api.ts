import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEducationalBlock } from "../../types/types";

export const educationalBlockApi = createApi({
  reducerPath: "educationalBlockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/educational-block",
  }),
  endpoints: (build) => ({
    getAllEducationalBlocks: build.query<IEducationalBlock[], string>({
      query: () => "",
    }),
    getEducationalBlockById: build.query<IEducationalBlock, string | undefined>({
      query: (id) => ({ url: `/${id}` }),
    }),
  }),
});

export const { useGetAllEducationalBlocksQuery } = educationalBlockApi;
export const { useGetEducationalBlockByIdQuery } = educationalBlockApi;
