import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-[1152px] w-[95%] mx-auto">
      <Link href={"/about"}>
        <p>go about page</p>
      </Link>
    </div>
  );
}
