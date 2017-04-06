/* @flow */

import type {User} from "./ApiFlow";

export async function all() : Promise<Array<User>> {
  let users : Array<User> = await fetch("/users")
    .then(response => response.json());

  return users;
}
