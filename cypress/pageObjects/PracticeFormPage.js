import { BasePage } from "./basePage";
export class PracticeFormPage extends BasePage {
  static nameField() {
    return cy.get("#firstName");
  }

  static lastNameField() {
    return cy.get("#lastName");
  }

  static emailField() {
    return cy.get("#userEmail");
  }

  static genderButton() {
    return cy.get("#genterWrapper");
  }

  static mobileField() {
    return cy.get("#userNumber");
  }

  static dateOfBirthField() {
    return cy.get("#dateOfBirthInput");
  }

  static selectYear(year) {
    return cy.get(".react-datepicker__year-select").select(year);
  }

  static selectMonth(month) {
    return cy.get(".react-datepicker__month-select").select(month);
  }

  static selectDay(day) {
    // Pieliks viencipar skaitļiem divas 0 un divcipar skaitļiem vienu 0
    const paddedDay = day.padStart(3, "0");
    // Jāatstāj :not(...) tā lai funkcija neizvēlas dienas no nepareiziem mēnešiem
    return cy.get(
      `.react-datepicker__day--${paddedDay}:not(.react-datepicker__day--outside-month)`
    );
  }

  static subjectField() {
    return cy.get("#subjectsContainer");
  }

  static checkboxes() {
    return cy.get("#hobbiesWrapper");
  }

  static uploadPicture(imageName) {
    return cy
      .get("input#uploadPicture")
      .selectFile(`cypress/files/${imageName}`);
  }

  static addressField() {
    return cy.get("#currentAddress");
  }

  static stateDropdown() {
    return cy.get("#state");
  }

  static stateOption(state) {
    return cy.get(".css-11unzgr").contains(state);
  }

  static cityDropdown() {
    return cy.get("#city");
  }

  static cityOption(city) {
    return cy.get(".css-11unzgr").contains(city);
  }

  static submitButton() {
    return cy.get("#submit");
  }

  static modalRowValue(label) {
    return cy.get("table").contains("td", label).next();
  }
}
