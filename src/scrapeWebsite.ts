import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true }); // headless モード
  const page = await browser.newPage();

  await page.goto('https://yourwebsite.com');  // 必要なURLに変更してください

  // 完了ボタンの選択
  const buttonToClick = await page.$("button:contains('完了')");
  if (buttonToClick) {
    await buttonToClick.click();
  }

  // 500ミリ秒待機（必要に応じて調整）
  await page.waitFor(500);  

  // ブラウザを閉じる
  await browser.close();
})();
