import { nanoid } from "nanoid";

export function load({ cookies }) {
    const jwt = cookies.get("jwt");

    if (!jwt) return;

    return {
        jwt,
    };
}
