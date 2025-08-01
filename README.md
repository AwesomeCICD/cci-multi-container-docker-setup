
Simple Demo that showcases running a multi-container Docker job in CircleCI

```
project/
├── .circleci/config.yml
├── docker-compose.yml
├── server/
│   ├── db/
│   │   ├── mongo.js
│   │   ├── postgres.js
│   ├── tests/
│   │   ├── mongo.test.js
│   │   ├── postgres.test.js
│   │   └── long/
│   │       ├── redis.test.js
│   │       ├── postgres.test.js
│   │       ├── mongo.test.js
│   │       ├── dynamo.test.js
│   │       └── stepfunctions.test.js
│   ├── utils/
│   │   ├── test_parallel.txt        # unit/integration tests
│   │   └── test_long.txt            # long-running tests
│   ├── package.json
│   ├── yarn.lock
│   └── jest.config.js

```