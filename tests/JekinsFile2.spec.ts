import { expect, test } from '@playwright/test'

test('Test 5', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})

test('Test 6 Fail', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google2')
})

test('Test 7', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})

test('Test 8', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})