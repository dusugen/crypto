import React, { useMemo } from "react";
import { Pagination, Stack } from "@mui/material";
import { IPagination } from "../../../../types";

interface IPaginationProps {
  pagination: IPagination;
  onPagination: (value: IPagination) => void;
}

const FormPagination: React.FC<IPaginationProps> = ({
  pagination,
  onPagination,
}) => {
  console.log(pagination, "pagination");
  const pageCount = useMemo<number>(
    () => Math.ceil(pagination.count / pagination.limit),
    [pagination.count, pagination.limit]
  );
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Pagination
        count={pageCount}
        color="primary"
        size="large"
        page={pagination.page}
        onChange={(event, page) => onPagination({ ...pagination, page: page })}
      />
    </Stack>
  );
};

export default FormPagination;
