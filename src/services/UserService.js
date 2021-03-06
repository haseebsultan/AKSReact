
export async function getAllUsers() {

    const response = await fetch('/customers');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch('http://52.203.65.180:3080/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}