var playlist = {"London Grammar": "Oh Woman Oh Man", "Kanye": "Gold Digger"};

function updatePlaylist(object, artiest, titel) {
  object[artiest] = titel;
  return object;
}

function removeFromPlaylist(object, artiest) {
  delete object.artiest;
  return object;
}
