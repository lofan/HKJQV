
// *************Main Search Function
  
let searchWiki = function(e) {
  e.preventDefault();
  let query = $('#search-bar').val();
  
  $('input').blur();
  $('#wiki-articles').html("");
  $('#search-bar').css("font-size", "1em");
  $('#search-icon').css("font-size", "1.9em");
  $('#search-label').css("display", "none");
  $('#search').css('transform', 'translate(0)').animate({
    top: '0vh',
    left: '0%'
  }, 300, function() {
    getWikiData(query);
  });
};

// *****************AJAX calls***************

// Search bar---------------------

let getWikiData = function (query) {
  $.ajax({
    url: "https://ja.wikipedia.org/w/api.php?",
    method: 'GET',
    headers: { 'Api-User-Agent': 'LazerusWikiViewer/1.0' },
    data: {
      action: "query",
      generator: "search",
      prop: "pageimages|extracts",
      format: "json",
      formatversion: 2,
      origin: '*',
      exchars: 180,
      exintro: 1,
      explaintext: 1,
      piprop: "thumbnail",
      gsrlimit: 15,
      gsrsearch: query
    }
  }).done(constructList);
};

// Get random-------------------

let getRandom = function(e) {
  e.preventDefault();
  
  $('#wiki-articles').html("");
  $('#search-bar').css("font-size", "1em");
  $('#search-icon').css("font-size", "1.9em");
  $('#search-label').css("display", "none");
  $('#search').css('transform', 'translate(0)').animate({
    top: '0vh',
    left: '0%'
  }, 300, function() { 
    $.ajax({
      url: "https://ja.wikipedia.org/w/api.php?",
      method: 'GET',
      headers: { 'Api-User-Agent': 'LazerusWikiViewer/1.0' },
      data: {
        action: "query",
        generator: "random",
        prop: "pageimages|extracts",
        format: "json",
        formatversion: 2,
        origin: '*',
        exchars: 180,
        exintro: 1,
        explaintext: 1,
        piprop: "thumbnail",
        grnlimit: 15,
        grnnamespace: 0
      }
    }).done(constructList);
  });
};
  
// ************Article Constructor*****************

let constructList = function(res) {
  let pages = res.query.pages; 
  pages.sort(function(a,b) {
    return a.index - b.index;
  }); 
//   iterate through articles and create element for them
  pages.forEach(function(page) {
    let pgThumb = page.hasOwnProperty("thumbnail") ? `<img class="thumb" src=${page.thumbnail.source}>` : "";
    let htmlArticle = 
        `<div class="article">
          <a href="https://ja.wikipedia.org/?curid=${page.pageid}" target="result">
            <div class="media">`
              +pgThumb+
              `<div class="media-body">
                 <h3 class="title">${page.title}</h3>
                 <p class="extract">${page.extract}</p>
               </div>
            </div>
          </a>
        </div>`;
    $(htmlArticle).appendTo('#wiki-articles').hide().delay(400*(page.index-1)).fadeIn('slow');
  });
};



// ************* Doc Ready**********************

$(document).ready(function() {
  $('#search').submit(searchWiki);
  $('#surprise').on('click', getRandom);
});
