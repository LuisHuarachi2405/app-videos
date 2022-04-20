import PropTypes from "prop-types";

let _Movies;
let _Result;
const _ISO639_1 = PropTypes.oneOfType(['en', 'fr', 'it']);

_Result = PropTypes.shape({
    "description": PropTypes.string,
    "favorite_count": PropTypes.number,
    "id": PropTypes.number,
    "item_count": PropTypes.number,
    "iso_639_1": _ISO639_1,
    "list_type": PropTypes.string,
    "name": PropTypes.string,
    "poster_path": PropTypes.any,
});

_Movies = PropTypes.shape({
    "id": PropTypes.number,
    "page": PropTypes.number,
    "results": PropTypes.arrayOf(_Result),
    "total_pages": PropTypes.number,
    "total_results": PropTypes.number,
});

export const Movies = _Movies;
