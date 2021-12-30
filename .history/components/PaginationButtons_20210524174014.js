import { useRouter } from "next/router";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return <div>
      {startIndex >= 10 && (

      )}
  </div>;
}

export default PaginationButtons;
