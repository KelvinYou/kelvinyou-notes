# Code Reviews



## 6 Steps for a Solid Code Review Process

1. Determine the purpose
    
    - Why you are reviewing the code? 
    - Are you looking to find bugs and errors? 
    - To check if the new code meets the project’s coding standards? 
    - To understand how well a new feature fits in with the codebase? 
    - Knowing the purpose will guide team members on what to look for during the review.
    
2. Use project management software

    Using code review tools within project management software can make the process more efficient. This allows you to annotate code with comments, assign to team members, keep track of unresolved issues, and mark them as resolved when addressed. 

    A project management platform like Wrike, for example, integrates with software development tools such as GitHub, making it easy to streamline your team’s workflow, automate incoming IT work requests, and create more time for developers to focus on the most important tasks. 

    ![Alt text](https://web-static.wrike.com/cdn-cgi/image/width%253D960%252Cformat%253Dauto%252Cq%253D80/blog/content/uploads/2023/06/product-screenshot-space-level-workflows_2x-712x518.png?av%253D5684661167144332fdba478f8f5a1e82)

3. Review the code as a “code breaker”

    The idea here is to approach the code review as if you’re trying to find ways it might break or fail. Look for edge cases that the code might not handle correctly. Consider how the code might perform under various conditions or with different input data. Also look for logical errors, unclear or duplicated code, shortcuts, and non-obvious code dependencies.

4. Determine if the code can be maintained

    Good code is easy to maintain. Ensure your code review covers the following aspects: 

    - Readability: Is the code easy to understand?
    - Modularity: Is it well structured, with functionality neatly divided into functions or classes?
    - Extensibility: Is it easy to add new features or change existing ones?

5. Vet for security

    This step involves reviewing the code to identify any potential security vulnerabilities. This could include checking for issues like SQL injection vulnerabilities, improper error handling, hard-coded sensitive data, or inadequate encryption. Specialized tools like static analyzers can help but having at least one human reviewer is essential.

6. Communicate with the coder

    Open and clear communication with your team is vital to a successful code review. Deliver feedback, both good and bad, constructively and respectfully. Remember that the goal is to improve the code, not to criticize the coder. 

    Giving feedback on things the coder did well can help balance any negative criticism and make the code review process a positive one. Once the code is reviewed, communicate the findings to the programmer and give them a chance to respond and make necessary changes. You can leave comments in a GitHub pull request or use your chosen IT project management software.

## Reference

https://www.wrike.com/blog/code-review-process/ [Accessed 1 Mar 2024]