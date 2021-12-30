import { ChevronLeftIcon, ChevronRightButton } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/router";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div>
      {startIndex >= 10 && (
        <Link>
          <div>
            <ChevronLeftIcon />
            <p>Previous</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
