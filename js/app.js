var $ = Dom7;

// Handle safe areas
if (document.location.href.includes('safe-areas')) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '44px');
    html.style.setProperty('--f7-safe-area-bottom', '34px');
  }
}

// Handle example preview
if (document.location.href.includes('example-preview')) {
  $('.view-main').attr('data-browser-history', 'true');
  $('.view-main').attr('data-browser-history-root', '/kitchen-sink/core/');
  $('.view-main').attr('data-preload-previous-page', 'false');
  $('.view-main').attr('data-ios-swipe-back', 'false');
  document.documentElement.classList.add('example-preview');
}

// Determine theme and mode from URL parameters
var theme = 'ios'; // default theme
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

var mode = 'dark'; // default mode
if (document.location.search.indexOf('mode=') >= 0) {
  mode = document.location.search.split('mode=')[1].split('&')[0];
}

if (mode === 'dark') {
  document.documentElement.classList.add('dark');
}

// Initialize Framework7 app
var app = new Framework7({
  el: '#app',
  theme,
  store: store,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});
