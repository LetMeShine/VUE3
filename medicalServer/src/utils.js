

function pdf2ebup() {
  const PDFParser = require('pdf-parse');
  const fs = require('fs');
  const Epub = require('epub-gen');

  // 读取 PDF 文件
  const pdfBuffer = fs.readFileSync('test.pdf');

  // 解析 PDF
  PDFParser(pdfBuffer).then(function (data) {
    // 提取文本内容
    const text = data.text;

    // 将文本内容转换为 HTML
    const html = `<html><body><pre>${text}</pre></body></html>`;

    // 将 HTML 保存到文件
    fs.writeFileSync('output.html', html);
    console.log('PDF 转换为 HTML 成功');
  }).catch(function (err) {
    console.error('Error parsing PDF:', err);
  });


  const option = {
    title: "Alice's Adventures in Wonderland", // *Required, title of the book.
    author: "Lewis Carroll", // *Required, name of the author.
    publisher: "Macmillan & Co.", // optional
    cover: "http://demo.com/url-to-cover-image.jpg", // Url or File path, both ok.
    content: [
      {
        title: "HTML转换为EPUB", // Optional
        author: "tingxu", // Optional
        data: './epub-npm.html'
      },
      // {
      //   title: "Down the Rabbit Hole",
      //   data: "<p>Alice was beginning to get very tired...</p>"
      // },
    ]
  };

  new Epub(option, "path-npm.epub");
}




async function epub2Pdf(epubPath, outputPdfPath) {
  const unzipper = require('unzipper');
  const fs = require('fs');
  const path = require('path');
  const puppeteer = require('puppeteer');

  const tempDir = path.join(__dirname, 'temp');

  // 创建临时目录
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // 解压 EPUB 文件到指定目录
  async function extractEpub(epubPath, outputDir) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(epubPath)
        .pipe(unzipper.Extract({ path: outputDir }))
        .on('close', resolve)
        .on('error', reject);
    });
  }


  // 读取 content.opf 文件
  async function parseContentOpf(outputDir) {
    const contentOpfPath = path.join(outputDir, 'content.opf');
    const contentOpf = await fs.promises.readFile(contentOpfPath, 'utf8');
    // 解析 content.opf 文件以找到 HTML 文件路径
    // 这里需要根据实际情况解析 XML 内容
    console.log(contentOpf, 'contentOpf');
    return 'book.html'; // 示例路径
  }


  async function htmlToPdf(htmlPath, pdfPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 加载 HTML 文件
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    // 调整页面大小
    await page.setViewport({ width: 800, height: 1200 });

    // 生成 PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });

    await browser.close();
  }

  // 解压 EPUB 文件
  await extractEpub(epubPath, tempDir);

  // 解析 content.opf 文件以找到 HTML 文件路径
  const htmlPath = path.join(tempDir, await parseContentOpf(tempDir));

  // 将 HTML 渲染为 PDF
  await htmlToPdf(htmlPath, outputPdfPath);

  // 删除临时目录
  fs.rmSync(tempDir, { recursive: true, force: true });
}

// 使用示例
epub2Pdf('path-npm.epub', '11-gen.pdf')
  .then(() => console.log('EPUB 转换为 PDF 成功！'))
  .catch(err => console.error('转换失败:', err));

// pdf2ebup()
