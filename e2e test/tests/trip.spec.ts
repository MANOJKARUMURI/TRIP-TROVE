import { test, expect } from '@playwright/test';

// test('should user able to create trip', async ({ page }) => {
//   await page.goto('http://localhost:4173/');
//   await page.goto('http://localhost:4173/login');
//   await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');
//   await page.locator('input[name="password"]').fill('Harshu@1190');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Login successful!')).toBeVisible();
//   await page.getByRole('button', { name: 'Create Travel Plan' }).click();
//   await page.getByPlaceholder('Search for your destination').click();
//   await page.getByPlaceholder('Search for your destination').fill('Vara');
//   await page.getByText('VaranasiUttar Pradesh, India').click();
//   await page.getByPlaceholder('Pick Travel Dates').click();
//   await page.getByLabel('Choose Wednesday, August 28th,').click();
//   await page.getByLabel('Choose Saturday, August 31st,').click();
//   await page.getByText('Cultural Experiences').click();
//   await page.getByText('Solo').click();
//   await page.getByRole('button', { name: 'Generate AI Plan' }).click();
// });


test('user should able to open trip', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');;
  await page.locator('input[name="password"]').fill('Harshu@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Varanasi, Uttar Pradesh,' }).click();
  await expect(page.getByRole('heading', { name: 'Varanasi, Uttar Pradesh, India' })).toBeVisible();
  await page.getByRole('link', { name: 'Best time to visit' }).click();
  await page.getByRole('heading', { name: 'Best Time To Visit' }).click();
  await page.getByRole('link', { name: 'Top Activities' }).click();
  await expect(page.getByText('Top places to visit1.')).toBeVisible();
});

test('user should able to add expense in expense tracker', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');;
  await page.locator('input[name="password"]').fill('Harshu@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Varanasi, Uttar Pradesh,' }).click();
  await page.getByRole('button', { name: 'Expense Tracker' }).click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('bus ticket');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('59');
  await page.getByRole('combobox').selectOption('Travel');
  await page.getByRole('button', { name: 'Add' }).click();
});


test('user should able to add collab in collaberation', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');;
  await page.locator('input[name="password"]').fill('Harshu@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Varanasi, Uttar Pradesh,' }).click();
  await page.getByRole('button', { name: 'Collaborate' }).click();
  await page.locator('input').fill('pygitdev@gmail.com');
  await page.getByRole('button', {name: 'Add Collaborator'}).click();
  await expect(page.getByText('Collaborator added successfully!')).toBeVisible();
  await expect(page.getByText('pygitdev@gmail.com')).toBeVisible();
});

test('user should able to remove collab in collaberation', async ({ page }) => {
  await page.goto('http://localhost:4173/login');
  await page.locator('input[name="email"]').fill('harshumuppa@gmail.com');;
  await page.locator('input[name="password"]').fill('Harshu@1190');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Varanasi, Uttar Pradesh,' }).click();
  await page.getByRole('button', { name: 'Collaborate' }).click();
  await expect(page.getByText('pygitdev@gmail.com')).toBeVisible();
  await page.getByRole('button', {name: 'Remove'}).click();
  await expect(page.getByText('Collaborator removed successfully!')).toBeVisible();
});