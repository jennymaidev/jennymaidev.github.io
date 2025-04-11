const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const token = 'olp_8MgcQcdo8V5cbooiSityFbcO9717Eg478pU0';
const repoId = '677c2381ecf88982715acdf5';
const repoUrl = `https://git:${token}@git.overleaf.com/${repoId}`;

const tempDir = path.join(__dirname, 'overleaf-temp');
const outputDir = __dirname;
const outputFileName = 'resume.pdf';

(async () => {
    // Clone Overleaf Repo
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true });
    const git = simpleGit();
    await git.clone(repoUrl, tempDir);

    // Compile PDF using latexmk
    process.chdir(tempDir);
    execSync('pdflatex -interaction=nonstopmode main.tex', { stdio: 'inherit' });

    // Move compiled PDF
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    fs.copyFileSync(path.join(tempDir, 'main.pdf'), path.join(outputDir, outputFileName));

    console.log(`✅ PDF saved to ${path.join(outputDir, outputFileName)}`);
})();