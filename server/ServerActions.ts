"use server";

import { envConfig } from "@/lib/env.config";

const BASE_URL = envConfig.SERVER_BASE_URL; // Can be dynamic
// GET ALL DATA
export async function getData(endpoint: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    // if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return { error: errorMessage };
  }
}

// GET SINGLE DATA
export async function getSingleData(endpoint: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return { error: errorMessage };
  }
}

// CREATE DATA
export async function createData(endpoint: string, data: any) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // if (!res.ok) throw new Error("Failed to create data");
    const response = await res.json();

    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return { error: errorMessage };
  }
}

// UPDATE DATA
export async function updateData(endpoint: string, id: string, data: any) {
  try {
    const url = `${BASE_URL}/${endpoint}/${id}`;
    console.log(url);
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // if (!res.ok) throw new Error("Failed to update data");
    const response = await res.json();
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
}

// DELETE DATA
export async function deleteData(endpoint: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
    });
    // if (!res.ok) throw new Error("Failed to delete data");
    return { success: true, message: "Deleted successfully!" };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
}
