const url = "https://fantasy.premierleague.com/api/bootstrap-static/";

fetch(url, {
  mode: "no-cors",
})
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

