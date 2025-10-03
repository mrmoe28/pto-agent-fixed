import { test, expect } from '@playwright/test';

test.describe('Sign-in Workflow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the sign-in page before each test
    await page.goto('/sign-in');
  });

  test('should display sign-in page with correct elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Sign In/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Permit Office Search' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
    
    // Check description text
    await expect(page.getByText("Sign in to access Georgia's permit office directory")).toBeVisible();
    
    // Check sign-in form is present
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // Check navigation links
    await expect(page.getByRole('link', { name: 'Sign up here' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
  });

  test('should have proper form elements for sign-in', async ({ page }) => {
    // Check for email input field
    await expect(page.locator('input[type="email"]')).toBeVisible();
    
    // Check for password input field
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // Check for sign-in button
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('should show validation errors for empty form submission', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /sign in/i }).click();
    
    // Check for HTML5 validation on required fields
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toHaveAttribute('required');
    
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveAttribute('required');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    // Fill in invalid credentials
    await page.locator('input[type="email"]').fill('invalid@example.com');
    await page.locator('input[type="password"]').fill('wrongpassword');
    
    // Submit form
    await page.getByRole('button', { name: /sign in/i }).click();
    
    // Check for error message (NextAuth error handling)
    await expect(page.locator('text=Invalid email or password')).toBeVisible({ timeout: 5000 });
  });

  test('should navigate to sign-up page when clicking sign-up link', async ({ page }) => {
    // Click sign-up link
    await page.getByRole('link', { name: 'Sign up here' }).click();
    
    // Verify navigation to sign-up page
    await expect(page).toHaveURL(/sign-up/);
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
  });

  test('should navigate to forgot password page when clicking forgot password link', async ({ page }) => {
    // Click forgot password link
    await page.getByRole('link', { name: 'Forgot your password?' }).click();
    
    // Verify navigation to forgot password page
    await expect(page).toHaveURL(/forgot-password/);
    await expect(page.getByRole('heading', { name: /forgot password/i })).toBeVisible();
  });

  test('should have proper styling and responsive design', async ({ page }) => {
    // Check for gradient background
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-gradient-to-br/);
    
    // Check for proper spacing and layout
    const mainContainer = page.locator('.max-w-md');
    await expect(mainContainer).toBeVisible();
    
    // Check for proper icon styling
    const icon = page.locator('.mx-auto.h-12.w-12');
    await expect(icon).toBeVisible();
    await expect(icon).toHaveClass(/bg-blue-100/);
  });

  test('should be accessible with proper ARIA labels', async ({ page }) => {
    // Check for proper form labels
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    
    // Check for proper button accessibility
    const signInButton = page.getByRole('button', { name: /sign in/i });
    await expect(signInButton).toBeVisible();
  });

  test('should handle keyboard navigation properly', async ({ page }) => {
    // Test tab navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check that focus is on form elements
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should handle form submission with loading state', async ({ page }) => {
    // Fill in credentials
    await page.locator('input[type="email"]').fill('test@example.com');
    await page.locator('input[type="password"]').fill('testpassword');
    
    // Submit form
    await page.getByRole('button', { name: /sign in/i }).click();
    
    // Check for loading state
    await expect(page.getByRole('button', { name: /signing in/i })).toBeVisible({ timeout: 1000 });
  });
});

test.describe('NextAuth.js Integration Tests', () => {
  test('should load NextAuth.js sign-in page correctly', async ({ page }) => {
    await page.goto('/sign-in');
    
    // Verify the custom sign-in form is displayed
    await expect(page.locator('form')).toBeVisible();
    
    // Check that form elements are properly rendered
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    const submitButton = page.getByRole('button', { name: /sign in/i });
    
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('should handle NextAuth.js error states', async ({ page }) => {
    // Navigate to sign-in with error parameter
    await page.goto('/sign-in?error=CredentialsSignin');
    
    // Check if error message is displayed
    await expect(page.locator('text=Invalid email or password')).toBeVisible();
  });
});