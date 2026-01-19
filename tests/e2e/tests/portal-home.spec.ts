import { expect, test } from "@playwright/test";

test("portal home page renders the hero headline", async ({ page }) => {
  await page.goto("/en");

  await expect(
    page.getByRole("heading", { name: "Discover roles built for hero impact" })
  ).toBeVisible();
});
