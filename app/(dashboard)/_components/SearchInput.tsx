"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="h-4 w-4 absolute top-1/2 left-3 transform -translate-y-2 text-muted-foreground" />
      <Input
        value={value}
        placeholder="Search Boards"
        className="pl-9 w-full max-w-[516px]"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
