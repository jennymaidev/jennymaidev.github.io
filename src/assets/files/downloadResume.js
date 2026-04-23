const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const token = process.env.OVERLEAF_TOKEN;
const repoId = '677c2381ecf88982715acdf5';
const repoUrl = `https://git:${token}@git.overleaf.com/${repoId}`;

const tempDir = path.join(__dirname, 'overleaf-temp');
const outputDir = __dirname;
const outputFileName = 'resume.pdf';

(async () => {
  try {
    // Cleanup old temp dir
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true });

    // Clone Overleaf repo
    const git = simpleGit();
    await git.clone(repoUrl, tempDir);

    // Compile LaTeX (twice to resolve references)
    process.chdir(tempDir);
    execSync('pdflatex -interaction=nonstopmode main.tex', { stdio: 'inherit' });
    execSync('pdflatex -interaction=nonstopmode main.tex', { stdio: 'inherit' });

    // Move compiled PDF
    const compiledPDF = path.join(tempDir, 'main.pdf');
    const outputPath = path.join(outputDir, outputFileName);

    if (!fs.existsSync(compiledPDF)) throw new Error('PDF not generated.');

    fs.copyFileSync(compiledPDF, outputPath);
    console.log(`✅ PDF saved to ${outputPath}`);
  } catch (err) {
    console.error('❌ Failed to generate PDF:', err.message);
    process.exit(1);
  }
})();