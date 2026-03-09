/**
 * Opens the user's default email client with the given email address as recipient.
 * This is the most reliable cross-browser approach.
 */
export const openEmail = (email, e) => {
    if (e) e.preventDefault();
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
