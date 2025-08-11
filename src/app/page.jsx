import AllDonerAndStatistics from "@/components/AllDonorAndStatistics";
import BloodGroupAvailability from "@/components/BloodGroupAvailability";
import DonarStats from "@/components/DonorStates";
import SaveLifeTodayCard from "@/components/SaveLifeToday";
import { useBFC } from "@/Context/BloodFighter";

export default function Home() {
  return (
    <div className="px-5">
      <SaveLifeTodayCard />

      <DonarStats />

      <BloodGroupAvailability />

      <AllDonerAndStatistics />
    </div>
  );
}
