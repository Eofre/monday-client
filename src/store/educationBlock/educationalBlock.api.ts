import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EducationalBlock } from "../../types/types";

export const educationalBlockApi = createApi({
  reducerPath: "educationalBlockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/educational-block",
  }),
  endpoints: (build) => ({
    getAllEducationalBlocks: build.query<EducationalBlock[], string>({
      query: () => "",
    }),
    getEducationalBlockById: build.query<EducationalBlock, string | undefined>({
      query: (id) => ({ url: `/${id}` }),
    }),
  }),
});

export const { useGetAllEducationalBlocksQuery } = educationalBlockApi;
export const { useGetEducationalBlockByIdQuery } = educationalBlockApi;
