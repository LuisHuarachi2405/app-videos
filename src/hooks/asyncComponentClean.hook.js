import { useEffect } from 'react';

export const useAsync = (
  asyncFn,
  successFunction,
  returnFunction,
  dependencies = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      console.log(result);
      if (isActive) successFunction("asdsa");
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};