import React from "react";
import BrandLoader from "@/components/common/BrandLoader";

export default function Loading() {
  return (
    <div className="py-24 flex items-center justify-center min-h-[50vh]">
      <BrandLoader message="جاري تهيئة المساحة الهادئة..." size="md" />
    </div>
  );
}
