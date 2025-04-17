export default function Home() {
  return (
    <div className="max-w-[1152px] w-[95%] mx-auto">
      {/* header  */}
      <div className="w-full flex items-center justify-between">

        {/* logo  */}
        <h1 className="text-[#7000ff] text-3xl font-bold">market</h1>

        <ul className="flex items-center gap-5">
            <li>Mahsulotlar</li>
            <li>Bog'lanish</li>
            <li>Qidirish</li>
            <li>Kirish</li>
        </ul>
      </div>
    </div>
  );
}
