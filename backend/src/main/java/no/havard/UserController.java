package no.havard;

import static java.util.Arrays.asList;

import java.util.List;

import no.havard.models.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @RequestMapping("/users")
  public List<User> users() {
    return asList(
        new User("Håvard", "Wormdal", "Høiby")
    );
  }

}
