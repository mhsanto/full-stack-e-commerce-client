import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}
const BillboardPage: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl  uppercase text-fuchsia-700  max-w-3xl ">
            {data.label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BillboardPage;
