"use server";
import { TMessageOnlyDataSend } from "@/app/(commonLayout)/contact/page";
import { ProjectsResponse } from "@/types/project.type";

export const sendMessageToUser = async (data: TMessageOnlyDataSend) => {
  const res = await fetch(`${process.env.BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const messageInfo = await res.json();
  return messageInfo;
};

export const getAllProjects = async (): Promise<ProjectsResponse> => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [] };
  }
};
