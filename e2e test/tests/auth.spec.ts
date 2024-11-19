import { test, expect } from '@playwright/test';

test('should allow user to login', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');
  await page.locator('input[name="password"]').fill('Harshu@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Create Travel Plan' })).toBeVisible();
});


test('should not allow user to login with wrong credentials', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');
  await page.locator('input[name="password"]').fill('Harsh@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Login failed! Please check your credentials.')).toBeVisible();
});

test('should allow user to Sign Up', async ({ page }) => {
  await page.goto('http://localhost:4173/');
  await page.goto('http://localhost:4173/login');
  await page.getByRole('button', { name: 'Sign up here' }).click();

  await page.locator('input[name="name"]').fill('Tarak');
  await page.locator('input[name="email"]').fill('pikachubot05@gmail.com');
  await page.locator('input[name="password"]').fill('Test@1190');

  await page.getByRole('button', { name: 'Sign Up' }).click();
  
  await expect(page.getByText('Signup successful! Please log in')).toBeVisible();
});




