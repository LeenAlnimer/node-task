const BASE_URL = "https://introbackendcourse.onrender.com/users";

async function getAllUsers() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log("All users:", data);
  return data;
}

async function createUser(userObj) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
  const data = await res.json();
  console.log("Created user:", data);
}

async function getSecondUser() {
  const users = await getAllUsers();
  const secondUser = users[1];
  console.log("Second user:", secondUser);
  return secondUser;
}

async function updateUser(id, updatedInfo) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedInfo),
  });
  const data = await res.json();
  console.log("Updated user:", data);
}

async function deleteUser(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  console.log(`User with id ${id} deleted`);
}

const extractNameAndMark = (user) => {
  return {
    name: user.name,
    mark: user.mark,
  };
};
