import { baseApi } from "@/redux/api/baseApi";

import { TQueryParam, TResponseRedux } from "@/types/global.type";
import { TProject } from "@/types/project.type";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/project`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Project"],

      transformResponse: (response: TResponseRedux<TProject>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleBlog: builder.query({
      query: (idOrSlug) => ({
        url: `/blog/${idOrSlug}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: `/project`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project"],
    }),
    // updateBlog: builder.mutation({
    //   query: (payload) => ({
    //     url: `/blog/${payload.id}`,
    //     method: "PATCH",
    //     body: payload.data,
    //   }),
    //   invalidatesTags: ["Blog"],
    // }),
    // deleteBlog: builder.mutation({
    //   query: (id) => ({
    //     url: `/blog/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Blog"],
    // }),
  }),
});

export const { useCreateProjectMutation, useGetAllProjectQuery } = projectApi;
