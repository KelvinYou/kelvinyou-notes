# Live Reload with `air` in Go

Live reloading is a development technique that automatically rebuilds and restarts your application whenever changes are made to the source code. In Go, you can achieve live reloading using the `air` tool.

## Installation

First, you need to install the `air` tool using `go get`:

```bash
go get -u github.com/cosmtrek/air
```

## Configuration (Optional)

You can create a configuration file named `air.toml` in your project directory to customize `air`'s behavior. Here's a sample `air.toml` file:

```toml title="air.toml"
[build]
bin = "your-app-name"
cmd = "go build -o your-app-name"

[run]
port = 8080
watch = ["."]

[live_reload]
enable = true
port = 8080
extensions = ["go", "tmpl", "tpl", "html"]
delay = 1000
```

Adjust the settings according to your project structure and preferences.

## Usage

Navigate to your project directory and run `air`:

```bash
air
```

This will start `air` using the configuration from `air.toml`, if available. Otherwise, it will use default settings.

## Benefits

By using `air`, you can streamline your development workflow in Go by eliminating the need to manually stop and restart your application whenever you make changes. This can greatly improve productivity and iteration speed.

## Troubleshooting

If you encounter any issues, ensure that `air` is installed properly and your Go binaries directory is included in your system's PATH environment variable.

## Conclusion

Live reloading with `air` in Go is a powerful tool for speeding up development and improving productivity. By automatically rebuilding and restarting your application, you can focus more on writing code and less on managing the development server.