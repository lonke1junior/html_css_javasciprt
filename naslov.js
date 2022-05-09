var brojSekundi = 1;

function prikazNaslova() {
  $("h1").fadeOut((brojSekundi++)*1000).fadeIn((brojSekundi++)*1000);
}

setInterval(prikazNaslova, 0);
