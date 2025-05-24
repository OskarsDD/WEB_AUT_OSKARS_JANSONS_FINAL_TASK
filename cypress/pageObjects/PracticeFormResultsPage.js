export class PracticeFormResultsPage {
  static resultNameField() {
    return cy.get("td").contains("Student Name").next();
  }

  static resultEmailField() {
    return cy.get("td").contains("Student Email").next();
  }

  static resultGenderField() {
    return cy.get("td").contains("Gender").next();
  }

  static resultMobileField() {
    return cy.get("td").contains("Mobile").next();
  }

  static resultDateOfBirthField() {
    return cy.get("td").contains("Date of Birth").next();
  }

  static resultSubjectsField() {
    return cy.get("td").contains("Subjects").next();
  }

  static resultHobbiesField() {
    return cy.get("td").contains("Hobbies").next();
  }

  static resultPictureField() {
    return cy.get("td").contains("Picture").next();
  }

  static resultAddressField() {
    return cy.get("td").contains("Address").next();
  }

  static resultStateAndCityField() {
    return cy.get("td").contains("State and City").next();
  }
}
