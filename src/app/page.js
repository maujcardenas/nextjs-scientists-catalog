import DefaultLayout from "@/layouts/defaultLayout";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-mainco homepage grid grid-cols-3 gap-5 grid-auto-rows-minmax">
        <Link
          href={"/scientists"}
          className="bg-softbgc pb-3 rounded-md text-softco"
        >
          <img
            className="w-full h-80 rounded-t-md"
            src="./solvayimage.jpg"
            alt="scientists-convention"
          />
          <h1 className="uppercase text-center pt-3">The Scientist Catalog</h1>
        </Link>
        <Link
          href={"/about"}
          className="bg-softbgc pb-3 rounded-md text-softco"
        >
          <img
            className="w-full h-80 rounded-t-md"
            src="./code.jpg"
            alt="coding-image"
          />
          <h1 className="uppercase text-center pt-3">About this website</h1>
        </Link>
      </div>
    </DefaultLayout>
  );
}
