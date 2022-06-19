export default defineNuxtPlugin(() => {
  const _PROXY_URL = 'https://urban-cors-plz.herokuapp.com/';
  const _API_URL = 'https://hiring.zumata.xyz/';

  enum _Resources {
    AutoSuggest = 'auto',
    Search = 'search',
  }

  function _fetchSuggestions() {
    if (process.client) {
      return useFetch(_PROXY_URL + _API_URL + 'job01/autosuggest');
    }

    return useFetch(_API_URL + 'job01/autosuggest');
  }

  function _fetchSearch(cityCode: string) {
    if (process.client) {
      return useFetch(_PROXY_URL + _API_URL + 'job01/search/' + cityCode);
    }

    return useFetch(_API_URL + 'job01/search/' + cityCode);
  }

  return {
    provide: {
      PROXY_URL: _PROXY_URL,
      API_URL: _API_URL,
      Resources: _Resources,

      fetchResource: (resource: _Resources, cityCode?: string) => {
        switch (resource) {
          case _Resources.AutoSuggest: {
            return _fetchSuggestions();
          }
          case _Resources.Search: {
            return _fetchSearch(cityCode);
          }
        }
      },
    },
  };
});
