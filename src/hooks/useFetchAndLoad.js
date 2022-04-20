import { useEffect, useState } from 'react';
import { AxiosCall } from '../models/axios-call.model';
import PropTypes from "prop-types";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller;

  const callEndpoint = async (axiosCall) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {};
    try {
      result = await axiosCall.call;
    } catch (err) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoad;