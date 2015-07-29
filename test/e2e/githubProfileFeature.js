describe('Github Profile finder', function() {
  
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  
  beforeEach(function () {
    browser.get('http://localhost:8080');
  });
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });
  
  it('finds profiles', function() {
    
    searchBox.sendKeys('zdajani');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult'));
    expect(profiles.get(0).getText()).toContain("zdajani");
    expect(profiles.get(0).getText()).toContain("Name: Zeina Dajani");
    expect(profiles.get(0).getText()).toContain("Location: London");
    expect(profiles.get(0).getText()).toContain("Public Repositories: 25");
    expect(profiles.get(0).getText()).toContain("Followers: 8");
  });
});