"use server";

import { envConfig } from "@/lib/env.config";

const BASE_URL = envConfig.SERVER_BASE_URL; // Can be dynamic

// GET ALL DATA
export const getData = async (endpoint: string, token?: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      cache: "no-store",
      headers: {
        ...(token && { Authorization: `${token}` }),
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

// GET SINGLE DATA
export const getSingleData = async (endpoint: string, id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, { cache: "no-store" });
    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

// CREATE DATA
export const createData = async (endpoint: string, data: any, token?: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(token && { Authorization: `${token}` }) },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

// UPDATE DATA
export const updateData = async (endpoint: string, id: string, data: any, token?: string) => {
  console.log(token, "token");
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `${token}` }),
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

// DELETE DATA
export const deleteData = async (endpoint: string, id: string, token?: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        ...(token && { Authorization: `${token}` }),
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};

// GET SETTINGS
export const getSettings = async () => {
  try {
    const res = await fetch(`${BASE_URL}/settings`, { cache: "no-store" });
    const data = await res.json();
    return data?.data?.[0];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
};
