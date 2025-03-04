"use client";
import { Banner } from "@/components/Banner/banner";
import { EditBannerForm } from "@/components/dashboard/EditHome/EditBannerFrom";
import React from "react";

const EditBannerPage = () => {
  const handleBannerUpdate = (data: {
    title1: string;
    title2: string;
    subtext: string;
    imageUrl: string;
  }) => {
    // Here you would typically update your backend/database
    console.log("Banner updated:", data);
  };
  const initialData = {
    title1: "Transform Your",
    title2: "Digital Vision",
    subtext:
      "We're not just developers; we're digital architects crafting the future. Our team transforms complex challenges into elegant solutions that drive your business forward.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  };

  return (
    <div className="relative">
      <Banner />
      <EditBannerForm initialData={initialData} onSubmit={handleBannerUpdate} />
    </div>
  );
};

export default EditBannerPage;
