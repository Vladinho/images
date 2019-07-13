export default function validation(userName, password, users) {
    return users.some(i => i.name === userName && i.password === password);
}