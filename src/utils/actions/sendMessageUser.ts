"use server";
import { TMessageOnlyDataSend } from "@/app/(commonLayout)/contact/page";
import { ProjectsResponses, ProjectResponse } from "@/types/project.type";

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

export const getFeatureProjects = async (): Promise<ProjectsResponses> => {
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
export const getAllProjects = async (): Promise<ProjectsResponses> => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
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

export const getProjectById = async (id: string): Promise<ProjectResponse> => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};
