import 'whatwg-fetch';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
};

const parseJSON = response => response.json();

const DELETE = query => (
  fetch(`/${query}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
    .then(checkStatus)
    .then(parseJSON)
);

const GET = query => (
  fetch(`/${query}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON)
);

const POST = (query, content) => (
  fetch(`/${query}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  })
    .then(checkStatus)
    .then(parseJSON)
);

const PUT = (query, content) => (
  fetch(`/${query}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(content),
  })
    .then(checkStatus)
    .then(parseJSON)
);

export default {
  DELETE,
  GET,
  POST,
  PUT,
};
