import AllDonerAndStatistics from "@/components/AllDonorAndStatistics";
import BloodGroupAvailability from "@/components/BloodGroupAvailability";
import DonarStats from "@/components/DonorStates";
import SaveLifeTodayCard from "@/components/SaveLifeToday";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="px-5 w-full max-w-6xl mx-auto">
        <SaveLifeTodayCard />

        <DonarStats />

        <BloodGroupAvailability />

        <AllDonerAndStatistics />
      </div>
    </div>
  );
}
