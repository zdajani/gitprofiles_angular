describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;
  
  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));
  

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
  
  describe('when searching for a user', function() {
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .whenGET("https://api.github.com/search/users?access_token=09b1d837c281b9fd0891d7d00cd6951c5e2b6c64&q=hello")
        .respond(
          { items: items }
      );
      httpBackend
        .whenGET("https://api.github.com/users/hello?access_token=09b1d837c281b9fd0891d7d00cd6951c5e2b6c64")
        .respond(
           {login: 'hello', avatar_url: 'https://avatars.githubusercontent.com/u/30216?v=3', html_url: 'https://github.com/tansaku' }
      );
      httpBackend
        .whenGET("https://api.github.com/users/stephenlloyd?access_token=09b1d837c281b9fd0891d7d00cd6951c5e2b6c64")
        .respond(
          { login: 'stephenlloyd', avatar_url: 'https://avatars.githubusercontent.com/u/196474?v=3', html_url: 'https://github.com/stephenlloyd' }
      );
    }));
    
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
    
    var items = [
      {
        "login": "hello",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult).toEqual(items);
    });
  });
  
  
  
});

