import Image from "next/image";
import Navbar from "../components/Navbar";
import ChoiceBar from "@/components/ChoiceBar";
import Sidebar from "@/components/Sidebar";
import JobOffer from "@/components/JobOffer";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <Navbar />
      <ChoiceBar />
      <div className="flex flex-col-reverse md:flex md:flex-row">
        <JobOffer />
        <Sidebar />
      </div>
    </div>
  );
}
