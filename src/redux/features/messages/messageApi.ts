import { baseApi } from "@/redux/api/baseApi";

import { TQueryParam, TResponseRedux } from "@/types/global.type";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllProject: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }
    //     return {
    //       url: `/project`,
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["Project"],

    //   transformResponse: (response: TResponseRedux<any>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // getSingleProject: builder.query({
    //   query: (id) => ({
    //     url: `/project/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Project"],
    // }),
    createMessage: builder.mutation({
      query: (data) => ({
        url: `/message`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Message"],
    }),
    // updateProject: builder.mutation({
    //   query: (payload) => ({
    //     url: `/project/${payload.id}`,
    //     method: "PATCH",
    //     body: payload.data,
    //   }),
    //   invalidatesTags: ["Project"],
    // }),
    // deleteProject: builder.mutation({
    //   query: (id) => ({
    //     url: `/project/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Project"],
    // }),
  }),
});

export const { useCreateMessageMutation } = messageApi;
