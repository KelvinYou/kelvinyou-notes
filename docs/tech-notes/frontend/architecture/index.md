# Architecture

## Monolithic Architecture

Monolithic architecture is an approach to software development in which an application is built as a single, self-contained unit. Monolith is a starting point for many web applications.

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-4.png)

### Use cases

- small projects with relatively straightforward requirements.
- prototyping and MVP(Minimum Viable Product) development.
- projects with a small team of maintainers.

### Anti use cases

- large-scale enterprise applications with complex and evolving requirements.
- projects where different parts of the application require different technologies or scaling strategies
- projects that many people are working on.

### Conclusion

Monolithic architecture is only suitable for small or medium-sized projects.

The main reason why we should drop out of the monolithic approach:
- the team gets bigger
- the application gets bigger


## Micro-Frontends

Micro-frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole.

- With a Monolith App. scaling becomes challenging as the number of services and team members increases.

- separating responsibilities among team members becomes necessary. This separation also leads to a more flexible deployment process, allowing for faster deployment and more frequent feature delivery.

- ultimately, adopting the idea of maintaining code for different services in separate repositories transitions us from a Monolithic App to Micro-frontends.

![alt text](image-5.png)

### Clear boundaries

![alt text](image-6.png)

### Vertical Slices vs Horizontal Slices

![alt text](image-7.png)

What is better?

Horizontal slices (separation by components)
- better suited for projects containing many almost identical pages, like e-commerce sites, catalogs (e.g. Amazon).

Vertical slices (separation by pages/domains)
- better suited for web applications. A web application usually contains a limited number of pages, each responsible for  a single domain. We can easily split such a project by domain-slices. Examples of web applications: Google Calendar, Skype, Figma.

### Good

- incremental upgrades.

![alt text](image-8.png)

![alt text](image-10.png)

To be continue at 21:16 - micro-frontends key points
https://www.youtube.com/watch?v=2qtgegNSUoE

## Reference

https://www.youtube.com/watch?v=2qtgegNSUoE