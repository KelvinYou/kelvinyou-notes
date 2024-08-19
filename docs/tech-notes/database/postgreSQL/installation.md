# Postgre SQL - Installation

## MacOS

https://www.postgresql.org/download/macosx/

1. `brew install postgresql@15`
2. `brew services start postgresql@15`
3. `brew --prefix postgresql@15`
4. `echo 'export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"' >> ~/.zshrc`
5. `source ~/.zshrc`
6. ``
7. ``

### Step 2: Verify psql Installation

1. `psql --version`
2. `psql postgres`

