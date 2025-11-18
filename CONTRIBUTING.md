# Contributing to AI Content Factory

First off, thank you for considering contributing to AI Content Factory! It's people like you that make this tool better for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript and React coding style
* Include thoughtful comments in your code
* End all files with a newline
* Write meaningful commit messages

## Development Process

1. Fork the repo
2. Create a new branch from `main`:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
6. Push to the branch:
   ```bash
   git push origin feature/my-new-feature
   ```
7. Submit a pull request

## Coding Standards

### TypeScript

* Use TypeScript for all new code
* Define proper types and interfaces
* Avoid using `any` type
* Use meaningful variable and function names

### React

* Use functional components with hooks
* Keep components focused and single-purpose
* Use proper prop typing
* Follow React best practices

### Styling

* Use Tailwind CSS utility classes
* Follow the existing design system
* Ensure responsive design
* Test on multiple screen sizes

### Code Quality

* Write clean, readable code
* Add comments for complex logic
* Remove console.logs before committing
* Run linter before submitting PR:
  ```bash
  npm run lint
  ```

## Project Structure

```
app/           # Next.js app directory
  api/         # API routes
  page.tsx     # Main page
components/    # React components
public/        # Static files
```

## Testing

Before submitting a PR:

1. Test the application locally
2. Verify all features work as expected
3. Check for console errors
4. Test on different screen sizes
5. Verify environment variables work correctly

## Questions?

Feel free to create an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
