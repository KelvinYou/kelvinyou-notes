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


### Bad

![alt text](image-10.png)

### Key points

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

### Use cases

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

### Anti use cases

![alt text](image-17.png)

![alt text](image-18.png)


### Key points

![alt text](image-19.png)

### Implementation

![alt text](image-20.png)

### Server Side Template Composition

![alt text](image-21.png)

![alt text](image-22.png)

### Run time integration

![alt text](image-23.png)

### Run time integration via Webpack Module Federation

![alt text](image-24.png)

### Build time integration

![alt text](image-25.png)

### Implementation Summary

- We do not use build-time integration because of the need to recompile the application every time, which contradicts the idea of Micro-Frontend independence.

- We use service-side template composition when our site is already using server-side rendering (e.g. e-commerce sites).

![alt text](image-26.png)

## Modular Monolith

















To be continue at 34.00 - Modular Monolith
https://www.youtube.com/watch?v=2qtgegNSUoE

## Reference

https://www.youtube.com/watch?v=2qtgegNSUoE