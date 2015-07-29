githubUserSearch.controller('GitUserSearchController', ['Search', function(Search){

  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
      self.searchResult = [];
      Search.query(self.searchTerm)
      .then(function(response) {
        response.data.items.forEach(function(userInfo){
          Search.query2(userInfo.login)
          .then(function(details){
            self.searchResult.push(details.data);
          });
        });
      });
    }
  };
}]);
