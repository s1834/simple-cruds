import DetailForm from "@/components/DetailForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Your Details</h1>
      <p>Please fill in the form below</p>

      <DetailForm />
    </div>
  );
}
