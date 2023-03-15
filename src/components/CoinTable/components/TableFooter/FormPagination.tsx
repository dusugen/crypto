import React, { useMemo } from "react";
import { Pagination, Stack } from "@mui/material";
import { IPagination } from "../../../../types";

interface IPaginationProps {
  pagination: IPagination;
  onPagination: (value: Partial<IPagination>) => void;
}

const FormPagination: React.FC<IPaginationProps> = React.memo(
  ({ pagination, onPagination }) => {
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
          onChange={(event, page) => onPagination({ page: page })}
        />
      </Stack>
    );
  }
);

export default FormPagination;
