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
      if (isActive) successFunction(result.data);
    }).catch(e => {
      
    })

    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};