import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/dashboard">
        <button className="mt-4 px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
