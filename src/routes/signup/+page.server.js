import { signup } from "$lib/server/api";
import { fail, redirect } from "@sveltejs/kit";

const signupFields = [
    { name: "name", type: "name" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
    { name: "passwordConfirm", type: "password" },
];

export function load() {
    return {
        signupFields,
    };
}
export const actions = {
    signup: async ({ cookies, request }) => {
        const data = await request.formData();

        const signupInfo = {};

        for (let i = 0; i < signupFields.length; i++) {
            const field = signupFields[i];

            const fieldData = data.get(field.name);

            if (!fieldData) {
                return fail(422, {
                    error: `Please provide a valid ${field.name}`,
                });
            }
            signupInfo[field.name] = fieldData;
        }

        const { password, passwordConfirm } = signupInfo;
        if (password !== passwordConfirm) {
            return fail(422, { error: "Passwords aren't matched" });
        }

        const res = await signup(signupInfo);

        if (res.status === "fail") {
            return fail(422, { error: res.message });
        }

        if (res && res.token) {
            cookies.set("jwt", res.token, { path: "/" });
            redirect(302, "profile");
        }
    },
};
