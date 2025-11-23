import Banner from "@/Components/Banner";
import CleaningMade from "@/Components/CleaningMade";
import CustomerReviews from "@/Components/CustomerReviews";
import HelpingThose from "@/Components/HelpingThose";
import LatestServices from "@/Components/LatestServices";

export default function Home() {
  return (
    <>
      <Banner />
      <CleaningMade />
      <HelpingThose />
      <LatestServices />
      <CustomerReviews />
    </>
  );
}
