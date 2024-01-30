const searchLyrics = async () => {
  const lytic = document.getElementById("lyric").value;

  let url = `https://m.search.naver.com/p/csearch/content/qapirender.nhn?`;
  url += `where=nexearch&`;
  url += `key=LyricsSearchResult&`;
  url += `pkid=519&`;
  url += `u1=1&`;
  url += `u2=5&`;
  url += `u3=0&`;
  url += `u4=1&`;
  url += `q=가사검색 ${lytic}`;
  console.log(url);

  const res = await fetch(url);
  const data = await res.json();

  const imgTags = data.current.html.matchAll(
    /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/gi
  );

  const title = data.current.html.matchAll(
    /<strong[^>]+class\s*=\s*['"]music_title['"][^>]*>([\s\S]*?)<\/strong>/gi
  );
  
  const artists = data.current.html.matchAll(
    /<span[^>]+class\s*=\s*['"]sub_text['"][^>]*>([\s\S]*?)<\/span>/gi
  );

  const lyrics = data.current.html.matchAll(
    /<p[^>]+class\s*=\s*['"]lyrics['"][^>]*>([\s\S]*?)<\/p>/gi
  );

  for (const match of imgTags) {
    const imgTags = match[1].trim();
    const html = `<td id="${imgTags}"><img src="${imgTags}"></td>`;
    console.log(imgTags);
    const resultElement = document.querySelector("#imgTags");
    if (resultElement) {
      resultElement.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Result element not found.");
    }
  }

  for (const match of title) {
    const title = match[1].trim();
    const html = `<td id="${title}">${title}</td>`;
    console.log(title);
    const resultElement = document.querySelector("#title");
    if (resultElement) {
      resultElement.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Result element not found.");
    }
  }

  for (const match of artists) {
    const artist = match[1].trim();
    const html = `<td id="${artist}">${artist}</td>`;
    console.log(artist);
    const resultElement = document.querySelector("#artist");
    if (resultElement) {
      resultElement.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Result element not found.");
    }
  }


  for (const match of lyrics) {
    const lyric = match[1].trim();
    const html = `<td id="${lyric}">${lyric}</td>`;
    console.log(lyric);
    const resultElement = document.querySelector("#lyric");
    if (resultElement) {
      resultElement.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Result element not found.");
    }
  }


};
