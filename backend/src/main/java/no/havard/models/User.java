package no.havard.models;

public class User {

  public final String firstName;
  public final String middleName;
  public final String lastName;

  public User(String firstName, String middleName, String lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
}
