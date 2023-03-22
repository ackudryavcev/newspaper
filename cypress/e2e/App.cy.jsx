// Check that our app works and some elements exist
describe("App check elements in our page", () => {
  it("should have all titles", () => {
    cy.visit("/");

    cy.get("h1").should(
      "have.text",
      "Magazine and newspaper with news around the world"
    );

    cy.get("h2").should("have.text", "Newspaper.");

    cy.get(".footer-title").should("have.text", "All Categories");
  });
});

//Check that we fetch data from api and render them to our page
describe("Check that we can fetch data from remote server", () => {
  it("should fetch data from the server", () => {
    cy.visit("/");

    cy.wait(3000);

    cy.get(".news-item").should("exist");

    cy.get(".news-block-container").should("not.be.empty");

    cy.get(".news-block-container").children().should("have.length", 30);

    cy.get(".footer-link").should("exist");

    cy.get(".footer-link").should("have.length", 46);
  });

  it("should load more news on the page", () => {
    cy.visit("/");

    cy.contains("Load more news").click();

    cy.get(".news-block-container").should("not.be.empty");

    cy.get(".news-block-container").children().should("have.length", 39);

    cy.contains("Load more news").click();

    cy.get(".news-block-container").children().should("have.length", 48);
  });
});

//Check that we can find news about USA
describe("Check search page", () => {
  it("Searches for USA and verifies result", () => {
    cy.visit("/");

    cy.get(".main-search").type("USA{enter}");

    cy.wait(3000);

    cy.get(".news-block-title").should("have.text", "Search USA");

    cy.get(".news-item").should("exist");

    cy.get(".news-block-container").should("not.be.empty");

    cy.get(".news-block-container").children().should("have.length", 30);
  });
});

//Check that we can add one news to favorites and visit favorite page to check it
describe("Check favorite page", () => {
  it("Adds news to favorites and verifies result", () => {
    cy.visit("/");

    cy.get(".news-plus").first().click();

    cy.contains("Favorite news").click();

    cy.get(".news-block-container").should("exist").and("have.length", 1);
  });
});

//Check that we can visit energy category page
describe("Check category page", () => {
  it("Click on any category  and verifies result", () => {
    cy.visit("/");

    cy.contains("celebrity").last().click();

    cy.wait(3000);

    cy.get(".news-block-title").should("have.text", "Category celebrity");

    cy.get(".news-block-container")
      .should("exist")
      .children()
      .should("have.length", 30);
  });
});
