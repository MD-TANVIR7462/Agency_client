"use server";
import toast from "react-hot-toast";

const BASE_URL = process.env.LOCAL_BASE_URL; // Can be dynamic

// GET ALL DATA
export async function getData(endpoint: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    toast.success("Data loaded successfully!");
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    toast.error(errorMessage);
    return { error: errorMessage };
  }
}

// GET SINGLE DATA
export async function getSingleData(endpoint: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    toast.success("Data loaded successfully!");
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    toast.error(errorMessage);
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
    if (!res.ok) throw new Error("Failed to create data");
    const response = await res.json();
    toast.success("Data created successfully!");
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    toast.error(errorMessage);
    return { error: errorMessage };
  }
}

// UPDATE DATA
export async function updateData(endpoint: string, id: string, data: any) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update data");
    const response = await res.json();
    toast.success("Data updated successfully!");
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    toast.error(errorMessage);
    return { error: errorMessage };
  }
}

// DELETE DATA
export async function deleteData(endpoint: string, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete data");
    toast.success("Data deleted successfully!");
    return { success: true, message: "Deleted successfully!" };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    toast.error(errorMessage);
    return { error: errorMessage };
  }
}
