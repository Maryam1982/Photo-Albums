import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

function useThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(null);

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setErrorLoading(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, errorLoading];
}

export default useThunk;
