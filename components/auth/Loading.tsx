import Image from "next/image";

function Loading() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        height={120}
        width={120}
        alt="Logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
}

export default Loading;
