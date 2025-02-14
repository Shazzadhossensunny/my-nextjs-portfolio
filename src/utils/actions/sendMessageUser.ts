"use server";

import { TMessageOnlyDataSend } from "@/app/(commonLayout)/contact/page";

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
