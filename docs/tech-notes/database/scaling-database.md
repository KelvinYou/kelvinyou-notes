# Scaling Database

![](https://media.licdn.com/dms/image/D5622AQEmILSVqLDoXA/feedshare-shrink_1280/0/1709533925708?e=1712793600&v=beta&t=X5rFP0VL8exUvHm_RwZMYD0C-BrolqAHUStvoscWCJs)

# Scaling Database: When and How to Shard

Database sharding refers to splitting data across multiple database servers and is commonly used for scaling. However, sharding introduces major operational and infrastructure complexity that should be 𝗮𝘃𝗼𝗶𝗱𝗲𝗱 𝘂𝗻𝗹𝗲𝘀𝘀 𝗮𝗯𝘀𝗼𝗹𝘂𝘁𝗲𝗹𝘆 𝗻𝗲𝗰𝗲𝘀𝘀𝗮𝗿𝘆.

## 𝗔𝗹𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝘃𝗲 𝗦𝗰𝗮𝗹𝗶𝗻𝗴 𝗔𝗽𝗽𝗿𝗼𝗮𝗰𝗵𝗲𝘀

Vertical Scaling: Use more powerful single database servers with more CPUs, memory, storage and I/O bandwidth. Much simpler to manage than sharding.

SQL Optimization: Tune SQL queries and database schema to maximize performance on a single server using proper indexes, efficient SQL, etc.

Caching: Use in-memory caches like Redis to reduce database load by serving common queries from the cache instead of hitting the database every time.

Read Replicas + Load Balancer: Add horizontal read scaleability without full complexity of sharding. Directs reads across replicas.

These optimization approaches should be exhausted before considering sharding.

## 𝗦𝗵𝗮𝗿𝗱𝗶𝗻𝗴 𝗠𝗲𝘁𝗵𝗼𝗱𝘀

There are two high-level approaches:

Vertical Sharding: Split database into columnar tables or sections vs rows. For example, having one table for names and another table for emails.

Horizontal Sharding: Split database into row partitions distributed evenly across multiple servers. Methods include range based, directory based, and hash based sharding.

𝗪𝗵𝗲𝗻 𝘀𝗵𝗮𝗿𝗱𝗶𝗻𝗴, 𝘂𝘀𝗲 𝘁𝗵𝗲 𝘀𝗶𝗺𝗽𝗹𝗲𝘀𝘁 𝗮𝗽𝗽𝗿𝗼𝗮𝗰𝗵 that meets requirements to minimize complexity. Seek to avoid sharding until necessary despite the scaling benefits. The infrastructure and operational overheads often outweigh gains.

## Reference

https://www.linkedin.com/posts/sahnlam_scaling-database-when-and-how-to-shard-activity-7170304996465471488-kQi7/?utm_source=share&utm_medium=member_android