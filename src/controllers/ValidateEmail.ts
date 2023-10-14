export function validateEmail(email: string): boolean {
    // Regular expression for a valid email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Test the email against the regular expression
    return emailRegex.test(email);
  }