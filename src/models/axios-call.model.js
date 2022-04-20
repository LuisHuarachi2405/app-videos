import PropTypes from "prop-types";

let _AxiosCall;

_AxiosCall = PropTypes.shape({
   call: PropTypes.object,
   controller: PropTypes.object
});

export const AxiosCall = _AxiosCall;
