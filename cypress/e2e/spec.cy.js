import { PracticeFormPage } from "../pageObjects/PracticeFormPage";
import { PracticeFormResultsPage } from "../pageObjects/PracticeFormResultsPage";

describe("Practice Form", () => {
  context("Full form submission", () => {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it("should fill the form and validate data", () => {
      PracticeFormPage.nameField().type("Oscar");
      PracticeFormPage.lastNameField().type("Johnson");
      PracticeFormPage.emailField().type("randomEmail@abc.com");
      PracticeFormPage.genderButton().contains("Male").click();
      PracticeFormPage.mobileField().type("26893132");

      PracticeFormPage.dateOfBirthField().click();
      PracticeFormPage.selectYear("1930");
      PracticeFormPage.selectMonth("February");
      // Jāievada skaitlis kā string vērtība citādāk tas nestrādās!!!
      PracticeFormPage.selectDay("28").click();

      PracticeFormPage.subjectField().type("Economics{enter}");
      PracticeFormPage.checkboxes().contains("Music").click();
      PracticeFormPage.uploadPicture("4255.jpg");
      PracticeFormPage.addressField().type("123 Cypress Lane, Test City");
      PracticeFormPage.stateDropdown().click();
      PracticeFormPage.stateOption("NCR").click();
      PracticeFormPage.cityDropdown().click();
      PracticeFormPage.cityOption("Delhi").click();
      PracticeFormPage.submitButton().click({ force: true });

      // --- Validācija ---

      PracticeFormResultsPage.resultNameField().should(
        "have.text",
        "Oscar Johnson"
      );
      PracticeFormResultsPage.resultEmailField().should(
        "have.text",
        "randomEmail@abc.com"
      );
      PracticeFormResultsPage.resultGenderField().should("have.text", "Male");
      PracticeFormResultsPage.resultMobileField().should(
        "have.text",
        "26893132"
      );
      PracticeFormResultsPage.resultDateOfBirthField().should(
        "have.text",
        "28 February,1930"
      );
      PracticeFormResultsPage.resultSubjectsField().should(
        "have.text",
        "Economics"
      );
      PracticeFormResultsPage.resultHobbiesField().should("have.text", "Music");
      PracticeFormResultsPage.resultPictureField().should(
        "have.text",
        "4255.jpg"
      );
      PracticeFormResultsPage.resultAddressField().should(
        "have.text",
        "123 Cypress Lane, Test City"
      );
      PracticeFormResultsPage.resultStateAndCityField().should(
        "have.text",
        "NCR Delhi"
      );
    });
  });
});
