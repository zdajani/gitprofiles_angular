githubUserSearch.factory('CombinedSearch', ['Search', function(Search) {
  return {
    query: function(searchTerm) {
      return Search.query(searchTerm).then(function(response) {
        response.data.items.forEach(function(user){
          Search.query2(user.login);
        });
      });
    }
  };
}]);