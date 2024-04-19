import Doctors from "./_components/doctors";
import Consultations from "./_components/consultations";

export default function Home() {
  return (
    <div className="space-y-6 px-8 py-12">
      <div className="flex flex-col justify-center gap-4 xl:flex-row">
        <Doctors />
        <Consultations />
      </div>
    </div>
  );
}
