# roster-images

Data store for the roster project. Each `*.xlsx` file is a monthly operations
roster (import/export operations): employee names plus a day-by-day shift grid.

## Development environment

The Cloud Agent environment uses the default base image (Python 3.12) and
installs the dependencies in `requirements.txt` for reading and validating the
workbooks.

Local setup:

```bash
pip install --user -r requirements.txt
```

## Inspecting the rosters

`scripts/inspect_roster.py` opens the workbooks with openpyxl and prints a
structural summary. It is a quick way to confirm every file is readable.

```bash
# Summarize every workbook in the repo
python scripts/inspect_roster.py

# Fail (non-zero exit) if any workbook cannot be opened
python scripts/inspect_roster.py --validate

# Inspect one file and preview its first rows
python scripts/inspect_roster.py "IMP FEB 2026.xlsx" --preview
```
