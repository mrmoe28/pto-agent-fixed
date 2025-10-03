import { test as base } from '@playwright/test';

// Extend the base test with custom fixtures
export const test = base.extend({
  // Custom fixture for authenticated user
  authenticatedPage: async ({ page }, use) => {
    // Navigate to sign-in page
    await page.goto('/sign-in');
    
    // Wait for sign-in form to load
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    
    // Sign in with test credentials
    await page.locator('input[type="email"]').fill('test@example.com');
    await page.locator('input[type="password"]').fill('TestPassword123!');
    await page.getByRole('button', { name: /sign in/i }).click();
    
    // Wait for redirect to dashboard
    await page.waitForURL('/dashboard', { timeout: 10000 });
    
    await use(page);
  },
  
  // Custom fixture for creating test data
  testData: async ({}, use) => {
    const testUserData = {
      email: 'test@example.com',
      password: 'TestPassword123!',
      name: 'Test User'
    };
    
    await use(testUserData);
  }
});

export { expect } from '@playwright/test';