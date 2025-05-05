import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

chromium.setGraphicsMode = false;
chromium.setHeadlessMode = true;

export async function POST() {
    // Optional: Load any fonts you need.
    await chromium.font(
    "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
    );

    const viewport = {
        deviceScaleFactor: 1,
        hasTouch: false,
        height: 1080,
        isLandscape: true,
        isMobile: false,
        width: 1920,
    };
    const browser = await puppeteer.launch({
        args: puppeteer.defaultArgs({ args: chromium.args, headless: "shell" }),
        defaultViewport: viewport,
        executablePath: await chromium.executablePath(),
        headless: "shell",
    });

    const page = await browser.newPage();
    await page.goto("https://example.com");
    const pageTitle = await page.title();
    await browser.close();

    return Response.json({
        test: true
    })
}