// setup.js
const fs = require('fs');
const path = require('path');

// Create directory structure
const directories = ['html', 'css', 'js'];
directories.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

// HTML template generator
const createPage = (title, content) => `
<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <h1>${title}</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="budget.html">Budget</a>
        <a href="credit.html">Credit</a>
        <a href="grants.html">Grants</a>
    </nav>
    ${content}
</body>
<script src="../js/script.js"></script>
</html>
`;

// Create HTML files
const pages = [
  {
    name: 'index.html',
    content: '<!-- Login/Signup forms will go here -->',
    title: 'ImaliYami'
  },
  {
    name: 'dashboard.html',
    content: '<!-- Dashboard content will go here -->',
    title: 'Dashboard'
  },
  {
    name: 'budget.html',
    content: '<!-- Budget form and table will go here -->',
    title: 'Budget'
  },
  {
    name: 'credit.html',
    content: '<!-- Credit score content will go here -->',
    title: 'Credit Score'
  },
  {
    name: 'grants.html',
    content: '<!-- Grants list will go here -->',
    title: 'Government Grants'
  }
];

pages.forEach(page => {
  const filePath = path.join('html', page.name);
  const htmlContent = createPage(page.title, page.content);
  fs.writeFileSync(filePath, htmlContent);
});

// Create empty CSS and JS files
fs.writeFileSync(path.join('css', 'style.css'), '');
fs.writeFileSync(path.join('js', 'script.js'), '');

console.log('Project setup complete. Navigate to the html directory to view pages.');