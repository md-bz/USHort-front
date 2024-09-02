import { error, redirect } from "@sveltejs/kit";

export function load({ cookies }) {
    const jwt = cookies.get("jwt");
    if (!jwt) {
        // error(401, "You are not logged in.");
        redirect(301, "/login");
    }
    return {};
}
