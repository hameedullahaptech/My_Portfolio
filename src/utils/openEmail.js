/**
 * Opens the default email client — simplest, most reliable cross-device approach.
 */
export const openEmail = (email, e) => {
    if (e) e.preventDefault();
    window.location.href = `mailto:${email}`;
};
