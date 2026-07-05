export function generateRandomEmail(): string {
  const random = Math.random().toString(36).slice(2, 9);
  return `user+${random}@example.com`;
}

export function generateRandomPassword(length = 12): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < length; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
  return out;
}
